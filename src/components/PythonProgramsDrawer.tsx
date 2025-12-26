import { useState } from "react";
import { X, ChevronDown, ChevronRight, Code, Terminal, Copy, Check } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pythonPrograms, PythonProgramUnit, PythonProgram } from "@/config/pythonPrograms";
import { cn } from "@/lib/utils";

interface PythonProgramsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProgramCard = ({ program, index }: { program: PythonProgram; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(program.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="overflow-hidden border border-border/50 bg-card/50">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left flex items-start gap-3 hover:bg-muted/30 transition-colors"
      >
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
          {index}
        </span>
        <span className="flex-1 text-sm font-medium text-foreground leading-relaxed">
          {program.question}
        </span>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
        )}
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 animate-fade-in">
          {/* Code Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <Code className="w-3.5 h-3.5" />
                Code
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-7 px-2 text-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 mr-1" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto text-xs leading-relaxed font-mono">
              <code>{program.code}</code>
            </pre>
          </div>

          {/* Output Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-green-600 dark:text-green-400">
              <Terminal className="w-3.5 h-3.5" />
              Output
            </div>
            <pre className="bg-zinc-800 text-green-400 p-4 rounded-lg overflow-x-auto text-xs leading-relaxed font-mono">
              <code>{program.output}</code>
            </pre>
          </div>
        </div>
      )}
    </Card>
  );
};

const UnitSection = ({ unit }: { unit: PythonProgramUnit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-3">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/40 transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
              {unit.unitId}
            </span>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-foreground">{unit.unitName}</h3>
            <p className="text-xs text-muted-foreground">{unit.unitTitle} • {unit.programs.length} programs</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        )}
      </button>

      {isExpanded && (
        <div className="space-y-3 pl-2 animate-fade-in">
          {unit.programs.map((program, idx) => (
            <ProgramCard key={program.id} program={program} index={idx + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const PythonProgramsDrawer = ({ isOpen, onClose }: PythonProgramsDrawerProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-xl md:max-w-2xl p-0 bg-background"
      >
        <SheetHeader className="p-6 pb-4 border-b border-border/50 bg-gradient-to-br from-blue-500/10 to-blue-600/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <SheetTitle className="text-xl font-bold text-foreground">
                  Python Programs
                </SheetTitle>
                <p className="text-sm text-muted-foreground">
                  Unit Wise • AKTU B.Tech (BCC-302)
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-muted"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="p-6 space-y-4">
            <div className="text-sm text-muted-foreground bg-muted/30 rounded-lg p-3 border border-border/50">
              <strong className="text-foreground">Important:</strong> These programs are from the official AKTU syllabus. Click on any unit to view programs with code and output.
            </div>
            
            {pythonPrograms.map((unit) => (
              <UnitSection key={unit.unitId} unit={unit} />
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default PythonProgramsDrawer;
