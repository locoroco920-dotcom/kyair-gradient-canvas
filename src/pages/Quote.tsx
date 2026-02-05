import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Rocket, Zap, Calendar, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEO from "@/components/SEO";

// Service definitions with pricing
const PACKAGES = {
  launch: {
    id: "launch",
    name: "Launch Plan",
    tagline: "Look Legit Everywhere",
    setup: 300,
    monthly: 150,
    icon: Sparkles,
    includedServices: ["website-basic", "logo-basic", "social-2", "google-business", "analytics", "hosting", "updates-2hr"],
  },
  growth: {
    id: "growth",
    name: "Growth Plan",
    tagline: "I Want Leads",
    setup: 500,
    monthly: 350,
    icon: Rocket,
    includedServices: ["website-unlimited", "logo-advanced", "social-all", "google-business", "analytics", "hosting", "seo-basic", "ai-chatbot-single", "landing-page", "ad-creatives", "updates-5hr"],
  },
  automation: {
    id: "automation",
    name: "Automation Plan",
    tagline: "AI Ops Team",
    setup: 750,
    monthly: 650,
    icon: Zap,
    includedServices: ["website-unlimited", "logo-advanced", "social-all", "google-business", "analytics", "hosting", "seo-basic", "ai-chatbot-multi", "landing-page", "ad-creatives", "ai-workflows", "ai-content", "updates-8hr"],
  },
};

const SERVICE_CATEGORIES = [
  {
    id: "branding",
    name: "Branding & Visuals",
    services: [
      { id: "logo-basic", name: "Logo Design", price: 300, recurring: false, description: "Custom-designed logo with concepts and revisions" },
      { id: "logo-advanced", name: "Advanced Logo & Brand Kit", price: 750, recurring: false, description: "Logo, colors, fonts, 3-5 templates" },
    ],
  },
  {
    id: "web",
    name: "Web & Online Presence",
    services: [
      { id: "website-basic", name: "3-5 Page Brochure Website", price: 500, recurring: false, description: "Professional responsive website" },
      { id: "website-unlimited", name: "Unlimited-Page Website with Blog", price: 1200, recurring: false, description: "Full website with CMS and blog" },
      { id: "extra-page", name: "Extra Website Page", price: 200, recurring: false, description: "Additional pages beyond your plan" },
      { id: "landing-page", name: "Landing/Sales Page", price: 900, recurring: false, description: "High-conversion standalone page" },
      { id: "social-2", name: "2 Social Media Profiles Setup", price: 200, recurring: false, description: "Setup & optimize 2 platforms" },
      { id: "social-all", name: "All Major Social Platforms Setup", price: 400, recurring: false, description: "Setup & optimize all platforms" },
      { id: "google-business", name: "Google Business Profile Setup", price: 250, recurring: false, description: "Create and optimize your listing" },
      { id: "adsense", name: "Google AdSense Setup", price: 150, recurring: false, description: "Monetize your site with ads" },
    ],
  },
  {
    id: "ai",
    name: "AI & Automation",
    services: [
      { id: "ai-chatbot-single", name: "AI Receptionist (Single Channel)", price: 1000, recurring: false, description: "Chatbot on one channel" },
      { id: "ai-chatbot-multi", name: "AI Receptionist (Multi-Channel)", price: 1800, recurring: false, description: "Chatbot across web + SMS/Messenger/WhatsApp" },
      { id: "rss-social", name: "Blog/RSS to Social Automation", price: 300, recurring: false, description: "Auto-post new content to socials" },
      { id: "ai-workflows", name: "Custom Workflow/Automation", price: 1200, recurring: false, description: "Automate your specific process" },
      { id: "ai-content", name: "AI Content Helper", price: 500, recurring: false, description: "AI-powered content generation assistance" },
    ],
  },
  {
    id: "media",
    name: "Media & Content",
    services: [
      { id: "promo-video", name: "AI Promo Video (15-30s)", price: 250, recurring: false, description: "Short social media video" },
      { id: "explainer-video", name: "AI Explainer Video (45-60s)", price: 600, recurring: false, description: "Longer about/product video" },
      { id: "ad-creatives", name: "Custom Ad Creatives", price: 400, recurring: false, description: "High-impact advertising visuals" },
    ],
  },
  {
    id: "support",
    name: "Training & Support",
    services: [
      { id: "training", name: "1-on-1 Training Session", price: 200, recurring: false, description: "60-90 min guidance session" },
      { id: "hosting", name: "Hosting & Security Updates", price: 50, recurring: true, description: "Monthly hosting and maintenance" },
      { id: "updates-2hr", name: "Up to 2 Hours Updates/Month", price: 100, recurring: true, description: "Monthly website updates" },
      { id: "updates-5hr", name: "Up to 5 Hours Updates/Month", price: 200, recurring: true, description: "Monthly website updates" },
      { id: "updates-8hr", name: "Up to 8 Hours Priority Support/Month", price: 350, recurring: true, description: "Priority monthly support" },
    ],
  },
];

const STEPS = [
  { id: 1, name: "Quote Type", description: "Choose your starting point" },
  { id: 2, name: "Branding", description: "Brand identity services" },
  { id: 3, name: "Web & Presence", description: "Website & online presence" },
  { id: 4, name: "AI & Automation", description: "Smart automation tools" },
  { id: 5, name: "Media", description: "Content & video services" },
  { id: 6, name: "Support", description: "Training & maintenance" },
  { id: 7, name: "Review & Contact", description: "Finalize your quote" },
  { id: 8, name: "Schedule", description: "Book a consultation" },
];

const quotePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://kyairconsulting.com/quote",
  "name": "Request a Quote | Kyair Consulting",
  "description": "Get a custom AI consulting quote. Build your own package or choose from Launch, Growth, and Automation plans.",
  "url": "https://kyairconsulting.com/quote",
  "isPartOf": {
    "@id": "https://kyairconsulting.com/#website"
  },
  "publisher": {
    "@id": "https://kyairconsulting.com/#organization"
  }
};

const Quote = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [quoteType, setQuoteType] = useState<"custom" | "launch" | "growth" | "automation" | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [billingType, setBillingType] = useState<Record<string, "one-time" | "recurring">>({});
  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setIsLoggedIn(true);
        // Pre-fill contact info from profile
        const { data: profile } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();
        
        if (profile) {
          setContactInfo({
            fullName: profile.contact_name || "",
            email: profile.email || session.user.email || "",
            phone: profile.phone || "",
            businessName: profile.business_name || "",
          });
        }
      }
    };
    checkAuth();
  }, []);

  // Handle package selection from URL params
  useEffect(() => {
    const packageParam = searchParams.get("package");
    if (packageParam && PACKAGES[packageParam as keyof typeof PACKAGES]) {
      setQuoteType(packageParam as "launch" | "growth" | "automation");
      setSelectedServices(PACKAGES[packageParam as keyof typeof PACKAGES].includedServices);
    }
  }, [searchParams]);

  const handleQuoteTypeSelect = (type: "custom" | "launch" | "growth" | "automation") => {
    setQuoteType(type);
    if (type === "custom") {
      setSelectedServices([]);
    } else {
      setSelectedServices(PACKAGES[type].includedServices);
    }
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(s => s !== serviceId)
        : [...prev, serviceId]
    );
  };

  const toggleBillingType = (serviceId: string) => {
    setBillingType(prev => ({
      ...prev,
      [serviceId]: prev[serviceId] === "recurring" ? "one-time" : "recurring",
    }));
  };

  const calculateTotal = () => {
    // If a package is selected, use package pricing
    if (quoteType && quoteType !== "custom") {
      const pkg = PACKAGES[quoteType];
      // Check if user has added/removed services from the package
      const packageServices = new Set(pkg.includedServices);
      const currentServices = new Set(selectedServices);
      
      // If services match package exactly, use package price
      const hasExactMatch = pkg.includedServices.every(s => currentServices.has(s)) &&
                           selectedServices.every(s => packageServices.has(s));
      
      if (hasExactMatch) {
        return { oneTime: pkg.setup, monthly: pkg.monthly };
      }
      
      // If modified from package, calculate base package + additions - removals
      let oneTime = pkg.setup;
      let monthly = pkg.monthly;
      
      // Add prices for services added beyond the package
      selectedServices.forEach(serviceId => {
        if (!packageServices.has(serviceId)) {
          const service = getServiceById(serviceId);
          if (service) {
            if (service.recurring || billingType[serviceId] === "recurring") {
              monthly += service.price;
            } else {
              oneTime += service.price;
            }
          }
        }
      });
      
      return { oneTime, monthly };
    }

    // Custom quote - calculate from individual services
    let oneTime = 0;
    let monthly = 0;

    SERVICE_CATEGORIES.forEach(category => {
      category.services.forEach(service => {
        if (selectedServices.includes(service.id)) {
          if (service.recurring || billingType[service.id] === "recurring") {
            monthly += service.price;
          } else {
            oneTime += service.price;
          }
        }
      });
    });

    return { oneTime, monthly };
  };

  const getServiceById = (id: string) => {
    for (const category of SERVICE_CATEGORIES) {
      const service = category.services.find(s => s.id === id);
      if (service) return service;
    }
    return null;
  };

  const getCategoryServices = (stepIndex: number) => {
    const categoryMap: Record<number, string> = {
      2: "branding",
      3: "web",
      4: "ai",
      5: "media",
      6: "support",
    };
    const categoryId = categoryMap[stepIndex];
    return SERVICE_CATEGORIES.find(c => c.id === categoryId);
  };

  const handleSubmitQuote = async () => {
    if (!contactInfo.fullName || !contactInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and email.",
        variant: "destructive",
      });
      return;
    }

    const totals = calculateTotal();
    
    toast({
      title: "Quote Request Submitted!",
      description: `Total: $${totals.oneTime} one-time + $${totals.monthly}/mo`,
    });
    
    setCurrentStep(8); // Move to scheduling step
  };

  const progressPercentage = ((currentStep - 1) / (STEPS.length - 1)) * 100;

  // Step 1: Quote Type Selection
  const renderQuoteTypeStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">How Would You Like to Start?</h2>
        <p className="text-muted-foreground">Choose a package or build your own custom quote</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card
          className={`cursor-pointer transition-all hover:border-primary/50 ${quoteType === "custom" ? "border-primary ring-2 ring-primary/20" : ""}`}
          onClick={() => handleQuoteTypeSelect("custom")}
        >
          <CardContent className="p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="text-primary" size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Custom Quote</h3>
            <p className="text-sm text-muted-foreground">Start from scratch and pick exactly what you need</p>
          </CardContent>
        </Card>

        {Object.values(PACKAGES).map((pkg) => (
          <Card
            key={pkg.id}
            className={`cursor-pointer transition-all hover:border-primary/50 ${quoteType === pkg.id ? "border-primary ring-2 ring-primary/20" : ""}`}
            onClick={() => handleQuoteTypeSelect(pkg.id as "launch" | "growth" | "automation")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <pkg.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-1">{pkg.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{pkg.tagline}</p>
              <p className="text-sm font-bold text-primary">${pkg.setup} setup + ${pkg.monthly}/mo</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {quoteType && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            {quoteType === "custom" 
              ? "You'll select individual services in the following steps"
              : `Services from ${PACKAGES[quoteType].name} will be pre-selected. You can add or remove items.`}
          </p>
        </div>
      )}
    </div>
  );

  // Steps 2-6: Service Selection by Category
  const renderServiceStep = (stepIndex: number) => {
    const category = getCategoryServices(stepIndex);
    if (!category) return null;

    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{category.name}</h2>
          <p className="text-muted-foreground">Select the services you need</p>
        </div>

        <div className="space-y-4">
          {category.services.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <Card
                key={service.id}
                className={`transition-all ${isSelected ? "border-primary bg-primary/5" : "hover:border-border/80"}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Checkbox
                      id={service.id}
                      checked={isSelected}
                      onCheckedChange={() => toggleService(service.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <Label htmlFor={service.id} className="text-base font-semibold cursor-pointer">
                          {service.name}
                        </Label>
                        <span className="text-lg font-bold text-primary">
                          ${service.price}{service.recurring ? "/mo" : ""}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                      
                      {isSelected && !service.recurring && (
                        <div className="mt-3 flex items-center gap-4">
                          <span className="text-xs text-muted-foreground">Billing:</span>
                          <RadioGroup
                            value={billingType[service.id] || "one-time"}
                            onValueChange={(value) => setBillingType(prev => ({ ...prev, [service.id]: value as "one-time" | "recurring" }))}
                            className="flex gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="one-time" id={`${service.id}-onetime`} />
                              <Label htmlFor={`${service.id}-onetime`} className="text-xs font-normal">One-Time</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="recurring" id={`${service.id}-recurring`} />
                              <Label htmlFor={`${service.id}-recurring`} className="text-xs font-normal">Recurring</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  // Step 7: Review & Contact
  const renderReviewStep = () => {
    const totals = calculateTotal();
    const selectedServiceDetails = selectedServices.map(id => getServiceById(id)).filter(Boolean);

    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Review Your Quote</h2>
          <p className="text-muted-foreground">Confirm your selections and provide contact details</p>
        </div>

        {/* Order Summary */}
        <Card className="bg-card/50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-3 mb-6">
              {selectedServiceDetails.map((service) => service && (
                <div key={service.id} className="flex justify-between items-center text-sm">
                  <span className="text-foreground">{service.name}</span>
                  <span className="font-medium text-primary">
                    ${service.price}{(service.recurring || billingType[service.id] === "recurring") ? "/mo" : ""}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold">One-Time Total:</span>
                <span className="text-xl font-bold text-primary">${totals.oneTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Monthly Total:</span>
                <span className="text-xl font-bold text-primary">${totals.monthly}/mo</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        {!isLoggedIn && (
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={contactInfo.fullName}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, fullName: e.target.value }))}
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    value={contactInfo.businessName}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, businessName: e.target.value }))}
                    placeholder="Your business name"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {isLoggedIn && (
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4">
              <p className="text-sm text-foreground">
                <CheckCircle2 className="inline w-4 h-4 mr-2 text-primary" />
                Logged in as <strong>{contactInfo.email}</strong>. Your contact details are pre-filled.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  // Step 8: Schedule Consultation (Calendly)
  const renderScheduleStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-primary" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Quote Submitted!</h2>
        <p className="text-muted-foreground mb-6">
          Schedule a free consultation to discuss your project
        </p>
      </div>

      {/* Calendly Embed Placeholder */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-secondary/50 p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
            <Calendar className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Book Your Consultation</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              Choose a time that works for you. We'll discuss your project requirements and finalize your quote.
            </p>
            {/* Calendly inline widget - replace CALENDLY_URL with actual URL */}
            <div 
              className="calendly-inline-widget w-full" 
              data-url="https://calendly.com/kyair-consulting/consultation"
              style={{ minWidth: '320px', height: '400px' }}
            />
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            
            <Button variant="gradient" size="lg" className="mt-4" asChild>
              <a href="https://calendly.com/kyair-consulting/consultation" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2" size={18} />
                Schedule Consultation
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button variant="outline" onClick={() => {
          setCurrentStep(1);
          setQuoteType(null);
          setSelectedServices([]);
          setSubmitted(false);
        }}>
          Start New Quote
        </Button>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderQuoteTypeStep();
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return renderServiceStep(currentStep);
      case 7:
        return renderReviewStep();
      case 8:
        return renderScheduleStep();
      default:
        return renderQuoteTypeStep();
    }
  };

  const canProceed = () => {
    if (currentStep === 1) return quoteType !== null;
    if (currentStep === 7) return contactInfo.fullName && contactInfo.email;
    return true;
  };

  const handleNext = () => {
    if (currentStep === 7) {
      handleSubmitQuote();
    } else {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const totals = calculateTotal();

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      <SEO 
        title="Get a Free AI Consulting Quote | Kyair Consulting"
        description="Build your custom quote for AI consulting, workflow automation, web development, and IT support services. Get instant pricing from Kyair Consulting."
        canonical="/quote"
        jsonLd={[quotePageSchema]}
      />
      <AnimatedBackground />
      <main>
      <section className="px-3 sm:px-4 py-8 sm:py-12">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Build Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Custom Quote
              </span>
            </h1>
            <p className="text-muted-foreground">
              Select services and get instant pricing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            {/* Main Content Column */}
            <div>
              {/* Progress Bar */}
              {currentStep < 8 && (
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Step {currentStep} of {STEPS.length - 1}</span>
                    <span className="text-sm text-muted-foreground">{STEPS[currentStep - 1]?.name}</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                  
                  {/* Step indicators */}
                  <div className="flex justify-between mt-4 overflow-x-auto pb-2">
                    {STEPS.slice(0, -1).map((step) => (
                      <button
                        key={step.id}
                        onClick={() => step.id <= currentStep && setCurrentStep(step.id)}
                        disabled={step.id > currentStep}
                        className={`flex flex-col items-center min-w-[60px] ${
                          step.id === currentStep
                            ? "text-primary"
                            : step.id < currentStep
                            ? "text-primary/60 cursor-pointer"
                            : "text-muted-foreground/40"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold mb-1 transition-colors ${
                            step.id === currentStep
                              ? "bg-primary text-primary-foreground"
                              : step.id < currentStep
                              ? "bg-primary/20 text-primary"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {step.id < currentStep ? <CheckCircle2 size={16} /> : step.id}
                        </div>
                        <span className="text-xs hidden sm:block">{step.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Running Total - Mobile Only */}
              {currentStep > 1 && currentStep < 8 && (
                <Card className="mb-6 bg-gradient-primary/10 border-primary/20 lg:hidden">
                  <CardContent className="p-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <CreditCard className="text-primary" size={20} />
                      <span className="font-medium">Running Total:</span>
                    </div>
                    <div className="flex gap-4 text-sm sm:text-base">
                      <span><strong className="text-primary">${totals.oneTime}</strong> one-time</span>
                      <span><strong className="text-primary">${totals.monthly}</strong>/month</span>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Main Content Card */}
              <Card className="animate-slide-up shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  {renderCurrentStep()}

                  {/* Navigation Buttons */}
                  {currentStep < 8 && (
                    <div className="flex justify-between mt-8 pt-6 border-t border-border">
                      <Button
                        variant="outline"
                        onClick={handleBack}
                        disabled={currentStep === 1}
                      >
                        <ArrowLeft className="mr-2" size={16} />
                        Back
                      </Button>
                      <Button
                        variant="gradient"
                        onClick={handleNext}
                        disabled={!canProceed()}
                      >
                        {currentStep === 7 ? (
                          <>
                            Submit Quote
                            <CheckCircle2 className="ml-2" size={16} />
                          </>
                        ) : (
                          <>
                            Next
                            <ArrowRight className="ml-2" size={16} />
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sticky Sidebar - Consultation CTA */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <Card className="bg-gradient-primary/10 border-primary/20 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Calendar className="mx-auto text-primary mb-4" size={40} />
                    <h3 className="text-lg font-semibold mb-2">Need Help Deciding?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Schedule a free 15-minute consultation to discuss your project needs.
                    </p>
                    <Button variant="gradient" className="w-full" asChild>
                      <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2" size={18} />
                        Book Free Call
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">No obligation • Quick response</p>
                  </CardContent>
                </Card>

                {/* Running Total in Sidebar */}
                {currentStep > 1 && currentStep < 8 && (
                  <Card className="mt-4 bg-card/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CreditCard className="text-primary" size={18} />
                        Your Quote
                      </h4>
                      {quoteType && quoteType !== "custom" && (
                        <p className="text-xs text-muted-foreground mb-2">
                          {PACKAGES[quoteType].name}
                        </p>
                      )}
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">One-time:</span>
                          <span className="font-bold text-primary">${totals.oneTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monthly:</span>
                          <span className="font-bold text-primary">${totals.monthly}/mo</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default Quote;
