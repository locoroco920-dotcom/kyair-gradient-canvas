import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, TrendingUp, Zap, CheckCircle, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingQuoteButton from "@/components/FloatingQuoteButton";

const Index = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Integration",
      description: "Seamlessly integrate cutting-edge AI solutions into your business operations for enhanced efficiency and innovation."
    },
    {
      icon: Target,
      title: "Ad Campaign Management",
      description: "Data-driven advertising strategies that maximize ROI and reach your target audience with precision."
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Transform raw data into actionable insights that drive strategic decision-making and growth."
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Streamline your marketing workflows with intelligent automation that saves time and increases impact."
    }
  ];

  const testimonials = [
    {
      quote: "Kyair's AI solutions boosted our marketing efficiency by 30% in just three months. Their expertise is unmatched.",
      author: "Sarah Johnson",
      role: "CMO, TechVentures"
    },
    {
      quote: "The ROI on our ad campaigns doubled after partnering with Kyair. They truly understand data-driven advertising.",
      author: "Michael Chen",
      role: "Marketing Director, GrowthCo"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingQuoteButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transforming Business with{" "}
              <span className="gradient-text">AI Intelligence</span> & Advertising Impact
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage cutting-edge AI solutions and data-driven advertising strategies to drive measurable growth and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/packages">
                <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity text-lg px-8">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 border-border hover:bg-surface-hover">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-surface-elevated">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground italic">"{testimonial.quote}"</p>
                  <div className="pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-blue))]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how AI and advanced advertising can transform your growth trajectory.
          </p>
          <Link to="/packages">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Get Your Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
