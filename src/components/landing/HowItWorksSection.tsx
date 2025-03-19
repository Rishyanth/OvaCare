import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const Step = ({
  number = 1,
  title = "Step Title",
  description = "Step description goes here",
  icon,
}: StepProps) => {
  return (
    <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {icon && <div className="flex-shrink-0 text-primary">{icon}</div>}
    </div>
  );
};

const HowItWorksSection = () => {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Complete the Symptom Assessment",
      description:
        "Answer questions about your symptoms, menstrual cycle, and health history to help our AI analyze your condition.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      number: 2,
      title: "Receive Your Personalized Results",
      description:
        "Our AI will analyze your responses and provide a detailed assessment of your condition with clear explanations.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      number: 3,
      title: "Access Your Management Plan",
      description:
        "Get a customized plan including diet recommendations, exercise routines, and lifestyle modifications tailored to your needs.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      number: 4,
      title: "Track Your Progress",
      description:
        "Monitor your symptoms and improvements over time, with guidance from our intelligent chatbot for ongoing support.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How OvaCare Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform makes it easy to assess, understand, and manage
            PCOS/PCOD with a simple step-by-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="group">
            Start Your Assessment
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Takes approximately 5 minutes to complete
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
