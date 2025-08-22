import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";


import { doc, getDoc, setDoc } from "firebase/firestore";  // Firestore methods
import { db } from "@/interview/firebase/client";
// import { db } from "@/interview/firebase/admin";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    // 1️⃣ Check user in Prisma
    const loggedInUser = await prisma.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;
    const email = user.emailAddresses[0].emailAddress;

    // 2️⃣ Create new user in Prisma
    const newUser = await prisma.user.create({
      data: {
        clerkUserId: user.id,
        name: user.fullName,
        imageUrl: user.imageUrl,
        email,
      },
    });

    // 3️⃣ Check user in Firebase
    const userDocRef = doc(db, "users", user.id);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      // 4️⃣ Add user to Firebase if not exists
      await setDoc(userDocRef, {
        name,
        email,
        // profileURL: user.imageUrl,  // optional extra fields
        // resumeURL: "",
      });
    }

    return newUser;

  } catch (error) {
    console.error("Error in checkUser:", error);
    throw error;
  }
};
