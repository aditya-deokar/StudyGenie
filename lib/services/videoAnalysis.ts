// --- NEW, DETAILED INTERFACE ---
export interface AnalysisResult {
  identity_match: boolean;
  transcript?: string;
  dominant_emotion: string;
  emotion_counts: { [emotion: string]: number };
  speech_rate_wpm: number;
  filler_word_counts: { [word: string]: number };
  pause_count: number;
  speech_confidence_score: number;
  eye_contact_ratio: number;
  emotion_timeline: { time: number; emotion: string }[];
  error?: string; // To handle potential errors from the API
}


/**
 * Sends the recorded video and user profile image to the backend for analysis.
 *
 * @param {Blob[]} videoChunks - An array of Blob objects representing the recorded video.
 * @param {string} profileImageUrl - The URL of the user's profile image.
 * @returns {Promise<AnalysisResult>} A promise that resolves with the analysis results.
 */
export const analyzeVideoAndImage = async (
  videoChunks: Blob[],
  profileImageUrl: string
): Promise<AnalysisResult> => {
  if (!videoChunks || videoChunks.length === 0) {
    throw new Error("Video data is missing and cannot be analyzed.");
  }
  if (!profileImageUrl) {
    throw new Error("Profile image URL is missing and required for analysis.");
  }

  try {
    const videoBlob = new Blob(videoChunks, { type: "video/webm" });
    const videoFile = new File([videoBlob], "interview-recording.webm", { type: "video/webm" });

    // Helper function to fetch the image and convert it to a File object
    const imageUrlToFile = async (url: string, filename: string): Promise<File> => {
        const response = await fetch(url);
        const blob = await response.blob();
        return new File([blob], filename, { type: blob.type });
    };

    const imageFile = await imageUrlToFile(profileImageUrl, "profile-image.jpg");

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("image", imageFile);

    const apiEndpoint = process.env.NEXT_PUBLIC_ANALYSIS_API_URL || "http://127.0.0.1:5000/analyze";
    const response = await fetch(apiEndpoint, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      // Use the 'error' field from the Flask JSON response if available
      throw new Error(result.error || `Request failed with status ${response.status}`);
    }

    return result as AnalysisResult;

  } catch (error: any) {
    console.error("Video analysis request failed:", error);
    // Rethrow to be caught by the component
    throw error;
  }
};