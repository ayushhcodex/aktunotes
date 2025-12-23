import { getImportantTopics } from "@/config/importantTopics";
import { CheckCircle } from "lucide-react";

interface ImportantTopicsSectionProps {
  subjectId: string;
  unitId: number;
  hasTopics: boolean;
}

const ImportantTopicsSection = ({ subjectId, unitId, hasTopics }: ImportantTopicsSectionProps) => {
  if (!hasTopics) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No important topics available for this unit yet.</p>
      </div>
    );
  }

  const topics = getImportantTopics(subjectId, unitId);

  return (
    <div className="space-y-3">
      {topics.map((topic, index) => (
        <div
          key={index}
          className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border"
        >
          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <span className="text-sm text-foreground">{topic}</span>
        </div>
      ))}
    </div>
  );
};

export default ImportantTopicsSection;
