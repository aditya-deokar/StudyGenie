"use server";


import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || ""); // Provide a default value to avoid errors
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

// Define types for the AI Insights
interface SalaryRange {
    role: string;
    min: number;
    max: number;
    median: number;
    location: string;
}

type DemandLevel = "HIGH" | "MEDIUM" | "LOW";
type MarketOutlook = "POSITIVE" | "NEUTRAL" | "NEGATIVE";

interface AIInsights {
    salaryRange: SalaryRange[];
    growthRate: number;
    demandLevel: DemandLevel;
    topSkills: string[];
    marketOutlook: MarketOutlook;
    keyTrends: string[];
    recommendedSkills: string[];
}

export const generateAIInsights = async (industry: string): Promise<AIInsights> => {
    const prompt = `
    Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
    {
      "salaryRange": [
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
      ],
      "growthRate": number,
      "demandLevel": "HIGH" | "MEDIUM" | "LOW",
      "topSkills": ["skill1", "skill2"],
      "marketOutlook": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
      "keyTrends": ["trend1", "trend2"],
      "recommendedSkills": ["skill1", "skill2"]
    }
    
    IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
    Include at least 5 common roles for salary ranges.
    Growth rate should be a percentage.
    Include at least 5 skills and trends.
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

        return JSON.parse(cleanedText) as AIInsights; // Type assertion here

    } catch (error: any) {
        console.error("Error generating AI insights:", error);
        throw new Error("Failed to generate AI insights: " + error.message);
    }
};

export async function getIndustryInsights() {
    const { userId } = await auth();

    if (!userId) throw new Error("Unauthorized");

    const user = await prisma.user.findUnique({
        where: {
            clerkUserId: userId,
        },
        include: {
            industryInsights: true,
        },
    });

    if (!user) throw new Error("User Not Found");

    if (!user.industry) {
        throw new Error("User has not specified an industry"); // More specific error
    }

    try {
        if (!user.industryInsights) {
            const insights = await generateAIInsights(user.industry);

            const industryInsight = await prisma.industryInsights.create({
                data: {
                    industry: user.industry,
                    ...insights,
                    nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                },
            });

            return industryInsight;
        }

        return user.industryInsights;
    } catch (error: any) {
        console.error("Error getting industry insights:", error);
        throw new Error("Failed to get industry insights: " + error.message);
    }
}