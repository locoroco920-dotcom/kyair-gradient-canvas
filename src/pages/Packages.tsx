import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingQuoteButton from "@/components/FloatingQuoteButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Packages = () => {
  const { toast } = useToast();
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    company: "",
    industry: "",
    services: "",
    budget: "",
    timeline: "",
    details: ""
  });

  const packages = [
    {
      name: "Starter",
      price: "Starting at $2,500",
      description: "Perfect for businesses getting started with AI and advertising",
      features: [
        "Initial AI readiness assessment",
        "Basic ad campaign setup guidance",
        "Quarterly strategy consultation",
        "Email support",
        "Access to resource library"
      ],
      highlight: false
    },
    {
      name: "Growth",
      price: "Starting at $7,500",
      description: "Ideal for scaling businesses ready to leverage AI fully",
      features: [
        "AI tool implementation (up to 3 workflows)",
        "Multi-channel ad campaign management",
        "Monthly analytics reports",
        "Bi-weekly optimization meetings",
        "Priority support",
        "Custom dashboard access",
        "Quarterly ROI reviews"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "Comprehensive solution for large-scale operations",
      features: [
        "Custom AI development & integration",
        "Full-service multi-channel advertising",
        "Dedicated account manager",
        "Real-time analytics & reporting",
        "Weekly optimization sessions",
        "24/7 priority support",
        "Advanced automation setup",
        "Unlimited consultations"
      ],
      highlight: false
    }
  ];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Received!",
      description: "Thank you! We'll reach out within 1-2 business days with your custom quote.",
    });
    setQuoteForm({
      name: "",
      company: "",
      industry: "",
      services: "",
      budget: "",
      timeline: "",
      details: ""
    });
  };

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuoteForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingQuoteButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Choose Your <span className="gradient-text">Perfect Package</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Flexible solutions designed to match your business goals and budget
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`bg-card border-border transition-all duration-300 hover:scale-105 ${
                  pkg.highlight ? "border-accent shadow-xl scale-105" : ""
                }`}
              >
                <CardHeader className="text-center pb-8">
                  {pkg.highlight && (
                    <div className="mb-4">
                      <span className="gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <CardTitle className="text-3xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-3xl font-bold gradient-text mb-2">{pkg.price}</p>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      pkg.highlight
                        ? "gradient-bg hover:opacity-90"
                        : "bg-secondary hover:bg-surface-hover"
                    } transition-all`}
                  >
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Form */}
      <section className="py-20 px-4 bg-surface-elevated">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Request a <span className="gradient-text">Custom Quote</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your needs and we'll create a tailored solution
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleQuoteSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={quoteForm.name}
                      onChange={handleQuoteChange}
                      required
                      className="bg-background border-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={quoteForm.company}
                      onChange={handleQuoteChange}
                      required
                      className="bg-background border-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-2">
                    Industry
                  </label>
                  <Input
                    id="industry"
                    name="industry"
                    value={quoteForm.industry}
                    onChange={handleQuoteChange}
                    className="bg-background border-input"
                    placeholder="e.g., Technology, Healthcare, Retail"
                  />
                </div>

                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-foreground mb-2">
                    Services Needed *
                  </label>
                  <Select name="services" required>
                    <SelectTrigger className="bg-background border-input">
                      <SelectValue placeholder="Select services" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai">AI Setup & Integration</SelectItem>
                      <SelectItem value="ads">Ad Campaign Management</SelectItem>
                      <SelectItem value="analytics">Analytics & Insights</SelectItem>
                      <SelectItem value="automation">Marketing Automation</SelectItem>
                      <SelectItem value="consultation">Strategy Consultation</SelectItem>
                      <SelectItem value="all">Complete Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <Select name="budget">
                      <SelectTrigger className="bg-background border-input">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="over-50k">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                      Timeline
                    </label>
                    <Select name="timeline">
                      <SelectTrigger className="bg-background border-input">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="3-months">1-3 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-foreground mb-2">
                    Additional Details
                  </label>
                  <Textarea
                    id="details"
                    name="details"
                    value={quoteForm.details}
                    onChange={handleQuoteChange}
                    rows={6}
                    className="bg-background border-input resize-none"
                    placeholder="Tell us more about your project goals, challenges, or specific requirements..."
                  />
                </div>

                <Button type="submit" className="w-full gradient-bg hover:opacity-90 transition-opacity text-lg py-6">
                  Request Custom Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
