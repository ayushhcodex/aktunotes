import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show footer when user is near the bottom (within 100px)
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 100;
      setIsVisible(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer 
      className={`fixed bottom-0 left-0 right-0 py-3 bg-background/80 backdrop-blur-sm border-t border-border/50 z-40 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
      }`}
    >
      <div className="container">
        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          Made with
          <Heart className="w-3 h-3 text-destructive fill-destructive" />
          by Ayush Singh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
