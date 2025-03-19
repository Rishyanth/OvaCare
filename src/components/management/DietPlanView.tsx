import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DietPlan, Diagnosis } from "@/types";

interface DietPlanViewProps {
  dietPlan: DietPlan;
  diagnosis: Diagnosis;
}

export default function DietPlanView({
  dietPlan,
  diagnosis,
}: DietPlanViewProps) {
  const getDiagnosisTitle = () => {
    switch (diagnosis) {
      case "PCOS":
        return "PCOS-Friendly Diet Plan";
      case "PCOD":
        return "PCOD-Friendly Diet Plan";
      case "Healthy":
        return "Balanced Diet Plan";
      default:
        return "Personalized Diet Plan";
    }
  };

  const getDiagnosisDescription = () => {
    switch (diagnosis) {
      case "PCOS":
        return "Focus on foods that help manage insulin resistance and reduce inflammation.";
      case "PCOD":
        return "Emphasize foods that support hormonal balance and ovarian health.";
      case "Healthy":
        return "A balanced diet to maintain your overall reproductive health.";
      default:
        return "Nutritional recommendations based on your assessment.";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{getDiagnosisTitle()}</CardTitle>
          <CardDescription>{getDiagnosisDescription()}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="eat">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="eat">Foods to Include</TabsTrigger>
              <TabsTrigger value="avoid">Foods to Limit</TabsTrigger>
            </TabsList>

            <TabsContent value="eat" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dietPlan.foodsToEat.map((food, index) => (
                  <Card key={index} className="overflow-hidden">
                    {food.imageUrl && (
                      <div className="h-40 overflow-hidden">
                        <img
                          src={food.imageUrl}
                          alt={food.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{food.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground">
                        {food.benefits}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="avoid" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dietPlan.foodsToAvoid.map((food, index) => (
                  <Card key={index} className="overflow-hidden">
                    {food.imageUrl && (
                      <div className="h-40 overflow-hidden">
                        <img
                          src={food.imageUrl}
                          alt={food.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{food.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground">
                        {food.benefits}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sample Meal Plan</CardTitle>
          <CardDescription>
            A balanced daily meal schedule to help you get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Breakfast Options</h3>
              <ul className="space-y-2">
                {dietPlan.mealSchedule.breakfast.map((meal, index) => (
                  <li key={index} className="border-b pb-2">
                    <p className="font-medium">{meal.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {meal.benefits}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Lunch Options</h3>
              <ul className="space-y-2">
                {dietPlan.mealSchedule.lunch.map((meal, index) => (
                  <li key={index} className="border-b pb-2">
                    <p className="font-medium">{meal.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {meal.benefits}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Dinner Options</h3>
              <ul className="space-y-2">
                {dietPlan.mealSchedule.dinner.map((meal, index) => (
                  <li key={index} className="border-b pb-2">
                    <p className="font-medium">{meal.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {meal.benefits}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Healthy Snacks</h3>
              <ul className="space-y-2">
                {dietPlan.mealSchedule.snacks.map((meal, index) => (
                  <li key={index} className="border-b pb-2">
                    <p className="font-medium">{meal.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {meal.benefits}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
