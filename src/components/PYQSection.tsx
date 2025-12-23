import { pyqData } from "@/config/pyqData";
import { FileQuestion } from "lucide-react";

interface PYQSectionProps {
  subjectId: string;
  unitId: number;
}

const PYQSection = ({ subjectId, unitId }: PYQSectionProps) => {
  const subjectPyqs = pyqData[subjectId];
  const unitPyqs = subjectPyqs?.[unitId] || [];

  if (unitPyqs.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No previous year questions available for this unit yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {unitPyqs.map((pyq) => (
        <div
          key={pyq.id}
          className="p-3 rounded-lg bg-muted/50 border border-border"
        >
          <div className="flex items-start gap-3">
            <FileQuestion className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{pyq.question}</p>
              {pyq.years && pyq.years.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {pyq.years.map((year) => (
                    <span key={year} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      {year}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PYQSection;
