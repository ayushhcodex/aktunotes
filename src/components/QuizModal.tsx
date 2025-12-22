import { useState } from "react";
import { X, CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuizQuestion } from "@/config/quizData";
import { cn } from "@/lib/utils";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: QuizQuestion[];
  unitName: string;
  unitTitle: string;
  subjectColor: string;
}

const QuizModal = ({ isOpen, onClose, questions, unitName, unitTitle, subjectColor }: QuizModalProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<{ selected: number; correct: boolean }[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

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
  };

  const handleClose = () => {
    handleRetake();
    onClose();
  };

  const getOptionClass = (index: number) => {
    if (!showResult) {
      return "border-border/50 hover:border-primary/50 hover:bg-primary/5";
    }
    if (index === question.correctAnswer) {
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
          <div>
            <h2 className="font-bold text-lg text-foreground">{unitName} Quiz</h2>
            <p className="text-sm text-muted-foreground">{unitTitle}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={handleClose} className="rounded-full">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {!quizCompleted ? (
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
          ) : (
            /* Results Screen */
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

              <Button 
                onClick={handleRetake} 
                className="w-full rounded-xl gap-2"
                style={{ backgroundColor: `hsl(var(--${subjectColor}))` }}
              >
                <RotateCcw className="w-4 h-4" />
                Retake Quiz
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
