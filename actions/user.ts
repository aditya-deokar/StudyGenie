"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { generateAIInsights } from "./industry";

// Define a type for the data passed to updateUser
interface UpdateUserData {
    industry: string;
    subIndustry: string;                 
    bio?: string;
    experience: number;
    skills?: string[];
}

export async function updateUser(data: UpdateUserData) {
    const { userId } = auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                clerkUserId: userId,
            },
        });

        if (!user) {
            throw new Error("User not found");
        }

        // 1. Generate AI insights FIRST
        const insights = await generateAIInsights(data.industry);

        // 2. Run transaction with pre-computed data
        const result = await prisma.$transaction(async (tx) => {
            let industryInsight = await tx.industryInsights.findUnique({
                where: { industry: data.industry },
            });

            if (!industryInsight) {
                industryInsight = await tx.industryInsights.create({
                    data: {
                        industry: data.industry,
                        industryData: insights,
                        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
                    },
                });
            }

            return await tx.user.update({
                where: { id: user.id }, // Use the non-null user ID
                data: {
                    industry: data.industry,
                    experience: data.experience,
                    bio: data.bio,
                    skills: data.skills,
                },
            });
        }, {
            timeout: 30000 // Increased timeout as a safety margin
        });

        return { success: true, result };
    } catch (error) {
        console.error("Update failed:", error);
        // It's better to throw the original error or a more specific one
        throw new Error("Profile update failed. Please try again later.");
    }
}

export async function getUserOnboardingStatus() {
    const { userId } = auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                clerkUserId: userId,
            },
            select: {
                industry: true, // Only select the field you need
            },
        });

        if (!user) {
            throw new Error("User Not Found");
        }

        return {
            isOnboarded: !!user.industry, // Check if the industry field is populated
        };
    } catch (error: any) {
        console.error("Error checking onboarding status", error.message);
        throw new Error("Failed to check onboarding status.");
    }
}