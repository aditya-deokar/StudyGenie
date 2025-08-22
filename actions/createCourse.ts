"use server";

import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";
import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from 'uuid';
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


// Define types for the API responses
type CreateCourseSuccess = { id: string };
type CreateCourseError = { error: string };
type CreateCourseResult = CreateCourseSuccess | CreateCourseError;


const fullCourseSchema = z.object({
  courseName: z.string().min(3),
  description: z.string(),
  level: z.string(),
  duration: z.string(),
  noOfChapters: z.number(),
  category: z.string(),
  chapters: z.array(
    z.object({ ChapterName: z.string(), About: z.string(), duration: z.string() })
  ),
});


//Derive the type from schema
type CourseType = z.infer<typeof fullCourseSchema>;


export async function GenerateCourseLayout(userCourseInput: any): Promise<CourseType> {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  try {
    const prompt = `
        Create a detailed course outline based on the following user input in JSON format, following this schema:
        {
            "courseName": "...",
            "description": "...",
            "level": "Beginner to Advanced",
            "duration": "X hours",
            "noOfChapters": X,
            "category": "Programming",
            "chapters": [
                {
                    "ChapterName": "...",
                    "About": "...",
                    "duration": "X hours"
                }
            ]
            
        }

        User Input:
        Category: ${userCourseInput?.category}
        Topic: ${userCourseInput?.topic}
        Level: ${userCourseInput?.level}
        Duration: ${userCourseInput?.duration}
        Number of Chapters: detect base on Topic and level
        `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

    let courseData: CourseType;
    try {
      courseData = JSON.parse(cleanedText);
    } catch (parseError: any) {
      console.error("Error parsing JSON:", parseError);
      throw new Error("Failed to parse Gemini response as JSON");
    }

    try {
      fullCourseSchema.parse(courseData);
    } catch (validationError: any) {
      console.error("Validation error:", validationError);
      throw new Error("Invalid course data from Gemini");
    }

    return courseData;

  } catch (error: any) {
    console.error("AI Generation error:", error);
    throw new Error(error.message || "Failed to generate course layout"); //Re-throwing the errror
  }
}

export async function SaveCourseLayoutInDB(courseData: CourseType) {
  const authResult = await auth();
  const userId = authResult.userId;

  if (!userId) {
    throw new Error("Unauthorized");
  }

  
    const id = uuidv4();

    const newCourse = await prisma.courseList.create({
      data: {
        courseId: id,
        name: courseData.courseName,
        category: courseData.category,
        level: courseData.level,
        courseOutput: courseData, // Store the whole course data. Adjust as needed.
        createdBy: userId,
        
      },
    });

    // revalidatePath(`/course/create-course/${id}`);
    redirect(`/course/create-course/${id}`);

    // return { id: newCourse.id }; //Return the new uuid not courseID
 
}






export async function getCourseById2(id: string) {  //Parameter changed to id
  try {
    const course = await prisma.courseList.findUnique({
      where: {
        courseId: id,  
      },
      include:{chapters:true}
    });
    return course;
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    return null; 
  }
}


export async function getCourseByUser(courseId: string) {
  try {
    const course = await prisma.courseList.findUnique({
      where: {
        courseId: courseId,
        
      },
      
    });
    return course;
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    return null; // Or throw the error, depending on your error handling strategy
  }
}



export async function getChapters(courseId: string) {
  try {
      const chapters = await prisma.chapters.findMany({
          where: {
              courseId: courseId,
          },
          orderBy: {
            chapterId: 'asc'
          }
      });
      return chapters;
  } catch (error) {
      console.error("Error fetching chapters:", error);
      return []; // Or throw the error, depending on your error handling strategy
  }
}

