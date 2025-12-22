import { Heart, Github, Mail, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20 py-12 bg-gradient-to-t from-muted/50 to-transparent">
      <div className="container">
        <div className="flex flex-col items-center space-y-6">
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#subjects"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Subjects
            </a>
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Contribute
            </a>
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Main Footer Text */}
          <div className="text-center space-y-2">
            <p className="flex items-center justify-center gap-2 text-foreground font-medium">
              Made with
              <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" />
              for AKTU B.Tech Students
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              📚 AKTU 1st & 3rd Semester Notes Available
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Complete Study Material. All study materials are for educational purposes.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span>CSE / IT • B.Tech • 2025</span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
