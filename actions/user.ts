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
    // ...auth checks...
    // const { userId } = await auth();
    const authResult = await auth();
    const userId = authResult.userId;

    if (!userId) throw new Error("Unauthorized");

    const user = await prisma.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });
  
    try {
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
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        }
  
        return await tx.user.update({
          where: { id: user?.id },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });
      }, {
        timeout: 30000 // Increased timeout as safety margin
      });
  
      return { success: true, result };
    } catch (error) {
      console.error("Update failed:", error);
      throw new Error("Profile update failed");
    }
  }
  

export async function getUserOnboardingStatus() {  
    // const { userId } = await auth();
    const authResult = await auth();
    const userId = authResult.userId;

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