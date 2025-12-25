import { useState } from "react";
import {
  FolderOpen, BookOpen, ExternalLink,
  Cpu, Binary, Network, Lightbulb, Heart, Code,
  FlaskConical, Cog, CircuitBoard, Calculator, Code2,
  Leaf, Users, Atom, Zap, Sparkles, GraduationCap, TrendingUp, Lock, ChevronDown
} from "lucide-react";
import { Subject } from "@/config/subjectsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import QuizDrawer from "./QuizDrawer";
import PYQDrawer from "./PYQDrawer";
import TopicsDrawer from "./TopicsDrawer";

interface SubjectDropdownProps {
  subjects: Subject[];
  yearLabel: string;
  isActive: boolean;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Binary,
  Network,
  Lightbulb,
  Heart,
  Code,
  FlaskConical,
  Cog,
  CircuitBoard,
  Calculator,
  Code2,
  Leaf,
  Users,
  Atom,
  Zap,
};

const SubjectDropdown = ({ subjects, yearLabel, isActive }: SubjectDropdownProps) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("");
  const [quizOpen, setQuizOpen] = useState(false);
  const [pyqOpen, setPyqOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);

  const selectedSubject = subjects.find((s) => s.id === selectedSubjectId);
  const IconComponent = selectedSubject ? iconMap[selectedSubject.icon] || BookOpen : BookOpen;

  const handleOpenDrive = () => {
    if (selectedSubject?.driveLink) {
      window.open(selectedSubject.driveLink, "_blank", "noopener,noreferrer");
    }
  };

  const hasDriveLink = selectedSubject?.driveLink && selectedSubject.driveLink.length > 0;

  if (!isActive) return null;

  return (
    <div className="w-full max-w-lg mx-auto space-y-6 animate-fade-in">
      {/* Subject Dropdown */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-muted-foreground text-center block">
          Select a subject from {yearLabel}
        </label>
        <Select value={selectedSubjectId} onValueChange={setSelectedSubjectId}>
          <SelectTrigger className="w-full h-14 text-lg rounded-2xl bg-background border-2 border-border/50 hover:border-primary/50 transition-all">
            <SelectValue placeholder="Choose a subject..." />
          </SelectTrigger>
          <SelectContent className="bg-background border-2 border-border rounded-xl z-50">
            {subjects.map((subject) => {
              const SubjectIcon = iconMap[subject.icon] || BookOpen;
              return (
                <SelectItem
                  key={subject.id}
                  value={subject.id}
                  className="py-3 px-4 cursor-pointer hover:bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <SubjectIcon className="w-5 h-5 text-primary" />
                    <div className="text-left">
                      <span className="font-semibold">{subject.code}</span>
                      <span className="text-muted-foreground ml-2 text-sm">
                        {subject.fullName}
                      </span>
                    </div>
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      {/* Selected Subject Card */}
      {selectedSubject && (
        <Card
          className={`overflow-hidden border-2 border-border/50 transition-all duration-300 shadow-lg bg-gradient-to-br ${selectedSubject.gradientClass} animate-fade-in`}
        >
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: `hsl(var(--${selectedSubject.colorClass}))`,
                  }}
                >
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{selectedSubject.code}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {selectedSubject.fullName}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
              {selectedSubject.description}
            </p>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 rounded-full bg-muted/50">{selectedSubject.units.length} Units</span>
              <span className="px-2 py-1 rounded-full bg-muted/50">{yearLabel}</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Notes Button */}
            <Button
              onClick={handleOpenDrive}
              disabled={!hasDriveLink}
              className="w-full gap-2 rounded-xl shadow-button hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed h-11"
              style={{
                backgroundColor: hasDriveLink ? `hsl(var(--${selectedSubject.colorClass}))` : undefined,
              }}
            >
              <FolderOpen className="w-4 h-4" />
              {hasDriveLink ? "View Notes" : "Notes Coming Soon"}
              {hasDriveLink && <ExternalLink className="w-3 h-3 opacity-70" />}
            </Button>

            {/* CTA Buttons Grid */}
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                onClick={() => setQuizOpen(true)}
                className="flex-col gap-1 h-auto py-3 rounded-xl border-2 hover:scale-[1.02] transition-all duration-200 group/btn"
                style={{
                  borderColor: `hsl(var(--${selectedSubject.colorClass}) / 0.3)`,
                }}
              >
                <Sparkles
                  className="w-5 h-5 transition-colors"
                  style={{ color: `hsl(var(--${selectedSubject.colorClass}))` }}
                />
                <span className="text-xs font-medium">AI Quiz</span>
              </Button>

              <Button
                variant="outline"
                onClick={() => setPyqOpen(true)}
                className="flex-col gap-1 h-auto py-3 rounded-xl border-2 hover:scale-[1.02] transition-all duration-200 group/btn relative"
                style={{
                  borderColor: `hsl(var(--${selectedSubject.colorClass}) / 0.3)`,
                }}
              >
                <Lock
                  className="w-3 h-3 absolute top-1 right-1 text-muted-foreground/60"
                />
                <GraduationCap
                  className="w-5 h-5 transition-colors"
                  style={{ color: `hsl(var(--${selectedSubject.colorClass}))` }}
                />
                <span className="text-xs font-medium">PYQ</span>
              </Button>

              <Button
                variant="outline"
                onClick={() => setTopicsOpen(true)}
                className="flex-col gap-1 h-auto py-3 rounded-xl border-2 hover:scale-[1.02] transition-all duration-200 group/btn"
                style={{
                  borderColor: `hsl(var(--${selectedSubject.colorClass}) / 0.3)`,
                }}
              >
                <TrendingUp
                  className="w-5 h-5 transition-colors"
                  style={{ color: `hsl(var(--${selectedSubject.colorClass}))` }}
                />
                <span className="text-xs font-medium">Topics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Drawers */}
      {selectedSubject && (
        <>
          <QuizDrawer isOpen={quizOpen} onClose={() => setQuizOpen(false)} subject={selectedSubject} />
          <PYQDrawer isOpen={pyqOpen} onClose={() => setPyqOpen(false)} subject={selectedSubject} />
          <TopicsDrawer isOpen={topicsOpen} onClose={() => setTopicsOpen(false)} subject={selectedSubject} />
        </>
      )}
    </div>
  );
};

export default SubjectDropdown;
