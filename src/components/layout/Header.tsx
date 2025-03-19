import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Menu, X, Settings } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary rounded-full p-1">
            <Home className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">OvaCare</span>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-foreground hover:text-primary transition-colors ${isActive("/") ? "text-primary font-medium" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/assessment"
            className={`text-foreground hover:text-primary transition-colors ${isActive("/assessment") ? "text-primary font-medium" : ""}`}
          >
            Assessment
          </Link>
          <Link
            to="/results"
            className={`text-foreground hover:text-primary transition-colors ${isActive("/results") ? "text-primary font-medium" : ""}`}
          >
            Results
          </Link>
          <Link
            to="/management"
            className={`text-foreground hover:text-primary transition-colors ${isActive("/management") ? "text-primary font-medium" : ""}`}
          >
            Management
          </Link>
          <Link
            to="/chat"
            className={`text-foreground hover:text-primary transition-colors ${isActive("/chat") ? "text-primary font-medium" : ""}`}
          >
            Chat
          </Link>
          <Link
            to="/settings"
            className={`text-foreground hover:text-primary transition-colors ${isActive("/settings") ? "text-primary font-medium" : ""}`}
          >
            <Settings className="h-5 w-5" />
          </Link>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Link to="/assessment">Start Assessment</Link>
          </Button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link
              to="/"
              className={`text-foreground hover:text-primary transition-colors py-2 ${isActive("/") ? "text-primary font-medium" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/assessment"
              className={`text-foreground hover:text-primary transition-colors py-2 ${isActive("/assessment") ? "text-primary font-medium" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Assessment
            </Link>
            <Link
              to="/results"
              className={`text-foreground hover:text-primary transition-colors py-2 ${isActive("/results") ? "text-primary font-medium" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </Link>
            <Link
              to="/management"
              className={`text-foreground hover:text-primary transition-colors py-2 ${isActive("/management") ? "text-primary font-medium" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Management
            </Link>
            <Link
              to="/chat"
              className={`text-foreground hover:text-primary transition-colors py-2 ${isActive("/chat") ? "text-primary font-medium" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Chat
            </Link>
            <Link
              to="/settings"
              className={`text-foreground hover:text-primary transition-colors py-2 ${isActive("/settings") ? "text-primary font-medium" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Settings
            </Link>
            <Button
              asChild
              className="w-full mt-2 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/assessment">Start Assessment</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
