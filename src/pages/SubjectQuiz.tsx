import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { subjectsData } from "@/config/subjectsData";
import AIQuizModal from "@/components/AIQuizModal";
import { useState } from "react";

const SubjectQuiz = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const [aiQuizOpen, setAIQuizOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<{ id: number; name: string; title: string } | null>(null);

  const subject = subjectsData.find((s) => s.id === subjectId);

  if (!subject) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Subject Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const handleStartQuiz = (unit: { id: number; name: string; title: string }) => {
    setSelectedUnit(unit);
    setAIQuizOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>{subject.code} AI Quiz | AKTU B.Tech Study Materials</title>
        <meta
          name="description"
          content={`Practice AI-generated quizzes for ${subject.fullName}. Test your knowledge with AKTU syllabus-based questions.`}
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="container py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
                className="rounded-xl"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold text-foreground">{subject.code} - AI Quiz</h1>
                <p className="text-sm text-muted-foreground">{subject.fullName}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container py-8 space-y-8">
          {/* Info Card */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `hsl(var(--${subject.colorClass}))` }}
                >
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">AI-Powered Quiz Generator</h2>
                  <p className="text-sm text-muted-foreground">
                    Practice with AI-generated MCQs based on AKTU 2025 syllabus
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Unit Selection */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Select Unit to Start Quiz
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subject.units.map((unit, index) => (
                <Card
                  key={unit.id}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => handleStartQuiz(unit)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform"
                        style={{
                          backgroundColor: `hsl(var(--${subject.colorClass}) / 0.15)`,
                          color: `hsl(var(--${subject.colorClass}))`,
                        }}
                      >
                        {unit.id}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{unit.name}</p>
                        <p className="text-sm text-muted-foreground">{unit.title}</p>
                      </div>
                      <Sparkles
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: `hsl(var(--${subject.colorClass}))` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>

        {/* AI Quiz Modal */}
        {selectedUnit && (
          <AIQuizModal
            isOpen={aiQuizOpen}
            onClose={() => setAIQuizOpen(false)}
            subjectId={subject.id}
            subjectName={subject.code}
            subjectFullName={subject.fullName}
            unitId={selectedUnit.id}
            unitName={selectedUnit.name}
            unitTitle={selectedUnit.title}
            subjectColor={subject.colorClass}
            semester={subject.semester}
          />
        )}
      </div>
    </>
  );
};

export default SubjectQuiz;