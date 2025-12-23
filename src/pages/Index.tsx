import { useState, useMemo } from "react";
import { semester1Subjects, semester3Subjects, Subject } from "@/config/subjectsData";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SubjectCard from "@/components/SubjectCard";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeYear, setActiveYear] = useState<"2nd" | "1st">("2nd");
  const [activeSubjectId, setActiveSubjectId] = useState<string>("");

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

  const currentSubjects = activeYear === "2nd" ? filteredSemester3 : filteredSemester1;
  
  // Set default active subject when year changes or on initial load
  const effectiveActiveSubject = activeSubjectId && currentSubjects.find(s => s.id === activeSubjectId)
    ? activeSubjectId
    : currentSubjects[0]?.id || "";

  const selectedSubject = currentSubjects.find(s => s.id === effectiveActiveSubject);

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

      <div className="min-h-screen bg-background">
        {/* Hero Header */}
        <Header />

        {/* Main Content */}
        <main className="container py-12 space-y-8">
          {/* Search Section */}
          <section>
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          </section>

          {/* Year Selection Tabs */}
          <section id="subjects" className="space-y-6">
            <Tabs value={activeYear} onValueChange={(v) => {
              setActiveYear(v as "2nd" | "1st");
              setActiveSubjectId(""); // Reset subject when year changes
            }} className="w-full">
              <div className="flex flex-col items-center space-y-4">
                <TabsList className="grid w-full max-w-md grid-cols-2 h-14 p-1 bg-muted/50 rounded-2xl">
                  <TabsTrigger 
                    value="2nd" 
                    className="flex items-center gap-2 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span className="font-semibold">2nd Year</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="1st" 
                    className="flex items-center gap-2 rounded-xl data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span className="font-semibold">1st Year</span>
                  </TabsTrigger>
                </TabsList>

                {/* Year Info */}
                <div className="text-center space-y-1">
                  <p className="text-sm text-muted-foreground">
                    {activeYear === "2nd" 
                      ? "6 subjects • CSE/IT • B.Tech 2025" 
                      : "9 subjects • All Branches • B.Tech 2025"}
                  </p>
                </div>
              </div>

              {/* Subject Tabs - Nested inside Year Tab Content */}
              <TabsContent value="2nd" className="mt-6">
                {filteredSemester3.length > 0 ? (
                  <Tabs value={effectiveActiveSubject} onValueChange={setActiveSubjectId} className="w-full">
                    <TabsList className="flex flex-wrap justify-center gap-2 h-auto p-2 bg-muted/30 rounded-xl mb-6">
                      {filteredSemester3.map((subject) => (
                        <TabsTrigger
                          key={subject.id}
                          value={subject.id}
                          className="px-4 py-2 rounded-lg text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-200 hover:bg-muted"
                        >
                          {subject.code}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {filteredSemester3.map((subject) => (
                      <TabsContent key={subject.id} value={subject.id} className="animate-fade-in">
                        <div className="max-w-2xl mx-auto">
                          <SubjectCard subject={subject} index={0} />
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                ) : (
                  <div className="text-center py-16 space-y-4 animate-fade-in">
                    <div className="text-6xl">🔍</div>
                    <h3 className="text-xl font-semibold text-foreground">No subjects found</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Try searching with different keywords like subject name, code, or unit topic.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="1st" className="mt-6">
                {filteredSemester1.length > 0 ? (
                  <Tabs value={effectiveActiveSubject} onValueChange={setActiveSubjectId} className="w-full">
                    <TabsList className="flex flex-wrap justify-center gap-2 h-auto p-2 bg-muted/30 rounded-xl mb-6">
                      {filteredSemester1.map((subject) => (
                        <TabsTrigger
                          key={subject.id}
                          value={subject.id}
                          className="px-4 py-2 rounded-lg text-sm font-medium data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md transition-all duration-200 hover:bg-muted"
                        >
                          {subject.code}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {filteredSemester1.map((subject) => (
                      <TabsContent key={subject.id} value={subject.id} className="animate-fade-in">
                        <div className="max-w-2xl mx-auto">
                          <SubjectCard subject={subject} index={0} />
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                ) : (
                  <div className="text-center py-16 space-y-4 animate-fade-in">
                    <div className="text-6xl">🔍</div>
                    <h3 className="text-xl font-semibold text-foreground">No subjects found</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Try searching with different keywords like subject name, code, or unit topic.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </section>
          {/* Info Section */}
          <section className="max-w-3xl mx-auto text-center space-y-6 py-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                📌 How to Use
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  <strong>Open Drive Folder:</strong> Access all materials for a subject
                  in one place
                </li>
                <li>
                  <strong>View Units:</strong> Expand to see unit-wise PDFs with
                  direct download links
                </li>
                <li>
                  <strong>Search:</strong> Quickly find any subject or unit using the
                  search bar
                </li>
              </ul>
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