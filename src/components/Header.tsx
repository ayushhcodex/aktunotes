import { GraduationCap, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="relative overflow-hidden py-12 md:py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium animate-fade-in">
            <span>🚀 Exam-Focused. Student-Built. AKTU Ready.</span>
          </div>
          
          {/* Main Title */}
          <div className="space-y-3 animate-slide-up">
            <div className="flex items-center justify-center gap-3">
              <GraduationCap className="w-10 h-10 md:w-14 md:h-14 text-primary-foreground" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
                Everything You Need to Crack AKTU Exams
              </h1>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-foreground/90">
              Unit-Wise Notes, PYQs & AI-Powered Practice
            </p>
          </div>
          
          {/* Description */}
          <p className="max-w-2xl text-primary-foreground/80 text-base md:text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Get AKTU-aligned notes, most-repeated previous year questions, and AI-generated quizzes — all structured unit-wise to help you revise faster and score higher.
          </p>
          <p className="text-primary-foreground/60 text-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Choose your semester above and start preparing in seconds.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">2</p>
              <p className="text-sm text-primary-foreground/70">Semesters</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">15</p>
              <p className="text-sm text-primary-foreground/70">Subjects</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">75</p>
              <p className="text-sm text-primary-foreground/70">Units</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
