import { ExercisePlan } from "@/types";

export const pcosExercisePlan: ExercisePlan = {
  exercises: [
    {
      name: "Low-intensity cardio",
      description:
        "Walking, swimming, or cycling at a moderate pace to improve insulin sensitivity without causing stress",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
      duration: "30-45 minutes",
      frequency: "4-5 times per week",
    },
    {
      name: "Strength training",
      description:
        "Resistance exercises to build muscle mass and improve insulin sensitivity",
      imageUrl:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
      duration: "30 minutes",
      frequency: "2-3 times per week",
    },
    {
      name: "Yoga",
      description:
        "Specific poses that reduce stress and improve hormonal balance",
      imageUrl:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&q=80",
      duration: "30 minutes",
      frequency: "2-3 times per week",
    },
    {
      name: "HIIT (High-Intensity Interval Training)",
      description:
        "Short bursts of intense exercise followed by rest periods, effective for improving insulin sensitivity",
      imageUrl:
        "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80",
      duration: "20 minutes",
      frequency: "1-2 times per week",
    },
    {
      name: "Pilates",
      description:
        "Core-strengthening exercises that improve posture and reduce stress",
      imageUrl:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80",
      duration: "30 minutes",
      frequency: "2 times per week",
    },
  ],
  schedule: {
    Monday: [
      {
        name: "Walking",
        description: "Brisk walking at a moderate pace",
        imageUrl:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
        duration: "30 minutes",
        frequency: "Once",
      },
      {
        name: "Strength training - Upper body",
        description: "Focus on arms, shoulders, and back",
        imageUrl:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
        duration: "20 minutes",
        frequency: "Once",
      },
    ],
    Tuesday: [
      {
        name: "Yoga",
        description: "Focus on stress-reducing poses",
        imageUrl:
          "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&q=80",
        duration: "30 minutes",
        frequency: "Once",
      },
    ],
    Wednesday: [
      {
        name: "Swimming or cycling",
        description: "Low-impact cardio",
        imageUrl:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
        duration: "30 minutes",
        frequency: "Once",
      },
      {
        name: "HIIT",
        description: "Short, intense workout",
        imageUrl:
          "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80",
        duration: "15 minutes",
        frequency: "Once",
      },
    ],
    Thursday: [
      {
        name: "Rest or gentle stretching",
        description: "Active recovery",
        imageUrl:
          "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&q=80",
        duration: "15 minutes",
        frequency: "Once",
      },
    ],
    Friday: [
      {
        name: "Strength training - Lower body",
        description: "Focus on legs and core",
        imageUrl:
          "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80",
        duration: "30 minutes",
        frequency: "Once",
      },
      {
        name: "Walking",
        description: "Moderate pace",
        imageUrl:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
        duration: "20 minutes",
        frequency: "Once",
      },
    ],
    Saturday: [
      {
        name: "Pilates",
        description: "Core-strengthening exercises",
        imageUrl:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80",
        duration: "30 minutes",
        frequency: "Once",
      },
    ],
    Sunday: [
      {
        name: "Rest day or light activity",
        description: "Walking or gentle yoga",
        imageUrl:
          "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&q=80",
        duration: "As desired",
        frequency: "Once",
      },
    ],
  },
};

export const pcodExercisePlan: ExercisePlan = {
  exercises: [
    {
      name: "Moderate cardio",
      description:
        "Jogging, brisk walking, or cycling to improve circulation and reduce cyst-related discomfort",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
      duration: "30 minutes",
      frequency: "3-4 times per week",
    },
    {
      name: "Core strengthening",
      description:
        "Exercises that focus on abdominal and pelvic muscles to support reproductive organs",
      imageUrl:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
      duration: "20 minutes",
      frequency: "3 times per week",
    },
    {
      name: "Yoga for reproductive health",
      description:
        "Specific poses that improve blood flow to the pelvic region",
      imageUrl:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&q=80",
      duration: "30 minutes",
      frequency: "2-3 times per week",
    },
    {
      name: "Light strength training",
      description:
        "Using light weights to improve overall strength without straining",
      imageUrl:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
      duration: "25 minutes",
      frequency: "2 times per week",
    },
    {
      name: "Swimming",
      description: "Full-body, low-impact exercise that's gentle on joints",
      imageUrl:
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&q=80",
      duration: "30 minutes",
      frequency: "2 times per week",
    },
  ],
  schedule: {
    Monday: [
      {
        name: "Brisk walking",
        description: "Moderate pace to increase heart rate",
        imageUrl:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
        duration: "30 minutes",
        frequency: "Once",
      },
      {
        name: "Core exercises",
        description: "Focus on abdominal and pelvic floor",
        imageUrl:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
        duration: "15 minutes",
        frequency: "Once",
      },
    ],
    Tuesday: [
      {
        name: "Yoga",
        description: "Poses for reproductive health",
        imageUrl:
          "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&q=80",
        duration: "30 minutes",
        frequency: "Once",
      },
    ],
    Wednesday: [
      {
        name: "Light strength training",
        description: "Full body with light weights",
        imageUrl:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
        duration: "25 minutes",
        frequency: "Once",
      },
      {
        name: "Stretching",
        description: "Focus on hip and pelvic area",
        imageUrl:
          "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&q=80",
        duration: "10 minutes",
        frequency: "Once",
      },
    ],
    Thursday: [
      {
        name: "Swimming",
        description: "Gentle laps or water exercises",
        imageUrl:
          "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&q=80",
        duration: "30 minutes",
        frequency: "Once",
      },
    ],
    Friday: [
      {
        name: "Core strengthening",
        description: "Focus on deep core muscles",
        imageUrl:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
        duration: "20 minutes",
        frequency: "Once",
      },
      {
        name: "Moderate cardio",
        description: "Cycling or elliptical",
        imageUrl:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
        duration: "20 minutes",
        frequency: "Once",
      },
    ],
    Saturday: [
      {
        name: "Yoga",
        description: "Relaxation and stress reduction",
        imageUrl:
          "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&q=80",
        duration: "30 minutes",
        frequency: "Once",
      },
    ],
    Sunday: [
      {
        name: "Rest day or gentle walking",
        description: "Active recovery",
        imageUrl:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
        duration: "As desired",
        frequency: "Once",
      },
    ],
  },
};

export const healthyExercisePlan: ExercisePlan = {
  exercises: [
    {
      name: "Cardiovascular exercise",
      description:
        "Activities like running, cycling, or swimming to improve heart health",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
      duration: "30-45 minutes",
      frequency: "3-5 times per week",
    },
    {
      name: "Strength training",
      description:
        "Full-body resistance exercises to build muscle and strength",
      imageUrl:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
      duration: "45 minutes",
      frequency: "2-3 times per week",
    },
    {
      name: "Flexibility exercises",
      description: "Stretching and mobility work to maintain joint health",
      imageUrl:
        "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&q=80",
      duration: "15-20 minutes",
      frequency: "Daily or after workouts",
    },
    {
      name: "High-Intensity Interval Training (HIIT)",
      description:
        "Short, intense workouts that improve cardiovascular fitness and burn calories efficiently",
      imageUrl:
        "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80",
      duration: "20-30 minutes",
      frequency: "1-2 times per week",
    },
    {
      name: "Recreational activities",
      description:
        "Sports, hiking, dancing, or other enjoyable physical activities",
      imageUrl:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&q=80",
      duration: "Varies",
      frequency: "1-2 times per week",
    },
  ],
  schedule: {
    Monday: [
      {
        name: "Cardio - Running or cycling",
        description: "Moderate intensity",
        imageUrl:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
        duration: "30 minutes",
        frequency: "Once",
      },
      {
        name: "Core workout",
        description: "Strengthening exercises for abdominals and back",
        imageUrl:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
        duration: "15 minutes",
        frequency: "Once",
      },
    ],
    Tuesday: [
      {
        name: "Strength training - Upper body",
        description: "Focus on chest, back, shoulders, and arms",
        imageUrl:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
        duration: "45 minutes",
        frequency: "Once",
      },
      {
        name: "Flexibility work",
        description: "Stretching for upper body",
        imageUrl:
          "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&q=80",
        duration: "10 minutes",
        frequency: "Once",
      },
    ],
    Wednesday: [
      {
        name: "HIIT workout",
        description: "High-intensity intervals with short rest periods",
        imageUrl:
          "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80",
        duration: "25 minutes",
        frequency: "Once",
      },
    ],
    Thursday: [
      {
        name: "Strength training - Lower body",
        description: "Focus on legs, glutes, and core",
        imageUrl:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
        duration: "45 minutes",
        frequency: "Once",
      },
      {
        name: "Flexibility work",
        description: "Stretching for lower body",
        imageUrl:
          "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&q=80",
        duration: "10 minutes",
        frequency: "Once",
      },
    ],
    Friday: [
      {
        name: "Cardio - Swimming or elliptical",
        description: "Steady-state cardio",
        imageUrl:
          "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&q=80",
        duration: "40 minutes",
        frequency: "Once",
      },
    ],
    Saturday: [
      {
        name: "Recreational activity",
        description: "Sports, hiking, or other enjoyable activity",
        imageUrl:
          "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&q=80",
        duration: "60+ minutes",
        frequency: "Once",
      },
    ],
    Sunday: [
      {
        name: "Active recovery",
        description: "Light walking, yoga, or stretching",
        imageUrl:
          "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&q=80",
        duration: "30 minutes",
        frequency: "Once",
      },
    ],
  },
};

export const getExercisePlanByDiagnosis = (diagnosis: string): ExercisePlan => {
  switch (diagnosis) {
    case "PCOS":
      return pcosExercisePlan;
    case "PCOD":
      return pcodExercisePlan;
    default:
      return healthyExercisePlan;
  }
};
