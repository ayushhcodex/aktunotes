import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container flex items-center justify-center h-14">
        <Link to="/" className="font-bold text-lg text-foreground">
          AKTU Notes
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
