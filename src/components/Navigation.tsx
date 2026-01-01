import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserMenu from "./UserMenu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg shadow-sm py-2" 
          : "bg-background/60 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="w-20" /> {/* Spacer for balance */}
        <Link to="/" className="flex flex-col items-center group">
          <span 
            className={`font-bold tracking-tight text-foreground transition-all duration-300 ${
              isScrolled ? "text-lg" : "text-xl"
            }`}
          >
            AKTU Notes
          </span>
          <span 
            className={`text-muted-foreground font-medium tracking-wider uppercase transition-all duration-300 overflow-hidden ${
              isScrolled 
                ? "text-[0px] opacity-0 h-0" 
                : "text-[10px] opacity-100 h-4"
            }`}
          >
            Exam-Focused • AI-Powered
          </span>
        </Link>
        <div className="w-20 flex justify-end">
          <UserMenu />
        </div>
      </div>
      {/* Subtle bottom divider */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 ${
          isScrolled 
            ? "opacity-0" 
            : "opacity-100 bg-gradient-to-r from-transparent via-border to-transparent"
        }`}
      />
    </nav>
  );
};

export default Navigation;
