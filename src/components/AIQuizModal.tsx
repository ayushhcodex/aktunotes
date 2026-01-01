import { useState, useEffect } from "react";
import { X, CheckCircle, XCircle, RotateCcw, Trophy, Sparkles, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface AIQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface AIQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjectId: string;
  subjectName: string;
  subjectFullName: string;
  unitId: number;
  unitName: string;
  unitTitle: string;
  subjectColor: string;
  semester: 1 | 3;
}

const RATE_LIMIT_KEY = "quiz_rate_limit";
const MAX_QUIZZES_PER_UNIT = 2;
const RATE_LIMIT_HOURS = 24;

interface RateLimitData {
  [unitKey: string]: number[]; // Array of timestamps
}

const getRateLimitData = (): RateLimitData => {
  try {
    const data = localStorage.getItem(RATE_LIMIT_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

const saveRateLimitData = (data: RateLimitData) => {
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
};

const getValidTimestamps = (timestamps: number[]): number[] => {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_HOURS * 60 * 60 * 1000;
  return timestamps.filter(ts => ts > cutoff);
};

const canGenerateQuiz = (subjectId: string, unitId: number): { allowed: boolean; remainingTime?: string } => {
  const unitKey = `${subjectId}_unit_${unitId}`;
  const data = getRateLimitData();
  const timestamps = data[unitKey] || [];
  const validTimestamps = getValidTimestamps(timestamps);
  
  if (validTimestamps.length >= MAX_QUIZZES_PER_UNIT) {
    const oldestTimestamp = Math.min(...validTimestamps);
    const expiryTime = oldestTimestamp + RATE_LIMIT_HOURS * 60 * 60 * 1000;
    const remainingMs = expiryTime - Date.now();
    const remainingHours = Math.ceil(remainingMs / (60 * 60 * 1000));
    return { 
      allowed: false, 
      remainingTime: remainingHours > 1 ? `${remainingHours} hours` : "less than an hour" 
    };
  }
  
  return { allowed: true };
};

const recordQuizGeneration = (subjectId: string, unitId: number) => {
  const unitKey = `${subjectId}_unit_${unitId}`;
  const data = getRateLimitData();
  const timestamps = data[unitKey] || [];
  const validTimestamps = getValidTimestamps(timestamps);
  validTimestamps.push(Date.now());
  data[unitKey] = validTimestamps;
  saveRateLimitData(data);
};

const getRemainingQuizzes = (subjectId: string, unitId: number): number => {
  const unitKey = `${subjectId}_unit_${unitId}`;
  const data = getRateLimitData();
  const timestamps = data[unitKey] || [];
  const validTimestamps = getValidTimestamps(timestamps);
  return Math.max(0, MAX_QUIZZES_PER_UNIT - validTimestamps.length);
};

const AIQuizModal = ({ 
  isOpen, 
  onClose, 
  subjectId,
  subjectName,
  subjectFullName,
  unitId,
  unitName, 
  unitTitle, 
  subjectColor,
  semester
}: AIQuizModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [questions, setQuestions] = useState<AIQuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<{ selected: number; correct: boolean }[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [rateLimitError, setRateLimitError] = useState<string | null>(null);
  const [remainingQuizzes, setRemainingQuizzes] = useState(MAX_QUIZZES_PER_UNIT);

  useEffect(() => {
    if (isOpen) {
      setRemainingQuizzes(getRemainingQuizzes(subjectId, unitId));
    }
  }, [isOpen, subjectId, unitId]);

  const generateQuiz = async () => {
    // Check per-unit rate limit
    const { allowed, remainingTime } = canGenerateQuiz(subjectId, unitId);
    if (!allowed) {
      setRateLimitError(`You have reached today's quiz limit for this unit. Try again in ${remainingTime}.`);
      return;
    }

    setIsLoading(true);
    setError(null);
    setRateLimitError(null);
    setQuestions([]);
    setHasStarted(true);

    try {
      const { data, error: fnError } = await supabase.functions.invoke('generate-quiz', {
        body: {
          subjectName,
          subjectFullName,
          unitName,
          unitTitle,
          semester,
          numberOfQuestions: 10
        }
      });

      if (fnError) {
        console.error("Quiz generation failed");
        throw new Error("Failed to generate quiz. Please try again.");
      }

      // Handle structured error responses from edge function
      if (data?.error) {
        const errorCode = data.error.code || 'UNKNOWN';
        const userMessage = data.error.message || "Failed to generate quiz. Please try again.";
        
        if (errorCode === 'RATE_LIMIT') {
          setRateLimitError("You've made too many requests. Please wait a moment and try again.");
          setIsLoading(false);
          return;
        }
        
        throw new Error(userMessage);
      }

      if (!data?.questions || data.questions.length === 0) {
        throw new Error("Failed to generate quiz. Please try again.");
      }

      // Record successful quiz generation
      recordQuizGeneration(subjectId, unitId);
      setRemainingQuizzes(getRemainingQuizzes(subjectId, unitId));

      setQuestions(data.questions);
    } catch (err) {
      console.error("Quiz generation error");
      const errorMessage = err instanceof Error ? err.message : "Failed to generate quiz. Please try again.";
      setError(errorMessage);
      toast.error("Quiz generation failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    // Reset state
    setQuestions([]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setQuizCompleted(false);
    setIsLoading(true);
    setError(null);
    setHasStarted(false);
    setRateLimitError(null);
    onClose();
  };

  const handleStartQuiz = () => {
    const { allowed, remainingTime } = canGenerateQuiz(subjectId, unitId);
    if (!allowed) {
      setRateLimitError(`You have reached today's quiz limit for this unit. Try again in ${remainingTime}.`);
      return;
    }
    generateQuiz();
  };

  if (!isOpen) return null;

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question?.correctAnswer;
  const score = answers.filter(a => a.correct).length;

  const handleSelectAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setShowResult(true);
    setAnswers([...answers, { selected: index, correct: index === question.correctAnswer }]);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setQuizCompleted(false);
    generateQuiz();
  };

  const handleGenerateNew = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setQuizCompleted(false);
    generateQuiz();
  };

  const getOptionClass = (index: number) => {
    if (!showResult) {
      return "border-border/50 hover:border-primary/50 hover:bg-primary/5";
    }
    if (index === question?.correctAnswer) {
      return "border-green-500 bg-green-50 dark:bg-green-950/30";
    }
    if (index === selectedAnswer && !isCorrect) {
      return "border-red-500 bg-red-50 dark:bg-red-950/30";
    }
    return "border-border/30 opacity-50";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div 
          className="p-4 border-b border-border/50 flex items-center justify-between"
          style={{ backgroundColor: `hsl(var(--${subjectColor}) / 0.1)` }}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" style={{ color: `hsl(var(--${subjectColor}))` }} />
            <div>
              <h2 className="font-bold text-lg text-foreground">AI-Generated Quiz</h2>
              <p className="text-sm text-muted-foreground">{subjectName} • {unitName}: {unitTitle}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleClose} className="rounded-full">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Start Screen */}
          {!hasStarted && !rateLimitError && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">AI-Powered Quiz</h3>
              <p className="text-muted-foreground mb-2">
                {subjectFullName}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {unitName}: {unitTitle}
              </p>
              <p className="text-xs text-muted-foreground mb-6">
                {remainingQuizzes > 0 
                  ? `${remainingQuizzes} quiz${remainingQuizzes > 1 ? 'zes' : ''} remaining today for this unit`
                  : "No quizzes remaining for this unit today"}
              </p>
              <div className="bg-muted/30 rounded-xl p-4 mb-6 max-w-md mx-auto text-left">
                <p className="text-sm text-muted-foreground mb-2">This quiz will:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Generate 10 unique MCQs using AI</li>
                  <li>✓ Based on AKTU 2025 updated syllabus</li>
                  <li>✓ Provide explanations for each answer</li>
                  <li>✓ Create new questions each time</li>
                </ul>
              </div>
              <Button 
                onClick={handleStartQuiz}
                className="gap-2 rounded-xl px-8"
                style={{ backgroundColor: `hsl(var(--${subjectColor}))` }}
                disabled={remainingQuizzes === 0}
              >
                <Sparkles className="w-4 h-4" />
                Generate Quiz
              </Button>
            </div>
          )}

          {/* Rate Limit Error */}
          {!hasStarted && rateLimitError && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-amber-100 dark:bg-amber-950/30">
                <Clock className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Quiz Limit Reached</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {rateLimitError}
              </p>
              <Button 
                onClick={handleClose}
                variant="outline"
                className="rounded-xl"
              >
                Close
              </Button>
            </div>
          )}

          {/* Loading State */}
          {hasStarted && isLoading && (
            <div className="text-center py-16 animate-fade-in">
              <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin text-primary" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Generating Quiz...</h3>
              <p className="text-muted-foreground text-sm">
                AI is creating questions based on AKTU syllabus
              </p>
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="text-center py-16 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950/30 mx-auto mb-4 flex items-center justify-center">
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Failed to Generate Quiz</h3>
              <p className="text-muted-foreground text-sm mb-6">{error}</p>
              <Button onClick={handleGenerateNew} variant="outline" className="gap-2 rounded-xl">
                <RotateCcw className="w-4 h-4" />
                Try Again
              </Button>
            </div>
          )}

          {/* Quiz Questions */}
          {!isLoading && !error && questions.length > 0 && !quizCompleted && (
            <>
              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>Score: {score}/{answers.length}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-300 rounded-full"
                    style={{ 
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                      backgroundColor: `hsl(var(--${subjectColor}))`
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">{question?.question}</h3>
                <div className="space-y-3">
                  {question?.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelectAnswer(index)}
                      disabled={isAnswered}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-3",
                        getOptionClass(index),
                        !isAnswered && "cursor-pointer",
                        isAnswered && "cursor-default"
                      )}
                    >
                      <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium shrink-0"
                        style={{ borderColor: showResult && index === question.correctAnswer ? '#22c55e' : 'inherit' }}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {showResult && index === question.correctAnswer && (
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      )}
                      {showResult && index === selectedAnswer && !isCorrect && (
                        <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Explanation */}
              {showResult && (
                <div className={cn(
                  "p-4 rounded-xl mb-6 animate-fade-in",
                  isCorrect ? "bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800" : "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800"
                )}>
                  <p className="font-medium mb-1 flex items-center gap-2">
                    {isCorrect ? (
                      <><CheckCircle className="w-4 h-4 text-green-500" /> Correct!</>
                    ) : (
                      <><XCircle className="w-4 h-4 text-red-500" /> Incorrect</>
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground">{question?.explanation}</p>
                </div>
              )}

              {/* Next Button */}
              {showResult && (
                <Button 
                  onClick={handleNext} 
                  className="w-full rounded-xl"
                  style={{ backgroundColor: `hsl(var(--${subjectColor}))` }}
                >
                  {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                </Button>
              )}
            </>
          )}

          {/* Results Screen */}
          {!isLoading && !error && quizCompleted && (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: `hsl(var(--${subjectColor}) / 0.15)` }}
              >
                <Trophy className="w-10 h-10" style={{ color: `hsl(var(--${subjectColor}))` }} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Quiz Completed!</h3>
              <p className="text-4xl font-bold mb-2" style={{ color: `hsl(var(--${subjectColor}))` }}>
                {score}/{questions.length}
              </p>
              <p className="text-muted-foreground mb-6">
                {score === questions.length ? "Perfect! 🎉" : 
                 score >= questions.length * 0.7 ? "Great job! 👏" : 
                 score >= questions.length * 0.5 ? "Good effort! 📚" : 
                 "Keep practicing! 💪"}
              </p>

              {/* Answer Summary */}
              <div className="text-left bg-muted/30 rounded-xl p-4 mb-6 max-h-48 overflow-y-auto">
                <p className="font-medium mb-3 text-sm">Answer Summary:</p>
                <div className="space-y-2">
                  {answers.map((ans, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      {ans.correct ? (
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                      )}
                      <span className="text-muted-foreground">Q{idx + 1}: {ans.correct ? "Correct" : "Incorrect"}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleRetake} 
                  className="flex-1 rounded-xl gap-2"
                  style={{ backgroundColor: `hsl(var(--${subjectColor}))` }}
                >
                  <Sparkles className="w-4 h-4" />
                  Generate New Quiz
                </Button>
                <Button 
                  onClick={handleClose}
                  variant="outline"
                  className="flex-1 rounded-xl"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIQuizModal;
