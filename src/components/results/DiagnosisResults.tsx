import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DiagnosisResult } from "@/types";
import { ArrowRight, AlertTriangle, CheckCircle, Info } from "lucide-react";

export default function DiagnosisResults() {
  const navigate = useNavigate();
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  useEffect(() => {
    const storedResult = localStorage.getItem("diagnosisResult");
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      // If no result is found, redirect to assessment
      navigate("/assessment");
    }
  }, [navigate]);

  if (!result) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p>Loading results...</p>
      </div>
    );
  }

  const getDiagnosisColor = () => {
    switch (result.diagnosis) {
      case "PCOS":
        return "text-red-500";
      case "PCOD":
        return "text-amber-500";
      case "Healthy":
        return "text-green-500";
      default:
        return "text-primary";
    }
  };

  const getDiagnosisIcon = () => {
    switch (result.diagnosis) {
      case "PCOS":
        return <AlertTriangle className="h-12 w-12 text-red-500" />;
      case "PCOD":
        return <Info className="h-12 w-12 text-amber-500" />;
      case "Healthy":
        return <CheckCircle className="h-12 w-12 text-green-500" />;
      default:
        return null;
    }
  };

  const getDiagnosisDescription = () => {
    switch (result.diagnosis) {
      case "PCOS":
        return (
          <>
            <p>
              Based on your responses, our AI assessment indicates a potential
              for <strong>Polycystic Ovary Syndrome (PCOS)</strong>. PCOS is a
              hormonal disorder common among women of reproductive age that can
              affect your menstrual cycles, fertility, hormones, and appearance.
            </p>
            <p className="mt-4">Key factors in this assessment include:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Irregular menstrual cycles</li>
              <li>Signs of elevated androgens (male hormones)</li>
              <li>Potential metabolic issues</li>
            </ul>
          </>
        );
      case "PCOD":
        return (
          <>
            <p>
              Based on your responses, our AI assessment indicates a potential
              for <strong>Polycystic Ovarian Disease (PCOD)</strong>. PCOD is a
              condition where the ovaries develop multiple small cysts due to
              hormonal imbalances.
            </p>
            <p className="mt-4">Key factors in this assessment include:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Menstrual irregularities</li>
              <li>Potential ovarian cysts</li>
              <li>Hormonal fluctuations</li>
            </ul>
          </>
        );
      case "Healthy":
        return (
          <>
            <p>
              Based on your responses, our AI assessment indicates that your
              symptoms are not strongly suggestive of PCOS or PCOD. Your
              reproductive health appears to be within normal parameters.
            </p>
            <p className="mt-4">However, it's important to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Continue monitoring your symptoms</li>
              <li>Maintain a healthy lifestyle</li>
              <li>Have regular check-ups with your healthcare provider</li>
            </ul>
          </>
        );
      default:
        return (
          <p>
            Assessment complete. Please review your results with a healthcare
            professional.
          </p>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Your Assessment Results
        </h1>

        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">{getDiagnosisIcon()}</div>
            <CardTitle className={`text-2xl ${getDiagnosisColor()}`}>
              {result.diagnosis === "Healthy"
                ? "No Condition Detected"
                : `${result.diagnosis} Detected`}
            </CardTitle>
            <CardDescription>
              Assessment completed on{" "}
              {new Date(result.date).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Assessment Summary</h3>
              {getDiagnosisDescription()}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Confidence Level</h3>
              <div className="flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${getDiagnosisColor()}`}
                    style={{ width: `${result.confidence * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm">
                  {Math.round(result.confidence * 100)}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                This represents our AI's confidence in the assessment based on
                your responses.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={() => navigate("/assessment")}>
              Retake Assessment
            </Button>
            <Button onClick={() => navigate("/management")} className="gap-2">
              View Management Plan <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p className="font-medium">Important Disclaimer</p>
          <p>
            This assessment is for informational purposes only and does not
            constitute medical advice, diagnosis, or treatment. Always consult
            with a qualified healthcare provider for proper diagnosis and
            treatment of any condition.
          </p>
        </div>
      </div>
    </div>
  );
}
