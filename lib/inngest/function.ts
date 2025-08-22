
import prisma from "../prisma";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { inngest } from "./client";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY !); // Provide a default value
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

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
    lastUpdated?: Date;
    nextUpdate?: Date;
}

export const generateIndustryInsights = inngest.createFunction(
    { name: "Generate Industry Insights" },
    { cron: "0 0 * * 0" }, // Run every Sunday at midnight
    async ({ event, step }) => {
        const industries = await step.run("Fetch industries", async () => {
            const result = await prisma.industryInsights.findMany({
                select: { industry: true },
            });
            return result.map(item => item.industry); // Extract just the industry string
        });

        for (const industry of industries) {  // No destructuring needed
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
                const res = await step.ai.wrap(
                    "gemini",
                    async (p) => {
                        return await model.generateContent(p);
                    },
                    prompt
                );

                const text = res.response?.candidates?.[0]?.content?.parts?.[0]?.text || "";
                const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

                const insights = JSON.parse(cleanedText) as AIInsights;

                await step.run(`Update ${industry} insights`, async () => {
                    await prisma.industryInsights.update({
                        where: { industry },
                        data: {
                            ...insights,
                            lastUpdated: new Date(),
                            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                        },
                    });
                });
            } catch (error: any) {
                console.error(`Error processing industry ${industry}:`, error);
                // Consider logging the error to Inngest or a dedicated error tracking service
                // to improve observability.
                throw new Error(`Failed to process industry ${industry}: ${error.message}`);
            }
        }
    }
);