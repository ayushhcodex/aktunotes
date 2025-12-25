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

// Input validation constants
const MAX_SUBJECT_NAME_LENGTH = 100;
const MAX_SUBJECT_FULL_NAME_LENGTH = 200;
const MAX_UNIT_NAME_LENGTH = 100;
const MAX_UNIT_TITLE_LENGTH = 200;
const MAX_QUESTIONS = 20;
const MIN_QUESTIONS = 1;

// Rate limiting storage (in-memory for single instance, use database for production scaling)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 10; // 10 requests per hour per IP

// Function to validate and sanitize string input
function validateStringInput(input: unknown, maxLength: number, fieldName: string): string {
  if (typeof input !== 'string') {
    throw new Error(`Invalid ${fieldName}: must be a string`);
  }
  
  // Trim and check length
  const trimmed = input.trim();
  if (trimmed.length === 0) {
    throw new Error(`Invalid ${fieldName}: cannot be empty`);
  }
  if (trimmed.length > maxLength) {
    throw new Error(`Invalid ${fieldName}: exceeds maximum length`);
  }
  
  // Remove potentially dangerous characters for prompt injection
  // Allow alphanumeric, spaces, common punctuation
  const sanitized = trimmed
    .replace(/[<>{}[\]\\]/g, '') // Remove brackets and backslashes
    .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
    .replace(/\s+/g, ' '); // Normalize whitespace
  
  return sanitized;
}

// Function to validate semester
function validateSemester(semester: unknown): number {
  if (typeof semester !== 'number' || (semester !== 1 && semester !== 3)) {
    throw new Error('Invalid semester: must be 1 or 3');
  }
  return semester;
}

// Function to validate number of questions
function validateNumberOfQuestions(num: unknown): number {
  const parsed = typeof num === 'number' ? num : 10;
  if (parsed < MIN_QUESTIONS || parsed > MAX_QUESTIONS) {
    return 10; // Default to 10 if out of range
  }
  return Math.floor(parsed);
}

// Function to check rate limit
function checkRateLimit(clientId: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(clientId) || [];
  
  // Filter out old timestamps
  const validTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
  
  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limited
  }
  
  // Add current request
  validTimestamps.push(now);
  rateLimitMap.set(clientId, validTimestamps);
  
  return true;
}

// Function to get client identifier (use IP or fallback)
function getClientId(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  const cfIp = req.headers.get('cf-connecting-ip');
  
  return cfIp || realIp || forwarded?.split(',')[0]?.trim() || 'unknown';
}

// Function to sanitize JSON string - removes control characters
function sanitizeJsonString(str: string): string {
  return str
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .replace(/\r\n/g, ' ')
    .replace(/\r/g, ' ')
    .replace(/\n/g, ' ')
    .replace(/\t/g, ' ')
    .replace(/\s+/g, ' ');
}

// Generic error responses - no internal details exposed
const ERROR_RESPONSES = {
  RATE_LIMIT: { code: 'RATE_LIMIT', message: 'Too many requests. Please try again later.' },
  VALIDATION: { code: 'VALIDATION_ERROR', message: 'Invalid request data. Please check your input.' },
  GENERATION: { code: 'GENERATION_FAILED', message: 'Quiz generation failed. Please try again.' },
  SERVER: { code: 'SERVER_ERROR', message: 'An unexpected error occurred. Please try again.' },
  CREDITS: { code: 'CREDITS_EXHAUSTED', message: 'Service temporarily unavailable. Please try again later.' },
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Server-side rate limiting
    const clientId = getClientId(req);
    if (!checkRateLimit(clientId)) {
      console.log(`Rate limit exceeded for client: ${clientId}`);
      return new Response(JSON.stringify({ error: ERROR_RESPONSES.RATE_LIMIT }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Parse and validate request body
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      console.error('Failed to parse request body');
      return new Response(JSON.stringify({ error: ERROR_RESPONSES.VALIDATION }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!rawBody || typeof rawBody !== 'object') {
      console.error('Invalid request body structure');
      return new Response(JSON.stringify({ error: ERROR_RESPONSES.VALIDATION }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = rawBody as Record<string, unknown>;

    // Validate all inputs
    let subjectName: string;
    let subjectFullName: string;
    let unitName: string;
    let unitTitle: string;
    let semester: number;
    let numberOfQuestions: number;

    try {
      subjectName = validateStringInput(body.subjectName, MAX_SUBJECT_NAME_LENGTH, 'subjectName');
      subjectFullName = validateStringInput(body.subjectFullName, MAX_SUBJECT_FULL_NAME_LENGTH, 'subjectFullName');
      unitName = validateStringInput(body.unitName, MAX_UNIT_NAME_LENGTH, 'unitName');
      unitTitle = validateStringInput(body.unitTitle, MAX_UNIT_TITLE_LENGTH, 'unitTitle');
      semester = validateSemester(body.semester);
      numberOfQuestions = validateNumberOfQuestions(body.numberOfQuestions);
    } catch (validationError) {
      console.error('Validation error:', validationError instanceof Error ? validationError.message : 'Unknown');
      return new Response(JSON.stringify({ error: ERROR_RESPONSES.VALIDATION }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log(`Generating quiz for ${subjectName} - ${unitName}, client: ${clientId}`);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY is not configured');
      return new Response(JSON.stringify({ error: ERROR_RESPONSES.SERVER }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
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
        return new Response(JSON.stringify({ error: ERROR_RESPONSES.RATE_LIMIT }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: ERROR_RESPONSES.CREDITS }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      return new Response(JSON.stringify({ error: ERROR_RESPONSES.GENERATION }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      console.error("No content received from AI");
      return new Response(JSON.stringify({ error: ERROR_RESPONSES.GENERATION }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
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

    // Parse the JSON response
    let parsedQuestions;
    try {
      parsedQuestions = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      
      // Try to extract just the questions array if the structure is there
      const questionsMatch = cleanContent.match(/"questions"\s*:\s*\[[\s\S]*\]/);
      if (questionsMatch) {
        try {
          parsedQuestions = JSON.parse(`{${questionsMatch[0]}}`);
          console.log("Recovered using regex extraction");
        } catch {
          console.error("Failed to recover JSON");
          return new Response(JSON.stringify({ error: ERROR_RESPONSES.GENERATION }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      } else {
        console.error("No questions array found in response");
        return new Response(JSON.stringify({ error: ERROR_RESPONSES.GENERATION }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    // Validate the response structure
    if (!parsedQuestions.questions || !Array.isArray(parsedQuestions.questions)) {
      console.error("Invalid response structure from AI");
      return new Response(JSON.stringify({ error: ERROR_RESPONSES.GENERATION }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate and sanitize each question
    const validatedQuestions = parsedQuestions.questions.slice(0, numberOfQuestions).map((q: unknown, index: number) => {
      const question = q as Record<string, unknown>;
      return {
        id: index + 1,
        question: String(question.question || `Question ${index + 1}`).replace(/[\n\r\t]/g, ' ').trim(),
        options: Array.isArray(question.options) && question.options.length === 4 
          ? question.options.map((opt: unknown) => String(opt).replace(/[\n\r\t]/g, ' ').trim())
          : ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: typeof question.correctAnswer === 'number' && question.correctAnswer >= 0 && question.correctAnswer <= 3 
          ? question.correctAnswer 
          : 0,
        explanation: String(question.explanation || "No explanation provided.").replace(/[\n\r\t]/g, ' ').trim().substring(0, 300),
      };
    });

    console.log(`Successfully generated ${validatedQuestions.length} questions for client: ${clientId}`);

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
    return new Response(JSON.stringify({ error: ERROR_RESPONSES.SERVER }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
