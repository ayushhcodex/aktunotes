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

// Function to sanitize JSON string - removes control characters
function sanitizeJsonString(str: string): string {
  // Remove control characters except for common ones we'll handle
  return str
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // Remove control chars
    .replace(/\r\n/g, ' ') // Replace CRLF with space
    .replace(/\r/g, ' ')   // Replace CR with space
    .replace(/\n/g, ' ')   // Replace LF with space
    .replace(/\t/g, ' ')   // Replace tabs with space
    .replace(/\s+/g, ' '); // Collapse multiple spaces
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

    const systemPrompt = `You are an AKTU B.Tech exam question generator. Generate exactly ${numberOfQuestions} MCQs for the given topic.

CRITICAL RULES:
1. Return ONLY valid JSON - no markdown, no code blocks, no extra text
2. Keep each explanation under 50 words - be concise
3. Do not use newlines or special characters in any text field
4. Use simple, clear language

Response format:
{"questions":[{"id":1,"question":"Question text?","options":["A","B","C","D"],"correctAnswer":0,"explanation":"Brief explanation."}]}

correctAnswer is the index (0-3) of the correct option.`;

    const userPrompt = `Generate ${numberOfQuestions} MCQs for AKTU B.Tech ${semester === 1 ? "1st Year" : "2nd Year"}.
Subject: ${subjectFullName} (${subjectName})
Topic: ${unitName} - ${unitTitle}

Return only the JSON object with questions array. Keep explanations brief (under 50 words).`;

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

    console.log("Raw AI response length:", content.length);

    // Clean up the content
    let cleanContent = content.trim();
    
    // Remove markdown code blocks if present
    if (cleanContent.startsWith("```json")) {
      cleanContent = cleanContent.slice(7);
    } else if (cleanContent.startsWith("```")) {
      cleanContent = cleanContent.slice(3);
    }
    if (cleanContent.endsWith("```")) {
      cleanContent = cleanContent.slice(0, -3);
    }
    cleanContent = cleanContent.trim();

    // Sanitize the JSON string to remove control characters
    cleanContent = sanitizeJsonString(cleanContent);

    console.log("Cleaned content preview:", cleanContent.substring(0, 200));

    // Parse the JSON response
    let parsedQuestions;
    try {
      parsedQuestions = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      console.error("Content that failed:", cleanContent.substring(0, 1000));
      
      // Try to extract just the questions array if the structure is there
      const questionsMatch = cleanContent.match(/"questions"\s*:\s*\[[\s\S]*\]/);
      if (questionsMatch) {
        try {
          parsedQuestions = JSON.parse(`{${questionsMatch[0]}}`);
          console.log("Recovered using regex extraction");
        } catch {
          throw new Error("Failed to parse AI response as JSON");
        }
      } else {
        throw new Error("Failed to parse AI response as JSON");
      }
    }

    // Validate the response structure
    if (!parsedQuestions.questions || !Array.isArray(parsedQuestions.questions)) {
      throw new Error("Invalid response structure from AI");
    }

    // Validate and sanitize each question
    const validatedQuestions = parsedQuestions.questions.slice(0, numberOfQuestions).map((q: any, index: number) => ({
      id: index + 1,
      question: String(q.question || `Question ${index + 1}`).replace(/[\n\r\t]/g, ' ').trim(),
      options: Array.isArray(q.options) && q.options.length === 4 
        ? q.options.map((opt: any) => String(opt).replace(/[\n\r\t]/g, ' ').trim())
        : ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer <= 3 
        ? q.correctAnswer 
        : 0,
      explanation: String(q.explanation || "No explanation provided.").replace(/[\n\r\t]/g, ' ').trim().substring(0, 300),
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
