import { Check, Sparkles, Rocket, Zap, Palette, Globe, Bot, Video, Users, Coffee, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEO from "@/components/SEO";

const Packages = () => {

  const subscriptionPackages = [
    {
      icon: Sparkles,
      name: "Launch Plan",
      tagline: "Look Legit Everywhere",
      setup: "$300",
      monthly: "$150/mo",
      commitment: "12-month minimum",
      features: [
        "3–5 page brochure website",
        "Basic logo design + mini brand kit",
        "2 social media profiles setup",
        "Google Business Profile optimization",
        "Google Analytics & Search Console",
        "Hosting + security updates",
        "Light API integrations",
        "Up to 2 hours of updates per month",
      ],
      highlight: "97% of consumers search online to find local businesses"
    },
    {
      icon: Rocket,
      name: "Growth Plan",
      tagline: "I Want Leads",
      setup: "$500",
      monthly: "$350/mo",
      commitment: "12-month minimum",
      features: [
        "Everything in Launch, plus:",
        "Unlimited-page website with blog",
        "On-page SEO for core pages",
        "Basic AI automation",
        "AI FAQ chatbot (single channel)",
        "All major social platforms setup",
        "Custom high-impact ad creatives",
        "Additional custom landing page",
        "Advanced logo & brand kit",
        "Up to 5 hours of updates/month",
      ],
      popular: true,
      highlight: "Content marketing generates 3× as many leads at 62% less cost"
    },
    {
      icon: Zap,
      name: "Automation Plan",
      tagline: "AI Ops Team",
      setup: "$750",
      monthly: "$650/mo",
      commitment: "12-month minimum",
      features: [
        "Everything in Growth, plus:",
        "Multi-channel AI assistant",
        "Advanced custom AI workflows",
        "Fully tailored AI solutions",
        "AI content helper",
        "Up to 8 hours per month priority support",
      ],
      highlight: "Save 30% on customer support costs with AI chatbots"
    },
  ];

  const aLaCarteServices = [
    {
      category: "Branding",
      icon: Palette,
      services: [
        { name: "Logo Design", price: "from $300", description: "Custom-designed logo with concepts and revisions" },
        { name: "Mini Brand Kit", price: "from $750", description: "Logo, colors, fonts, 3-5 templates" },
      ]
    },
    {
      category: "Web & Online Presence",
      icon: Globe,
      services: [
        { name: "Extra Website Page", price: "from $200/page", description: "Additional pages beyond your plan" },
        { name: "Landing/Sales Page", price: "from $900", description: "High-conversion standalone page" },
        { name: "Additional Social Profile Setup", price: "$150 each", description: "Setup & optimize any platform" },
        { name: "Google Business Profile Setup", price: "$250", description: "Create and optimize your listing" },
        { name: "Google AdSense Setup", price: "$150", description: "Monetize your site with ads" },
      ]
    },
    {
      category: "AI & Automation",
      icon: Bot,
      services: [
        { name: "Blog/RSS to Social Automation", price: "from $300", description: "Auto-post new content to socials" },
        { name: "AI Receptionist (single channel)", price: "from $1,000", description: "Chatbot on one channel" },
        { name: "AI Receptionist (multi-channel)", price: "from $1,800", description: "Chatbot across multiple channels" },
        { name: "Custom Workflow/Automation", price: "from $1,200", description: "Automate your specific process" },
      ]
    },
    {
      category: "Media",
      icon: Video,
      services: [
        { name: "AI-Generated Promo Video (15-30s)", price: "$250 each", description: "Short social media video" },
        { name: "AI-Generated Explainer Video (45-60s)", price: "from $600", description: "Longer about/product video" },
      ]
    },
    {
      category: "Training & Support",
      icon: Users,
      services: [
        { name: "1-on-1 Training/Consulting", price: "$200/session", description: "60-90 min guidance (3 for $540)" },
        { name: "Ad-hoc Support", price: "$100/hour", description: "Pay-as-you-go help" },
      ]
    },
  ];

  const industryPackages = [
    {
      icon: Video,
      title: "Content Creators & Influencers",
      description: "Build your personal brand and streamline content distribution",
      features: [
        "Personal brand website & portfolio",
        "Social media integration & link hub",
        "Automated content posting",
        "AI assistant for fan questions",
        "Merch shop integration (optional)",
      ]
    },
    {
      icon: Coffee,
      title: "Restaurants & Cafes",
      description: "Attract more diners with appetizing online presence",
      features: [
        "Beautiful website with online menu",
        "Local SEO & Google Business optimization",
        "Social media buzz on food platforms",
        "Customer engagement AI chatbot",
        "Reviews management & digital ads",
      ]
    },
    {
      icon: ShoppingBag,
      title: "Fashion & Retail Brands",
      description: "Grow your brand's visibility and boost sales",
      features: [
        "Stylish e-commerce-ready website",
        "Visual branding & content templates",
        "Social media & influencer integration",
        "SEO & content marketing",
        "AI chat for sizing & recommendations",
      ]
    },
  ];


  return (
    <div className="min-h-screen pt-16 sm:pt-20 pb-12 sm:pb-20">
      <SEO 
        title="AI Consulting & Automation Packages | Kyair Consulting"
        description="Explore Kyair Consulting's affordable AI consulting, automation, and web development packages. Transparent pricing for businesses in New Jersey and beyond."
        canonical="/packages"
      />
      <AnimatedBackground />
      {/* Hero Section */}
      <section className="px-3 sm:px-4 py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Packages & Services</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Affordable, transparent pricing designed to give you more value than traditional agencies
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="px-3 sm:px-4 py-8 sm:py-12">
        <div className="container mx-auto max-w-4xl backdrop-blur-sm bg-background/20 rounded-2xl p-6 sm:p-8 border border-border/30">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">How We Work</h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
            <p>
              We believe in <strong>keeping costs low and value high</strong>. Every project starts with a small one-time setup fee to build and connect all your digital assets, followed by an affordable flat monthly rate for ongoing maintenance, tweaks, and improvements.
            </p>
            <p>
              All subscription plans come with a <strong>12-month minimum commitment</strong>, because building a strong online presence takes time. After 12 months, you're free to cancel or upgrade – no long-term lock-in.
            </p>
            <p>
              <strong>Flexible options:</strong> Prefer not to commit to a package? No problem – every service we offer can also be purchased <strong>à la carte</strong> as a one-off.
            </p>
            <p className="text-xs sm:text-sm italic border-l-2 border-primary pl-3 sm:pl-4">
              Did you know? Traditional marketing agencies often charge $2,500+ per month on retainer. Our mission is to provide the same essentials at a fraction of that cost.
            </p>
          </div>
        </div>
      </section>

      {/* Universal Subscription Packages */}
      <section className="px-3 sm:px-4 py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Universal Subscription <span className="bg-gradient-primary bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Three core packages covering most business needs. 12-month minimum, cancel or upgrade anytime after.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {subscriptionPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative animate-slide-up backdrop-blur-sm bg-background/30 border-border/50 ${
                  pkg.popular ? "border-primary/50 shadow-lg md:scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4 sm:pb-6 px-3 sm:px-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <pkg.icon className="text-primary-foreground" size={24} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl mb-1">{pkg.name}</CardTitle>
                  <p className="text-xs text-muted-foreground mb-2 sm:mb-3">{pkg.tagline}</p>
                  <div className="space-y-1">
                    <p className="text-xl sm:text-2xl font-bold text-primary">{pkg.setup} <span className="text-xs font-normal text-muted-foreground">setup</span></p>
                    <p className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">{pkg.monthly}</p>
                    <p className="text-xs text-muted-foreground">{pkg.commitment}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 px-3 sm:px-4">
                  <ul className="space-y-1.5 sm:space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="text-primary flex-shrink-0 mt-0.5" size={14} />
                        <span className="text-xs leading-snug text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.highlight && (
                    <div className="pt-2 sm:pt-3 mt-3 border-t border-border">
                      <p className="text-xs italic text-primary/80">💡 {pkg.highlight}</p>
                    </div>
                  )}
                  <Button
                    variant={pkg.popular ? "gradient" : "outline"}
                    className="w-full mt-3 sm:mt-4 text-xs sm:text-sm"
                    asChild
                  >
                    <a href={`/quote?package=${pkg.name.toLowerCase().replace(' plan', '')}`}>Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* À La Carte Services */}
      <section className="px-3 sm:px-4 py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              À La Carte <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Need just one service? Choose from our one-off options below.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {aLaCarteServices.map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-3 sm:px-4 backdrop-blur-sm bg-background/20">
                <AccordionTrigger className="hover:no-underline py-3 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <category.icon className="text-primary-foreground" size={18} />
                    </div>
                    <span className="text-sm sm:text-base font-semibold">{category.category}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-3 sm:pb-4">
                  <div className="space-y-3 sm:space-y-4">
                    {category.services.map((service, i) => (
                      <div key={i} className="flex justify-between items-start gap-3 pb-3 border-b border-border/50 last:border-0 last:pb-0">
                        <div className="flex-1">
                          <h4 className="text-xs sm:text-sm font-semibold mb-1">{service.name}</h4>
                          <p className="text-xs text-muted-foreground">{service.description}</p>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-primary whitespace-nowrap">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Tailored Industry Packages */}
      <section className="px-3 sm:px-4 py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Tailored <span className="bg-gradient-primary bg-clip-text text-transparent">Industry Packages</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Custom bundles designed for specific industries. We adapt to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {industryPackages.map((industry, index) => (
              <Card key={index} className="animate-slide-up backdrop-blur-sm bg-background/30 border-border/50" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-3 sm:pb-4 px-3 sm:px-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-2 sm:mb-3">
                    <industry.icon className="text-primary-foreground" size={22} />
                  </div>
                  <CardTitle className="text-base sm:text-lg mb-1 sm:mb-2">{industry.title}</CardTitle>
                  <CardDescription className="text-xs">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-3 sm:px-4">
                  <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    {industry.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="text-primary flex-shrink-0 mt-0.5" size={14} />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="backdrop-blur-sm bg-gradient-primary/10 border-primary/20">
            <CardContent className="p-4 sm:p-6 text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Other Industries – Custom Solutions</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                Real Estate, Healthcare, Education, Non-profits, and more. We love a challenge and can tailor packages for ANY industry.
              </p>
              <Button variant="gradient" size="sm" asChild>
                <a href="/quote">Request Custom Package</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-3 sm:px-4 py-12 sm:py-16">
        <div className="container mx-auto max-w-3xl text-center backdrop-blur-sm bg-background/20 rounded-2xl p-8 sm:p-12 border border-border/30">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            We're happy to provide a free consultation to help figure out the best path for your business. Let's chat about how we can grow your business without breaking the bank!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <a href="/quote">Get a Free Quote <ArrowRight className="ml-2" size={18} /></a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
