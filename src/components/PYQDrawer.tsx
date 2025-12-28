import { GraduationCap, Calendar, BookOpen, FileText } from "lucide-react";
import { Subject } from "@/config/subjectsData";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPYQ7Marks, getPYQ2Marks, hasPYQ } from "@/config/pyqData";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PYQDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  subject: Subject;
}

const PYQDrawer = ({ isOpen, onClose, subject }: PYQDrawerProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-2xl p-0 flex flex-col">
        <div className="p-6 pb-4 border-b">
          <SheetHeader>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `hsl(var(--${subject.colorClass}))` }}
              >
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <SheetTitle>{subject.code} - Previous Year Questions</SheetTitle>
                <SheetDescription>Most repeated questions from AKTU exams</SheetDescription>
              </div>
            </div>
          </SheetHeader>
        </div>

        <ScrollArea className="flex-1 p-6">
          <div className="space-y-6">
            {subject.units.map((unit, index) => {
              const hasPYQData = hasPYQ(subject.id, unit.id);
              const pyq7Marks = getPYQ7Marks(subject.id, unit.id);
              const pyq2Marks = getPYQ2Marks(subject.id, unit.id);

              return (
                <Card
                  key={unit.id}
                  className="border-2 animate-fade-in overflow-hidden"
                  style={{ 
                    borderColor: `hsl(var(--${subject.colorClass}) / 0.3)`,
                    animationDelay: `${index * 0.05}s` 
                  }}
                >
                  <CardHeader className="pb-2 pt-4 px-4">
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
                  </CardHeader>
                  <CardContent className="pt-2 px-4 pb-4">
                    {hasPYQData ? (
                      <Tabs defaultValue="long" className="w-full">
                        <TabsList className="w-full grid grid-cols-2 h-10">
                          <TabsTrigger value="long" className="gap-1.5 text-xs">
                            <FileText className="w-3.5 h-3.5" />
                            Long Answer ({pyq7Marks.length})
                          </TabsTrigger>
                          <TabsTrigger value="short" className="gap-1.5 text-xs">
                            <BookOpen className="w-3.5 h-3.5" />
                            Short Answer ({pyq2Marks.length})
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="long" className="mt-3 space-y-2">
                          {pyq7Marks.length > 0 ? (
                            pyq7Marks.slice(0, 5).map((pyq, idx) => (
                              <div
                                key={pyq.id}
                                className="p-3 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors"
                              >
                                <div className="flex items-start gap-2">
                                  <span
                                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                                    style={{
                                      backgroundColor: `hsl(var(--${subject.colorClass}) / 0.15)`,
                                      color: `hsl(var(--${subject.colorClass}))`,
                                    }}
                                  >
                                    {idx + 1}
                                  </span>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs text-foreground font-medium leading-relaxed">
                                      {pyq.question}
                                    </p>
                                    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                                      <Calendar className="w-2.5 h-2.5 text-muted-foreground" />
                                      <div className="flex flex-wrap gap-1">
                                        {pyq.years.slice(0, 3).map((year, yIdx) => (
                                          <span
                                            key={yIdx}
                                            className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground"
                                          >
                                            {year}
                                          </span>
                                        ))}
                                      </div>
                                      <span
                                        className="ml-auto px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                                        style={{
                                          backgroundColor: pyq.frequency >= 4 
                                            ? 'hsl(var(--destructive) / 0.15)' 
                                            : `hsl(var(--${subject.colorClass}) / 0.15)`,
                                          color: pyq.frequency >= 4 
                                            ? 'hsl(var(--destructive))' 
                                            : `hsl(var(--${subject.colorClass}))`,
                                        }}
                                      >
                                        {pyq.frequency}x
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-xs text-muted-foreground text-center py-4">No questions available</p>
                          )}
                          {pyq7Marks.length > 5 && (
                            <p className="text-xs text-muted-foreground text-center">+{pyq7Marks.length - 5} more questions</p>
                          )}
                        </TabsContent>

                        <TabsContent value="short" className="mt-3 space-y-2">
                          {pyq2Marks.length > 0 ? (
                            pyq2Marks.slice(0, 5).map((pyq, idx) => (
                              <div
                                key={pyq.id}
                                className="p-3 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors"
                              >
                                <div className="flex items-start gap-2">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-muted text-muted-foreground">
                                    {idx + 1}
                                  </span>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs text-foreground font-medium leading-relaxed">
                                      {pyq.question}
                                    </p>
                                    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                                      <Calendar className="w-2.5 h-2.5 text-muted-foreground" />
                                      <div className="flex flex-wrap gap-1">
                                        {pyq.years.slice(0, 3).map((year, yIdx) => (
                                          <span
                                            key={yIdx}
                                            className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground"
                                          >
                                            {year}
                                          </span>
                                        ))}
                                      </div>
                                      <span className="ml-auto px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-muted text-muted-foreground">
                                        {pyq.frequency}x
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-xs text-muted-foreground text-center py-4">No questions available</p>
                          )}
                          {pyq2Marks.length > 5 && (
                            <p className="text-xs text-muted-foreground text-center">+{pyq2Marks.length - 5} more questions</p>
                          )}
                        </TabsContent>
                      </Tabs>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-6 text-center">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                          style={{ backgroundColor: `hsl(var(--${subject.colorClass}) / 0.1)` }}
                        >
                          <FileText 
                            className="w-5 h-5" 
                            style={{ color: `hsl(var(--${subject.colorClass}) / 0.5)` }}
                          />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">Coming Soon</p>
                        <p className="text-xs text-muted-foreground/70 mt-1">PYQs for this unit will be added shortly</p>
                      </div>
                    )}
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

export default PYQDrawer;