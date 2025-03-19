import { DietPlan } from "@/types";

export const pcosDietPlan: DietPlan = {
  foodsToEat: [
    {
      name: "High-fiber vegetables",
      benefits: "Helps regulate blood sugar and improves insulin sensitivity",
      imageUrl:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80",
    },
    {
      name: "Lean proteins",
      benefits: "Helps maintain muscle mass and reduces insulin resistance",
      imageUrl:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80",
    },
    {
      name: "Anti-inflammatory foods",
      benefits: "Reduces inflammation associated with PCOS",
      imageUrl:
        "https://images.unsplash.com/photo-1601314002592-b8734bca6604?w=500&q=80",
    },
    {
      name: "Healthy fats",
      benefits: "Supports hormone production and reduces inflammation",
      imageUrl:
        "https://images.unsplash.com/photo-1519623286359-e9f3cbef015b?w=500&q=80",
    },
    {
      name: "Low-glycemic fruits",
      benefits: "Provides nutrients without spiking blood sugar",
      imageUrl:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80",
    },
  ],
  foodsToAvoid: [
    {
      name: "Refined carbohydrates",
      benefits: "Can spike insulin and worsen PCOS symptoms",
      imageUrl:
        "https://images.unsplash.com/photo-1556442261-e52a7d348d36?w=500&q=80",
    },
    {
      name: "Sugary foods and drinks",
      benefits: "Increases inflammation and insulin resistance",
      imageUrl:
        "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&q=80",
    },
    {
      name: "Processed foods",
      benefits: "Contains additives that may disrupt hormones",
      imageUrl:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&q=80",
    },
    {
      name: "Dairy products",
      benefits: "May contain hormones that affect PCOS symptoms",
      imageUrl:
        "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500&q=80",
    },
    {
      name: "Alcohol",
      benefits: "Can disrupt blood sugar and hormone balance",
      imageUrl:
        "https://images.unsplash.com/photo-1582819509237-d5b75f20ff7a?w=500&q=80",
    },
  ],
  mealSchedule: {
    breakfast: [
      {
        name: "Greek yogurt with berries and nuts",
        benefits: "Protein-rich breakfast that stabilizes blood sugar",
      },
      {
        name: "Vegetable omelet with avocado",
        benefits: "Provides protein and healthy fats to start the day",
      },
    ],
    lunch: [
      {
        name: "Grilled chicken salad with olive oil dressing",
        benefits:
          "Balanced meal with protein and anti-inflammatory ingredients",
      },
      {
        name: "Quinoa bowl with vegetables and salmon",
        benefits: "Rich in omega-3 fatty acids and fiber",
      },
    ],
    dinner: [
      {
        name: "Baked fish with roasted vegetables",
        benefits: "Lean protein with nutrient-dense vegetables",
      },
      {
        name: "Turkey stir-fry with broccoli and bell peppers",
        benefits: "Low-glycemic meal that supports hormone balance",
      },
    ],
    snacks: [
      {
        name: "Handful of almonds",
        benefits: "Provides healthy fats and protein",
      },
      {
        name: "Sliced apple with almond butter",
        benefits: "Balanced snack with fiber and protein",
      },
    ],
  },
};

export const pcodDietPlan: DietPlan = {
  foodsToEat: [
    {
      name: "Whole grains",
      benefits: "Provides sustained energy and regulates hormones",
      imageUrl:
        "https://images.unsplash.com/photo-1586444248879-bc604bc77f90?w=500&q=80",
    },
    {
      name: "Leafy greens",
      benefits: "Rich in nutrients that support hormonal balance",
      imageUrl:
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80",
    },
    {
      name: "Lean proteins",
      benefits: "Supports muscle health and hormone production",
      imageUrl:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80",
    },
    {
      name: "Omega-3 rich foods",
      benefits: "Reduces inflammation and supports ovarian health",
      imageUrl:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80",
    },
    {
      name: "Antioxidant-rich fruits",
      benefits: "Fights oxidative stress that can worsen PCOD",
      imageUrl:
        "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=500&q=80",
    },
  ],
  foodsToAvoid: [
    {
      name: "High-sugar foods",
      benefits: "Can worsen hormonal imbalances",
      imageUrl:
        "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&q=80",
    },
    {
      name: "Refined carbohydrates",
      benefits: "May contribute to insulin resistance",
      imageUrl:
        "https://images.unsplash.com/photo-1556442261-e52a7d348d36?w=500&q=80",
    },
    {
      name: "Caffeine",
      benefits: "Can disrupt hormone balance and sleep",
      imageUrl:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80",
    },
    {
      name: "Processed foods",
      benefits: "Contains additives that may affect hormones",
      imageUrl:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&q=80",
    },
    {
      name: "Trans fats",
      benefits: "Increases inflammation and hormonal disruption",
      imageUrl:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&q=80",
    },
  ],
  mealSchedule: {
    breakfast: [
      {
        name: "Oatmeal with flaxseeds and berries",
        benefits: "Fiber-rich breakfast that supports hormone balance",
      },
      {
        name: "Spinach and mushroom breakfast wrap",
        benefits: "Nutrient-dense start with vegetables and protein",
      },
    ],
    lunch: [
      {
        name: "Lentil soup with mixed vegetables",
        benefits: "Plant-based protein with fiber for sustained energy",
      },
      {
        name: "Grilled fish with quinoa and steamed vegetables",
        benefits: "Complete meal with omega-3 fatty acids",
      },
    ],
    dinner: [
      {
        name: "Baked chicken with sweet potato and broccoli",
        benefits: "Balanced dinner with lean protein and complex carbs",
      },
      {
        name: "Tofu stir-fry with brown rice",
        benefits: "Plant-based protein with fiber-rich carbohydrates",
      },
    ],
    snacks: [
      {
        name: "Greek yogurt with honey",
        benefits: "Protein-rich snack that supports gut health",
      },
      {
        name: "Mixed nuts and seeds",
        benefits: "Healthy fats and protein for hormone production",
      },
    ],
  },
};

export const healthyDietPlan: DietPlan = {
  foodsToEat: [
    {
      name: "Variety of colorful vegetables",
      benefits: "Provides diverse nutrients and antioxidants",
      imageUrl:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80",
    },
    {
      name: "Whole grains",
      benefits: "Provides sustained energy and essential nutrients",
      imageUrl:
        "https://images.unsplash.com/photo-1586444248879-bc604bc77f90?w=500&q=80",
    },
    {
      name: "Lean proteins",
      benefits: "Supports muscle health and overall wellbeing",
      imageUrl:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80",
    },
    {
      name: "Healthy fats",
      benefits: "Essential for hormone production and brain health",
      imageUrl:
        "https://images.unsplash.com/photo-1519623286359-e9f3cbef015b?w=500&q=80",
    },
    {
      name: "Fresh fruits",
      benefits: "Rich in vitamins, minerals, and antioxidants",
      imageUrl:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80",
    },
  ],
  foodsToAvoid: [
    {
      name: "Excessive processed foods",
      benefits: "Often high in unhealthy additives and low in nutrients",
      imageUrl:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&q=80",
    },
    {
      name: "Added sugars",
      benefits: "Can contribute to inflammation and energy crashes",
      imageUrl:
        "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&q=80",
    },
    {
      name: "Trans fats",
      benefits: "Associated with increased health risks",
      imageUrl:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&q=80",
    },
  ],
  mealSchedule: {
    breakfast: [
      {
        name: "Smoothie bowl with fruits, yogurt, and granola",
        benefits:
          "Nutrient-dense start to the day with balanced macronutrients",
      },
      {
        name: "Whole grain toast with avocado and eggs",
        benefits: "Complete breakfast with protein, healthy fats, and fiber",
      },
    ],
    lunch: [
      {
        name: "Mediterranean salad with olive oil dressing",
        benefits: "Rich in vegetables, healthy fats, and lean protein",
      },
      {
        name: "Grain bowl with roasted vegetables and chickpeas",
        benefits: "Plant-based meal with fiber and protein",
      },
    ],
    dinner: [
      {
        name: "Grilled fish with roasted vegetables and quinoa",
        benefits: "Balanced dinner with lean protein and complex carbs",
      },
      {
        name: "Stir-fried vegetables with tofu and brown rice",
        benefits: "Plant-based dinner with complete protein",
      },
    ],
    snacks: [
      {
        name: "Fresh fruit with a handful of nuts",
        benefits: "Balanced snack with fiber, vitamins, and healthy fats",
      },
      {
        name: "Hummus with vegetable sticks",
        benefits: "Protein and fiber-rich snack that provides sustained energy",
      },
    ],
  },
};

export const getDietPlanByDiagnosis = (diagnosis: string): DietPlan => {
  switch (diagnosis) {
    case "PCOS":
      return pcosDietPlan;
    case "PCOD":
      return pcodDietPlan;
    default:
      return healthyDietPlan;
  }
};
