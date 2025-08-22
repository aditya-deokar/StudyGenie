"use client";

import React, { useState, ReactNode, Suspense } from 'react';
import { UserInputProvider } from '../_context/userInputContext';
import { CourseInput } from '@/types/types';
import { BarLoader } from 'react-spinners';
// Import the CourseInput type


interface CreateCourseLayoutProps {
  children: ReactNode;
}

const CreateCourseLayout: React.FC<CreateCourseLayoutProps> = ({ children }) => {
  const [userCourseInput, setUserCourseInput] = useState<CourseInput>({});

  return (
    <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}>
      <div>
        <UserInputProvider value={{ userCourseInput, setUserCourseInput }}>
          {children}
        </UserInputProvider>
      </div>
    </Suspense>
  );
};

export default CreateCourseLayout;