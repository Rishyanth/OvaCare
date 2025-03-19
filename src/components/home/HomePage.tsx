import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Activity,
  Utensils,
  HeartPulse,
} from "lucide-react";

export default function HomePage() {
  const features = [
    {
      title: "AI-Powered Assessment",
      description:
        "Complete a comprehensive symptom questionnaire to receive an AI-generated assessment of your reproductive health.",
      icon: <Activity className="h-10 w-10 text-primary" />,
      action: "/assessment",
      actionText: "Start Assessment",
    },
    {
      title: "Personalized Management Plans",
      description:
        "Get tailored diet, exercise, and lifestyle recommendations based on your specific condition and symptoms.",
      icon: <Utensils className="h-10 w-10 text-primary" />,
      action: "/management",
      actionText: "View Plans",
    },
    {
      title: "Intelligent Chat Support",
      description:
        "Chat with our AI assistant to get answers to your questions about PCOS, PCOD, and reproductive health.",
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
      action: "/chat",
      actionText: "Chat Now",
    },
  ];

  const testimonials = [
    {
      quote:
        "OvaCare helped me understand my PCOS symptoms and gave me practical steps to manage them. The personalized diet plan made a huge difference!",
      author: "Sarah T.",
      condition: "PCOS",
    },
    {
      quote:
        "After struggling with irregular periods for years, the assessment accurately identified my PCOD. The exercise recommendations were gentle yet effective.",
      author: "Mia K.",
      condition: "PCOD",
    },
    {
      quote:
        "Even though I don't have PCOS or PCOD, OvaCare provided valuable insights about maintaining my reproductive health. Highly recommend!",
      author: "Jennifer L.",
      condition: "Preventive Care",
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Take Control of Your Reproductive Health
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            OvaCare uses AI to detect PCOS/PCOD and provides personalized
            management plans to help you live your healthiest life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link to="/assessment">
                Start Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How OvaCare Helps You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={feature.action}>{feature.actionText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Complete Assessment</h3>
              <p className="text-muted-foreground">
                Answer questions about your symptoms and health history.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Receive Analysis</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your responses to identify potential conditions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Get Personalized Plan</h3>
              <p className="text-muted-foreground">
                Receive tailored diet, exercise, and lifestyle recommendations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Track & Improve</h3>
              <p className="text-muted-foreground">
                Monitor your progress and adjust your plan as needed.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/assessment">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.condition}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Start your assessment today and get personalized recommendations to
            improve your reproductive health.
          </p>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link to="/assessment">
              Start Free Assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
