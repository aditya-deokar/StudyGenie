import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const apiKey: string | undefined = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("API key is missing");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateCourseLayout_AI = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate A Course Tutorial on following details with field as CourseName, Description, Along with ChapterName, About, duration:  category: \"Programming\" ,Topic: Python, level: basic, Duration: 1 hours , NoOfChapters: 5, in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "{ \"CourseName\": \"Python Programming: A Beginner's Guide\", ... }", // Trimmed for brevity
        },
      ],
    },
  ],
});

export const GenerateChapterContent_AI = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Explain the concept in detail on Topic: JavaScript, specific in Chapter: Chapter 2: Prototypes and Inheritance ... in JSON Format with a list of array with fields as title, description, code example (Code field in <precode> format) if applicable and ensure the reading material must be in 40 minutes",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "[ { \"title\": \"Introduction to Prototypes and Inheritance in JavaScript\", ... } ]", // Trimmed for brevity
        },
      ],
    },
  ],
});
