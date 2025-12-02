import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import projectTrapmachine from "@/assets/project-trapmachine.jpg";
import projectFaris from "@/assets/project-faris.jpg";
import projectTfay from "@/assets/project-tfay.jpg";
import projectMurray from "@/assets/project-murray.jpg";
import projectAiChat from "@/assets/project-ai-chat.jpg";
import projectAutomation from "@/assets/project-automation.jpg";
import projectNoonans from "@/assets/project-noonans.jpg";
const Projects = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-10 px-3 sm:pt-24 sm:pb-12 md:pt-32 md:pb-20 sm:px-4">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight px-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI-Powered Projects
              </span>{" "}
              & Web Experiences
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Real examples of how Kyair Consulting helps small businesses, creators, and brands 
              unlock growth with AI, automation, and high-impact websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
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

      {/* Stats Section */}
      <section className="py-6 sm:py-8 px-3 sm:px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="text-center text-xs sm:text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">7</span> projects • 
            AI & automation focused • 
            Serving small businesses and creators
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-20 px-2 sm:px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            
            {/* Project 1 - TrapMachine35 */}
            <Card className="hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-card">
                <img src={projectTrapmachine} alt="TrapMachine35 Automotive Content Brand Site" className="absolute inset-0 w-full h-full object-cover block z-10 opacity-100" />
              </div>
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <div className="text-xs sm:text-sm text-primary font-medium mb-1 sm:mb-2">TrapMachine35</div>
                <CardTitle className="text-base sm:text-lg md:text-xl leading-tight">Automotive Content Brand Site</CardTitle>
                <CardDescription className="line-clamp-2 md:line-clamp-3 text-xs sm:text-sm">
                  Built a high-energy, mobile-optimized site for an automotive content creator, integrating social media, lead capture, and a gallery for builds and collaborations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 md:space-y-4 p-3 sm:p-4 md:p-6 pt-0">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Web Design</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Branding</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Creator</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">SEO</Badge>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="w-full group/btn text-xs sm:text-sm h-8 sm:h-9">
                    View Case Study
                    <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                  <a href="https://trapmachine35.xyz" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full text-xs sm:text-sm h-8 sm:h-9">
                      Visit Project
                      <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 - Faris Athletics */}
            <Card className="hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-card">
                <img src={projectFaris} alt="Faris Athletics Fitness Coaching Landing Page" className="absolute inset-0 w-full h-full object-cover block z-10 opacity-100" />
              </div>
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <div className="text-xs sm:text-sm text-primary font-medium mb-1 sm:mb-2">Faris Athletics</div>
                <CardTitle className="text-base sm:text-lg md:text-xl leading-tight">Fitness Coaching Landing Page</CardTitle>
                <CardDescription className="line-clamp-2 md:line-clamp-3 text-xs sm:text-sm">
                  Designed a conversion-focused landing page for a fitness coach with clear service packages, testimonials, and an intake form integrated with email automation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 md:space-y-4 p-3 sm:p-4 md:p-6 pt-0">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Web Design</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Marketing Funnels</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Coaching</Badge>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="w-full group/btn text-xs sm:text-sm h-8 sm:h-9">
                    View Case Study
                    <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                  <a href="https://farisfitnessathletics.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full text-xs sm:text-sm h-8 sm:h-9">
                      Visit Project
                      <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 - TFAY Autoworks */}
            <Card className="hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-card">
                <img src={projectTfay} alt="TFAY Autoworks Performance Shop Presence" className="absolute inset-0 w-full h-full object-cover block z-10 opacity-100" />
              </div>
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <div className="text-xs sm:text-sm text-primary font-medium mb-1 sm:mb-2">TFAY Autoworks</div>
                <CardTitle className="text-base sm:text-lg md:text-xl leading-tight">Performance Shop Presence</CardTitle>
                <CardDescription className="line-clamp-2 md:line-clamp-3 text-xs sm:text-sm">
                  Created a modern, performance-oriented website for a tuning shop showcasing services, before-and-after galleries, and online appointment requests.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 md:space-y-4 p-3 sm:p-4 md:p-6 pt-0">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Web Development</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Local Business</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Performance</Badge>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="w-full group/btn text-xs sm:text-sm h-8 sm:h-9">
                    View Case Study
                    <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                  <a href="https://tfayauto.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full text-xs sm:text-sm h-8 sm:h-9">
                      Visit Project
                      <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 - Murray the Snow Egret */}
            <Card className="hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-card">
                <img src={projectMurray} alt="Murray the Snow Egret Mascot Animation" className="absolute inset-0 w-full h-full object-cover block z-10 opacity-100" />
              </div>
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <div className="text-xs sm:text-sm text-primary font-medium mb-1 sm:mb-2">Meadowlands Chamber of Commerce</div>
                <CardTitle className="text-base sm:text-lg md:text-xl leading-tight">Murray the Snow Egret Mascot Animation</CardTitle>
                <CardDescription className="line-clamp-2 md:line-clamp-3 text-xs sm:text-sm">
                  Created an engaging animated mascot character for the Meadowlands Chamber of Commerce, bringing Murray the Snow Egret to life with personality and charm.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 md:space-y-4 p-3 sm:p-4 md:p-6 pt-0">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Animation</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Character Design</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Branding</Badge>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="w-full group/btn text-xs sm:text-sm h-8 sm:h-9">
                    View Case Study
                    <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 5 - Local Service Business */}
            <Card className="hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-card">
                <img src={projectAiChat} alt="Local Service Business AI Chat and Lead Capture" className="absolute inset-0 w-full h-full object-cover block z-10 opacity-100" />
              </div>
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <div className="text-xs sm:text-sm text-primary font-medium mb-1 sm:mb-2">Local Service Business</div>
                <CardTitle className="text-base sm:text-lg md:text-xl leading-tight">AI Chat & Lead Capture</CardTitle>
                <CardDescription className="line-clamp-2 md:line-clamp-3 text-xs sm:text-sm">
                  Implemented an AI-assisted FAQ/chat widget and automated lead intake forms that route inquiries to email and CRM, improving response speed and lead quality.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 md:space-y-4 p-3 sm:p-4 md:p-6 pt-0">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">AI Automation</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">No-Code</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Lead Gen</Badge>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="w-full group/btn text-xs sm:text-sm h-8 sm:h-9">
                    View Case Study
                    <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 6 - Professional Services */}
            <Card className="hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-card">
                <img src={projectAutomation} alt="Professional Services Internal Process Automation" className="absolute inset-0 w-full h-full object-cover block z-10 opacity-100" />
              </div>
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <div className="text-xs sm:text-sm text-primary font-medium mb-1 sm:mb-2">Professional Services</div>
                <CardTitle className="text-base sm:text-lg md:text-xl leading-tight">Internal Process Automation</CardTitle>
                <CardDescription className="line-clamp-2 md:line-clamp-3 text-xs sm:text-sm">
                  Built simple dashboards and automations to streamline onboarding tasks, document handling, and internal communication using AI and low-code tools.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 md:space-y-4 p-3 sm:p-4 md:p-6 pt-0">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Automation</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">AI Workflows</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Operations</Badge>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="w-full group/btn text-xs sm:text-sm h-8 sm:h-9">
                    View Case Study
                    <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 7 - Noonan's Bar and Grill */}
            <Card className="hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-card">
                <img src={projectNoonans} alt="Noonan's Bar and Grill Restaurant Landing Page" className="absolute inset-0 w-full h-full object-cover block z-10 opacity-100" />
              </div>
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <div className="text-xs sm:text-sm text-primary font-medium mb-1 sm:mb-2">Noonan's Bar and Grill</div>
                <CardTitle className="text-base sm:text-lg md:text-xl leading-tight">Restaurant Landing Page</CardTitle>
                <CardDescription className="line-clamp-2 md:line-clamp-3 text-xs sm:text-sm">
                  Designed an inviting landing page for a local bar and grill, featuring menu highlights, location info, and a warm atmosphere that reflects the restaurant's character.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 md:space-y-4 p-3 sm:p-4 md:p-6 pt-0">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Web Design</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Restaurant</Badge>
                  <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Local Business</Badge>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="w-full group/btn text-xs sm:text-sm h-8 sm:h-9">
                    View Case Study
                    <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                  <a href="https://tfnoonans.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full text-xs sm:text-sm h-8 sm:h-9">
                      Visit Project
                      <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Case Study Template Section */}
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
      <section className="py-12 sm:py-20 px-3 sm:px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures your project is delivered on time, on budget, and exceeds expectations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 - Discover */}
            <div className="relative text-center animate-fade-in">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground text-2xl font-bold">
                  01
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Discover</h3>
              <p className="text-muted-foreground">We learn your business, goals, and pain points through collaborative discovery sessions.</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
            </div>

            {/* Step 2 - Design & Build */}
            <div className="relative text-center animate-fade-in">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground text-2xl font-bold">
                  02
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Design & Build</h3>
              <p className="text-muted-foreground">We design an AI-supported solution, build your site or automation, and iterate with your feedback.</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
            </div>

            {/* Step 3 - Launch & Support */}
            <div className="relative text-center animate-fade-in">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground text-2xl font-bold">
                  03
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Launch & Support</h3>
              <p className="text-muted-foreground">We help you launch, measure results, and refine over time for continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses we've helped transform with AI and web solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="animate-fade-in">
              <CardContent className="p-6 space-y-4">
                <div className="text-4xl text-primary/20">"</div>
                <p className="text-muted-foreground italic leading-relaxed">
                  Kyair Consulting helped us turn a basic idea into a polished online presence. The process was collaborative, and the final site has already started bringing in more leads.
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold">Alex Martinez</div>
                  <div className="text-sm text-muted-foreground">TrapMachine35</div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="animate-fade-in">
              <CardContent className="p-6 space-y-4">
                <div className="text-4xl text-primary/20">"</div>
                <p className="text-muted-foreground italic leading-relaxed">
                  The AI automation tools they built for us have cut our response time in half. Our customers are happier and we're closing more deals.
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold">Jordan Lee</div>
                  <div className="text-sm text-muted-foreground">Local Service Provider</div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="animate-fade-in">
              <CardContent className="p-6 space-y-4">
                <div className="text-4xl text-primary/20">"</div>
                <p className="text-muted-foreground italic leading-relaxed">
                  From concept to launch, Kyair made the whole process smooth. They understood our vision and delivered a site that truly represents our brand.
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold">Taylor Faris</div>
                  <div className="text-sm text-muted-foreground">Faris Athletics</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4"> 
        <div className="container mx-auto"> 
          <div className="max-w-4xl mx-auto text-center space-y-8 p-8 md:p-12 rounded-2xl bg-gradient-primary/10 border border-primary/20 animate-fade-in">
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
    </div>;
};
export default Projects;