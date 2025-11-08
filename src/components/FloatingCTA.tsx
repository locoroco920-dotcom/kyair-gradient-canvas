import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <Link to="/packages#quote" className="fixed bottom-6 right-6 z-40 animate-glow">
      <Button
        variant="gradient"
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageSquare className="mr-2" size={20} />
        Request a Quote
      </Button>
    </Link>
  );
};

export default FloatingCTA;
