import { useState, lazy, Suspense } from "react";
import { getImportantTopics, hasImportantTopics } from "@/config/importantTopics";

// Lazy load sections
const ImportantTopicsSection = lazy(() => import("@/components/ImportantTopicsSection"));
const PYQSection = lazy(() => import("@/components/PYQSection"));
const MarksSection = lazy(() => import("@/components/MarksSection"));

interface UnitContentProps {
  subjectId: string;
  unitId: number;
  unitTitle: string;
}

type SectionType = "topics" | "pyq" | "marks";

const UnitContent = ({ subjectId, unitId, unitTitle }: UnitContentProps) => {
  const [activeSection, setActiveSection] = useState<SectionType>("topics");

  const sections: { id: SectionType; label: string }[] = [
    { id: "topics", label: "Important Topics" },
    { id: "pyq", label: "PYQs" },
    { id: "marks", label: "7 & 2 Marks" },
  ];

  const hasTopics = hasImportantTopics(subjectId, unitId);

  return (
    <div>
      {/* Unit Title */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-foreground">
          Unit {unitId}: {unitTitle}
        </h2>
      </div>

      {/* Pill Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
              activeSection === section.id
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Section Content - Only render active section */}
      <div className="min-h-[200px]">
        <Suspense
          fallback={
            <div className="py-8 text-center text-muted-foreground text-sm">Loading...</div>
          }
        >
          {activeSection === "topics" && (
            <ImportantTopicsSection
              subjectId={subjectId}
              unitId={unitId}
              hasTopics={hasTopics}
            />
          )}
          {activeSection === "pyq" && (
            <PYQSection subjectId={subjectId} unitId={unitId} />
          )}
          {activeSection === "marks" && (
            <MarksSection subjectId={subjectId} unitId={unitId} />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default UnitContent;
