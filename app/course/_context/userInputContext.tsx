// _context/userInputContext.tsx
"use client";

import { CourseInput } from '@/types/types';
import { createContext, useContext } from 'react';


interface UserInputContextProps {
  userCourseInput: CourseInput;
  setUserCourseInput: React.Dispatch<React.SetStateAction<CourseInput>>;
}

export const UserInputContext = createContext<UserInputContextProps>({
  userCourseInput: {}, // Provide a default value
  setUserCourseInput: () => { }, // Provide a default empty function
});

export const UserInputProvider = UserInputContext.Provider;

export const useUserInput = () => useContext(UserInputContext);