import { useState } from "react";
import { FileText, Download, ExternalLink, Sparkles, Star, TrendingUp, GraduationCap, Calendar, BookOpen } from "lucide-react";
import { Unit } from "@/config/subjectsData";
import { getPYQ7Marks, getPYQ2Marks, hasPYQ, hasPYQ2Marks } from "@/config/pyqData";
import { getImportantTopics, hasImportantTopics } from "@/config/importantTopics";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const [aiQuizOpen, setAIQuizOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [expandedPYQ, setExpandedPYQ] = useState<string | null>(null);

  const handleDownload = (pdfLink: string) => {
    window.open(pdfLink, "_blank", "noopener,noreferrer");
  };

  const handleStartAIQuiz = (unit: Unit) => {
    setSelectedUnit(unit);
    setAIQuizOpen(true);
  };

  const togglePYQ = (unitId: number) => {
    const key = `${subjectId}-${unitId}`;
    setExpandedPYQ(expandedPYQ === key ? null : key);
  };

  return (
    <>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {units.map((unit, index) => {
          const topics = getImportantTopics(subjectId, unit.id);
          const hasTopics = hasImportantTopics(subjectId, unit.id);
          const pyq7MarksQuestions = getPYQ7Marks(subjectId, unit.id);
          const pyq2MarksQuestions = getPYQ2Marks(subjectId, unit.id);
          const hasPYQData = hasPYQ(subjectId, unit.id);
          const has2Marks = hasPYQ2Marks(subjectId, unit.id);
          const pyqKey = `${subjectId}-${unit.id}`;

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

                  {/* PYQ Section with Tabs */}
                  {hasPYQData && (
                    <div 
                      className="rounded-xl border-2 overflow-hidden"
                      style={{
                        borderColor: `hsl(var(--${subjectColor}) / 0.3)`,
                        backgroundColor: `hsl(var(--${subjectColor}) / 0.03)`,
                      }}
                    >
                      <button
                        onClick={() => togglePYQ(unit.id)}
                        className="w-full p-4 flex items-center justify-between hover:bg-background/50 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{
                              backgroundColor: `hsl(var(--${subjectColor}) / 0.2)`,
                            }}
                          >
                            <GraduationCap className="w-4 h-4" style={{ color: `hsl(var(--${subjectColor}))` }} />
                          </div>
                          <div className="text-left">
                            <h4 className="font-semibold text-foreground text-sm">Previous Year Questions (PYQ)</h4>
                            <p className="text-xs text-muted-foreground">Most repeated questions for AKTU exams</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <span
                            className="px-2 py-1 rounded-full text-xs font-bold"
                            style={{
                              backgroundColor: `hsl(var(--${subjectColor}) / 0.15)`,
                              color: `hsl(var(--${subjectColor}))`,
                            }}
                          >
                            7M: {pyq7MarksQuestions.length}
                          </span>
                          {has2Marks && (
                            <span
                              className="px-2 py-1 rounded-full text-xs font-bold bg-muted text-muted-foreground"
                            >
                              2M: {pyq2MarksQuestions.length}
                            </span>
                          )}
                        </div>
                      </button>
                      
                      {expandedPYQ === pyqKey && (
                        <div className="border-t border-border/30">
                          <Tabs defaultValue="7marks" className="w-full">
                            <TabsList className="w-full rounded-none border-b border-border/30 bg-transparent p-0 h-auto">
                              <TabsTrigger 
                                value="7marks" 
                                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-current py-3 px-4 text-sm font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                                style={{ 
                                  color: `hsl(var(--${subjectColor}))`,
                                }}
                              >
                                <GraduationCap className="w-4 h-4 mr-2" />
                                7 Marks ({pyq7MarksQuestions.length})
                              </TabsTrigger>
                              <TabsTrigger 
                                value="2marks" 
                                className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-current py-3 px-4 text-sm font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                                style={{ 
                                  color: `hsl(var(--${subjectColor}))`,
                                }}
                              >
                                <BookOpen className="w-4 h-4 mr-2" />
                                2 Marks ({pyq2MarksQuestions.length})
                              </TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="7marks" className="p-4 space-y-3 max-h-96 overflow-y-auto mt-0">
                              {pyq7MarksQuestions.length > 0 ? (
                                pyq7MarksQuestions.map((pyq, idx) => (
                                  <div
                                    key={pyq.id}
                                    className="p-3 rounded-lg border border-border/30 bg-background/50 hover:bg-background transition-colors"
                                  >
                                    <div className="flex items-start gap-3">
                                      <span
                                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                                        style={{
                                          backgroundColor: `hsl(var(--${subjectColor}) / 0.15)`,
                                          color: `hsl(var(--${subjectColor}))`,
                                        }}
                                      >
                                        {idx + 1}
                                      </span>
                                      <div className="flex-1 min-w-0">
                                        <p className="text-sm text-foreground font-medium leading-relaxed">
                                          {pyq.question}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                                          <Calendar className="w-3 h-3 text-muted-foreground" />
                                          <div className="flex flex-wrap gap-1">
                                            {pyq.years.map((year, yIdx) => (
                                              <span
                                                key={yIdx}
                                                className="px-2 py-0.5 rounded text-xs font-medium bg-muted text-muted-foreground"
                                              >
                                                {year}
                                              </span>
                                            ))}
                                          </div>
                                          <span
                                            className="ml-auto px-2 py-0.5 rounded-full text-xs font-bold"
                                            style={{
                                              backgroundColor: pyq.frequency >= 4 
                                                ? 'hsl(var(--destructive) / 0.15)' 
                                                : pyq.frequency >= 3 
                                                  ? 'hsl(var(--warning) / 0.15)' 
                                                  : `hsl(var(--${subjectColor}) / 0.15)`,
                                              color: pyq.frequency >= 4 
                                                ? 'hsl(var(--destructive))' 
                                                : pyq.frequency >= 3 
                                                  ? 'hsl(var(--warning))' 
                                                  : `hsl(var(--${subjectColor}))`,
                                            }}
                                          >
                                            {pyq.frequency >= 4 ? '🔥 ' : pyq.frequency >= 3 ? '⭐ ' : ''}{pyq.frequency}x asked
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <p className="text-sm text-muted-foreground text-center py-4">No 7 marks questions available for this unit.</p>
                              )}
                            </TabsContent>
                            
                            <TabsContent value="2marks" className="p-4 space-y-3 max-h-96 overflow-y-auto mt-0">
                              {pyq2MarksQuestions.length > 0 ? (
                                pyq2MarksQuestions.map((pyq, idx) => (
                                  <div
                                    key={pyq.id}
                                    className="p-3 rounded-lg border border-border/30 bg-background/50 hover:bg-background transition-colors"
                                  >
                                    <div className="flex items-start gap-3">
                                      <span
                                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-muted text-muted-foreground"
                                      >
                                        {idx + 1}
                                      </span>
                                      <div className="flex-1 min-w-0">
                                        <p className="text-sm text-foreground font-medium leading-relaxed">
                                          {pyq.question}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                                          <Calendar className="w-3 h-3 text-muted-foreground" />
                                          <div className="flex flex-wrap gap-1">
                                            {pyq.years.map((year, yIdx) => (
                                              <span
                                                key={yIdx}
                                                className="px-2 py-0.5 rounded text-xs font-medium bg-muted text-muted-foreground"
                                              >
                                                {year}
                                              </span>
                                            ))}
                                          </div>
                                          <span
                                            className="ml-auto px-2 py-0.5 rounded-full text-xs font-bold bg-muted text-muted-foreground"
                                          >
                                            {pyq.frequency}x asked
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <p className="text-sm text-muted-foreground text-center py-4">No 2 marks questions available for this unit.</p>
                              )}
                            </TabsContent>
                          </Tabs>
                        </div>
                      )}
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
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

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
