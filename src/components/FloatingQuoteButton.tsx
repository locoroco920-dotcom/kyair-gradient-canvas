import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const FloatingQuoteButton = () => {
  return (
    <Link
      to="/packages"
      className="fixed bottom-8 right-8 z-40 p-4 rounded-full gradient-bg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow group"
      aria-label="Request a quote"
    >
      <MessageSquare className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-card rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Request Quote
      </span>
    </Link>
  );
};

export default FloatingQuoteButton;
