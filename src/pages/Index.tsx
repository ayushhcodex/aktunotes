import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { semester1Subjects, semester3Subjects, Subject } from "@/config/subjectsData";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/SearchBar";
import SubjectCard from "@/components/SubjectCard";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, Sparkles, TrendingUp } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSemester, setActiveSemester] = useState<"3" | "1">("3");

  const filterSubjects = (subjects: Subject[]) => {
    if (!searchQuery.trim()) return subjects;

    const query = searchQuery.toLowerCase();
    return subjects.filter((subject) => {
      const matchesSubject =
        subject.name.toLowerCase().includes(query) ||
        subject.code.toLowerCase().includes(query) ||
        subject.fullName.toLowerCase().includes(query) ||
        subject.description.toLowerCase().includes(query);

      const matchesUnit = subject.units.some(
        (unit) =>
          unit.name.toLowerCase().includes(query) ||
          unit.title.toLowerCase().includes(query)
      );

      return matchesSubject || matchesUnit;
    });
  };

  const filteredSemester3 = useMemo(() => filterSubjects(semester3Subjects), [searchQuery]);
  const filteredSemester1 = useMemo(() => filterSubjects(semester1Subjects), [searchQuery]);

  return (
    <>
      <Helmet>
        <title>AKTU B.Tech Study Materials | Notes, PYQ, Quiz for 1st & 2nd Year 2025</title>
        <meta
          name="description"
          content="Access free AKTU 1st & 2nd year B.Tech CSE/IT study materials. Download PDF notes, practice AI quizzes, and view previous year questions."
        />
        <meta
          name="keywords"
          content="AKTU notes, 1st semester, 3rd semester, B.Tech, CSE, IT, COA, DSTL, DS, Python, PPS, study materials, PDF notes, PYQ, quiz"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <Navigation />
        
        {/* Hero Header */}
        <Header />

        {/* Main Content */}
        <main className="container py-12 space-y-12">
          {/* Features Highlight */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              to="/ai-quiz"
              className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center gap-4 hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Quiz</h3>
                <p className="text-sm text-muted-foreground">Practice with AI-generated MCQs</p>
              </div>
            </Link>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Previous Year Questions</h3>
                <p className="text-sm text-muted-foreground">Most repeated AKTU questions</p>
              </div>
            </div>
            <Link 
              to="/important-topics"
              className="p-5 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 flex items-center gap-4 hover:border-secondary/40 hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Important Topics</h3>
                <p className="text-sm text-muted-foreground">Focus on high-priority topics</p>
              </div>
            </Link>
          </section>

          {/* Search Section */}
          <section>
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          </section>

          {/* Semester Tabs */}
          <section id="subjects" className="space-y-8">
            <Tabs value={activeSemester} onValueChange={(v) => setActiveSemester(v as "3" | "1")} className="w-full">
              <div className="flex flex-col items-center space-y-6">
                <TabsList className="grid w-full max-w-md grid-cols-2 h-14 p-1 bg-muted/50 rounded-2xl">
                  <TabsTrigger 
                    value="3" 
                    className="flex items-center gap-2 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span className="font-semibold">2nd Year</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="1" 
                    className="flex items-center gap-2 rounded-xl data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span className="font-semibold">1st Year</span>
                  </TabsTrigger>
                </TabsList>

                {/* Semester Info Badge */}
                <div className="text-center space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {activeSemester === "3" ? "2nd Year" : "1st Year"} Subjects
                  </h2>
                  <p className="text-muted-foreground">
                    {activeSemester === "3" 
                      ? "6 subjects • CSE/IT • B.Tech 2025" 
                      : "9 subjects • All Branches • B.Tech 2025"}
                  </p>
                </div>
              </div>

              <TabsContent value="3" className="mt-8 animate-fade-in">
                {filteredSemester3.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSemester3.map((subject, index) => (
                      <SubjectCard key={subject.id} subject={subject} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 space-y-4 animate-fade-in">
                    <div className="text-6xl">🔍</div>
                    <h3 className="text-xl font-semibold text-foreground">
                      No subjects found
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Try searching with different keywords like subject name, code, or
                      unit topic.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="1" className="mt-8 animate-fade-in">
                {filteredSemester1.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSemester1.map((subject, index) => (
                      <SubjectCard key={subject.id} subject={subject} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 space-y-4 animate-fade-in">
                    <div className="text-6xl">🔍</div>
                    <h3 className="text-xl font-semibold text-foreground">
                      No subjects found
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Try searching with different keywords like subject name, code, or
                      unit topic.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </section>

          {/* Info Section */}
          <section className="max-w-3xl mx-auto text-center space-y-6 py-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                📌 How to Use
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="p-4 rounded-xl bg-background/50">
                  <strong className="block text-foreground mb-1">View Notes</strong>
                  Access Google Drive folder with all PDF materials
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <strong className="block text-foreground mb-1">AI Quiz</strong>
                  Practice with AI-generated MCQs for each unit
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <strong className="block text-foreground mb-1">PYQ & Topics</strong>
                  Focus on most repeated exam questions
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;