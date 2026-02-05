import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedBackground from "@/components/AnimatedBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-20">
      <SEO 
        title="Page Not Found | Kyair Consulting"
        description="The page you're looking for doesn't exist. Return to Kyair Consulting's homepage for AI consulting, automation, and IT support services."
        canonical="/404"
        noindex={true}
      />
      <AnimatedBackground />
      <main className="text-center px-4">
        <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">404</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Oops! Page not found</p>
        <Link to="/" aria-label="Return to Kyair Consulting homepage">
          <Button variant="gradient" size="lg" className="gap-2">
            <Home size={20} aria-hidden="true" />
            Return to Home
          </Button>
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
