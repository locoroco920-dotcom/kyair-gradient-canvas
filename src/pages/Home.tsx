import { Link } from "react-router-dom";
import { Brain, TrendingUp, BarChart3, Zap, ArrowRight, Monitor, Cog, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedBackground from "@/components/AnimatedBackground";

const Home = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Consulting Services",
      description: "Get expert guidance on implementing AI solutions tailored to your business. We analyze your operations and recommend the best AI tools to drive efficiency and growth."
    },
    {
      icon: Cog,
      title: "AI Automation & Integration",
      description: "Streamline workflows with intelligent automation. We integrate AI-powered tools that eliminate repetitive tasks and boost productivity across your organization."
    },
    {
      icon: TrendingUp,
      title: "AI Advertising Optimization",
      description: "Maximize your advertising ROI with AI-driven campaign management. Our data-driven strategies optimize targeting, bidding, and creative performance."
    },
    {
      icon: BarChart3,
      title: "Analytics & Data Insights",
      description: "Transform raw data into actionable business intelligence. Our AI analytics solutions help you make smarter, faster decisions based on real-time insights."
    },
    {
      icon: Monitor,
      title: "IT Support & Technical Services",
      description: "Comprehensive IT support for businesses in New Jersey. From system implementation to ongoing maintenance, we keep your technology running smoothly."
    },
    {
      icon: Zap,
      title: "Business Efficiency & Workflow Automation",
      description: "Automate your business processes to save time and reduce errors. Our custom automation solutions adapt to your unique operational needs."
    }
  ];

  const testimonials = [
    {
      quote: "Kyair's AI consulting helped us automate our lead qualification process, boosting our marketing efficiency by 30%.",
      author: "Sarah Johnson",
      role: "Marketing Director, TechCorp"
    },
    {
      quote: "Their AI advertising optimization strategies delivered a 150% increase in qualified leads while reducing our ad spend.",
      author: "Michael Chen",
      role: "CEO, GrowthLabs"
    },
    {
      quote: "The custom AI integration transformed our customer service operations. Response times dropped by 60%.",
      author: "Emily Rodriguez",
      role: "COO, ServicePro"
    }
  ];

  const faqs = [
    {
      question: "What is AI consulting and how can it help my business?",
      answer: "AI consulting helps businesses identify opportunities to implement artificial intelligence solutions that automate processes, improve decision-making, and drive growth. At Kyair Consulting, we analyze your operations and recommend tailored AI tools and strategies to increase efficiency and reduce costs."
    },
    {
      question: "What AI automation services does Kyair Consulting offer?",
      answer: "We offer comprehensive AI automation services including workflow automation, intelligent process automation, AI-powered chatbots, automated data analysis, and custom AI integrations. Our solutions help businesses streamline operations and eliminate repetitive manual tasks."
    },
    {
      question: "Do you provide IT support services in New Jersey?",
      answer: "Yes, Kyair Consulting provides IT support and technical services throughout New Jersey. Our services include system implementation, technical troubleshooting, software integration, and ongoing IT maintenance to keep your business running smoothly."
    },
    {
      question: "How does AI advertising optimization work?",
      answer: "AI advertising optimization uses machine learning algorithms to analyze campaign performance data, identify patterns, and automatically adjust targeting, bidding, and creative elements. This results in higher ROI, lower cost per acquisition, and more qualified leads."
    },
    {
      question: "What industries does Kyair Consulting work with?",
      answer: "We work with businesses across multiple industries including automotive, healthcare, e-commerce, professional services, and manufacturing. Our AI solutions and automation services are customized to meet the unique needs of each industry."
    },
    {
      question: "How long does it take to implement AI solutions?",
      answer: "Implementation timelines vary based on project complexity. Simple AI automations can be deployed in 2-4 weeks, while comprehensive AI integrations may take 2-3 months. We provide detailed project timelines during our initial consultation."
    },
    {
      question: "How much do AI consulting services cost?",
      answer: "AI consulting costs depend on project scope and complexity. We offer flexible packages from project-based engagements to ongoing retainer arrangements. Contact us for a free consultation and custom quote tailored to your business needs."
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-12 px-3 sm:pt-32 sm:pb-20 sm:px-4">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              AI Consulting & Automation Solutions for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Business Growth
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2 font-medium">
              We help businesses implement AI automation, integrate intelligent tools, and optimize advertising performance using data‑driven strategies.
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto px-2">
              Kyair Consulting is a leading AI consulting company in New Jersey. We specialize in AI integration services, workflow automation, and AI-powered marketing solutions that help businesses scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Link to="/quote">
                <Button variant="gradient" size="lg" className="group">
                  Get a Free AI Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn About Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4" id="services">
        <div className="container mx-auto">
          <header className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              AI Consulting & Automation Services
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              Comprehensive AI solutions designed to automate operations, optimize advertising, and accelerate business growth in New Jersey and beyond.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:border-primary/50 transition-all duration-300 animate-fade-in backdrop-blur-sm bg-background/30 border-border/50" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="text-primary-foreground" size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-base sm:text-xl font-semibold leading-tight">{service.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-snug">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kyair Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 backdrop-blur-sm bg-background/20">
        <div className="container mx-auto">
          <header className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Why Choose Kyair Consulting?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              We deliver measurable results through AI-powered solutions tailored to your business needs.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "30%+", label: "Average Efficiency Increase", description: "Our AI automation solutions help businesses reduce manual work and boost productivity." },
              { stat: "150%", label: "Lead Generation Growth", description: "AI-optimized advertising campaigns deliver more qualified leads at lower costs." },
              { stat: "60%", label: "Faster Response Times", description: "AI chatbots and automation reduce customer response times dramatically." },
              { stat: "100+", label: "Successful Projects", description: "Proven track record helping businesses across New Jersey and beyond." }
            ].map((item, index) => (
              <Card key={index} className="text-center backdrop-blur-sm bg-background/30 border-border/50">
                <CardContent className="p-6">
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">{item.stat}</p>
                  <h3 className="font-semibold text-sm sm:text-base mb-2">{item.label}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4">
        <div className="container mx-auto">
          <header className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-sm sm:text-base text-muted-foreground px-2">Real results from businesses using our AI consulting and automation services.</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="animate-fade-in backdrop-blur-sm bg-background/30 border-border/50" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <MessageSquare className="text-primary" size={24} aria-hidden="true" />
                  <blockquote className="text-sm sm:text-base italic leading-relaxed">"{testimonial.quote}"</blockquote>
                  <footer>
                    <cite className="not-italic">
                      <p className="font-semibold text-sm sm:text-base">{testimonial.author}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                    </cite>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for AEO */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 backdrop-blur-sm bg-background/20" id="faq">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground px-2">
              Get answers to common questions about AI consulting, automation services, and IT support.
            </p>
          </header>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="backdrop-blur-sm bg-background/30 border border-border/50 rounded-lg px-4"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden border-primary/20 backdrop-blur-sm bg-background/30">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <CardContent className="relative z-10 p-6 sm:p-8 text-center space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Get a free consultation to discover how AI consulting, automation, and intelligent advertising can accelerate your growth.
              </p>
              <ul className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground py-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> AI Consulting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Workflow Automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> IT Support NJ
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Ad Optimization
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link to="/quote">
                  <Button variant="gradient" size="lg" className="group">
                    Get Your Free AI Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
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

export default Home;
