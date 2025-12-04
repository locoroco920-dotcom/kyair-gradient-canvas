import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import kyairLogo from "@/assets/kyair-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsLoggedIn(!!session);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <img 
                src={kyairLogo} 
                alt="Kyair Consulting" 
                className="h-10 w-10 relative z-10" 
                loading="eager"
                decoding="async"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Kyair Consulting
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  isActive(link.path) ? "text-primary after:scale-x-100" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/quote" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="gradient" size="sm" className="shadow-lg shadow-primary/20">
                Get a Quote
              </Button>
            </Link>
            <Link to={isLoggedIn ? "/profile" : "/auth"} onClick={() => window.scrollTo(0, 0)}>
              <Button variant="outline" size="sm" className="gap-2 border-border/50 hover:border-primary/50 hover:bg-primary/5">
                <User size={16} />
                {isLoggedIn ? "Profile" : "Login"}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in backdrop-blur-xl bg-background/40 -mx-4 px-4 border-t border-border/30">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/quote" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
              <Button variant="gradient" size="sm" className="w-full shadow-lg shadow-primary/20">
                Get a Quote
              </Button>
            </Link>
            <Link to={isLoggedIn ? "/profile" : "/auth"} onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
              <Button variant="outline" size="sm" className="w-full gap-2">
                <User size={16} />
                {isLoggedIn ? "Profile" : "Login"}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
