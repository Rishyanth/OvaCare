import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DiagnosisResult,
  ManagementPlan as ManagementPlanType,
  VideoSuggestion,
} from "@/types";
import { getDietPlanByDiagnosis } from "@/data/dietPlans";
import { getExercisePlanByDiagnosis } from "@/data/exercisePlans";
import { getLifestyleRecommendationsByDiagnosis } from "@/data/lifestyleRecommendations";
import DietPlanView from "./DietPlanView";
import ExercisePlanView from "./ExercisePlanView";
import LifestyleRecommendationsView from "./LifestyleRecommendationsView";
import VideoSuggestionsView from "./VideoSuggestionsView";

export default function ManagementPlan() {
  const navigate = useNavigate();
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [plan, setPlan] = useState<ManagementPlanType | null>(null);

  useEffect(() => {
    const storedResult = localStorage.getItem("diagnosisResult");
    if (storedResult) {
      const parsedResult = JSON.parse(storedResult) as DiagnosisResult;
      setResult(parsedResult);

      // Generate management plan based on diagnosis
      const managementPlan: ManagementPlanType = {
        dietPlan: getDietPlanByDiagnosis(parsedResult.diagnosis),
        exercisePlan: getExercisePlanByDiagnosis(parsedResult.diagnosis),
        lifestyleRecommendations: getLifestyleRecommendationsByDiagnosis(
          parsedResult.diagnosis,
        ),
        // Video suggestions will be loaded dynamically in the VideoSuggestionsView component
        videoSuggestions: [],
      };

      setPlan(managementPlan);
    } else {
      // If no result is found, redirect to assessment
      navigate("/assessment");
    }
  }, [navigate]);

  if (!result || !plan) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p>Loading your personalized management plan...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Your Personalized Management Plan
          </h1>
          <p className="text-muted-foreground">
            {result.diagnosis === "Healthy"
              ? "Recommendations to maintain your reproductive health"
              : `Tailored recommendations to help manage your ${result.diagnosis}`}
          </p>
        </div>

        <Tabs defaultValue="diet" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="diet">Diet Plan</TabsTrigger>
            <TabsTrigger value="exercise">Exercise Plan</TabsTrigger>
            <TabsTrigger value="lifestyle">Lifestyle Tips</TabsTrigger>
            <TabsTrigger value="videos">Video Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="diet">
            <DietPlanView
              dietPlan={plan.dietPlan}
              diagnosis={result.diagnosis}
            />
          </TabsContent>

          <TabsContent value="exercise">
            <ExercisePlanView
              exercisePlan={plan.exercisePlan}
              diagnosis={result.diagnosis}
            />
          </TabsContent>

          <TabsContent value="lifestyle">
            <LifestyleRecommendationsView
              recommendations={plan.lifestyleRecommendations}
              diagnosis={result.diagnosis}
            />
          </TabsContent>

          <TabsContent value="videos">
            <VideoSuggestionsView diagnosis={result.diagnosis} />
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            onClick={() => navigate("/results")}
            className="mx-2"
          >
            Back to Results
          </Button>
          <Button onClick={() => navigate("/chat")} className="mx-2">
            Chat with AI Assistant
          </Button>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            These recommendations are personalized based on your assessment
            results. For the best outcomes, consult with a healthcare provider
            before making significant changes to your diet or exercise routine.
          </p>
        </div>
      </div>
    </div>
  );
}
