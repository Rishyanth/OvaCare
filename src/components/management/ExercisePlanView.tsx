import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExercisePlan, Diagnosis } from "@/types";

interface ExercisePlanViewProps {
  exercisePlan: ExercisePlan;
  diagnosis: Diagnosis;
}

export default function ExercisePlanView({
  exercisePlan,
  diagnosis,
}: ExercisePlanViewProps) {
  const getDiagnosisTitle = () => {
    switch (diagnosis) {
      case "PCOS":
        return "PCOS-Friendly Exercise Plan";
      case "PCOD":
        return "PCOD-Friendly Exercise Plan";
      case "Healthy":
        return "General Fitness Plan";
      default:
        return "Personalized Exercise Plan";
    }
  };

  const getDiagnosisDescription = () => {
    switch (diagnosis) {
      case "PCOS":
        return "Focus on exercises that improve insulin sensitivity and reduce stress.";
      case "PCOD":
        return "Gentle exercises that support hormonal balance and reduce discomfort.";
      case "Healthy":
        return "A balanced exercise routine to maintain overall health and fitness.";
      default:
        return "Exercise recommendations based on your assessment.";
    }
  };

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{getDiagnosisTitle()}</CardTitle>
          <CardDescription>{getDiagnosisDescription()}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercisePlan.exercises.map((exercise, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={exercise.imageUrl}
                    alt={exercise.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{exercise.name}</CardTitle>
                  <CardDescription>
                    {exercise.duration} | {exercise.frequency}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">{exercise.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Exercise Schedule</CardTitle>
          <CardDescription>
            A balanced weekly routine to help you stay consistent
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="Monday" className="w-full">
            <TabsList className="flex flex-wrap mb-6">
              {weekdays.map((day) => (
                <TabsTrigger key={day} value={day} className="flex-1">
                  {day.substring(0, 3)}
                </TabsTrigger>
              ))}
            </TabsList>

            {weekdays.map((day) => (
              <TabsContent key={day} value={day} className="space-y-4">
                <h3 className="text-lg font-semibold">{day}'s Workout</h3>

                {exercisePlan.schedule[day]?.length > 0 ? (
                  <div className="space-y-4">
                    {exercisePlan.schedule[day].map((exercise, index) => (
                      <Card key={index}>
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 h-40 overflow-hidden">
                            <img
                              src={exercise.imageUrl}
                              alt={exercise.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4 md:w-3/4">
                            <h4 className="font-semibold text-lg">
                              {exercise.name}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {exercise.duration} | {exercise.frequency}
                            </p>
                            <p>{exercise.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p>Rest day or choose a light activity of your choice.</p>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <div className="text-sm text-muted-foreground mt-4">
        <p>
          Always start with a proper warm-up and end with a cool-down. Listen to
          your body and adjust intensity as needed. Consult with a healthcare
          provider before starting any new exercise program.
        </p>
      </div>
    </div>
  );
}
