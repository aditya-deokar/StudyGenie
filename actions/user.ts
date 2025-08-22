"use server";


import { auth } from "@clerk/nextjs/server";
import { generateAIInsights } from "./dashboard";
import prisma from "@/lib/prisma";

// Define a type for the data passed to updateUser
interface UpdateUserData {
    industry: string;
    subIndustry: string;
    bio?: string;
    experience: number;
    skills?: string[];
}

export async function updateUser(data: UpdateUserData) {
    const { userId } = await auth();

    if (!userId) throw new Error("Unauthorized");

    const user = await prisma.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });

    if (!user) throw new Error("User Not Found");

    try {
        const result = await prisma.$transaction(
            async (tx) => {
                // find if industry exist
                let industryInsight = await tx.industryInsights.findUnique({
                    where: {
                        industry: data.industry,
                    },
                });

                // if industry doesn't exist, create it with default values- will replace it with ai later
                if (!industryInsight) {
                    const insights = await generateAIInsights(data.industry);

                    industryInsight = await prisma.industryInsights.create({
                        data: {
                            industry: data.industry,
                            ...insights,
                            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                        },
                    });
                }

                // update the user
                const updatedUser = await tx.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        industry: data.industry,
                        experience: data.experience,
                        bio: data.bio,
                        skills: data.skills,
                    },
                });

                return { updatedUser, industryInsight };
            },
            {
                timeout: 10000,
            }
        );

        return { success: true, ...result };
    } catch (error: any) {
        console.error("Error updating user and industry", error.message);
        throw new Error("Failed to update profile" + error.message);
    }
}

export async function getUserOnboardingStatus() {  // Removed unused `data` argument
    const { userId } = await auth();

    if (!userId) throw new Error("Unauthorized");

    const user = await prisma.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });

    if (!user) throw new Error("User Not Found");

    try {
        const user = await prisma.user.findUnique({
            where: {
                clerkUserId: userId,
            },
            select: {
                industry: true,
            },
        });

        return {
            isOnboarded: !!user?.industry,
        };
    } catch (error: any) {
        console.error("Error checking onboarding status", error.message);
        throw new Error("Failed to check onboarding status");
    }
}