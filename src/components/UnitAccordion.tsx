import { useState } from "react";
import { FileText, Download, ExternalLink, BookOpen, Sparkles, Star, TrendingUp } from "lucide-react";
import { Unit } from "@/config/subjectsData";
import { getQuiz, hasQuiz } from "@/config/quizData";
import { getImportantTopics, hasImportantTopics } from "@/config/importantTopics";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import QuizModal from "./QuizModal";
import AIQuizModal from "./AIQuizModal";

interface UnitAccordionProps {
  units: Unit[];
  subjectColor: string;
  subjectId: string;
  subjectName?: string;
  subjectFullName?: string;
  semester?: 1 | 3;
}

const UnitAccordion = ({ 
  units, 
  subjectColor, 
  subjectId, 
  subjectName = "", 
  subjectFullName = "",
  semester = 3
}: UnitAccordionProps) => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [aiQuizOpen, setAIQuizOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  const handleDownload = (pdfLink: string) => {
    window.open(pdfLink, "_blank", "noopener,noreferrer");
  };

  const handleStartQuiz = (unit: Unit) => {
    setSelectedUnit(unit);
    setQuizOpen(true);
  };

  const handleStartAIQuiz = (unit: Unit) => {
    setSelectedUnit(unit);
    setAIQuizOpen(true);
  };

  const quizQuestions = selectedUnit ? getQuiz(subjectId, selectedUnit.id) : [];

  return (
    <>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {units.map((unit, index) => {
          const topics = getImportantTopics(subjectId, unit.id);
          const hasTopics = hasImportantTopics(subjectId, unit.id);

          return (
            <AccordionItem
              key={unit.id}
              value={`unit-${unit.id}`}
              className="border border-border/50 rounded-xl overflow-hidden bg-card/50 hover:bg-card transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline group">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: `hsl(var(--${subjectColor}) / 0.15)`,
                      color: `hsl(var(--${subjectColor}))`,
                    }}
                  >
                    {unit.id}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{unit.name}</p>
                    <p className="text-sm text-muted-foreground">{unit.title}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="flex flex-col gap-4 pt-2 border-t border-border/50">
                  {/* PDF Section - Only show if pdfLink exists */}
                  {unit.pdfLink && (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="w-4 h-4" />
                        <span>PDF Notes - {unit.title}</span>
                      </div>
                      <Button
                        onClick={() => handleDownload(unit.pdfLink!)}
                        className="gap-2 rounded-xl shadow-button hover:scale-105 transition-transform"
                        style={{
                          backgroundColor: `hsl(var(--${subjectColor}))`,
                        }}
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </Button>
                    </div>
                  )}

                  {/* Important Topics Card */}
                  {hasTopics && (
                    <div 
                      className="rounded-xl p-4 border-2"
                      style={{
                        borderColor: `hsl(var(--${subjectColor}) / 0.3)`,
                        backgroundColor: `hsl(var(--${subjectColor}) / 0.05)`,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{
                            backgroundColor: `hsl(var(--${subjectColor}) / 0.2)`,
                          }}
                        >
                          <TrendingUp className="w-4 h-4" style={{ color: `hsl(var(--${subjectColor}))` }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">Important & Repeated Topics</h4>
                          <p className="text-xs text-muted-foreground">Most asked in AKTU exams</p>
                        </div>
                        <Star className="w-4 h-4 ml-auto" style={{ color: `hsl(var(--${subjectColor}))` }} />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105"
                            style={{
                              backgroundColor: `hsl(var(--${subjectColor}) / 0.15)`,
                              color: `hsl(var(--${subjectColor}))`,
                            }}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* AI Quiz Section - Always visible */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-border/30">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="w-4 h-4" />
                      <span>AI-generated practice quiz (AKTU 2025 syllabus)</span>
                    </div>
                    <Button
                      onClick={() => handleStartAIQuiz(unit)}
                      className="gap-2 rounded-xl hover:scale-105 transition-transform"
                      style={{
                        backgroundColor: `hsl(var(--${subjectColor}))`,
                      }}
                    >
                      <Sparkles className="w-4 h-4" />
                      AI Quiz
                    </Button>
                  </div>

                  {/* Static Quiz Section - Only if available */}
                  {hasQuiz(subjectId, unit.id) && (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-border/30">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookOpen className="w-4 h-4" />
                        <span>Static quiz with 10 MCQs</span>
                      </div>
                      <Button
                        onClick={() => handleStartQuiz(unit)}
                        variant="outline"
                        className="gap-2 rounded-xl hover:scale-105 transition-transform border-2"
                        style={{
                          borderColor: `hsl(var(--${subjectColor}) / 0.5)`,
                          color: `hsl(var(--${subjectColor}))`,
                        }}
                      >
                        📝 Start Quiz
                      </Button>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      {/* Static Quiz Modal */}
      <QuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        questions={quizQuestions}
        unitName={selectedUnit?.name || ""}
        unitTitle={selectedUnit?.title || ""}
        subjectColor={subjectColor}
      />

      {/* AI Quiz Modal */}
      <AIQuizModal
        isOpen={aiQuizOpen}
        onClose={() => setAIQuizOpen(false)}
        subjectId={subjectId}
        subjectName={subjectName || subjectId.toUpperCase()}
        subjectFullName={subjectFullName || subjectId}
        unitId={selectedUnit?.id || 1}
        unitName={selectedUnit?.name || ""}
        unitTitle={selectedUnit?.title || ""}
        subjectColor={subjectColor}
        semester={semester}
      />
    </>
  );
};

export default UnitAccordion;
