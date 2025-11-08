import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const strengths = [
    {
      icon: Lightbulb,
      title: "AI Expertise & Innovation",
      description: "Deep knowledge of cutting-edge AI tools and emerging trends to keep your business ahead.",
    },
    {
      icon: TrendingUp,
      title: "Advertising Impact",
      description: "Proven strategies in digital marketing that deliver measurable ROI and growth.",
    },
    {
      icon: Target,
      title: "Customized Solutions",
      description: "Tailor-made strategies designed specifically for your unique business needs.",
    },
    {
      icon: Users,
      title: "Results-Driven Approach",
      description: "Focus on analytics and ROI to ensure every initiative drives real business value.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Mission & Vision */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Kyair Consulting
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Kyair Consulting, we're committed to bridging advanced AI technology with creative
              advertising to deliver measurable business growth. Our mission is to empower
              businesses to leverage the full potential of artificial intelligence while executing
              impactful marketing strategies that drive real results.
            </p>
          </div>

          <Card className="mb-12 animate-slide-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where businesses of all sizes can harness the power of AI to
                automate operations, enhance customer experiences, and make data-driven decisions.
                Combined with strategic advertising that resonates with target audiences, we help
                our clients achieve sustainable, scalable growth in an increasingly competitive
                digital landscape.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Kyair */}
      <section className="px-4 py-20 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Kyair?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical excellence with creative strategy to deliver unmatched value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {strengths.map((strength, index) => (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <strength.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold">{strength.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Impact */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-primary/20">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <CardContent className="relative z-10 p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <p className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    50+
                  </p>
                  <p className="text-muted-foreground">AI Solutions Delivered</p>
                </div>
                <div className="space-y-2">
                  <p className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    3
                  </p>
                  <p className="text-muted-foreground">Industries Transformed</p>
                </div>
                <div className="space-y-2">
                  <p className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    35%
                  </p>
                  <p className="text-muted-foreground">Average ROI Increase</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
