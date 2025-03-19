import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LifestyleRecommendation, Diagnosis } from "@/types";
import * as LucideIcons from "lucide-react";

interface LifestyleRecommendationsViewProps {
  recommendations: LifestyleRecommendation[];
  diagnosis: Diagnosis;
}

export default function LifestyleRecommendationsView({
  recommendations,
  diagnosis,
}: LifestyleRecommendationsViewProps) {
  const getDiagnosisTitle = () => {
    switch (diagnosis) {
      case "PCOS":
        return "Lifestyle Recommendations for PCOS";
      case "PCOD":
        return "Lifestyle Recommendations for PCOD";
      case "Healthy":
        return "General Wellness Recommendations";
      default:
        return "Personalized Lifestyle Recommendations";
    }
  };

  const getDiagnosisDescription = () => {
    switch (diagnosis) {
      case "PCOS":
        return "Daily habits and practices to help manage PCOS symptoms and improve quality of life.";
      case "PCOD":
        return "Lifestyle adjustments to support ovarian health and reduce discomfort.";
      case "Healthy":
        return "Healthy habits to maintain your reproductive wellness and overall health.";
      default:
        return "Lifestyle recommendations based on your assessment.";
    }
  };

  // Dynamically get the icon component from lucide-react
  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="h-8 w-8 text-primary" />;
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{getDiagnosisTitle()}</CardTitle>
          <CardDescription>{getDiagnosisDescription()}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((recommendation, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4">
                  {getIconComponent(recommendation.icon)}
                  <CardTitle className="text-lg">
                    {recommendation.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{recommendation.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>
            Further information to support your health journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Educational Materials</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Understanding{" "}
                  {diagnosis === "Healthy" ? "Reproductive Health" : diagnosis}{" "}
                  - Comprehensive Guide
                </li>
                <li>Nutrition and Hormonal Health Connection</li>
                <li>Stress Management Techniques for Hormonal Balance</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Support Communities</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Online Support Groups for Women with{" "}
                  {diagnosis === "Healthy"
                    ? "Reproductive Health Concerns"
                    : diagnosis}
                </li>
                <li>Local Wellness Workshops and Events</li>
                <li>
                  Mental Health Resources for Chronic Condition Management
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Healthcare Resources</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Finding a Specialist in{" "}
                  {diagnosis === "Healthy" ? "Women's Health" : diagnosis}
                </li>
                <li>Questions to Ask Your Healthcare Provider</li>
                <li>Tracking Tools for Symptoms and Treatment Progress</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-muted-foreground mt-4">
        <p>
          These lifestyle recommendations are designed to complement medical
          treatment, not replace it. Always consult with healthcare
          professionals for personalized advice.
        </p>
      </div>
    </div>
  );
}
