import { useState, useMemo } from "react";
import { semester1Subjects, semester3Subjects, Subject } from "@/config/subjectsData";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SubjectCard from "@/components/SubjectCard";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap } from "lucide-react";

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

  const currentSubjects = activeSemester === "3" ? filteredSemester3 : filteredSemester1;

  return (
    <>
      <Helmet>
        <title>Complete Study Material | AKTU B.Tech 1st & 3rd Semester Study Materials 2025</title>
        <meta
          name="description"
          content="Access free AKTU 1st & 3rd semester B.Tech CSE/IT study materials. Download PDFs for all subjects. Complete notes and resources."
        />
        <meta
          name="keywords"
          content="AKTU notes, 1st semester, 3rd semester, B.Tech, CSE, IT, COA, DSTL, DS, Python, PPS, study materials, PDF notes"
        />
      </Helmet>

      <div className="min-h-screen gradient-surface gradient-mesh surface-noise">
        <ThemeToggle />
        
        {/* Hero Header */}
        <Header />

        {/* Main Content */}
        <main className="container py-12 space-y-12 relative z-10">
          {/* Search Section */}
          <section>
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          </section>

          {/* Semester Tabs */}
          <section id="subjects" className="space-y-8">
            <Tabs value={activeSemester} onValueChange={(v) => setActiveSemester(v as "3" | "1")} className="w-full">
              <div className="flex flex-col items-center space-y-6">
                <TabsList className="grid w-full max-w-md grid-cols-2 h-14 p-1.5 bg-card/80 backdrop-blur-md rounded-2xl shadow-card border border-border/40">
                  <TabsTrigger 
                    value="3" 
                    className="flex items-center gap-2 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-button-hover transition-all duration-300 font-semibold text-muted-foreground data-[state=active]:scale-[1.02]"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>2nd Year</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="1" 
                    className="flex items-center gap-2 rounded-xl data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-button-hover transition-all duration-300 font-semibold text-muted-foreground data-[state=active]:scale-[1.02]"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>1st Year</span>
                  </TabsTrigger>
                </TabsList>

                {/* Semester Info Badge */}
                <div className="text-center space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    📚 {activeSemester === "3" ? "2nd Year" : "1st Year"} Subjects
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
            <div className="p-8 rounded-2xl bg-card/90 backdrop-blur-md border border-border/40 shadow-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02]" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
                  <span className="text-xl">📌</span> How to Use
                </h3>
                <ul className="text-sm text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2 justify-center">
                    <span className="font-medium text-foreground">Open Drive Folder:</span>
                    <span>Access all materials for a subject in one place</span>
                  </li>
                  <li className="flex items-start gap-2 justify-center">
                    <span className="font-medium text-foreground">View Units:</span>
                    <span>Expand to see unit-wise PDFs with direct download links</span>
                  </li>
                  <li className="flex items-start gap-2 justify-center">
                    <span className="font-medium text-foreground">Search:</span>
                    <span>Quickly find any subject or unit using the search bar</span>
                  </li>
                </ul>
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