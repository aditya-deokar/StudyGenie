import { createContext, Dispatch, SetStateAction } from "react";
import { CourseList } from "@prisma/client";
import { CourseOutput } from "@/types/courseOutput";


interface UserCourseListContextType {
  userCourseList: (CourseList & { courseOutput: CourseOutput | null })[];
  setUserCourseList: Dispatch<
    SetStateAction<(CourseList & { courseOutput: CourseOutput | null })[]>
  >;
}

export const UserCourseListContext = createContext<UserCourseListContextType>({
  userCourseList: [],
  setUserCourseList: () => {}, // Provide an empty function as a default value
});