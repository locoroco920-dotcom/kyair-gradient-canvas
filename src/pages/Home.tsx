import { Link } from "react-router-dom";
import { Brain, TrendingUp, BarChart3, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";

const Home = () => {
  const services = [{
    icon: Brain,
    title: "AI Integration",
    description: "Implement AI-driven solutions tailored to your operations for maximum efficiency."
  }, {
    icon: TrendingUp,
    title: "Ad Campaign Management",
    description: "Optimize multi-channel advertising campaigns for maximum ROI and growth."
  }, {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Leverage data-driven insights to make informed business decisions."
  }, {
    icon: Zap,
    title: "Automation",
    description: "Streamline workflows with intelligent automation solutions."
  }];
  const testimonials = [{
    quote: "Kyair's AI solutions boosted our marketing efficiency by 30%",
    author: "Sarah Johnson",
    role: "Marketing Director, TechCorp"
  }, {
    quote: "Their advertising strategies delivered a 150% increase in qualified leads",
    author: "Michael Chen",
    role: "CEO, GrowthLabs"
  }, {
    quote: "The custom AI implementation transformed our customer service operations",
    author: "Emily Rodriguez",
    role: "COO, ServicePro"
  }];
  return <div className="min-h-screen relative">
      <AnimatedBackground />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-12 px-3 sm:pt-32 sm:pb-20 sm:px-4">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Transforming Business with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Intelligence
              </span>{" "}
              & Advertising Impact
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Leverage cutting-edge AI solutions and data-driven advertising strategies to drive
              exponential growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Link to="/quote">
                <Button variant="gradient" size="lg" className="group">
                  Request a Custom Quote
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Our Core Services</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              Comprehensive AI and advertising solutions designed to accelerate your business growth
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => <Card key={index} className="group hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="text-primary-foreground" size={20} />
                  </div>
                  <h3 className="text-base sm:text-xl font-semibold leading-tight">{service.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-snug">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-sm sm:text-base text-muted-foreground px-2">Real results from real businesses</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="animate-fade-in" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-lg italic leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden border-primary/20">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <CardContent className="relative z-10 p-6 sm:p-8 text-center space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Ready to Elevate Your Business?</h2>
              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
                Let's discuss how AI and advanced advertising can transform your operations
              </p>
              <div className="flex justify-center pt-2">
                <Link to="/quote">
                  <Button variant="gradient" size="lg" className="group">
                    Get Your Custom Quote
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>;
};
export default Home;