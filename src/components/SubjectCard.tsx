import { useState } from "react";
import { FolderOpen, BookOpen, ChevronDown, ExternalLink, Cpu, Binary, Network, Lightbulb, Heart, Code } from "lucide-react";
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
};

const SubjectCard = ({ subject, index }: SubjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[subject.icon] || BookOpen;

  const handleOpenDrive = () => {
    window.open(subject.driveLink, "_blank", "noopener,noreferrer");
  };

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
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleOpenDrive}
            className="flex-1 gap-2 rounded-xl shadow-button hover:scale-[1.02] transition-all duration-200"
            style={{
              backgroundColor: `hsl(var(--${subject.colorClass}))`,
            }}
          >
            <FolderOpen className="w-4 h-4" />
            Open Drive Folder
            <ExternalLink className="w-3 h-3 opacity-70" />
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 gap-2 rounded-xl border-2 hover:scale-[1.02] transition-all duration-200"
            style={{
              borderColor: `hsl(var(--${subject.colorClass}) / 0.3)`,
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
            <UnitAccordion units={subject.units} subjectColor={subject.colorClass} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
