import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Design", "AI Automation", "Marketing Funnels", "Brand & Content"];

  const projects = [
    {
      id: 1,
      client: "TrapMachine35",
      title: "Automotive Content Brand Site",
      description: "Built a high-energy, mobile-optimized site for an automotive content creator, integrating social media, lead capture, and a gallery for builds and collaborations.",
      tags: ["Web Design", "Branding", "Creator", "SEO"],
      image: "/placeholder.svg",
      category: "Web Design"
    },
    {
      id: 2,
      client: "Faris Athletics",
      title: "Fitness Coaching Landing Page",
      description: "Designed a conversion-focused landing page for a fitness coach with clear service packages, testimonials, and an intake form integrated with email automation.",
      tags: ["Web Design", "Marketing Funnels", "Coaching"],
      image: "/placeholder.svg",
      category: "Marketing Funnels"
    },
    {
      id: 3,
      client: "TFAY Autoworks",
      title: "Performance Shop Presence",
      description: "Created a modern, performance-oriented website for a tuning shop showcasing services, before-and-after galleries, and online appointment requests.",
      tags: ["Web Development", "Local Business", "Performance"],
      image: "/placeholder.svg",
      category: "Web Design"
    },
    {
      id: 4,
      client: "Local Service Business",
      title: "AI Chat & Lead Capture",
      description: "Implemented an AI-assisted FAQ/chat widget and automated lead intake forms that route inquiries to email and CRM, improving response speed and lead quality.",
      tags: ["AI Automation", "No-Code", "Lead Gen"],
      image: "/placeholder.svg",
      category: "AI Automation"
    },
    {
      id: 5,
      client: "Professional Services",
      title: "Internal Process Automation",
      description: "Built simple dashboards and automations to streamline onboarding tasks, document handling, and internal communication using AI and low-code tools.",
      tags: ["Automation", "AI Workflows", "Operations"],
      image: "/placeholder.svg",
      category: "AI Automation"
    },
  ];

  const testimonials = [
    {
      quote: "Kyair Consulting helped us turn a basic idea into a polished online presence. The process was collaborative, and the final site has already started bringing in more leads.",
      author: "Alex Martinez",
      business: "TrapMachine35"
    },
    {
      quote: "The AI automation tools they built for us have cut our response time in half. Our customers are happier and we're closing more deals.",
      author: "Jordan Lee",
      business: "Local Service Provider"
    },
    {
      quote: "From concept to launch, Kyair made the whole process smooth. They understood our vision and delivered a site that truly represents our brand.",
      author: "Taylor Faris",
      business: "Faris Athletics"
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Discover",
      description: "We learn your business, goals, and pain points through collaborative discovery sessions."
    },
    {
      step: "02",
      title: "Design & Build",
      description: "We design an AI-supported solution, build your site or automation, and iterate with your feedback."
    },
    {
      step: "03",
      title: "Launch & Support",
      description: "We help you launch, measure results, and refine over time for continuous improvement."
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter || project.tags.includes(activeFilter));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI-Powered Projects
              </span>{" "}
              & Web Experiences
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real examples of how Kyair Consulting helps small businesses, creators, and brands 
              unlock growth with AI, automation, and high-impact websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="gradient" size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/packages">
                <Button variant="outline" size="lg">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Stats */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Stats */}
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredProjects.length}</span> projects • 
              AI & automation focused • 
              Serving small businesses and creators
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group hover:border-primary/50 transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>

                <CardHeader>
                  <div className="text-sm text-primary font-medium mb-2">{project.client}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="w-full group/btn">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Template Section (Example) */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12 animate-fade-in">
            <div className="text-center">
              <Badge className="mb-4">Featured Case Study</Badge>
              <h2 className="text-4xl font-bold mb-4">TrapMachine35 - Automotive Content Brand</h2>
              <p className="text-muted-foreground">Building a digital presence for a rising automotive creator</p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-background border border-border">
                <div className="text-sm text-muted-foreground mb-1">Industry</div>
                <div className="font-semibold">Automotive / Creator</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-background border border-border">
                <div className="text-sm text-muted-foreground mb-1">Services</div>
                <div className="font-semibold">Web Design, Branding, SEO</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-background border border-border">
                <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                <div className="font-semibold">4 Weeks</div>
              </div>
            </div>

            {/* The Challenge */}
            <div>
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                TrapMachine35 needed a professional online presence that matched the energy and quality of their 
                automotive content. As a growing creator, they required a platform that could showcase their work, 
                capture leads from potential sponsors and collaborators, and integrate seamlessly with their social media presence.
              </p>
            </div>

            {/* Our Approach */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Conducted brand discovery to understand the automotive culture and target audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Designed a high-energy, mobile-first website with bold visuals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Integrated social media feeds and lead capture forms for collaboration inquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Optimized for SEO and fast loading to maximize organic reach</span>
                </li>
              </ul>
            </div>

            {/* What We Built */}
            <div>
              <h3 className="text-2xl font-bold mb-4">What We Built</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-background border border-border">
                  <div className="font-semibold mb-2">Responsive Website</div>
                  <p className="text-sm text-muted-foreground">Mobile-optimized design with dynamic galleries</p>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border">
                  <div className="font-semibold mb-2">Lead Capture System</div>
                  <p className="text-sm text-muted-foreground">Integrated forms for sponsorship and collaboration inquiries</p>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border">
                  <div className="font-semibold mb-2">Social Integration</div>
                  <p className="text-sm text-muted-foreground">Live feeds from Instagram and YouTube</p>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border">
                  <div className="font-semibold mb-2">Brand Identity</div>
                  <p className="text-sm text-muted-foreground">Custom logo and visual style guide</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Results</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>50% increase</strong> in collaboration inquiries within first month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Professional presence</strong> that matches content quality and attracts sponsors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Seamless experience</strong> across mobile and desktop devices</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center p-8 rounded-lg bg-gradient-primary/10 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Want results like this?</h3>
              <Link to="/quote">
                <Button variant="gradient" size="lg">
                  Book a Free Discovery Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures your project is delivered on time, on budget, and exceeds expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {workProcess.map((process, index) => (
              <div 
                key={index}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground text-2xl font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
                
                {/* Connector Arrow */}
                {index < workProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses we've helped transform with AI and web solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl text-primary/20">"</div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl bg-gradient-primary/10 border border-primary/20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to start your own AI-powered project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your goals, and we'll help design a project that fits your budget and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="gradient" size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <a href="mailto:kyairconsulting@gmail.com">
                <Button variant="outline" size="lg">
                  Email kyairconsulting@gmail.com
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
