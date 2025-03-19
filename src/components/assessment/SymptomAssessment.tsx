import { useState } from "react";
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
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  allQuestions,
  weightQuestions,
  menstrualQuestions,
  skinHairQuestions,
  moodEnergyQuestions,
  cystsQuestions,
} from "@/data/symptoms";
import { SymptomResponse } from "@/types";
import { analyzeSymptomsForDiagnosis } from "@/utils/diagnosisAlgorithm";

export default function SymptomAssessment() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState<SymptomResponse[]>([]);

  const sections = [
    { title: "Weight & Body Type", questions: weightQuestions, icon: "⚖️" },
    { title: "Menstrual Cycle", questions: menstrualQuestions, icon: "📅" },
    { title: "Skin & Hair", questions: skinHairQuestions, icon: "💇‍♀️" },
    { title: "Mood & Energy", questions: moodEnergyQuestions, icon: "😊" },
    { title: "Ovarian Cysts", questions: cystsQuestions, icon: "🔬" },
  ];

  const currentQuestions = sections[currentSection].questions;
  const progress = (currentSection / sections.length) * 100;

  const handleBooleanAnswer = (questionId: string, answer: boolean) => {
    const updatedResponses = [...responses];
    const existingIndex = updatedResponses.findIndex(
      (r) => r.id === questionId,
    );

    const question =
      allQuestions.find((q) => q.id === questionId)?.question || "";
    const category =
      allQuestions.find((q) => q.id === questionId)?.category || "weight";

    if (existingIndex >= 0) {
      updatedResponses[existingIndex] = {
        id: questionId,
        question,
        answer,
        category: category as any,
      };
    } else {
      updatedResponses.push({
        id: questionId,
        question,
        answer,
        category: category as any,
      });
    }

    setResponses(updatedResponses);
  };

  const handleSelectAnswer = (questionId: string, answer: string) => {
    const updatedResponses = [...responses];
    const existingIndex = updatedResponses.findIndex(
      (r) => r.id === questionId,
    );

    const question =
      allQuestions.find((q) => q.id === questionId)?.question || "";
    const category =
      allQuestions.find((q) => q.id === questionId)?.category || "weight";

    if (existingIndex >= 0) {
      updatedResponses[existingIndex] = {
        id: questionId,
        question,
        answer,
        category: category as any,
      };
    } else {
      updatedResponses.push({
        id: questionId,
        question,
        answer,
        category: category as any,
      });
    }

    setResponses(updatedResponses);
  };

  const getResponseForQuestion = (questionId: string) => {
    return responses.find((r) => r.id === questionId)?.answer;
  };

  const handleNext = () => {
    // Check if all questions in current section are answered
    const allAnswered = currentQuestions.every((q) =>
      responses.some((r) => r.id === q.id),
    );

    if (!allAnswered) {
      alert("Please answer all questions before proceeding.");
      return;
    }

    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    } else {
      // Process final submission
      const result = analyzeSymptomsForDiagnosis(responses);
      localStorage.setItem("diagnosisResult", JSON.stringify(result));
      navigate("/results");
    }
  };

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Symptom Assessment
        </h1>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{sections[currentSection].icon}</span>
              <div>
                <CardTitle>{sections[currentSection].title}</CardTitle>
                <CardDescription>
                  Please answer the following questions about your{" "}
                  {sections[currentSection].title.toLowerCase()} symptoms
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {currentQuestions.map((question) => (
                <div key={question.id} className="space-y-3">
                  <h3 className="font-medium">{question.question}</h3>

                  {question.type === "boolean" && (
                    <RadioGroup
                      value={getResponseForQuestion(question.id)?.toString()}
                      onValueChange={(value) =>
                        handleBooleanAnswer(question.id, value === "true")
                      }
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="true"
                          id={`${question.id}-yes`}
                        />
                        <label
                          htmlFor={`${question.id}-yes`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="false"
                          id={`${question.id}-no`}
                        />
                        <label
                          htmlFor={`${question.id}-no`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          No
                        </label>
                      </div>
                    </RadioGroup>
                  )}

                  {question.type === "select" && question.options && (
                    <Select
                      value={getResponseForQuestion(question.id)?.toString()}
                      onValueChange={(value) =>
                        handleSelectAnswer(question.id, value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {question.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentSection === 0}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {currentSection < sections.length - 1 ? "Next" : "Submit"}
            </Button>
          </CardFooter>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Your privacy is important to us. All your responses are confidential
            and will only be used to provide you with personalized
            recommendations.
          </p>
          <p className="mt-2">
            This assessment is not a substitute for professional medical advice.
            Please consult with a healthcare provider for a proper diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
}
