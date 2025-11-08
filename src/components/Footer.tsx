import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import kyairLogo from "@/assets/kyair-logo.png";

const Footer = () => {
  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={kyairLogo} alt="Kyair Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-foreground">Kyair</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming business with AI intelligence and advertising impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AI Integration</li>
              <li>Ad Campaign Management</li>
              <li>Analytics & Insights</li>
              <li>Marketing Automation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@kyairconsulting.com" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>info@kyairconsulting.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>(123) 456-7890</span>
                </a>
              </li>
              <li className="flex space-x-3 pt-2">
                <a href="#" className="p-2 rounded-lg bg-surface-hover hover:bg-gradient-to-r hover:from-[hsl(var(--gradient-start))] hover:to-[hsl(var(--gradient-blue))] transition-all">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-surface-hover hover:bg-gradient-to-r hover:from-[hsl(var(--gradient-start))] hover:to-[hsl(var(--gradient-blue))] transition-all">
                  <Instagram className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Kyair Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
