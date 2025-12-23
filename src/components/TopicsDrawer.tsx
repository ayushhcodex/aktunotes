import { TrendingUp, Star } from "lucide-react";
import { Subject } from "@/config/subjectsData";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getImportantTopics, hasImportantTopics } from "@/config/importantTopics";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TopicsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  subject: Subject;
}

const TopicsDrawer = ({ isOpen, onClose, subject }: TopicsDrawerProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
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
                <SheetDescription>Most frequently asked topics in exams</SheetDescription>
              </div>
            </div>
          </SheetHeader>
        </div>

        <ScrollArea className="flex-1 p-6">
          <div className="space-y-4">
            {subject.units.map((unit, index) => {
              const hasTopics = hasImportantTopics(subject.id, unit.id);
              const topics = getImportantTopics(subject.id, unit.id);

              if (!hasTopics) return null;

              return (
                <Card
                  key={unit.id}
                  className="border-2 animate-fade-in"
                  style={{ 
                    borderColor: `hsl(var(--${subject.colorClass}) / 0.3)`,
                    animationDelay: `${index * 0.05}s` 
                  }}
                >
                  <CardHeader className="pb-2 pt-4 px-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                          style={{
                            backgroundColor: `hsl(var(--${subject.colorClass}) / 0.15)`,
                            color: `hsl(var(--${subject.colorClass}))`,
                          }}
                        >
                          {unit.id}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{unit.name}</p>
                          <p className="text-xs text-muted-foreground">{unit.title}</p>
                        </div>
                      </div>
                      <Star className="w-4 h-4" style={{ color: `hsl(var(--${subject.colorClass}))` }} />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2 px-4 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105 cursor-default"
                          style={{
                            backgroundColor: `hsl(var(--${subject.colorClass}) / 0.12)`,
                            color: `hsl(var(--${subject.colorClass}))`,
                          }}
                        >
                          {topic}
                        </span>
                      ))}
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