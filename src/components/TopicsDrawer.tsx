import { useState } from "react";
import { TrendingUp, Star, ChevronDown } from "lucide-react";
import { Subject } from "@/config/subjectsData";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { getImportantTopics, hasImportantTopics } from "@/config/importantTopics";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TopicsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  subject: Subject;
}

const TopicsDrawer = ({ isOpen, onClose, subject }: TopicsDrawerProps) => {
  const [expandedUnit, setExpandedUnit] = useState<number | null>(null);

  const handleUnitClick = (unitId: number) => {
    setExpandedUnit(expandedUnit === unitId ? null : unitId);
  };

  // Reset expanded state when drawer closes
  const handleClose = () => {
    setExpandedUnit(null);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0 flex flex-col">
        <div className="p-6 pb-4 border-b">
          <SheetHeader>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `hsl(var(--${subject.colorClass}))` }}
              >
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <SheetTitle>{subject.code} - Important Topics</SheetTitle>
                <SheetDescription>Click on a unit to view topics</SheetDescription>
              </div>
            </div>
          </SheetHeader>
        </div>

        <ScrollArea className="flex-1 p-6">
          <div className="space-y-3">
            {subject.units.map((unit, index) => {
              const hasTopics = hasImportantTopics(subject.id, unit.id);
              const topics = getImportantTopics(subject.id, unit.id);
              const isExpanded = expandedUnit === unit.id;

              if (!hasTopics) return null;

              return (
                <Card
                  key={unit.id}
                  className="border-2 animate-fade-in overflow-hidden cursor-pointer transition-all duration-300"
                  style={{ 
                    borderColor: isExpanded 
                      ? `hsl(var(--${subject.colorClass}) / 0.5)` 
                      : `hsl(var(--${subject.colorClass}) / 0.2)`,
                    animationDelay: `${index * 0.05}s` 
                  }}
                  onClick={() => handleUnitClick(unit.id)}
                >
                  <CardContent className="p-4">
                    {/* Unit Header - Always visible */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-transform duration-300"
                          style={{
                            backgroundColor: `hsl(var(--${subject.colorClass}) / 0.15)`,
                            color: `hsl(var(--${subject.colorClass}))`,
                            transform: isExpanded ? 'scale(1.1)' : 'scale(1)',
                          }}
                        >
                          {unit.id}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{unit.name}</p>
                          <p className="text-xs text-muted-foreground">{unit.title}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span 
                          className="text-xs font-medium px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: `hsl(var(--${subject.colorClass}) / 0.1)`,
                            color: `hsl(var(--${subject.colorClass}))`,
                          }}
                        >
                          {topics.length} topics
                        </span>
                        <ChevronDown 
                          className="w-5 h-5 transition-transform duration-300"
                          style={{ 
                            color: `hsl(var(--${subject.colorClass}))`,
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        />
                      </div>
                    </div>

                    {/* Topics - Only visible when expanded */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                      }`}
                    >
                      <div className="pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 mb-3">
                          <Star className="w-4 h-4" style={{ color: `hsl(var(--${subject.colorClass}))` }} />
                          <span className="text-xs font-medium text-muted-foreground">Most Asked Topics</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {topics.map((topic, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-full text-xs font-medium animate-fade-in"
                              style={{
                                backgroundColor: `hsl(var(--${subject.colorClass}) / 0.12)`,
                                color: `hsl(var(--${subject.colorClass}))`,
                                animationDelay: `${idx * 0.03}s`,
                              }}
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default TopicsDrawer;