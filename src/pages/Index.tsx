import { useState, useMemo } from "react";
import { subjectsData } from "@/config/subjectsData";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SubjectCard from "@/components/SubjectCard";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubjects = useMemo(() => {
    if (!searchQuery.trim()) return subjectsData;

    const query = searchQuery.toLowerCase();
    return subjectsData.filter((subject) => {
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
  }, [searchQuery]);

  return (
    <>
      <Helmet>
        <title>AKTU Notes Hub | 3rd Semester B.Tech Study Materials 2025</title>
        <meta
          name="description"
          content="Access free AKTU 3rd semester B.Tech CSE/IT study materials. Download PDFs for COA, DSTL, DS, LASER, UHV, Python. Complete notes and resources."
        />
        <meta
          name="keywords"
          content="AKTU notes, 3rd semester, B.Tech, CSE, IT, COA, DSTL, DS, Python, study materials, PDF notes"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Header */}
        <Header />

        {/* Main Content */}
        <main className="container py-12 space-y-12">
          {/* Search Section */}
          <section>
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          </section>

          {/* Subjects Grid */}
          <section id="subjects" className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                📚 Your Subjects
              </h2>
              <p className="text-muted-foreground">
                Click on any subject to access study materials
              </p>
            </div>

            {filteredSubjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubjects.map((subject, index) => (
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
