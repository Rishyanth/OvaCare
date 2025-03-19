import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VideoSuggestion, Diagnosis } from "@/types";
import { ExternalLink, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getVideoSuggestions } from "@/services/youtubeService";

interface VideoSuggestionsViewProps {
  videoSuggestions?: VideoSuggestion[];
  diagnosis: Diagnosis;
}

export default function VideoSuggestionsView({
  videoSuggestions = [],
  diagnosis = "Healthy",
}: VideoSuggestionsViewProps) {
  const [videos, setVideos] = useState<VideoSuggestion[]>(videoSuggestions);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedVideos = await getVideoSuggestions(diagnosis);
      setVideos(fetchedVideos);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      console.error("Error fetching videos:", err);
      setError("Unable to load videos. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Always fetch fresh videos when component mounts or diagnosis changes
    fetchVideos();
  }, [diagnosis]);

  const getDiagnosisTitle = () => {
    switch (diagnosis) {
      case "PCOS":
        return "Educational Videos for PCOS";
      case "PCOD":
        return "Educational Videos for PCOD";
      case "Healthy":
        return "Women's Health Educational Videos";
      default:
        return "Educational Video Resources";
    }
  };

  const getDiagnosisDescription = () => {
    switch (diagnosis) {
      case "PCOS":
        return "Curated video resources to help you better understand and manage PCOS.";
      case "PCOD":
        return "Selected videos with expert information on PCOD management and treatment.";
      case "Healthy":
        return "Educational videos on maintaining reproductive health and wellness.";
      default:
        return "Video resources based on your assessment results.";
    }
  };

  const openYoutubeVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <div className="space-y-6 bg-background">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{getDiagnosisTitle()}</CardTitle>
            <CardDescription>{getDiagnosisDescription()}</CardDescription>
            {lastUpdated && (
              <p className="text-xs text-muted-foreground mt-1">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={fetchVideos}
            disabled={loading}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center h-60">
              <div className="flex flex-col items-center gap-4">
                <RefreshCw className="h-10 w-10 animate-spin text-primary" />
                <p>Loading personalized video recommendations...</p>
              </div>
            </div>
          ) : error ? (
            <div className="text-center p-8">
              <p className="text-red-500 mb-4">{error}</p>
              <Button onClick={fetchVideos}>Try Again</Button>
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center p-8">
              <p className="mb-4">No videos found for your condition.</p>
              <Button onClick={fetchVideos}>Refresh</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card
                  key={index}
                  className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => openYoutubeVideo(video.videoId)}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <ExternalLink className="text-white h-12 w-12" />
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg line-clamp-2">
                      {video.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {video.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why Video Resources?</CardTitle>
          <CardDescription>
            The benefits of visual learning for health education
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Enhanced Understanding</h3>
              <p className="text-muted-foreground">
                Visual demonstrations can make complex medical concepts easier
                to understand and remember. Seeing exercises performed correctly
                or dietary preparations can improve your implementation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Expert Insights</h3>
              <p className="text-muted-foreground">
                These videos feature healthcare professionals and specialists
                who provide valuable insights and the latest research findings
                related to{" "}
                {diagnosis === "Healthy" ? "women's health" : diagnosis}.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Community Connection</h3>
              <p className="text-muted-foreground">
                Many videos include stories from others with similar
                experiences, helping you feel less alone in your health journey
                and providing real-world management strategies.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-muted-foreground mt-4">
        <p>
          These video resources are provided for educational purposes only.
          Always consult with healthcare professionals for personalized medical
          advice. Video content is sourced from public platforms and is not
          created or endorsed by OvaCare.
        </p>
      </div>
    </div>
  );
}
