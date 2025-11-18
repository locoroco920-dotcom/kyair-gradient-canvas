import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  businessName: z.string().optional(),
  websiteUrl: z.string().optional(),
  contactMethod: z.enum(["email", "phone", "either"]),
  businessStage: z.string().min(1, "Please select your business stage"),
  industry: z.string().min(1, "Please select your industry"),
  industryOther: z.string().optional(),
  interestedIn: z.array(z.string()).min(1, "Please select at least one service"),
  monthlyBudget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  projectDetails: z.string().min(10, "Please provide at least 10 characters"),
  heardAbout: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "You must agree to be contacted"),
});

type FormData = z.infer<typeof formSchema>;

const Quote = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      businessName: "",
      websiteUrl: "",
      contactMethod: "email",
      businessStage: "",
      industry: "",
      industryOther: "",
      interestedIn: [],
      monthlyBudget: "",
      timeline: "",
      projectDetails: "",
      heardAbout: "",
      consent: false,
    },
  });

  const serviceOptions = {
    packages: [
      { id: "launch", label: 'Launch Plan – "Look Legit Everywhere"' },
      { id: "growth", label: 'Growth Plan – "I Want Leads"' },
      { id: "automation", label: 'Automation Plan – "AI Ops Team"' },
      { id: "not-sure", label: "Not sure yet – help me choose a plan" },
    ],
    branding: [
      { id: "logo", label: "Logo design" },
      { id: "brand-kit", label: "Mini brand kit (logo + colors + fonts + templates)" },
    ],
    web: [
      { id: "new-website", label: "New website or full redesign" },
      { id: "extra-pages", label: "Extra website pages" },
      { id: "landing-page", label: "Landing / sales page for a specific offer" },
      { id: "social-setup", label: "Social media setup / refresh" },
      { id: "google-business", label: "Google Business Profile setup / optimization" },
      { id: "adsense", label: "Google AdSense setup" },
    ],
    ai: [
      { id: "ai-chatbot", label: "AI receptionist / chatbot (website)" },
      { id: "ai-multi", label: "AI receptionist (multi-channel: web + SMS / Messenger / WhatsApp)" },
      { id: "rss-social", label: "Blog/RSS → social auto-posting" },
      { id: "custom-workflows", label: "Custom workflows & automations (e.g., lead form → CRM + email + task)" },
    ],
    media: [
      { id: "promo-videos", label: "AI promo / ad videos" },
      { id: "explainer-video", label: 'AI explainer / "About us" video' },
      { id: "pitstop", label: "PitStop / custom data tools, web scrapers, dashboards" },
    ],
    support: [
      { id: "training", label: "Training / consulting sessions" },
      { id: "maintenance", label: "Ongoing maintenance & support" },
    ],
  };

  const handleServiceToggle = (serviceId: string) => {
    const newServices = selectedServices.includes(serviceId)
      ? selectedServices.filter((s) => s !== serviceId)
      : [...selectedServices, serviceId];
    setSelectedServices(newServices);
    form.setValue("interestedIn", newServices);
  };

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    
    // Here you would send the data to your backend/email service
    
    toast({
      title: "Quote Request Received!",
      description: "We'll review your details and send back a tailored quote and recommendations.",
    });
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
        <section className="px-3 sm:px-4 py-12 sm:py-20">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="animate-scale-in">
              <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 text-primary" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Thanks for Your Interest!
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                We'll review your details and send back a tailored quote and recommendations. If we have questions, we'll reach out at the email you provided.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Submit Another Quote
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      <section className="px-3 sm:px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Intro */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Get a Custom{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Kyair Quote
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Tell us about your business and what you need — we'll recommend a plan, add-ons, and send back a custom quote.
                </p>
              </div>

              {/* Trust Bullets */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">
                    Low setup fee + flat monthly pricing
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">
                    Every service available as a one-off
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">
                    We undercut typical agency retainers without cutting corners
                  </p>
                </div>
              </div>

              {/* Helper Text */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-sm text-foreground/80">
                    <strong>Not sure what you need?</strong> Select "Not sure yet" and we'll recommend the best plan plus add-ons based on your answers.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Form */}
            <Card className="animate-slide-up shadow-lg">
              <CardContent className="p-4 sm:p-6 lg:p-10">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Contact & Business Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold border-b pb-3 mb-4">Contact & Business Details</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        {...form.register("fullName")}
                        placeholder="Your full name"
                      />
                      {form.formState.errors.fullName && (
                        <p className="text-xs text-destructive">{form.formState.errors.fullName.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register("email")}
                        placeholder="your@email.com"
                      />
                      {form.formState.errors.email && (
                        <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        {...form.register("businessName")}
                        placeholder="Your business name (optional)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="websiteUrl">Current Website URL</Label>
                      <Input
                        id="websiteUrl"
                        {...form.register("websiteUrl")}
                        placeholder="https://yourbusiness.com (optional)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Contact Method <span className="text-destructive">*</span></Label>
                      <RadioGroup
                        onValueChange={(value) => form.setValue("contactMethod", value as any)}
                        defaultValue="email"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="contact-email" />
                          <Label htmlFor="contact-email" className="font-normal">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="contact-phone" />
                          <Label htmlFor="contact-phone" className="font-normal">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="either" id="contact-either" />
                          <Label htmlFor="contact-either" className="font-normal">Either is fine</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {/* Business Stage & Industry */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold border-b pb-3 mb-4">Business Stage & Industry</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="businessStage">
                        Where are you at right now? <span className="text-destructive">*</span>
                      </Label>
                      <Select onValueChange={(value) => form.setValue("businessStage", value)}>
                        <SelectTrigger id="businessStage">
                          <SelectValue placeholder="Select your stage..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="starting">I'm just getting started / no real online presence yet</SelectItem>
                          <SelectItem value="outdated">I have a basic site but it's outdated or messy</SelectItem>
                          <SelectItem value="decent">I have a decent setup but want better marketing & lead gen</SelectItem>
                          <SelectItem value="ai-focus">I'm mainly looking for AI, automation, or data tools</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.businessStage && (
                        <p className="text-xs text-destructive">{form.formState.errors.businessStage.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">
                        What industry are you in? <span className="text-destructive">*</span>
                      </Label>
                      <Select onValueChange={(value) => form.setValue("industry", value)}>
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Select your industry..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="content-creator">Content Creator / Influencer</SelectItem>
                          <SelectItem value="restaurant">Restaurant / Café / Bar</SelectItem>
                          <SelectItem value="fashion">Fashion / Retail / E-commerce</SelectItem>
                          <SelectItem value="local-services">Local Services (salon, trades, home services, etc.)</SelectItem>
                          <SelectItem value="professional">Professional Services (legal, accounting, consulting)</SelectItem>
                          <SelectItem value="healthcare">Healthcare / Wellness</SelectItem>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="education">Education / Coaching</SelectItem>
                          <SelectItem value="nonprofit">Non-profit / Community</SelectItem>
                          <SelectItem value="automotive">Automotive</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.industry && (
                        <p className="text-xs text-destructive">{form.formState.errors.industry.message}</p>
                      )}
                    </div>

                    {form.watch("industry") === "other" && (
                      <div className="space-y-2">
                        <Label htmlFor="industryOther">Tell us more</Label>
                        <Input
                          id="industryOther"
                          {...form.register("industryOther")}
                          placeholder="Describe your industry..."
                        />
                      </div>
                    )}
                  </div>

                  {/* What Are You Interested In? */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold border-b pb-3 mb-4">
                      What Are You Interested In? <span className="text-destructive">*</span>
                    </h3>
                    
                    {/* Packages */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Packages</h4>
                      <div className="space-y-2">
                        {serviceOptions.packages.map((service) => (
                          <div key={service.id} className="flex items-start space-x-2">
                            <Checkbox
                              id={service.id}
                              checked={selectedServices.includes(service.id)}
                              onCheckedChange={() => handleServiceToggle(service.id)}
                            />
                            <Label htmlFor={service.id} className="font-normal text-sm leading-tight cursor-pointer">
                              {service.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Branding & Visuals */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Branding & Visuals</h4>
                      <div className="space-y-2">
                        {serviceOptions.branding.map((service) => (
                          <div key={service.id} className="flex items-start space-x-2">
                            <Checkbox
                              id={service.id}
                              checked={selectedServices.includes(service.id)}
                              onCheckedChange={() => handleServiceToggle(service.id)}
                            />
                            <Label htmlFor={service.id} className="font-normal text-sm leading-tight cursor-pointer">
                              {service.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Web & Presence */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Web & Presence</h4>
                      <div className="space-y-2">
                        {serviceOptions.web.map((service) => (
                          <div key={service.id} className="flex items-start space-x-2">
                            <Checkbox
                              id={service.id}
                              checked={selectedServices.includes(service.id)}
                              onCheckedChange={() => handleServiceToggle(service.id)}
                            />
                            <Label htmlFor={service.id} className="font-normal text-sm leading-tight cursor-pointer">
                              {service.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI & Automation */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">AI & Automation</h4>
                      <div className="space-y-2">
                        {serviceOptions.ai.map((service) => (
                          <div key={service.id} className="flex items-start space-x-2">
                            <Checkbox
                              id={service.id}
                              checked={selectedServices.includes(service.id)}
                              onCheckedChange={() => handleServiceToggle(service.id)}
                            />
                            <Label htmlFor={service.id} className="font-normal text-sm leading-tight cursor-pointer">
                              {service.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Media & Data */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Media & Data</h4>
                      <div className="space-y-2">
                        {serviceOptions.media.map((service) => (
                          <div key={service.id} className="flex items-start space-x-2">
                            <Checkbox
                              id={service.id}
                              checked={selectedServices.includes(service.id)}
                              onCheckedChange={() => handleServiceToggle(service.id)}
                            />
                            <Label htmlFor={service.id} className="font-normal text-sm leading-tight cursor-pointer">
                              {service.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Training & Support */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Training & Support</h4>
                      <div className="space-y-2">
                        {serviceOptions.support.map((service) => (
                          <div key={service.id} className="flex items-start space-x-2">
                            <Checkbox
                              id={service.id}
                              checked={selectedServices.includes(service.id)}
                              onCheckedChange={() => handleServiceToggle(service.id)}
                            />
                            <Label htmlFor={service.id} className="font-normal text-sm leading-tight cursor-pointer">
                              {service.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {form.formState.errors.interestedIn && (
                      <p className="text-xs text-destructive">{form.formState.errors.interestedIn.message}</p>
                    )}
                  </div>

                  {/* Budget & Timeline */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold border-b pb-3 mb-4">Budget & Timeline</h3>
                    
                    <div className="space-y-2">
                      <Label>
                        What's your comfortable monthly budget for this work? <span className="text-destructive">*</span>
                      </Label>
                      <RadioGroup onValueChange={(value) => form.setValue("monthlyBudget", value)}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="lowest" id="budget-lowest" />
                          <Label htmlFor="budget-lowest" className="font-normal text-sm">I'm looking for the lowest-cost option</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="150" id="budget-150" />
                          <Label htmlFor="budget-150" className="font-normal text-sm">Up to $150/month</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="150-350" id="budget-350" />
                          <Label htmlFor="budget-350" className="font-normal text-sm">$150–$350/month</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="350-650" id="budget-650" />
                          <Label htmlFor="budget-650" className="font-normal text-sm">$350–$650/month</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="650-1000" id="budget-1000" />
                          <Label htmlFor="budget-1000" className="font-normal text-sm">$650–$1,000/month</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1000+" id="budget-plus" />
                          <Label htmlFor="budget-plus" className="font-normal text-sm">$1,000+/month</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="not-sure" id="budget-unsure" />
                          <Label htmlFor="budget-unsure" className="font-normal text-sm">Not sure yet</Label>
                        </div>
                      </RadioGroup>
                      {form.formState.errors.monthlyBudget && (
                        <p className="text-xs text-destructive">{form.formState.errors.monthlyBudget.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>
                        When would you like to get started? <span className="text-destructive">*</span>
                      </Label>
                      <RadioGroup onValueChange={(value) => form.setValue("timeline", value)}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="asap" id="timeline-asap" />
                          <Label htmlFor="timeline-asap" className="font-normal text-sm">ASAP (this month)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1-3" id="timeline-13" />
                          <Label htmlFor="timeline-13" className="font-normal text-sm">In the next 1–3 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3-6" id="timeline-36" />
                          <Label htmlFor="timeline-36" className="font-normal text-sm">In 3–6 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="exploring" id="timeline-exploring" />
                          <Label htmlFor="timeline-exploring" className="font-normal text-sm">I'm just exploring options</Label>
                        </div>
                      </RadioGroup>
                      {form.formState.errors.timeline && (
                        <p className="text-xs text-destructive">{form.formState.errors.timeline.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold border-b pb-3 mb-4">Project Details</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="projectDetails">
                        Tell us about your project and your dream outcome <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="projectDetails"
                        {...form.register("projectDetails")}
                        placeholder="Explain your business, what's working, what isn't, and what an ideal result looks like…"
                        rows={5}
                        className="resize-none"
                      />
                      {form.formState.errors.projectDetails && (
                        <p className="text-xs text-destructive">{form.formState.errors.projectDetails.message}</p>
                      )}
                    </div>
                  </div>

                  {/* How Did You Hear About Us? */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="heardAbout">How did you hear about us? (Optional)</Label>
                      <Input
                        id="heardAbout"
                        {...form.register("heardAbout")}
                        placeholder="TikTok, YouTube, Instagram, Referral, Google search, etc."
                      />
                    </div>
                  </div>

                  {/* Consent & Submit */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        onCheckedChange={(checked) => form.setValue("consent", checked as boolean)}
                      />
                      <Label htmlFor="consent" className="font-normal text-sm leading-tight cursor-pointer">
                        I'm okay with Kyair Consulting contacting me about this project. <span className="text-destructive">*</span>
                      </Label>
                    </div>
                    {form.formState.errors.consent && (
                      <p className="text-xs text-destructive">{form.formState.errors.consent.message}</p>
                    )}

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Request My Custom Quote
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
