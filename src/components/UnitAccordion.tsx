import { FileText, Download, Clock, ExternalLink } from "lucide-react";
import { Unit } from "@/config/subjectsData";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface UnitAccordionProps {
  units: Unit[];
  subjectColor: string;
}

const UnitAccordion = ({ units, subjectColor }: UnitAccordionProps) => {
  const handleDownload = (pdfLink: string) => {
    window.open(pdfLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {units.map((unit, index) => (
        <AccordionItem
          key={unit.id}
          value={`unit-${unit.id}`}
          className="border border-border/50 rounded-xl overflow-hidden bg-card/50 hover:bg-card transition-all duration-200 animate-fade-in"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <AccordionTrigger className="px-4 py-3 hover:no-underline group">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  backgroundColor: `hsl(var(--${subjectColor}) / 0.15)`,
                  color: `hsl(var(--${subjectColor}))`,
                }}
              >
                {unit.id}
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{unit.name}</p>
                <p className="text-sm text-muted-foreground">{unit.title}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-border/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>PDF Notes - {unit.title}</span>
              </div>
              {unit.pdfLink ? (
                <Button
                  onClick={() => handleDownload(unit.pdfLink!)}
                  className="gap-2 rounded-xl shadow-button hover:scale-105 transition-transform"
                  style={{
                    backgroundColor: `hsl(var(--${subjectColor}))`,
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </Button>
              ) : (
                <Button
                  disabled
                  variant="secondary"
                  className="gap-2 rounded-xl opacity-70"
                >
                  <Clock className="w-4 h-4" />
                  Coming Soon
                </Button>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default UnitAccordion;
