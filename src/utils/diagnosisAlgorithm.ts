import { DiagnosisResult, SymptomResponse } from "@/types";

// This is a simplified algorithm for educational purposes
// In a real application, this would be much more sophisticated and validated by medical professionals
export const analyzeSymptomsForDiagnosis = (
  responses: SymptomResponse[],
): DiagnosisResult => {
  // Count symptoms by category
  let weightSymptoms = 0;
  let menstrualSymptoms = 0;
  let skinSymptoms = 0;
  let moodSymptoms = 0;
  let cystsConfirmed = false;

  // Analyze responses
  responses.forEach((response) => {
    // Convert all responses to boolean for simplicity in this demo
    const isPositive =
      response.answer === true ||
      response.answer === "yes" ||
      (typeof response.answer === "string" &&
        (response.answer.includes("irregular") ||
          response.answer.includes("absent") ||
          response.answer.includes("unpredictable") ||
          response.answer.includes("low") ||
          response.answer.includes("very low")));

    if (isPositive) {
      switch (response.category) {
        case "weight":
          weightSymptoms++;
          break;
        case "menstrual":
          menstrualSymptoms++;
          break;
        case "skin":
          skinSymptoms++;
          break;
        case "mood":
          moodSymptoms++;
          break;
        case "cysts":
          if (response.id === "cysts-1" && isPositive) {
            cystsConfirmed = true;
          }
          break;
      }
    }
  });

  // Calculate total symptoms
  const totalSymptoms =
    weightSymptoms + menstrualSymptoms + skinSymptoms + moodSymptoms;

  // Determine diagnosis
  let diagnosis: "PCOS" | "PCOD" | "Healthy" = "Healthy";
  let confidence = 0;

  if (cystsConfirmed) {
    // If cysts are confirmed through ultrasound
    if (menstrualSymptoms >= 2 && (skinSymptoms >= 2 || weightSymptoms >= 2)) {
      diagnosis = "PCOS";
      confidence = Math.min(0.9, 0.6 + (totalSymptoms / 15) * 0.3);
    } else {
      diagnosis = "PCOD";
      confidence = Math.min(0.9, 0.6 + (totalSymptoms / 15) * 0.3);
    }
  } else {
    // Without confirmed cysts
    if (
      menstrualSymptoms >= 2 &&
      skinSymptoms >= 2 &&
      (weightSymptoms >= 1 || moodSymptoms >= 2)
    ) {
      diagnosis = "PCOS";
      confidence = Math.min(0.8, 0.5 + (totalSymptoms / 15) * 0.3);
    } else if (menstrualSymptoms >= 2 && totalSymptoms >= 4) {
      diagnosis = "PCOD";
      confidence = Math.min(0.7, 0.4 + (totalSymptoms / 15) * 0.3);
    } else {
      diagnosis = "Healthy";
      confidence = Math.max(0.6, 1 - (totalSymptoms / 15) * 0.4);
    }
  }

  return {
    diagnosis,
    confidence: parseFloat(confidence.toFixed(2)),
    symptoms: responses,
    date: new Date().toISOString(),
  };
};
