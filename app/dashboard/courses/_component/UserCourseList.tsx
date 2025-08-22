'use client';

import React from 'react';
import CourseCard from './CourseCard';
import { CourseListType } from '@/types/courseList';


const UserCourseList: React.FC<{ initialCourses: CourseListType[] }> = ({ initialCourses }) => {
  

  // console.log(initialCourses);

  return (
    <div className='mt-10'>
      <h2 className='font-medium text-xl mb-4'>My AI Courses</h2>

    <div>
    {initialCourses.length == 0 &&  <div className='opacity-50'>No Courses Available! ,Please Generate Your First Course</div>
    }
    </div>
      <div className='interviews-section'>
        {initialCourses.length > 0 && (
          initialCourses.map((course, index) => (
            <CourseCard key={index} course={course} refreshData={() => {}} />
          ))
        ) }
      </div>
    </div>
  );
};

export default UserCourseList;
