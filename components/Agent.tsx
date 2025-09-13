// src/components/Agent.tsx (or your file path)

"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Webcam from "react-webcam";
import { cn } from "@/lib/utils";
import { vapi } from "@/interview/lib/vapi.sdk"; // Assuming this is your VAPI SDK setup
import { createFeedback } from "@/interview/lib/actions/general.action"; // Your server action
import { interviewer } from "@/interview/constants";

// Define necessary types
enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

interface AgentProps {
  userName: string;
  userId: string;
  interviewId: string;
  feedbackId?: string;
  type: "generate" | "practice";
  questions?: string[];
  profileImage?: string;
}

const Agent = ({
  userName,
  userId,
  interviewId,
  feedbackId,
  type,
  questions,
}: AgentProps) => {
  const router = useRouter();
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState<string>("");

  const webcamRef = useRef<Webcam>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  // --- VAPI EVENT LISTENERS ---
  useEffect(() => {
    const onCallStart = () => {
      setCallStatus(CallStatus.ACTIVE);
      handleStartRecording();
    };
    const onCallEnd = () => {
      handleStopRecording();
      setCallStatus(CallStatus.FINISHED);
    };
    const onMessage = (message: any) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setMessages((prev) => [...prev, { role: message.role, content: message.transcript }]);
      }
    };
    const onSpeechStart = () => setIsSpeaking(true);
    const onSpeechEnd = () => setIsSpeaking(false);
    const onError = (error: Error) => console.error("VAPI Error:", error);

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, [handleStartRecording, handleStopRecording]);

  // --- FEEDBACK GENERATION, VIDEO SAVING, AND REDIRECT ---
  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

    const handleFeedbackAndRedirect = (transcript: SavedMessage[]) => {
      // Step 1: Create feedback without the video first.
      // The video is handled separately on the client side.
      createFeedback({
        interviewId,
        userId,
        transcript,
        feedbackId,
      }).then(({ success, feedbackId: newFeedbackId }) => {
         if (success && newFeedbackId) {
            // Step 2: If feedback creation is successful, save the video to session storage.
            if (recordedChunks.length > 0) {
              const videoBlob = new Blob(recordedChunks, { type: "video/webm" });
              const reader = new FileReader();
              reader.readAsDataURL(videoBlob);
              reader.onloadend = () => {
                const base64data = reader.result as string;
                // Use a unique key for the video in session storage.
                sessionStorage.setItem(`videoRecording-${interviewId}`, base64data);
                // Step 3: Redirect to the feedback page.
                router.push(`/dashboard/interviews/interview/${interviewId}/feedback`);
              };
            } else {
               // If no video, just redirect.
               router.push(`/dashboard/interviews/interview/${interviewId}/feedback`);
            }
         } else {
            console.error("Failed to save feedback.");
            router.push("/dashboard/interviews");
         }
      });
    };

    if (callStatus === CallStatus.FINISHED && messages.length > 0) {
      if (type !== "generate") {
        handleFeedbackAndRedirect(messages);
      } else {
        router.push("/dashboard/interviews");
      }
      // Reset messages to prevent this effect from running again on re-render.
      setMessages([]);
    }
  }, [messages, callStatus, recordedChunks, feedbackId, interviewId, router, type, userId]);

  // --- RECORDING HANDLERS ---
  const handleStartRecording = useCallback(() => {
    if (webcamRef.current?.stream) {
      setRecordedChunks([]);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, { mimeType: "video/webm" });
      mediaRecorderRef.current.addEventListener("dataavailable", (event) => {
        if (event.data.size > 0) setRecordedChunks((prev) => [...prev, event.data]);
      });
      mediaRecorderRef.current.start();
    }
  }, []);

  const handleStopRecording = useCallback(() => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
  }, []);

  // --- CALL ACTIONS ---
   const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);
    setMessages([]);
    setLastMessage("");

    const vapiConfig = {
      variableValues: {
        username: userName,
        userid: userId,
        ...(type !== "generate" && {
          questions: questions?.map((q) => `- ${q}`).join("\n") ?? "",
        }),
      },
    };

    const assistantId =
      type === "generate"
        ? process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!
        : interviewer;

    vapi.start(assistantId, vapiConfig);
  };

  const handleDisconnect = () => {
    vapi.stop();
  };

  // --- RENDER ---
  return (
    <>
      <div className="call-view" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div className="card-interviewer" style={{ textAlign: 'center' }}>
          <div className="avatar" style={{ position: 'relative', display: 'inline-block' }}>
            <Image src="/ai-avatar.png" alt="AI Avatar" width={65} height={54} />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>
        <div className="card-border glass" style={{ padding: '10px' }}>
          <div className="card-content" style={{ textAlign: 'center' }}>
            <Webcam audio={false} ref={webcamRef} mirrored={true} className="rounded-full object-cover size-[120px]" />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      {messages.length > 0 && (
        <div className="transcript-border" style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <div className="transcript"><p>{lastMessage}</p></div>
        </div>
      )}
      <div className="w-full flex justify-center mt-4">
        {callStatus !== CallStatus.ACTIVE ? (
          <button className="relative btn-call" onClick={handleCall} disabled={callStatus === CallStatus.CONNECTING}>
            <span className={cn("absolute animate-ping", callStatus !== CallStatus.CONNECTING && "hidden")} />
            <span>{callStatus === CallStatus.CONNECTING ? "Connecting..." : "Start Interview"}</span>
          </button>
        ) : (
          <button className="btn-disconnect" onClick={handleDisconnect}>End Interview</button>
        )}
      </div>
    </>
  );
};

export default Agent;