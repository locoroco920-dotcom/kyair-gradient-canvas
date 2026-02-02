import { Target, Lightbulb, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEO from "@/components/SEO";

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
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      <SEO 
        title="About Kyair Consulting | AI Consulting & Automation Experts in New Jersey"
        description="Learn about Kyair Consulting—New Jersey's AI consulting and automation firm helping businesses implement intelligent tools, streamline workflows, and scale efficiently."
        canonical="/about"
      />
      <AnimatedBackground />
      {/* Mission & Vision */}
      <section className="px-3 sm:px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Kyair Consulting
              </span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed px-2">
              At Kyair Consulting, we're committed to bridging advanced AI technology with creative
              advertising to deliver measurable business growth. Our mission is to empower
              businesses to leverage the full potential of artificial intelligence while executing
              impactful marketing strategies that drive real results.
            </p>
          </div>

          <Card className="mb-8 sm:mb-12 animate-slide-up">
            <CardContent className="p-5 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
      <section className="px-3 sm:px-4 py-12 sm:py-20 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Why Choose Kyair?</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              We combine technical excellence with creative strategy to deliver unmatched value
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
            {strengths.map((strength, index) => (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 sm:p-8 space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <strength.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">{strength.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Impact */}
      <section className="px-3 sm:px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-primary/20">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <CardContent className="relative z-10 p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
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
              <div className="text-center">
                <Link to="/projects">
                  <Button variant="gradient" size="lg" className="group">
                    View Our Projects
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
