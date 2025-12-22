import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-3 bg-background/80 backdrop-blur-sm border-t border-border/50 z-40">
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
