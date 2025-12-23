import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { subjectsData } from "@/config/subjectsData";
import { getImportantTopics, hasImportantTopics } from "@/config/importantTopics";

const SubjectTopics = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();

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

  return (
    <>
      <Helmet>
        <title>{subject.code} Important Topics | AKTU Most Repeated Topics</title>
        <meta
          name="description"
          content={`Important and most repeated topics for ${subject.fullName}. Focus on these topics for AKTU B.Tech exams.`}
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
                <h1 className="text-xl font-bold text-foreground">{subject.code} - Important Topics</h1>
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
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Important & Repeated Topics</h2>
                  <p className="text-sm text-muted-foreground">
                    Most frequently asked topics in AKTU B.Tech exams
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Units with Topics */}
          <section className="space-y-6">
            {subject.units.map((unit, index) => {
              const hasTopics = hasImportantTopics(subject.id, unit.id);
              const topics = getImportantTopics(subject.id, unit.id);

              if (!hasTopics) return null;

              return (
                <Card
                  key={unit.id}
                  className="border-2 animate-fade-in"
                  style={{ 
                    borderColor: `hsl(var(--${subject.colorClass}) / 0.3)`,
                    animationDelay: `${index * 0.05}s` 
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                          style={{
                            backgroundColor: `hsl(var(--${subject.colorClass}) / 0.15)`,
                            color: `hsl(var(--${subject.colorClass}))`,
                          }}
                        >
                          {unit.id}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{unit.name}</p>
                          <p className="text-sm text-muted-foreground">{unit.title}</p>
                        </div>
                      </div>
                      <Star className="w-5 h-5" style={{ color: `hsl(var(--${subject.colorClass}))` }} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 cursor-default"
                          style={{
                            backgroundColor: `hsl(var(--${subject.colorClass}) / 0.12)`,
                            color: `hsl(var(--${subject.colorClass}))`,
                          }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </section>
        </main>
      </div>
    </>
  );
};

export default SubjectTopics;