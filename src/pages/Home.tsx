import { Link } from "react-router-dom";
import { Brain, TrendingUp, BarChart3, Zap, ArrowRight, Monitor, Cog, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEO from "@/components/SEO";

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://kyairconsulting.com/",
  name: "AI Consulting, Automation & IT Support in New Jersey | Kyair Consulting",
  description:
    "Kyair Consulting provides AI consulting, workflow automation, intelligent integration, and IT support services in New Jersey.",
  url: "https://kyairconsulting.com/",
  isPartOf: {
    "@id": "https://kyairconsulting.com/#website",
  },
  about: {
    "@id": "https://kyairconsulting.com/#organization",
  },
  publisher: {
    "@id": "https://kyairconsulting.com/#organization",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI consulting and how can it help my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI consulting helps businesses identify opportunities to implement artificial intelligence solutions that automate processes, improve decision-making, and drive growth. Kyair Consulting analyzes your operations and recommends tailored AI tools and strategies to increase efficiency and reduce costs.",
      },
    },
    {
      "@type": "Question",
      name: "What AI automation services does Kyair Consulting offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kyair Consulting offers comprehensive AI automation services including workflow automation, intelligent process automation, AI-powered chatbots, automated data analysis, and custom AI integrations. We help businesses streamline operations and eliminate repetitive manual tasks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide IT support services in New Jersey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Kyair Consulting provides IT support and technical services throughout New Jersey. Our services include system implementation, technical troubleshooting, software integration, and ongoing IT maintenance to keep your business running smoothly.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI advertising optimization work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI advertising optimization uses machine learning algorithms to analyze campaign performance data, identify patterns, and automatically adjust targeting, bidding, and creative elements. This results in higher ROI, lower cost per acquisition, and more qualified leads for your business.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Kyair Consulting work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kyair Consulting works with businesses across multiple industries including automotive, healthcare, e-commerce, professional services, and manufacturing. Our AI solutions and automation services are customized to meet the unique needs of each industry.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to implement AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Implementation timelines vary based on project complexity. Simple AI automations can be deployed in 2-4 weeks, while comprehensive AI integrations may take 2-3 months. We provide detailed project timelines during our initial consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How much do AI consulting services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI consulting costs depend on project scope and complexity. Kyair Consulting offers flexible packages from project-based engagements to ongoing retainer arrangements. Contact us for a free consultation and custom quote tailored to your business needs.",
      },
    },
  ],
};

const services = [
  {
    icon: Brain,
    title: "AI Consulting Services",
    description:
      "Expert guidance on implementing AI solutions tailored to your business. We analyze operations and recommend tools that drive efficiency.",
  },
  {
    icon: Cog,
    title: "AI Automation & Integration",
    description:
      "Streamline workflows with intelligent automation. Integrate AI-powered tools that eliminate repetitive tasks and boost productivity.",
  },
  {
    icon: TrendingUp,
    title: "AI Advertising Optimization",
    description:
      "Maximize advertising ROI with AI-driven campaign management. Data-driven strategies that optimize targeting and performance.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Data Insights",
    description:
      "Transform raw data into actionable intelligence. AI analytics solutions for smarter, faster decisions.",
  },
  {
    icon: Monitor,
    title: "IT Support & Technical Services",
    description:
      "Comprehensive IT support for New Jersey businesses. System implementation, troubleshooting, and ongoing maintenance.",
  },
  {
    icon: Zap,
    title: "Business Workflow Automation",
    description:
      "Automate business processes to save time and reduce errors. Custom solutions adapted to your operational needs.",
  },
];

const testimonials = [
  {
    quote:
      "Kyair's AI consulting helped us automate our lead qualification process, boosting marketing efficiency by 30%.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
  },
  {
    quote:
      "Their AI advertising optimization strategies delivered a 150% increase in qualified leads while reducing ad spend.",
    author: "Michael Chen",
    role: "CEO, GrowthLabs",
  },
  {
    quote: "The custom AI integration transformed our customer service operations. Response times dropped by 60%.",
    author: "Emily Rodriguez",
    role: "COO, ServicePro",
  },
];

const stats = [
  {
    value: "30%+",
    label: "Efficiency Increase",
    description: "AI automation reduces manual work and boosts productivity.",
  },
  { value: "150%", label: "Lead Growth", description: "AI-optimized campaigns deliver more qualified leads." },
  { value: "60%", label: "Faster Response", description: "AI chatbots dramatically reduce response times." },
  { value: "100+", label: "Projects Completed", description: "Proven track record across New Jersey." },
];

const faqs = [
  {
    question: "What is AI consulting and how can it help my business?",
    answer:
      "AI consulting helps businesses identify opportunities to implement artificial intelligence solutions that automate processes, improve decision-making, and drive growth. At Kyair Consulting, we analyze your operations and recommend tailored AI tools and strategies to increase efficiency and reduce costs.",
  },
  {
    question: "What AI automation services does Kyair Consulting offer?",
    answer:
      "We offer comprehensive AI automation services including workflow automation, intelligent process automation, AI-powered chatbots, automated data analysis, and custom AI integrations. Our solutions help businesses streamline operations and eliminate repetitive manual tasks.",
  },
  {
    question: "Do you provide IT support services in New Jersey?",
    answer:
      "Yes, Kyair Consulting provides IT support and technical services throughout New Jersey. Our services include system implementation, technical troubleshooting, software integration, and ongoing IT maintenance to keep your business running smoothly.",
  },
  {
    question: "How does AI advertising optimization work?",
    answer:
      "AI advertising optimization uses machine learning algorithms to analyze campaign performance data, identify patterns, and automatically adjust targeting, bidding, and creative elements. This results in higher ROI, lower cost per acquisition, and more qualified leads.",
  },
  {
    question: "What industries does Kyair Consulting work with?",
    answer:
      "We work with businesses across multiple industries including automotive, healthcare, e-commerce, professional services, and manufacturing. Our AI solutions and automation services are customized to meet the unique needs of each industry.",
  },
  {
    question: "How long does it take to implement AI solutions?",
    answer:
      "Implementation timelines vary based on project complexity. Simple AI automations can be deployed in 2-4 weeks, while comprehensive AI integrations may take 2-3 months. We provide detailed project timelines during our initial consultation.",
  },
  {
    question: "How much do AI consulting services cost?",
    answer:
      "AI consulting costs depend on project scope and complexity. We offer flexible packages from project-based engagements to ongoing retainer arrangements. Contact us for a free consultation and custom quote tailored to your business needs.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <SEO
        title="AI Consulting, Automation & IT Support in New Jersey | Kyair Consulting"
        description="Kyair Consulting provides AI consulting, workflow automation, intelligent integration, and IT support services in New Jersey."
        canonical="/"
        jsonLd={[homePageSchema, faqSchema]}
      />
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 px-4 sm:pt-36 sm:pb-24">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              AI Consulting & Automation
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">for Business Growth</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We help businesses implement AI automation, integrate intelligent tools, and optimize performance using
              data‑driven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/quote">
                <Button variant="gradient" size="lg" className="group w-full sm:w-auto">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/about" aria-label="Learn more about Kyair Consulting">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4" id="services">
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">AI Consulting & Automation Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions designed to automate operations, optimize advertising, and accelerate growth.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                    <service.icon className="text-primary-foreground" size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Kyair Consulting?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Measurable results through AI-powered solutions tailored to your business.
            </p>
          </header>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <h3 className="font-semibold text-sm mb-1">{stat.label}</h3>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">Real results from businesses using our AI consulting services.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 space-y-4">
                  <MessageSquare className="text-primary" size={24} aria-hidden="true" />
                  <blockquote className="text-sm italic leading-relaxed">"{testimonial.quote}"</blockquote>
                  <footer>
                    <cite className="not-italic">
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </cite>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30" id="faq">
        <div className="container mx-auto max-w-3xl">
          <header className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about AI consulting, automation, and IT support.</p>
          </header>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-4"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <CardContent className="relative z-10 p-8 sm:p-12 text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Ready to Transform Your Business with AI?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Get a free consultation to discover how AI consulting and automation can accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link to="/quote">
                  <Button variant="gradient" size="lg" className="group w-full sm:w-auto">
                    Get Your Free Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
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
