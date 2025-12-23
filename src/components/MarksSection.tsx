import { getImportantTopics } from "@/config/importantTopics";
import { BookOpen } from "lucide-react";

interface MarksSectionProps {
  subjectId: string;
  unitId: number;
}

const MarksSection = ({ subjectId, unitId }: MarksSectionProps) => {
  // Use important topics as base for marks distribution
  const topics = getImportantTopics(subjectId, unitId);

  if (topics.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No marks distribution data available for this unit yet.</p>
      </div>
    );
  }

  // Split topics into 7 marks (longer/complex) and 2 marks (shorter)
  const sevenMarksTopics = topics.filter((_, i) => i % 2 === 0).slice(0, 3);
  const twoMarksTopics = topics.filter((_, i) => i % 2 === 1).slice(0, 5);

  return (
    <div className="space-y-6">
      {/* 7 Marks Questions */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded">7 Marks</span>
          Long Answer Questions
        </h3>
        <div className="space-y-2">
          {sevenMarksTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border"
            >
              <BookOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-foreground">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2 Marks Questions */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <span className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded">2 Marks</span>
          Short Answer Questions
        </h3>
        <div className="space-y-2">
          {twoMarksTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border"
            >
              <BookOpen className="w-4 h-4 text-secondary-foreground mt-0.5 shrink-0" />
              <span className="text-sm text-foreground">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarksSection;
