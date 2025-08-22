"use server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const getUserCourses = async () => {
    const user = await currentUser();
    if (!user?.primaryEmailAddress?.emailAddress) return [];
  
    const courses = await prisma.courseList.findMany({
      where: {
        createdBy: user.primaryEmailAddress.emailAddress,
      },
    });
  
    return courses;
};