// src/app/dashboard/interviews/interview/[id]/feedback/page.tsx (or your file path)

"use client";

import { useState, useEffect, useCallback } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { getFeedbackByInterviewId, getInterviewById } from "@/interview/lib/actions/general.action";
import { AnalysisResult, analyzeVideoAndImage } from "@/lib/services/videoAnalysis";
import { TranscriptViewer } from "@/components/TranscriptViewer";
import { ScoreCard } from "@/components/ScoreCard";


// Define types for data fetched from server actions
type InterviewData = Awaited<ReturnType<typeof getInterviewById>>;
type FeedbackData = Awaited<ReturnType<typeof getFeedbackByInterviewId>>;

// Helper to convert Base64 string from sessionStorage back to a Blob
const base64ToBlob = (base64: string, contentType: string = 'video/webm'): Blob => {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteArrays = Array.from(byteCharacters).map(char => char.charCodeAt(0));
    return new Blob([new Uint8Array(byteArrays)], { type: contentType });
};

const FeedbackPage = ({ params }: { params: { id: string } }) => {
  const interviewId = params?.id;
  const { user } = useUser();
  const [interview, setInterview] = useState<InterviewData>(null);
  const [feedback, setFeedback] = useState<FeedbackData>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [videoIsAvailable, setVideoIsAvailable] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);

  // --- DATA FETCHING AND VIDEO CHECK ---
  useEffect(() => {
    if (user?.id && interviewId) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const interviewData = await getInterviewById(interviewId);
          const feedbackData = await getFeedbackByInterviewId({ interviewId, userId: user.id });
          setInterview(interviewData);
          setFeedback(feedbackData);

          // Check session storage for the recorded video.
          const videoData = sessionStorage.getItem(`videoRecording-${interviewId}`);
          setVideoIsAvailable(!!videoData);
        } catch (error) {
          console.error("Failed to fetch feedback:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [interviewId, user?.id]);

  // --- VIDEO ANALYSIS HANDLER ---
  const handleAnalysis = useCallback(async () => {
    if (!user?.imageUrl) {
      setAnalysisError("A user profile image is required for identity analysis.");
      return;
    }
    const videoDataB64 = sessionStorage.getItem(`videoRecording-${interviewId}`);
    if (!videoDataB64) {
      setAnalysisError("Video recording data not found in this session. Please try the interview again.");
      setVideoIsAvailable(false);
      return;
    }

    setIsAnalyzing(true);
    setAnalysisError(null);
    setAnalysisResult(null);

    try {
      // Convert the Base64 string back into a Blob for sending to the backend.
      const videoBlob = base64ToBlob(videoDataB64);
      // Send the video blob to your analysis service.
      const result = await analyzeVideoAndImage([videoBlob], user.imageUrl);

      setAnalysisResult(result);
      setVideoIsAvailable(false); // Hide button after successful analysis.
      sessionStorage.removeItem(`videoRecording-${interviewId}`); // Clean up session storage.
    } catch (error: any) {
      setAnalysisError(error.message || "An unknown analysis error occurred.");
    } finally {
      setIsAnalyzing(false);
    }
  }, [interviewId, user?.imageUrl]);

  if (isLoading) return <section className="section-feedback"><p>Loading feedback...</p></section>;
  if (!feedback || !interview) return <section className="section-feedback"><p>Feedback not found.</p></section>;

  return (
    <section className="section-feedback" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          Feedback on the Interview - <span className="capitalize">{interview.role}</span> Interview
        </h1>
      </div>

      <div className="flex flex-row justify-center">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" width={22} height={22} alt="star" />
            <p>Overall Impression: <span className="font-bold">{feedback?.totalScore}</span>/100</p>
          </div>
          <div className="flex flex-row gap-2">
            <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
            <p>{feedback?.createdAt ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A") : "N/A"}</p>
          </div>
        </div>
      </div>

      <hr />

      <p>{feedback?.finalAssessment}</p>

      <div className="flex flex-col gap-4">
        <h2>Breakdown of the Interview:</h2>
        {feedback?.categoryScores?.map((category, index) => (
          <div key={index}>
            <p className="font-bold">{index + 1}. {category.name} ({category.score}/100)</p>
            <p>{category.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3>Strengths</h3>
        <ul>{feedback?.strengths?.map((strength, index) => <li key={index}>{strength}</li>)}</ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3>Areas for Improvement</h3>
        <ul>{feedback?.areasForImprovement?.map((area, index) => <li key={index}>{area}</li>)}</ul>
      </div>

      <div className="buttons" style={{ display: 'flex', gap: '1rem' }}>
        <Button asChild className="btn-secondary flex-1">
          <Link href="/dashboard/interviews">Back to dashboard</Link>
        </Button>
        <Button asChild className="btn-primary flex-1">
          <Link href={`/dashboard/interviews/interview/${interviewId}`}>Retake Interview</Link>
        </Button>
      </div>

      {/* --- VIDEO ANALYSIS SECTION --- */}
      <div className="my-6 p-6 rounded-lg bg-background border border-gray-700">
        <h2 className="text-3xl font-bold mb-4 text-white">Video Performance Analysis</h2>

        {videoIsAvailable && (
          <Button className="btn-primary w-full text-lg py-3" onClick={handleAnalysis} disabled={isAnalyzing}>
            {isAnalyzing ? "Analyzing, this may take a moment..." : "Analyze Your Video Performance"}
          </Button>
        )}

        {isAnalyzing && (
            <div className="flex items-center justify-center gap-3 mt-4 text-gray-300">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-200"></div>
                <p>Processing video. Please wait...</p>
            </div>
        )}

        {analysisError && (
          <div className="mt-4 p-4 bg-red-900 border border-red-500 text-red-200 rounded-lg">
            <p className="font-bold">Analysis Failed</p>
            <p>{analysisError}</p>
          </div>
        )}

        {!videoIsAvailable && analysisResult && (
          <div className="mt-4 p-4 bg-green-900 border border-green-500 text-green-200 rounded-lg">
            Analysis complete. The video has been removed from this session.
          </div>
        )}

        {analysisResult && (
          <div className="mt-6 space-y-6">
            {!analysisResult.identity_match && (
                <div className="p-4 bg-yellow-900 border border-yellow-500 text-yellow-200 rounded-lg">
                    <p className="font-bold">Identity Mismatch Warning</p>
                    <p>The face detected in the video does not match the provided reference image.</p>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ScoreCard title="Speech Confidence" value={analysisResult.speech_confidence_score} unit="/ 100" description="Clarity and fluency of speech." />
              <ScoreCard title="Eye Contact" value={Math.round(analysisResult.eye_contact_ratio * 100)} unit="%" description="Ratio of time looking towards the camera." />
              <ScoreCard title="Dominant Emotion" value={analysisResult.dominant_emotion} description="Most frequently detected emotion." />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Speech Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ScoreCard title="Speech Rate" value={analysisResult.speech_rate_wpm} unit="WPM" description="Words spoken per minute." />
                <ScoreCard title="Filler Words" value={Object.values(analysisResult.filler_word_counts).reduce((a, b) => a + b, 0)} description="Count of words like 'um', 'uh', 'like'." />
                 <ScoreCard title="Significant Pauses" value={analysisResult.pause_count} description="Number of long pauses between words." />
              </div>
            </div>
            <TranscriptViewer transcript={analysisResult.transcript!} fillerWords={Object.keys(analysisResult.filler_word_counts)} />
          </div>
        )}
      </div>
    </section>
  );
};

export default FeedbackPage;