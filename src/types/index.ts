export type Diagnosis = "PCOS" | "PCOD" | "Healthy";

export interface SymptomResponse {
  id: string;
  question: string;
  answer: string | boolean | number;
  category: "weight" | "menstrual" | "skin" | "mood" | "cysts";
}

export interface DiagnosisResult {
  diagnosis: Diagnosis;
  confidence: number;
  symptoms: SymptomResponse[];
  date: string;
}

export interface FoodItem {
  name: string;
  benefits: string;
  imageUrl?: string;
}

export interface MealPlan {
  breakfast: FoodItem[];
  lunch: FoodItem[];
  dinner: FoodItem[];
  snacks: FoodItem[];
}

export interface DietPlan {
  foodsToEat: FoodItem[];
  foodsToAvoid: FoodItem[];
  mealSchedule: MealPlan;
}

export interface Exercise {
  name: string;
  description: string;
  imageUrl: string;
  duration: string;
  frequency: string;
}

export interface ExercisePlan {
  exercises: Exercise[];
  schedule: {
    [key: string]: Exercise[];
  };
}

export interface LifestyleRecommendation {
  title: string;
  description: string;
  icon: string;
}

export interface VideoSuggestion {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoId: string;
}

export interface ManagementPlan {
  dietPlan: DietPlan;
  exercisePlan: ExercisePlan;
  lifestyleRecommendations: LifestyleRecommendation[];
  videoSuggestions?: VideoSuggestion[];
}
