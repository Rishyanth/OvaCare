import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "AI-Powered PCOS/PCOD Detection & Management",
  description = "Take control of your health with OvaCare's comprehensive platform that helps detect PCOS/PCOD through interactive symptom assessments and provides personalized management plans tailored to your needs.",
  ctaText = "Start Your Assessment",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-purple-900">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            {description}
          </p>
          <div className="pt-4">
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-full px-8 py-6 h-auto text-lg"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
              alt="Woman practicing wellness activities"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/70 to-transparent p-6">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-white font-medium">
                  AI-powered assessment available now
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3 bg-purple-50 p-3 rounded-lg">
              <div className="bg-purple-100 p-2 rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-purple-700"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-purple-900">
                  Personalized Plans
                </p>
                <p className="text-xs text-gray-600">
                  Tailored to your symptoms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
