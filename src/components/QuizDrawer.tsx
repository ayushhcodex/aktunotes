import { useState } from "react";
import { Sparkles, BookOpen } from "lucide-react";
import { Subject, Unit } from "@/config/subjectsData";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import AIQuizModal from "./AIQuizModal";

interface QuizDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  subject: Subject;
}

const QuizDrawer = ({ isOpen, onClose, subject }: QuizDrawerProps) => {
  const [aiQuizOpen, setAIQuizOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  const handleStartQuiz = (unit: Unit) => {
    setSelectedUnit(unit);
    setAIQuizOpen(true);
    onClose(); // Close the drawer when unit is selected
  };

  const handleQuizClose = () => {
    setAIQuizOpen(false);
    setSelectedUnit(null);
  };

  return (
    <>
      <Sheet open={isOpen && !aiQuizOpen} onOpenChange={onClose}>
        <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `hsl(var(--${subject.colorClass}))` }}
              >
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <SheetTitle>{subject.code} - AI Quiz</SheetTitle>
                <SheetDescription>Select a unit to start practicing</SheetDescription>
              </div>
            </div>
          </SheetHeader>

          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Choose Unit</span>
            </div>
            
            {subject.units.map((unit, index) => (
              <Card
                key={unit.id}
                className="group cursor-pointer hover:shadow-md transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleStartQuiz(unit)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform"
                      style={{
                        backgroundColor: `hsl(var(--${subject.colorClass}) / 0.15)`,
                        color: `hsl(var(--${subject.colorClass}))`,
                      }}
                    >
                      {unit.id}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-sm">{unit.name}</p>
                      <p className="text-xs text-muted-foreground">{unit.title}</p>
                    </div>
                    <Sparkles
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: `hsl(var(--${subject.colorClass}))` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {selectedUnit && (
        <AIQuizModal
          isOpen={aiQuizOpen}
          onClose={handleQuizClose}
          subjectId={subject.id}
          subjectName={subject.code}
          subjectFullName={subject.fullName}
          unitId={selectedUnit.id}
          unitName={selectedUnit.name}
          unitTitle={selectedUnit.title}
          subjectColor={subject.colorClass}
          semester={subject.semester}
        />
      )}
    </>
  );
};

export default QuizDrawer;