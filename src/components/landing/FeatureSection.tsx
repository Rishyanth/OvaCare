import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, Utensils, MessageSquare } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title = "Feature Title",
  description = "Feature description goes here.",
}: FeatureCardProps) => {
  return (
    <Card className="bg-white h-full flex flex-col transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

interface FeatureSectionProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCardProps[];
}

const FeatureSection = ({
  title = "Key Features",
  subtitle = "OvaCare provides comprehensive tools to help you understand and manage PCOS/PCOD effectively.",
  features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Assessment",
      description:
        "Our intelligent system analyzes your symptoms and provides accurate detection of PCOS/PCOD conditions.",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Personalized Management Plans",
      description:
        "Receive customized diet and exercise recommendations tailored to your specific condition and needs.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Intelligent Support",
      description:
        "Get real-time guidance and answers to your questions through our responsive chatbot assistant.",
    },
  ],
}: FeatureSectionProps) => {
  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
