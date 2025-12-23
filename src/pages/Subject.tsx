import { useState, lazy, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { subjectsData } from "@/config/subjectsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft, ExternalLink } from "lucide-react";

// Lazy load unit content component
const UnitContent = lazy(() => import("@/components/UnitContent"));

const Subject = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [activeUnit, setActiveUnit] = useState(1);

  const subject = subjectsData.find((s) => s.id === subjectId);

  if (!subject) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Subject Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const backLink = subject.semester === 1 ? "/first-year" : "/second-year";
  const backLabel = subject.semester === 1 ? "1st Year" : "2nd Year";

  return (
    <>
      <Helmet>
        <title>{subject.fullName} | AKTU B.Tech Notes 2025</title>
        <meta
          name="description"
          content={`Study ${subject.fullName} (${subject.code}) for AKTU B.Tech. Access unit-wise notes, PYQs, and important topics.`}
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="container py-6">
          {/* Breadcrumb */}
          <Link
            to={backLink}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to {backLabel}
          </Link>

          {/* Subject Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                {subject.code}
              </span>
              {subject.driveLink && (
                <a
                  href={subject.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  View Notes
                </a>
              )}
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">{subject.fullName}</h1>
            <p className="text-muted-foreground text-sm mt-1">{subject.description}</p>
          </div>

          {/* Sticky Unit Tabs */}
          <div className="sticky top-14 z-40 bg-background py-3 border-b border-border -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              {subject.units.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => setActiveUnit(unit.id)}
                  className={`shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeUnit === unit.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Unit {unit.id}
                </button>
              ))}
            </div>
          </div>

          {/* Unit Content - Lazy Loaded */}
          <div className="py-6">
            <Suspense
              fallback={
                <div className="py-8 text-center text-muted-foreground">Loading...</div>
              }
            >
              <UnitContent subjectId={subject.id} unitId={activeUnit} unitTitle={subject.units[activeUnit - 1]?.title || ""} />
            </Suspense>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Subject;
