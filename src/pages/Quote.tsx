import { useState } from "react";
import { Send, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const { toast } = useToast();
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    company: "",
    industry: "",
    budget: "",
    timeline: "",
    details: "",
    services: [] as string[],
  });

  const serviceOptions = [
    "AI Setup & Integration",
    "Advertising Management",
    "Data Analytics",
    "Automation Solutions",
    "Strategy Consultation",
    "Training & Support",
  ];

  const handleServiceToggle = (service: string) => {
    setQuoteForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!quoteForm.name || !quoteForm.company || !quoteForm.services.length) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Quote Request Received!",
      description: "We'll reach out within 1-2 business days with your custom quote.",
    });

    setQuoteForm({
      name: "",
      company: "",
      industry: "",
      budget: "",
      timeline: "",
      details: "",
      services: [],
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Get a <span className="bg-gradient-primary bg-clip-text text-transparent">Custom Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us about your needs and we'll create a tailored solution for you
            </p>
          </div>

          <Card className="animate-slide-up">
            <CardContent className="p-8">
              <form onSubmit={handleQuoteSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      Company Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="company"
                      value={quoteForm.company}
                      onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                      placeholder="Your company"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input
                      id="industry"
                      value={quoteForm.industry}
                      onChange={(e) => setQuoteForm({ ...quoteForm, industry: e.target.value })}
                      placeholder="e.g., Finance, Retail, Tech"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      value={quoteForm.budget}
                      onValueChange={(value) => setQuoteForm({ ...quoteForm, budget: value })}
                      open={budgetOpen}
                      onOpenChange={setBudgetOpen}
                    >
                      <SelectTrigger className="[&>svg]:hidden">
                        <SelectValue placeholder="Select budget range" />
                        {budgetOpen ? (
                          <ChevronUp className="h-4 w-4 opacity-50" />
                        ) : (
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        )}
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<5k">Less than $5,000</SelectItem>
                        <SelectItem value="5-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15-50k">$15,000 - $50,000</SelectItem>
                        <SelectItem value="50k+">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select
                    value={quoteForm.timeline}
                    onValueChange={(value) => setQuoteForm({ ...quoteForm, timeline: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="When do you want to start?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="1-3months">1-3 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="6+months">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>
                    Services Needed <span className="text-destructive">*</span>
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceOptions.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={quoteForm.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <Label htmlFor={service} className="text-sm font-normal cursor-pointer">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea
                    id="details"
                    value={quoteForm.details}
                    onChange={(e) => setQuoteForm({ ...quoteForm, details: e.target.value })}
                    placeholder="Tell us more about your needs, challenges, or goals..."
                    rows={5}
                  />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full group">
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                  Request Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Quote;
