import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface QuizRequest {
  subjectName: string;
  subjectFullName: string;
  unitName: string;
  unitTitle: string;
  semester: number;
  numberOfQuestions?: number;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { subjectName, subjectFullName, unitName, unitTitle, semester, numberOfQuestions = 10 }: QuizRequest = await req.json();

    console.log(`Generating quiz for ${subjectName} - ${unitName}: ${unitTitle}`);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const systemPrompt = `You are an expert AKTU (Dr. A.P.J. Abdul Kalam Technical University) exam question generator for B.Tech CSE students. 
Generate exactly ${numberOfQuestions} multiple choice questions (MCQs) for the given subject and unit based on the AKTU 2025 updated syllabus.

Requirements:
- Questions should be exam-oriented and cover key concepts from the topic
- Each question should have exactly 4 options
- Include a mix of conceptual, application-based, and numerical questions where applicable
- Questions should range from easy to moderate difficulty suitable for semester exams
- Provide clear, educational explanations for each answer

CRITICAL: You must respond ONLY with valid JSON. No markdown, no code blocks, no explanations outside JSON.`;

    const userPrompt = `Generate ${numberOfQuestions} MCQ questions for:
- Subject: ${subjectFullName} (${subjectName})
- ${unitName}: ${unitTitle}
- Semester: ${semester === 1 ? "1st Year (1st/2nd Semester)" : "2nd Year (3rd Semester)"}
- University: AKTU (Dr. A.P.J. Abdul Kalam Technical University)
- Updated Syllabus: 2025

Return the response as a JSON object with this exact structure:
{
  "questions": [
    {
      "id": 1,
      "question": "The question text here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Explanation of why this is correct"
    }
  ]
}

The correctAnswer should be the index (0-3) of the correct option in the options array.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content received from AI");
    }

    console.log("Raw AI response:", content.substring(0, 500));

    // Parse the JSON response - handle potential markdown code blocks
    let parsedQuestions;
    try {
      // Remove potential markdown code blocks
      let cleanContent = content.trim();
      if (cleanContent.startsWith("```json")) {
        cleanContent = cleanContent.slice(7);
      } else if (cleanContent.startsWith("```")) {
        cleanContent = cleanContent.slice(3);
      }
      if (cleanContent.endsWith("```")) {
        cleanContent = cleanContent.slice(0, -3);
      }
      cleanContent = cleanContent.trim();

      parsedQuestions = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error("JSON parse error:", parseError, "Content:", content);
      throw new Error("Failed to parse AI response as JSON");
    }

    // Validate the response structure
    if (!parsedQuestions.questions || !Array.isArray(parsedQuestions.questions)) {
      throw new Error("Invalid response structure from AI");
    }

    // Validate each question
    const validatedQuestions = parsedQuestions.questions.map((q: any, index: number) => ({
      id: index + 1,
      question: q.question || `Question ${index + 1}`,
      options: Array.isArray(q.options) && q.options.length === 4 
        ? q.options 
        : ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer <= 3 
        ? q.correctAnswer 
        : 0,
      explanation: q.explanation || "No explanation provided.",
    }));

    console.log(`Successfully generated ${validatedQuestions.length} questions`);

    return new Response(JSON.stringify({ 
      questions: validatedQuestions,
      subject: subjectName,
      unit: unitName,
      unitTitle: unitTitle
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error generating quiz:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Failed to generate quiz" 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
