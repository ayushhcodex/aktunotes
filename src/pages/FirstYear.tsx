import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { semester1Subjects } from "@/config/subjectsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FlaskConical, Cog, CircuitBoard, Calculator, Code2, 
  Leaf, Users, Atom, Zap 
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  FlaskConical,
  Cog,
  CircuitBoard,
  Calculator,
  Code2,
  Leaf,
  Users,
  Atom,
  Zap,
};

const FirstYear = () => {
  return (
    <>
      <Helmet>
        <title>1st Year Subjects | AKTU B.Tech Notes 2025</title>
        <meta
          name="description"
          content="Access AKTU 1st year B.Tech study materials. 9 subjects including Chemistry, Mechanics, Electronics, Math-I, PPS, EVS, and more."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="container py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">1st Year Subjects</h1>
            <p className="text-muted-foreground mt-1">9 subjects • All Branches • B.Tech 2025</p>
          </div>

          {/* Subject Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {semester1Subjects.map((subject) => {
              const IconComponent = iconMap[subject.icon] || Atom;
              
              return (
                <Link
                  key={subject.id}
                  to={`/subject/${subject.id}`}
                  className="block p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          {subject.code}
                        </span>
                      </div>
                      <h2 className="font-semibold text-foreground truncate">{subject.fullName}</h2>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {subject.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">5 Units</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FirstYear;
