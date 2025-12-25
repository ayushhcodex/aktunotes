import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { semester1Subjects, semester3Subjects } from "@/config/subjectsData";

const Navigation = () => {
  const handleYearSelect = (year: "1" | "3") => {
    // Dispatch custom event to sync with Index page
    window.dispatchEvent(new CustomEvent('yearSelect', { detail: { year } }));
    
    // Scroll to subjects section
    setTimeout(() => {
      const subjectsSection = document.getElementById('subjects');
      if (subjectsSection) {
        subjectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleSubjectSelect = (subjectId: string, year: "1" | "3") => {
    // First switch to the correct year tab
    window.dispatchEvent(new CustomEvent('yearSelect', { detail: { year } }));
    
    // Then scroll to the subject after a brief delay to allow tab switch
    setTimeout(() => {
      const subjectElement = document.getElementById(`subject-${subjectId}`);
      if (subjectElement) {
        subjectElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add a highlight animation
        subjectElement.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
        setTimeout(() => {
          subjectElement.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
        }, 2000);
      }
    }, 150);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container flex items-center justify-between h-14">
        <Link to="/" className="font-bold text-lg text-foreground">
          AKTU Notes
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="bg-transparent"
                onClick={() => handleYearSelect("1")}
              >
                1st Year
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-1 p-2 md:w-[400px] md:grid-cols-2 bg-popover">
                  {semester1Subjects.map((subject) => (
                    <li key={subject.id}>
                      <button
                        onClick={() => handleSubjectSelect(subject.id, "1")}
                        className="w-full text-left block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{subject.code}</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground mt-1">
                          {subject.fullName}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="bg-transparent"
                onClick={() => handleYearSelect("3")}
              >
                2nd Year
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-1 p-2 md:w-[400px] md:grid-cols-2 bg-popover">
                  {semester3Subjects.map((subject) => (
                    <li key={subject.id}>
                      <button
                        onClick={() => handleSubjectSelect(subject.id, "3")}
                        className="w-full text-left block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{subject.code}</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground mt-1">
                          {subject.fullName}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navigation;
