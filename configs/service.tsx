import axios from "axios";

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";

interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
    channelTitle: string;
  };
}

interface YouTubeResponse {
  items: VideoItem[];
}

export const getVideo = async (query: string): Promise<VideoItem[]> => {
  try {
    const params = {
      part: "snippet",
      q: query,
      maxResults: 2,
      type: "video",
      key: process.env?.NEXT_PUBLIC_YOUTUBE_API_KEY,
    };

    const response = await axios.get<YouTubeResponse>(`${YOUTUBE_BASE_URL}/search`, { params });

    return response.data.items;
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
};
