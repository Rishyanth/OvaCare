import { LifestyleRecommendation } from "@/types";

export const pcosLifestyleRecommendations: LifestyleRecommendation[] = [
  {
    title: "Stress Management",
    description:
      "Practice stress-reduction techniques like meditation, deep breathing, or mindfulness daily. Chronic stress can worsen PCOS symptoms by affecting hormone levels.",
    icon: "Brain",
  },
  {
    title: "Sleep Quality",
    description:
      "Aim for 7-9 hours of quality sleep each night. Poor sleep can affect insulin sensitivity and hormone production, potentially worsening PCOS symptoms.",
    icon: "Moon",
  },
  {
    title: "Regular Meals",
    description:
      "Eat regular, balanced meals to maintain stable blood sugar levels. Avoid skipping meals, which can lead to blood sugar fluctuations and increased cravings.",
    icon: "Clock",
  },
  {
    title: "Limit Endocrine Disruptors",
    description:
      "Reduce exposure to endocrine-disrupting chemicals found in some plastics, pesticides, and personal care products, which may affect hormone balance.",
    icon: "Ban",
  },
  {
    title: "Regular Health Check-ups",
    description:
      "Schedule regular check-ups with your healthcare provider to monitor your PCOS and adjust your management plan as needed.",
    icon: "Stethoscope",
  },
];

export const pcodLifestyleRecommendations: LifestyleRecommendation[] = [
  {
    title: "Maintain Healthy Weight",
    description:
      "Focus on gradual, sustainable weight management if needed, as excess weight can contribute to hormonal imbalances that affect ovarian function.",
    icon: "Scale",
  },
  {
    title: "Warm Compresses",
    description:
      "Apply warm compresses to the lower abdomen during times of discomfort to help reduce pain associated with ovarian cysts.",
    icon: "Thermometer",
  },
  {
    title: "Avoid Tight Clothing",
    description:
      "Wear loose, comfortable clothing, especially around the abdominal area, to reduce pressure on the pelvis and minimize discomfort.",
    icon: "Shirt",
  },
  {
    title: "Track Symptoms",
    description:
      "Keep a journal of your symptoms, including pain levels and timing, to help identify patterns and triggers that may worsen your condition.",
    icon: "ClipboardList",
  },
  {
    title: "Regular Ultrasounds",
    description:
      "Follow your doctor's recommendations for regular ultrasound monitoring to track the size and number of ovarian cysts.",
    icon: "Activity",
  },
];

export const healthyLifestyleRecommendations: LifestyleRecommendation[] = [
  {
    title: "Stay Hydrated",
    description:
      "Drink plenty of water throughout the day to support overall health, digestion, and cellular function.",
    icon: "Droplets",
  },
  {
    title: "Limit Alcohol and Caffeine",
    description:
      "Moderate your intake of alcohol and caffeine, as excessive consumption can affect hormonal balance and overall health.",
    icon: "Wine",
  },
  {
    title: "Regular Health Screenings",
    description:
      "Schedule regular preventive health screenings appropriate for your age and risk factors to catch any potential issues early.",
    icon: "CalendarCheck",
  },
  {
    title: "Social Connections",
    description:
      "Maintain strong social connections and relationships, as they contribute significantly to mental and physical wellbeing.",
    icon: "Users",
  },
  {
    title: "Mindful Eating",
    description:
      "Practice mindful eating by paying attention to hunger cues, eating slowly, and enjoying your food without distractions.",
    icon: "Utensils",
  },
];

export const getLifestyleRecommendationsByDiagnosis = (
  diagnosis: string,
): LifestyleRecommendation[] => {
  switch (diagnosis) {
    case "PCOS":
      return pcosLifestyleRecommendations;
    case "PCOD":
      return pcodLifestyleRecommendations;
    default:
      return healthyLifestyleRecommendations;
  }
};
