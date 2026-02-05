import { ArrowRight, Sparkles, Target, Zap, Users, TrendingUp, Building2, ShoppingCart, Heart, Briefcase, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEO from "@/components/SEO";

const About = () => {
  const services = [
    "AI Consulting & Strategy",
    "Workflow Automation",
    "AI Integration & Intelligent Tools",
    "Data-Driven Advertising Optimization",
    "Technical Support & Implementation",
  ];

  const strengths = [
    {
      icon: TrendingUp,
      title: "Expertise That Evolves",
      description: "We stay ahead of emerging AI trends so our clients stay ahead of the competition.",
    },
    {
      icon: Sparkles,
      title: "Precision + Creativity",
      description: "We combine engineering discipline with modern design principles to deliver clean, high-performance solutions.",
    },
    {
      icon: Target,
      title: "Tailored for Your Business",
      description: "Every engagement is custom—built around your industry, workflows, and goals.",
    },
    {
      icon: Zap,
      title: "Impact-Driven Execution",
      description: "We focus on clarity, efficiency, and long-term operational value.",
    },
  ];

  const industries = [
    { icon: Briefcase, name: "Professional Services" },
    { icon: ShoppingCart, name: "E-commerce" },
    { icon: Heart, name: "Healthcare" },
    { icon: Building2, name: "Local Small Businesses" },
    { icon: Monitor, name: "Tech & Digital Teams" },
  ];

  const faqs = [
    {
      question: "What is Kyair Consulting?",
      answer: "Kyair Consulting is an AI consulting and automation firm based in Bergen County, New Jersey, specializing in workflow automation, AI integration, and data-driven performance solutions.",
    },
    {
      question: "What services do you provide?",
      answer: "We offer AI consulting, workflow automation, smart integrations, analytics, and advertising performance optimization.",
    },
    {
      question: "Who do you work with?",
      answer: "We support small and mid-sized businesses, service organizations, e-commerce teams, and digital-forward companies across New Jersey.",
    },
  ];

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://kyairconsulting.com/about",
    "mainEntityOfPage": "https://kyairconsulting.com/about",
    "name": "About Kyair Consulting",
    "description": "Learn about Kyair Consulting—an AI consulting and automation firm in Bergen County, New Jersey, specializing in workflow automation, AI integration, and data-driven performance solutions.",
    "url": "https://kyairconsulting.com/about",
    "isPartOf": {
      "@id": "https://kyairconsulting.com/#website"
    },
    "publisher": {
      "@id": "https://kyairconsulting.com/#organization"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      <SEO 
        title="About Kyair Consulting | AI Consulting & Automation Experts in Bergen County, New Jersey"
        description="Learn about Kyair Consulting—Bergen County's AI consulting and automation firm helping New Jersey businesses streamline workflows, integrate intelligent tools, and scale with data-driven solutions."
        canonical="/about"
        ogType="website"
        jsonLd={[aboutPageSchema, faqSchema]}
      />
      <AnimatedBackground />
      <main>

      {/* Hero / Intro */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Kyair Consulting
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Kyair Consulting helps businesses unlock the practical power of AI. We design intelligent automation systems, modern integrations, and performance-driven advertising frameworks that help organizations operate smoother, faster, and smarter.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">
              Based in Bergen County, New Jersey, we partner with local and regional companies to simplify operations, enhance customer experiences, and build scalable systems powered by artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are + Mission */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <Card className="border-0 bg-transparent shadow-none animate-slide-up">
              <CardContent className="p-0">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Who We Are</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kyair Consulting is a modern AI consulting and automation firm dedicated to making advanced technology accessible, intuitive, and truly impactful. Our philosophy is simple: clarity, precision, and long-term value.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-transparent shadow-none animate-slide-up" style={{ animationDelay: "100ms" }}>
              <CardContent className="p-0">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To help businesses turn AI into a reliable, everyday advantage—removing complexity and replacing it with streamlined workflows, intelligent systems, and measurable performance gains.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We help New Jersey organizations reduce manual work, improve decision-making, and unlock higher efficiency at scale.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-full bg-card border border-border/50 text-sm sm:text-base font-medium hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Kyair */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Businesses Choose Kyair</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {strengths.map((strength, index) => (
              <Card
                key={index}
                className="group hover:border-primary/30 transition-all duration-300 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <strength.icon className="text-primary-foreground" size={22} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-primary/20">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <CardContent className="relative z-10 p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Impact</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-2">
                We help organizations modernize operations, streamline workflows, and accelerate growth through purposeful AI adoption.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Every system we build is engineered for stability, performance, and measurable improvement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who We Help */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who We Help</h2>
            <p className="text-muted-foreground">
              We support businesses across New Jersey in:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <industry.icon className="text-primary" size={20} />
                <span className="font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 overflow-hidden">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work With Us</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's build what's next together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/projects">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                    View Our Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
                <Link to="/quote">
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto group">
                    Get a Quote
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      </main>
    </div>
  );
};

export default About;
