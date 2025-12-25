import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  ArrowLeft, 
  ArrowRight, 
  TrendingUp, 
  GraduationCap, 
  BookOpen,
  CheckCircle,
  Star,
  Flame
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { semester1Subjects, semester3Subjects, Subject, Unit } from "@/config/subjectsData";
import { getImportantTopics, hasImportantTopics } from "@/config/importantTopics";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Step = "year" | "subject" | "unit" | "topics";

const ImportantTopics = () => {
  const [currentStep, setCurrentStep] = useState<Step>("year");
  const [selectedYear, setSelectedYear] = useState<"1st" | "2nd" | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  const subjects = selectedYear === "1st" ? semester1Subjects : semester3Subjects;

  const handleYearSelect = (year: "1st" | "2nd") => {
    setSelectedYear(year);
    setSelectedSubject(null);
    setSelectedUnit(null);
    setCurrentStep("subject");
  };

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedUnit(null);
    setCurrentStep("unit");
  };

  const handleUnitSelect = (unit: Unit) => {
    setSelectedUnit(unit);
    setCurrentStep("topics");
  };

  const handleBack = () => {
    if (currentStep === "subject") {
      setCurrentStep("year");
      setSelectedYear(null);
    } else if (currentStep === "unit") {
      setCurrentStep("subject");
      setSelectedSubject(null);
    } else if (currentStep === "topics") {
      setCurrentStep("unit");
      setSelectedUnit(null);
    }
  };

  const stepNumber = currentStep === "year" ? 1 : currentStep === "subject" ? 2 : currentStep === "unit" ? 3 : 4;

  const topics = selectedSubject && selectedUnit 
    ? getImportantTopics(selectedSubject.id, selectedUnit.id) 
    : [];

  return (
    <>
      <Helmet>
        <title>Important Topics - High Priority AKTU Exam Topics | AKTU Notes</title>
        <meta
          name="description"
          content="Focus on high-priority and frequently asked topics for AKTU exams. Curated list of important topics based on previous year trends."
        />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <main className="flex-1 container py-8 md:py-12">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Important Topics</h1>
                <p className="text-muted-foreground">Focus on high-priority topics for AKTU exams</p>
              </div>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {["Year", "Subject", "Unit", "Topics"].map((step, index) => (
              <div key={step} className="flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    index + 1 < stepNumber 
                      ? "bg-secondary text-secondary-foreground" 
                      : index + 1 === stepNumber 
                        ? "bg-secondary text-secondary-foreground" 
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index + 1 < stepNumber ? <CheckCircle className="w-4 h-4" /> : index + 1}
                </div>
                <span className={`ml-2 text-sm hidden sm:inline ${index + 1 <= stepNumber ? "text-foreground" : "text-muted-foreground"}`}>
                  {step}
                </span>
                {index < 3 && (
                  <div className={`w-8 md:w-12 h-0.5 mx-2 ${index + 1 < stepNumber ? "bg-secondary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Selection Summary */}
          {(selectedYear || selectedSubject || selectedUnit) && (
            <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-muted/30 rounded-xl">
              {selectedYear && (
                <span className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium">
                  {selectedYear} Year
                </span>
              )}
              {selectedSubject && (
                <span className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium">
                  {selectedSubject.code}
                </span>
              )}
              {selectedUnit && (
                <span className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium">
                  {selectedUnit.name}
                </span>
              )}
            </div>
          )}

          {/* Step Content */}
          <div className="max-w-3xl mx-auto">
            {/* Year Selection */}
            {currentStep === "year" && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-2">Choose Your Year</h2>
                  <p className="text-muted-foreground">Select the academic year to view available subjects</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card 
                    className="p-6 cursor-pointer hover:border-secondary hover:shadow-lg transition-all duration-200 group"
                    onClick={() => handleYearSelect("1st")}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <BookOpen className="w-8 h-8 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">1st Year</h3>
                        <p className="text-sm text-muted-foreground">{semester1Subjects.length} subjects available</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground group-hover:translate-x-1 transition-all" />
                    </div>
                  </Card>

                  <Card 
                    className="p-6 cursor-pointer hover:border-secondary hover:shadow-lg transition-all duration-200 group"
                    onClick={() => handleYearSelect("2nd")}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">2nd Year</h3>
                        <p className="text-sm text-muted-foreground">{semester3Subjects.length} subjects available</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary-foreground group-hover:translate-x-1 transition-all" />
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* Subject Selection */}
            {currentStep === "subject" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <Button variant="ghost" onClick={handleBack} className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-foreground mb-2">Choose a Subject</h2>
                  <p className="text-muted-foreground">{selectedYear} Year • {subjects.length} subjects</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {subjects.map((subject) => (
                    <Card 
                      key={subject.id}
                      className="p-4 cursor-pointer hover:border-secondary hover:shadow-md transition-all duration-200 group"
                      onClick={() => handleSubjectSelect(subject)}
                    >
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `hsl(var(--${subject.colorClass}) / 0.15)` }}
                        >
                          <span 
                            className="text-lg font-bold"
                            style={{ color: `hsl(var(--${subject.colorClass}))` }}
                          >
                            {subject.code.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground">{subject.code}</h3>
                          <p className="text-sm text-muted-foreground truncate">{subject.fullName}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary-foreground group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Unit Selection */}
            {currentStep === "unit" && selectedSubject && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <Button variant="ghost" onClick={handleBack} className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-foreground mb-2">Choose a Unit</h2>
                  <p className="text-muted-foreground">{selectedSubject.code} • {selectedSubject.units.length} units</p>
                </div>
                
                <div className="space-y-3">
                  {selectedSubject.units.map((unit) => {
                    const hasTopics = hasImportantTopics(selectedSubject.id, unit.id);
                    return (
                      <Card 
                        key={unit.id}
                        className={`p-4 transition-all duration-200 group ${
                          hasTopics 
                            ? "cursor-pointer hover:border-secondary hover:shadow-md" 
                            : "opacity-50 cursor-not-allowed"
                        }`}
                        onClick={() => hasTopics && handleUnitSelect(unit)}
                      >
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `hsl(var(--${selectedSubject.colorClass}) / 0.15)` }}
                          >
                            <span 
                              className="font-bold"
                              style={{ color: `hsl(var(--${selectedSubject.colorClass}))` }}
                            >
                              {unit.id}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground">{unit.name}</h3>
                            <p className="text-sm text-muted-foreground">{unit.title}</p>
                          </div>
                          {hasTopics ? (
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary-foreground group-hover:translate-x-1 transition-all shrink-0" />
                          ) : (
                            <span className="text-xs text-muted-foreground">Coming soon</span>
                          )}
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Topics Display */}
            {currentStep === "topics" && selectedSubject && selectedUnit && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <Button variant="ghost" onClick={handleBack} className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                </div>

                <Card className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `hsl(var(--${selectedSubject.colorClass}) / 0.15)` }}
                    >
                      <TrendingUp 
                        className="w-7 h-7" 
                        style={{ color: `hsl(var(--${selectedSubject.colorClass}))` }}
                      />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">
                        {selectedUnit.name}: {selectedUnit.title}
                      </h2>
                      <p className="text-muted-foreground">{selectedSubject.code} • {selectedYear} Year</p>
                    </div>
                  </div>

                  <div className="bg-muted/20 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span>Topics curated based on AKTU syllabus & previous year trends</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {topics.map((topic, index) => {
                      const isHighPriority = index < 2;
                      return (
                        <div 
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <span 
                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold"
                            style={{ 
                              backgroundColor: `hsl(var(--${selectedSubject.colorClass}) / 0.15)`,
                              color: `hsl(var(--${selectedSubject.colorClass}))`
                            }}
                          >
                            {index + 1}
                          </span>
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{topic}</p>
                          </div>
                          {isHighPriority && (
                            <Badge variant="secondary" className="shrink-0 gap-1">
                              <Star className="w-3 h-3" />
                              High Priority
                            </Badge>
                          )}
                          {index >= 2 && index < 4 && (
                            <Badge variant="outline" className="shrink-0 gap-1 text-orange-600 border-orange-300">
                              <Flame className="w-3 h-3" />
                              Frequently Asked
                            </Badge>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {topics.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No topics available for this unit yet.</p>
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      💡 Focus on these topics for maximum exam preparation impact
                    </p>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ImportantTopics;
