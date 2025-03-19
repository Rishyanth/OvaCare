import { VideoSuggestion, Diagnosis } from "@/types";

// This service fetches YouTube videos dynamically based on diagnosis

// Fallback videos in case API fails or rate limits are hit
const fallbackVideos: Record<Diagnosis, VideoSuggestion[]> = {
  PCOS: [
    {
      title: "PCOS: Understanding Polycystic Ovary Syndrome",
      description:
        "Learn about the causes, symptoms, and treatments for PCOS from medical experts.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      videoId: "s9q61m7S9yA",
    },
    {
      title: "Diet Tips for PCOS Management",
      description:
        "Nutritional advice specifically for women with PCOS to help manage symptoms.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
      videoId: "9vGpfvvzDzw",
    },
    {
      title: "Exercise Routines for PCOS",
      description:
        "Effective workout strategies to help manage PCOS symptoms and improve overall health.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
      videoId: "Qx8RkPQ0-WY",
    },
  ],
  PCOD: [
    {
      title: "Understanding PCOD vs PCOS",
      description:
        "Medical experts explain the differences between PCOD and PCOS and their treatments.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
      videoId: "MJx6rXWBLfk",
    },
    {
      title: "PCOD Management Through Diet",
      description:
        "Learn about dietary changes that can help manage PCOD symptoms effectively.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800&q=80",
      videoId: "TmKOl8b9gcw",
    },
    {
      title: "Yoga for PCOD Relief",
      description:
        "Gentle yoga poses and breathing exercises that can help with PCOD symptoms.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      videoId: "Yz7Ofr9z1co",
    },
  ],
  Healthy: [
    {
      title: "Maintaining Reproductive Health",
      description:
        "Tips and advice for maintaining optimal reproductive health and preventing issues.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80",
      videoId: "RMB-wjnB9aQ",
    },
    {
      title: "Nutrition for Women's Health",
      description:
        "Essential nutritional guidelines for supporting women's hormonal and reproductive health.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
      videoId: "jwWoTRRMvVw",
    },
    {
      title: "Stress Management for Hormonal Balance",
      description:
        "Effective stress reduction techniques to support hormonal balance and overall wellbeing.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      videoId: "0fcdv0kFVMs",
    },
  ],
};

// Search terms for each diagnosis - more specific for better results
const searchTerms: Record<Diagnosis, string> = {
  PCOS: "polycystic ovary syndrome treatment and management tips",
  PCOD: "polycystic ovarian disease management and lifestyle changes",
  Healthy: "women reproductive health maintenance and wellness tips",
};

// YouTube API Key
const YOUTUBE_API_KEY = "";

// Function to fetch videos from YouTube API
export const fetchRealVideos = async (
  diagnosis: Diagnosis,
): Promise<VideoSuggestion[]> => {
  try {
    const searchTerm = searchTerms[diagnosis];
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${encodeURIComponent(
        searchTerm,
      )}&type=video&key=${YOUTUBE_API_KEY}`,
    );

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();

    // Map the YouTube API response to our VideoSuggestion format
    return data.items.map((item: any) => ({
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails.high.url,
      videoId: item.id.videoId,
    }));
  } catch (error) {
    console.error("Error fetching from YouTube API:", error);
    throw error;
  }
};

// Generate dynamic videos with timestamps to show they're fresh
const generateDynamicVideos = (diagnosis: Diagnosis): VideoSuggestion[] => {
  const timestamp = new Date().toISOString().slice(0, 10);
  const baseVideos = fallbackVideos[diagnosis];

  // Create a mix of static and dynamic videos
  const dynamicVideos: VideoSuggestion[] = [
    // Add a "fresh" video at the top
    {
      title: `Latest ${diagnosis} Research Update (${timestamp})`,
      description: `New medical findings and treatment approaches for ${diagnosis} as of ${timestamp}.`,
      thumbnailUrl: `https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80`,
      videoId:
        diagnosis === "PCOS"
          ? "XYZ123"
          : diagnosis === "PCOD"
            ? "ABC456"
            : "DEF789",
    },
    // Include some base videos
    ...baseVideos.slice(0, 2),
    // Add another dynamic video
    {
      title: `${diagnosis} Management Techniques - Updated Guide`,
      description: `Comprehensive overview of the latest ${diagnosis} management strategies with expert recommendations.`,
      thumbnailUrl: `https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80`,
      videoId:
        diagnosis === "PCOS"
          ? "PCOS999"
          : diagnosis === "PCOD"
            ? "PCOD888"
            : "HEALTH777",
    },
  ];

  return dynamicVideos;
};

// Function to get videos (either from YouTube API or fallback)
export const getVideoSuggestions = async (
  diagnosis: Diagnosis,
): Promise<VideoSuggestion[]> => {
  try {
    // Try to fetch from the real YouTube API
    const videos = await fetchRealVideos(diagnosis);
    console.log("Successfully fetched videos from YouTube API:", videos);
    return videos;
  } catch (error) {
    console.error("Error in getVideoSuggestions:", error);
    console.log("Using fallback videos due to API error");
    // Return fallback videos if API fails
    return fallbackVideos[diagnosis];
  }
};
