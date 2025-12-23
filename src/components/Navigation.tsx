import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { semester1Subjects, semester3Subjects } from "@/config/subjectsData";

const Navigation = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container flex items-center justify-between h-14">
        <Link to="/" className="font-bold text-lg text-foreground">
          AKTU Notes
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Semester 1
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-1 p-2 md:w-[400px] md:grid-cols-2">
                  {semester1Subjects.map((subject) => (
                    <li key={subject.id}>
                      <a
                        href={`#${subject.id}`}
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{subject.code}</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground mt-1">
                          {subject.fullName}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Semester 3
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-1 p-2 md:w-[400px] md:grid-cols-2">
                  {semester3Subjects.map((subject) => (
                    <li key={subject.id}>
                      <a
                        href={`#${subject.id}`}
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{subject.code}</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground mt-1">
                          {subject.fullName}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/feedback"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-4"
              >
                Feedback
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navigation;
