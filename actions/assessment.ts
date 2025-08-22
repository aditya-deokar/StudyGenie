
"use server"

import { z } from "zod"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { auth } from "@clerk/nextjs/server" 
import { google } from "@ai-sdk/google";

import { generateObject } from "ai";
import { AssessmentSchema, QuestionSchema } from "@/types/zodAssesmentSchema" 
import { Chapter } from "@/types/courseOutput";


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

type Question = z.infer<typeof QuestionSchema>

export const GenerateAssesment = async (
 chapters:Chapter[] ,
 courseName:string
) => {
  try {
    
    const { object } = await generateObject({
      model: google("gemini-2.0-flash-001", {
        structuredOutputs: false,
      }),
      schema: AssessmentSchema,
      prompt: `"Act as an expert instructional designer and ${courseName} expert (e.g., 'Python Developer', 'Digital Marketing Strategist', 'Project Management Professional'). Your task is to generate a comprehensive Multiple Choice Question (MCQ) assessment for the course titled: ${courseName}.
      Primary Goal: This assessment must be designed to effectively gauge a candidate's true understanding and proficiency level, distinguishing between rote memorization and practical application/conceptual knowledge.
      Topic Coverage: Ensure broad coverage across the key topics, modules, or concepts taught in the ${courseName} course. These include (instructor must provide a specific, detailed list):
      ${chapters?.map((item, i) => `${i+1}. ${item.ChapterName}`).join("\n")}

      Output Format: Provide the output as a JSON array. Each object in the array must represent a single MCQ and strictly adhere to the following structure:
   
      {
            "id": "string (Unique identifier, e.g., py-basics-001, mktg-seo-005)",
            "topic": "string (Matches one of the specific topics you listed above)",
            "difficulty": "string ('Easy', 'Medium', 'Hard')",
            "questionText": "string (The question itself, potentially including relevant context, scenarios, or data/code snippets)",
            "options": [
                        { "id": "string (e.g., 'A', 'B', '1', 'opt1')", "text": "string (Option text)" },
                        // (Minimum 3-4 plausible options per question)
                      ],
            "correctAnswerId": "string (The 'id' of the correct option from the 'options' array)",
            "explanation": "string (Brief explanation why the answer is correct, crucial for learning and validating the question's intent)"
      }  

      Generate the JSON array containing these 20 MCQs based on the criteria above, using the specific course details provided."
       `});


    return object ;


  } catch (error: any) {
    console.error("Error generating Assessment content:", error);
    throw new Error(error.message || "Failed to generate Assesment content.");
  }
};











// --- Action to Save Assessment Results ---

// Input schema (Client sends answers and the questions they were shown)
const SaveAssessmentInputSchema = z.object({
  answers: z.record(z.string()), // { questionId: answerId }
  questions: AssessmentSchema, // The actual questions shown (fetched from Gemini)
  category: z.string(), // The category/topic used for generation
  courseListId: z.string().optional().nullable(),
})

export async function saveAssessmentResult(
  input: z.infer<typeof SaveAssessmentInputSchema>,
): Promise<{ success: true; assessmentId: string; score: number } | { success: false; error: string }> {

  const { userId } = auth() // Get userId from Clerk session
  if (!userId) {
    return { success: false, error: "User not authenticated." }
  }

  const validation = SaveAssessmentInputSchema.safeParse(input)
  if (!validation.success) {
    console.error("Save Assessment Validation Error:", validation.error.flatten())
    return { success: false, error: `Invalid input data for saving assessment.` }
  }

  const { answers, questions, category, courseListId } = validation.data

  try {
    // **SERVER-SIDE SCORE CALCULATION (Crucial)**
    let correctCount = 0
    questions.forEach((q) => {
      // Ensure question has a defined correct answer before comparing
      if (q.correctAnswerId && answers[q.id] === q.correctAnswerId) {
        correctCount++
      }
    })
    const totalQuestions = questions.length
    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0

    // Ensure questions are valid JSON for Prisma
    const questionsJson: Prisma.JsonArray = questions as Prisma.JsonArray

    const assessment = await db.assessment.create({
      data: {
        userId: userId, // Use userId from Clerk session
        quizScore: score,
        questions: questionsJson, // Store the exact questions served
        category: category, // Store the category/topic
        courseListId: courseListId,
        // improvementTip: generateImprovementTip(...), // Optional: Generate tip server-side
      },
    })

    console.log(`Assessment result saved for user ${userId}, Assessment ID: ${assessment.id}, Score: ${score}%`)
    return { success: true, assessmentId: assessment.id, score: score }

  } catch (error) {
    console.error("Error saving assessment result:", error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { success: false, error: "Database error saving assessment." }
    }
    return { success: false, error: "Failed to save assessment results." }
  }
}