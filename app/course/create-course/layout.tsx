"use client";

import React, { useState, ReactNode } from 'react';
import { UserInputProvider } from '../_context/userInputContext';
import { CourseInput } from '@/types/types';
 // Import the CourseInput type


interface CreateCourseLayoutProps {
  children: ReactNode;
}

const CreateCourseLayout: React.FC<CreateCourseLayoutProps> = ({ children }) => {
  const [userCourseInput, setUserCourseInput] = useState<CourseInput>({});

  return (
    <div>
      <UserInputProvider value={{ userCourseInput, setUserCourseInput }}>
        {children}
      </UserInputProvider>
    </div>
  );
};

export default CreateCourseLayout;