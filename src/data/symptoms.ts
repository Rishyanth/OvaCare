export const weightQuestions = [
  {
    id: "weight-1",
    question:
      "Have you experienced unexplained weight gain in the last 6 months?",
    type: "boolean",
    category: "weight",
  },
  {
    id: "weight-2",
    question:
      "Do you find it difficult to lose weight despite diet and exercise?",
    type: "boolean",
    category: "weight",
  },
  {
    id: "weight-3",
    question: "How would you describe your body type?",
    type: "select",
    options: [
      "Apple-shaped (weight around middle)",
      "Pear-shaped (weight around hips)",
      "Evenly distributed",
      "Thin",
    ],
    category: "weight",
  },
];

export const menstrualQuestions = [
  {
    id: "menstrual-1",
    question: "How regular are your menstrual cycles?",
    type: "select",
    options: [
      "Very regular (every 28-30 days)",
      "Somewhat regular (within 5 days of expected)",
      "Irregular (varies by more than 5 days)",
      "Very irregular/unpredictable",
      "Absent for months",
    ],
    category: "menstrual",
  },
  {
    id: "menstrual-2",
    question: "Do you experience heavy bleeding during your periods?",
    type: "boolean",
    category: "menstrual",
  },
  {
    id: "menstrual-3",
    question: "Do you experience severe cramping during your periods?",
    type: "boolean",
    category: "menstrual",
  },
];

export const skinHairQuestions = [
  {
    id: "skin-1",
    question: "Do you have excess facial or body hair growth?",
    type: "boolean",
    category: "skin",
  },
  {
    id: "skin-2",
    question: "Do you experience acne that worsens around your period?",
    type: "boolean",
    category: "skin",
  },
  {
    id: "skin-3",
    question: "Have you noticed thinning hair or hair loss on your scalp?",
    type: "boolean",
    category: "skin",
  },
];

export const moodEnergyQuestions = [
  {
    id: "mood-1",
    question:
      "Do you experience mood swings that seem related to your menstrual cycle?",
    type: "boolean",
    category: "mood",
  },
  {
    id: "mood-2",
    question: "How would you rate your energy levels most days?",
    type: "select",
    options: ["Very high", "High", "Moderate", "Low", "Very low"],
    category: "mood",
  },
  {
    id: "mood-3",
    question:
      "Do you experience anxiety or depression that seems to worsen at certain times of your cycle?",
    type: "boolean",
    category: "mood",
  },
];

export const cystsQuestions = [
  {
    id: "cysts-1",
    question:
      "Have you ever been diagnosed with ovarian cysts through ultrasound?",
    type: "boolean",
    category: "cysts",
  },
  {
    id: "cysts-2",
    question:
      "Do you experience pelvic pain that is not related to your period?",
    type: "boolean",
    category: "cysts",
  },
];

export const allQuestions = [
  ...weightQuestions,
  ...menstrualQuestions,
  ...skinHairQuestions,
  ...moodEnergyQuestions,
  ...cystsQuestions,
];
