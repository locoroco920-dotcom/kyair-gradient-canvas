import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingQuoteButton from "@/components/FloatingQuoteButton";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Users, Award } from "lucide-react";

const About = () => {
  const strengths = [
    {
      icon: Lightbulb,
      title: "AI Expertise & Innovation",
      description: "Stay ahead with cutting-edge AI technologies and innovative solutions tailored to your business needs."
    },
    {
      icon: Target,
      title: "Advertising Impact",
      description: "Data-driven campaigns that deliver measurable results and maximize your marketing ROI."
    },
    {
      icon: Users,
      title: "Customized Solutions",
      description: "Every business is unique. We craft personalized strategies that align with your specific goals."
    },
    {
      icon: Award,
      title: "Results-Driven Approach",
      description: "We focus on outcomes that matter—growth, efficiency, and competitive advantage."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingQuoteButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="gradient-text">Kyair Consulting</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We bridge the gap between advanced artificial intelligence and creative advertising to deliver measurable business growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-surface-elevated">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To empower businesses with cutting-edge AI solutions and data-driven advertising strategies that create sustainable competitive advantages and drive exponential growth.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the leading force in transforming how businesses leverage artificial intelligence and digital advertising to achieve unprecedented success in an ever-evolving marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Kyair?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our core strengths set us apart in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center">
                    <strength.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{strength.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-surface-elevated">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">Innovation First</h3>
              <p className="text-muted-foreground text-lg">
                We stay at the forefront of AI and advertising technology, continuously exploring new ways to deliver value to our clients.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">Client Success</h3>
              <p className="text-muted-foreground text-lg">
                Your growth is our success. We're committed to delivering results that exceed expectations and drive real business impact.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">Transparency</h3>
              <p className="text-muted-foreground text-lg">
                Clear communication, honest reporting, and straightforward processes are the foundation of our client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
