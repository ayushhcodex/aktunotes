import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, GraduationCap, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { subjectsData } from "@/config/subjectsData";
import { getPYQ7Marks, getPYQ2Marks, hasPYQ } from "@/config/pyqData";

const SubjectPYQ = () => {
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
        <title>{subject.code} PYQ | AKTU Previous Year Questions</title>
        <meta
          name="description"
          content={`Most repeated Previous Year Questions for ${subject.fullName}. Prepare for AKTU exams with 2 marks and 7 marks questions.`}
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
                <h1 className="text-xl font-bold text-foreground">{subject.code} - Previous Year Questions</h1>
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
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Previous Year Questions (PYQ)</h2>
                  <p className="text-sm text-muted-foreground">
                    Most repeated questions from AKTU exams with year-wise data
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Units with PYQ */}
          <section className="space-y-6">
            {subject.units.map((unit, index) => {
              const hasPYQData = hasPYQ(subject.id, unit.id);
              const pyq7Marks = getPYQ7Marks(subject.id, unit.id);
              const pyq2Marks = getPYQ2Marks(subject.id, unit.id);

              if (!hasPYQData) return null;

              return (
                <Card
                  key={unit.id}
                  className="border-2 animate-fade-in overflow-hidden"
                  style={{ 
                    borderColor: `hsl(var(--${subject.colorClass}) / 0.3)`,
                    animationDelay: `${index * 0.05}s` 
                  }}
                >
                  <CardHeader className="pb-0">
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
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Tabs defaultValue="7marks" className="w-full">
                      <TabsList className="w-full grid grid-cols-2 h-12">
                        <TabsTrigger value="7marks" className="gap-2">
                          <GraduationCap className="w-4 h-4" />
                          7 Marks ({pyq7Marks.length})
                        </TabsTrigger>
                        <TabsTrigger value="2marks" className="gap-2">
                          <BookOpen className="w-4 h-4" />
                          2 Marks ({pyq2Marks.length})
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="7marks" className="mt-4 space-y-3">
                        {pyq7Marks.length > 0 ? (
                          pyq7Marks.map((pyq, idx) => (
                            <div
                              key={pyq.id}
                              className="p-4 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <span
                                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                                  style={{
                                    backgroundColor: `hsl(var(--${subject.colorClass}) / 0.15)`,
                                    color: `hsl(var(--${subject.colorClass}))`,
                                  }}
                                >
                                  {idx + 1}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm text-foreground font-medium leading-relaxed">
                                    {pyq.question}
                                  </p>
                                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                                    <Calendar className="w-3 h-3 text-muted-foreground" />
                                    <div className="flex flex-wrap gap-1">
                                      {pyq.years.map((year, yIdx) => (
                                        <span
                                          key={yIdx}
                                          className="px-2 py-0.5 rounded text-xs font-medium bg-muted text-muted-foreground"
                                        >
                                          {year}
                                        </span>
                                      ))}
                                    </div>
                                    <span
                                      className="ml-auto px-2 py-0.5 rounded-full text-xs font-bold"
                                      style={{
                                        backgroundColor: pyq.frequency >= 4 
                                          ? 'hsl(var(--destructive) / 0.15)' 
                                          : pyq.frequency >= 3 
                                            ? 'hsl(var(--warning) / 0.15)' 
                                            : `hsl(var(--${subject.colorClass}) / 0.15)`,
                                        color: pyq.frequency >= 4 
                                          ? 'hsl(var(--destructive))' 
                                          : pyq.frequency >= 3 
                                            ? 'hsl(var(--warning))' 
                                            : `hsl(var(--${subject.colorClass}))`,
                                      }}
                                    >
                                      {pyq.frequency >= 4 ? '🔥 ' : pyq.frequency >= 3 ? '⭐ ' : ''}{pyq.frequency}x asked
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-muted-foreground text-center py-8">No 7 marks questions available for this unit.</p>
                        )}
                      </TabsContent>

                      <TabsContent value="2marks" className="mt-4 space-y-3">
                        {pyq2Marks.length > 0 ? (
                          pyq2Marks.map((pyq, idx) => (
                            <div
                              key={pyq.id}
                              className="p-4 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-muted text-muted-foreground">
                                  {idx + 1}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm text-foreground font-medium leading-relaxed">
                                    {pyq.question}
                                  </p>
                                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                                    <Calendar className="w-3 h-3 text-muted-foreground" />
                                    <div className="flex flex-wrap gap-1">
                                      {pyq.years.map((year, yIdx) => (
                                        <span
                                          key={yIdx}
                                          className="px-2 py-0.5 rounded text-xs font-medium bg-muted text-muted-foreground"
                                        >
                                          {year}
                                        </span>
                                      ))}
                                    </div>
                                    <span className="ml-auto px-2 py-0.5 rounded-full text-xs font-bold bg-muted text-muted-foreground">
                                      {pyq.frequency}x asked
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-muted-foreground text-center py-8">No 2 marks questions available for this unit.</p>
                        )}
                      </TabsContent>
                    </Tabs>
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

export default SubjectPYQ;