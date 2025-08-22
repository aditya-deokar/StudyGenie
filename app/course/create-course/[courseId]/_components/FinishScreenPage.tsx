'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { ClipboardCopy } from 'lucide-react';
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { CourseListType } from '@/types/courseList';
import { getCourseByUser } from '@/actions/createCourse';

interface FinishScreenPageProps {
  courseId: string;
}

const FinishScreenPage: React.FC<FinishScreenPageProps> = ({ courseId }) => {
  const { user } = useUser();
  const [course, setCourse] = useState<CourseListType | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCourse = async () => {
      if (user && courseId) {
        const data = await getCourse();
        if (data) {
          setCourse(data);
        }
      }
    };

    fetchCourse();
  }, [user?.id, courseId]);

  const getCourse = async () => {
    if (!user?.id) return null;
    try {
      const data = await getCourseByUser(courseId);
      return data || null;
    } catch (error) {
      console.error('Error fetching course:', error);
      return null;
    }
  };

  return (
    <div className='px-10 md:px-20 lg:px-44 my-7 text-primary'>
      <h2 className='text-center font-bold text-2xl my-3'>Congrats! Your Course is ready</h2>

      <h2 className='mt-3'>Course URL:</h2>
      <h2 className='text-center text-gray-400 border p-2 rounded flex justify-evenly items-center gap-2'>
        {`${process.env.NEXT_PUBLIC_HOST_NAME}/course/view/${course?.courseId}`}

        <ClipboardCopy
          className='h-5 w-5 hover:text-gray-900 cursor-pointer'
          onClick={async () => {
            if (course?.courseId) {
              await navigator.clipboard.writeText(
                `${process.env.NEXT_PUBLIC_HOST_NAME}/course/view/${course.courseId}`
              );
            }
          }}
        />
      </h2>

      {course && (
        <CourseBasicInfo course={course} refreshData={() => console.log('refresh')} />
      )}
    </div>
  );
};

export default FinishScreenPage;
