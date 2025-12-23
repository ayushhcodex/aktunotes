import { 
  FolderOpen, BookOpen, ExternalLink, 
  Cpu, Binary, Network, Lightbulb, Heart, Code,
  FlaskConical, Cog, CircuitBoard, Calculator, Code2,
  Leaf, Users, Atom, Zap, Sparkles, GraduationCap, TrendingUp
} from "lucide-react";
import { Subject } from "@/config/subjectsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SubjectCardProps {
  subject: Subject;
  index: number;
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

const SubjectCard = ({ subject, index }: SubjectCardProps) => {
  const IconComponent = iconMap[subject.icon] || BookOpen;

  const handleOpenDrive = () => {
    if (subject.driveLink) {
      window.open(subject.driveLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleOpenPage = (page: string) => {
    window.open(`/${subject.id}/${page}`, "_blank", "noopener,noreferrer");
  };

  const hasDriveLink = subject.driveLink && subject.driveLink.length > 0;

  return (
    <Card
      className={`group overflow-hidden border-2 border-border/50 hover:border-border transition-all duration-300 hover:shadow-card-hover animate-slide-up bg-gradient-to-br ${subject.gradientClass}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{
                backgroundColor: `hsl(var(--${subject.colorClass}))`,
              }}
            >
              <IconComponent className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{subject.code}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {subject.fullName}
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
          {subject.description}
        </p>
        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
          <span className="px-2 py-1 rounded-full bg-muted/50">{subject.units.length} Units</span>
          <span className="px-2 py-1 rounded-full bg-muted/50">{subject.semester === 1 ? "1st Year" : "2nd Year"}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Notes Button */}
        <Button
          onClick={handleOpenDrive}
          disabled={!hasDriveLink}
          className="w-full gap-2 rounded-xl shadow-button hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed h-11"
          style={{
            backgroundColor: hasDriveLink ? `hsl(var(--${subject.colorClass}))` : undefined,
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
            onClick={() => handleOpenPage("quiz")}
            className="flex-col gap-1 h-auto py-3 rounded-xl border-2 hover:scale-[1.02] transition-all duration-200 group/btn"
            style={{
              borderColor: `hsl(var(--${subject.colorClass}) / 0.3)`,
            }}
          >
            <Sparkles 
              className="w-5 h-5 transition-colors" 
              style={{ color: `hsl(var(--${subject.colorClass}))` }}
            />
            <span className="text-xs font-medium">AI Quiz</span>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => handleOpenPage("pyq")}
            className="flex-col gap-1 h-auto py-3 rounded-xl border-2 hover:scale-[1.02] transition-all duration-200 group/btn"
            style={{
              borderColor: `hsl(var(--${subject.colorClass}) / 0.3)`,
            }}
          >
            <GraduationCap 
              className="w-5 h-5 transition-colors" 
              style={{ color: `hsl(var(--${subject.colorClass}))` }}
            />
            <span className="text-xs font-medium">PYQ</span>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => handleOpenPage("important-topics")}
            className="flex-col gap-1 h-auto py-3 rounded-xl border-2 hover:scale-[1.02] transition-all duration-200 group/btn"
            style={{
              borderColor: `hsl(var(--${subject.colorClass}) / 0.3)`,
            }}
          >
            <TrendingUp 
              className="w-5 h-5 transition-colors" 
              style={{ color: `hsl(var(--${subject.colorClass}))` }}
            />
            <span className="text-xs font-medium">Topics</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;