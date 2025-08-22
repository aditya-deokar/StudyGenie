'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { BookOpenText, ClipboardCopy } from 'lucide-react';
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { CourseListType } from '@/types/courseList';
import { getCourseByUser } from '@/actions/createCourse';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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

     

      {course && (
        <CourseBasicInfo course={course} refreshData={() => console.log('refresh')} />
      )}

      <Link href={`/course/dashboard/${course?.courseId}`} className="w-full">
          <Button variant="outline" className="w-full">
            <BookOpenText className="mr-2 h-4 w-4" />
            View Course
          </Button>
      </Link>
      
    </div>
  );
};

export default FinishScreenPage;
