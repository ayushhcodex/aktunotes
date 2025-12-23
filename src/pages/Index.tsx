import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, GraduationCap, Sparkles, TrendingUp, FileQuestion } from "lucide-react";

const Index = () => {
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
        <Navbar />

        {/* Hero Section - Lightweight */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Study Smart, Score High
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              AKTU B.Tech Study Materials
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Access notes, previous year questions, and important topics for 1st & 2nd year B.Tech students.
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-xs text-muted-foreground">Years</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">15</p>
                <p className="text-xs text-muted-foreground">Subjects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">75</p>
                <p className="text-xs text-muted-foreground">Units</p>
              </div>
            </div>
          </div>
        </section>

        <main className="container py-10">
          {/* Year Selection Cards */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-foreground mb-4">Select Your Year</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/first-year"
                className="block p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">1st Year</h3>
                    <p className="text-sm text-muted-foreground">9 subjects • All Branches</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/second-year"
                className="block p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">2nd Year</h3>
                    <p className="text-sm text-muted-foreground">6 subjects • CSE/IT</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-foreground mb-4">What's Available</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-border bg-card">
                <TrendingUp className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-medium text-foreground mb-1">Important Topics</h3>
                <p className="text-sm text-muted-foreground">Focus on high-priority exam topics</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <FileQuestion className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-medium text-foreground mb-1">Previous Year Questions</h3>
                <p className="text-sm text-muted-foreground">Most repeated AKTU questions</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <BookOpen className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-medium text-foreground mb-1">7 & 2 Marks</h3>
                <p className="text-sm text-muted-foreground">Categorized by marks distribution</p>
              </div>
            </div>
          </section>

          {/* How to Use */}
          <section className="py-6 px-5 rounded-xl border border-border bg-muted/30">
            <h3 className="font-semibold text-foreground mb-3">📌 How to Use</h3>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li>1. Select your year (1st or 2nd)</li>
              <li>2. Choose a subject from the list</li>
              <li>3. Click on a unit tab to view content</li>
              <li>4. Switch between Topics, PYQs, and 7 & 2 Marks</li>
            </ol>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
