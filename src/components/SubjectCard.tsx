import { useState } from "react";
import { 
  FolderOpen, BookOpen, ChevronDown, ExternalLink, 
  Cpu, Binary, Network, Lightbulb, Heart, Code,
  FlaskConical, Cog, CircuitBoard, Calculator, Code2,
  Leaf, Users, Atom, Zap
} from "lucide-react";
import { Subject } from "@/config/subjectsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import UnitAccordion from "./UnitAccordion";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[subject.icon] || BookOpen;

  const handleOpenDrive = () => {
    if (subject.driveLink) {
      window.open(subject.driveLink, "_blank", "noopener,noreferrer");
    }
  };

  const hasDriveLink = subject.driveLink && subject.driveLink.length > 0;

  return (
    <Card
      className={`group overflow-hidden border border-border/60 hover:border-primary/20 transition-all duration-500 ease-out shadow-card hover:shadow-card-hover hover:-translate-y-1 animate-slide-up bg-gradient-to-br ${subject.gradientClass}`}
      style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'backwards' }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-button group-hover:scale-105 group-hover:shadow-button-hover transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, hsl(var(--${subject.colorClass})) 0%, hsl(var(--${subject.colorClass}) / 0.85) 100%)`,
              }}
            >
              <IconComponent className="w-7 h-7 text-primary-foreground drop-shadow-sm" />
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
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleOpenDrive}
            disabled={!hasDriveLink}
            className="flex-1 gap-2 rounded-xl shadow-button hover:shadow-button-hover hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            style={{
              background: hasDriveLink ? `linear-gradient(135deg, hsl(var(--${subject.colorClass})) 0%, hsl(var(--${subject.colorClass}) / 0.9) 100%)` : undefined,
            }}
          >
            <FolderOpen className="w-4 h-4" />
            {hasDriveLink ? "Open Drive Folder" : "Coming Soon"}
            {hasDriveLink && <ExternalLink className="w-3 h-3 opacity-70" />}
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 gap-2 rounded-xl border hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 bg-card/50 hover:bg-card font-medium"
            style={{
              borderColor: `hsl(var(--${subject.colorClass}) / 0.25)`,
              color: `hsl(var(--${subject.colorClass}))`,
            }}
          >
            <BookOpen className="w-4 h-4" />
            View Units
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>

        {/* Expandable Units Section */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 border-t border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: `hsl(var(--${subject.colorClass}))` }}
              />
              <h4 className="font-semibold text-foreground">
                Unit-wise Notes ({subject.units.length} Units)
              </h4>
            </div>
            <UnitAccordion units={subject.units} subjectColor={subject.colorClass} subjectId={subject.id} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
