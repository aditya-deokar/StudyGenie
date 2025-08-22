"use server";

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";

import { z } from 'zod';

const ChaptersNameSchema = z.object({
  ChapterName: z.string().describe("The name of the chapter."),
  About: z.string().describe("A short description of the chapter's content."),
  duration: z.string().describe("The estimated duration of the chapter (e.g., 30 minutes)"),
});

export const CourseIndexSchema = z.object({
  Topic: z.string().describe("The topic of the course (e.g., TypeScript)"),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Beginner to Advanced']).describe("The level of the course"),
  Chapters: z.array(ChaptersNameSchema ).describe("An array of chapter objects."),
  Duration: z.string().describe("The total duration of the course (e.g., 3 Hours)"),
  category: z.string().describe("The category the course falls under (e.g., Programming)"),
  CourseName: z.string().describe("The full name of the course."),
  Description: z.string().describe("A longer description of the course."),
  NoOfChapters: z.number().int().min(1).describe("The total number of chapters in the course."),
});

export type CourseIndex = z.infer<typeof CourseIndexSchema>;
export type ChaptersName= z.infer<typeof ChaptersNameSchema >;



export async function createFeedback() {
    
  
    try {
      
  
      const { object } = await generateObject({
        model: google("gemini-2.0-flash-001", {
          structuredOutputs: false,
        }),
        schema: CourseIndexSchema,
        prompt: `
            Generate a detailed index for course tutorial based on the following user input:
Category: Programming
Topic: Java
Level: beginner to Advance
Duration: 20 hours
Number of Chapters: detect base on Topic and level (min:5)
The output should include:
A Course Name that reflects the topic and level.
Format the response in a structured JSON format similar to the following example: 
        `,
        system:
          "You are a professional course maker. ",
      });
  
     
      console.log(object)
     
  
    //   return object
    } catch (error) {
      console.error("Error saving feedback:", error);
    //   return { success: false };
    
    }
  }
  