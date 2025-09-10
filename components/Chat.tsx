// File: components/Chat.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";
import { useUser } from "@clerk/nextjs";

interface Message {
  text: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
  };
  timestamp: string;
}

interface ChatProps {
  room: string;
}

export default function Chat({ room }: ChatProps) {
  const { user, isLoaded, isSignedIn } = useUser();
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="flex items-center justify-center h-[500px] bg-white rounded-lg shadow">
        <p className="text-gray-500">Loading chat...</p>
      </div>
    );
  }

  useEffect(() => {
    if (!socketRef.current) {
      const newSocket = io("http://localhost:3001");
      socketRef.current = newSocket;
      newSocket.emit("joinRoom", room);

      newSocket.on("message", (msg: any) => {
        if (msg && msg.text && msg.sender && msg.sender.id) {
          setMessages((prev) => [...prev, msg]);
        }
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [room]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (message.trim() && socketRef.current) {
      const newMessage: Message = {
        text: message,
        sender: {
          id: user.id,
          name: user.fullName || user.username || "Anonymous",
          avatar: user.imageUrl || "/placeholder-avatar.jpg",
        },
        timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" }),
      };
      
      socketRef.current.emit("chatMessage", { room, ...newMessage });
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[500px] border rounded-lg p-4 bg-white shadow">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`flex items-start gap-3 ${
              msg.sender.id === user.id ? "flex-row-reverse" : ""
            }`}
          >
            <img
              src={msg.sender.avatar}
              alt={`${msg.sender.name}'s avatar`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div
              className={`flex flex-col p-3 rounded-xl max-w-[70%] ${
                msg.sender.id === user.id ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
            >
              <div className="font-bold text-sm mb-1">{msg.sender.name}</div>
              <div className="text-base break-words">{msg.text}</div>
              <div
                className={`mt-1 text-xs ${
                  msg.sender.id === user.id ? "text-gray-200" : "text-gray-500"
                } text-right`}
              >
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded p-2"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}