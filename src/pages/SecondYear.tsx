import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { semester3Subjects } from "@/config/subjectsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Cpu, Binary, Network, Lightbulb, Heart, Code 
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Binary,
  Network,
  Lightbulb,
  Heart,
  Code,
};

const SecondYear = () => {
  return (
    <>
      <Helmet>
        <title>2nd Year Subjects | AKTU B.Tech CSE/IT Notes 2025</title>
        <meta
          name="description"
          content="Access AKTU 2nd year B.Tech CSE/IT study materials. 6 subjects including COA, DSTL, Data Structures, LASER, UHV, and Python."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="container py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">2nd Year Subjects</h1>
            <p className="text-muted-foreground mt-1">6 subjects • CSE/IT • B.Tech 2025</p>
          </div>

          {/* Subject Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {semester3Subjects.map((subject) => {
              const IconComponent = iconMap[subject.icon] || Cpu;
              
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

export default SecondYear;
