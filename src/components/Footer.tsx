import { Mail, Phone } from "lucide-react";
import kyairLogo from "@/assets/kyair-logo.webp";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <div className="flex items-center space-x-2">
            <img 
              src={kyairLogo} 
              alt="Kyair Consulting logo" 
              className="h-8 w-8"
              loading="eager"
              decoding="async"
            />
            <div className="flex flex-col">
              <span className="text-base font-bold bg-gradient-primary bg-clip-text text-transparent">
                Kyair Consulting
              </span>
              <p className="text-xs text-muted-foreground">
                Transforming business with AI intelligence and advertising impact
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 my-[5px]">
            <h3 className="text-sm font-semibold text-foreground">Contact Us</h3>
            <div className="flex items-center gap-6 mx-[52px]">
              <a href="mailto:kyairconsulting@gmail.com" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors" aria-label="Email Kyair Consulting at kyairconsulting@gmail.com">
                <Mail size={14} aria-hidden="true" />
                <span>kyairconsulting@gmail.com</span>
              </a>
              <a href="tel:+12017395672" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors" aria-label="Call Kyair Consulting at +1 (201) 739-5672">
                <Phone size={14} aria-hidden="true" />
                <span>+1 (201) 739-5672</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground mt-3">
          <p>&copy; {new Date().getFullYear()} Kyair Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;