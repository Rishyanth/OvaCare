import { VideoSuggestion, Diagnosis } from "@/types";
import { getVideoSuggestions } from "@/services/youtubeService";

// These are now used as fallback videos in the youtubeService
// The actual implementation has been moved to youtubeService.ts

// This function now uses the dynamic service to fetch videos
export const getVideoSuggestionsByDiagnosis = async (
  diagnosis: string,
): Promise<VideoSuggestion[]> => {
  try {
    return await getVideoSuggestions(diagnosis as Diagnosis);
  } catch (error) {
    console.error("Error getting video suggestions:", error);
    // Return empty array as last resort
    return [];
  }
};
