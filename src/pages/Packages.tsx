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
    <div className="min-h-screen pt-24 pb-20">
      {/* Packages Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Choose Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Package</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your business needs, or request a custom quote
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative animate-slide-up ${
                  pkg.popular ? "border-primary/50 shadow-lg scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="text-primary-foreground" size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.tagline}</p>
                  <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {pkg.price}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={pkg.popular ? "gradient" : "outline"}
                    className="w-full mt-6"
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
