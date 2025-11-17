import { Check, Sparkles, Rocket, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Packages = () => {

  const packages = [
    {
      icon: Sparkles,
      name: "Starter",
      tagline: "Basic AI & Advertising Consult",
      price: "Starting at $2,500",
      features: [
        "Initial AI readiness assessment",
        "Basic advertising strategy plan",
        "2 consulting sessions",
        "Technology recommendations",
        "Email support for 30 days",
      ],
    },
    {
      icon: Rocket,
      name: "Growth",
      tagline: "Implementation & Mid-Scale Rollout",
      price: "Starting at $7,500",
      features: [
        "AI tool implementation (up to 3 workflows)",
        "Multi-channel ad campaign management (3 months)",
        "Monthly performance analytics reports",
        "Dedicated account manager",
        "Priority support",
        "Quarterly strategy reviews",
      ],
      popular: true,
    },
    {
      icon: Building2,
      name: "Enterprise",
      tagline: "Custom AI + Multi-Channel Ad Management",
      price: "Custom Pricing",
      features: [
        "Customized AI development and integration",
        "Full-scale advertising account management",
        "Real-time analytics & bi-weekly optimization",
        "Dedicated team of specialists",
        "24/7 premium support",
        "Ongoing consulting & training",
      ],
    },
  ];


  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      {/* Packages Section */}
      <section className="px-3 sm:px-4 py-12 sm:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Choose Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Package</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Select the perfect plan for your business needs, or request a custom quote
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-20">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative animate-slide-up ${
                  pkg.popular ? "border-primary/50 shadow-lg md:scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <pkg.icon className="text-primary-foreground" size={28} />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl mb-2">{pkg.name}</CardTitle>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{pkg.tagline}</p>
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {pkg.price}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 sm:space-x-3">
                        <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-xs sm:text-sm text-muted-foreground leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={pkg.popular ? "gradient" : "outline"}
                    className="w-full mt-4 sm:mt-6 text-sm sm:text-base"
                    asChild
                  >
                    <a href="/quote">
                      {pkg.name === "Enterprise" ? "Contact Us" : "Get Quote"}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Packages;
