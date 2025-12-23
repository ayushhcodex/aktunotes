import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-xl mx-auto animate-fade-in">
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          type="text"
          placeholder="Search subjects or units..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-12 py-6 text-base rounded-2xl border-2 border-border bg-card shadow-card focus:shadow-card-hover focus:border-primary/50 transition-all duration-300"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onSearchChange("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full hover:bg-muted"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-3">
        💡 Tip: Search by subject name, code, or unit topic
      </p>
    </div>
  );
};

export default SearchBar;
