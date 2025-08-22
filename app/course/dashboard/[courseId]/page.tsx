'use client'
import { getCourseById2 } from '@/actions/createCourse'
import { Achievements } from '@/components/course/achievements'
import { CourseChapters } from '@/components/course/course-chapters'
import { CourseOverview } from '@/components/course/course-overview'
import { CourseProgress } from '@/components/course/course-progress'
import { RecentActivity } from '@/components/course/recent-activity'
import { CourseListType } from '@/types/courseList'
import { useUser } from '@clerk/nextjs'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const page = () => {

    const { user } = useUser()
  const router = useRouter()
  const params = useParams()
  const [course, setCourse] = useState<CourseListType | null>(null)
  const [loading, setLoading] = useState(false)

 


  const fetchCourse = async () => {
    if (params?.courseId) {  
      setLoading(true);
      try {
        const result = await getCourseById2(params.courseId as string);
        // console.log(result);
        setCourse(result);
      } catch (error) {
        console.error("Error fetching course:", error);
        toast.error("Failed to load course.");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    console.log(params.courseId);
    fetchCourse()
    console.log(course?.courseOutput?.chapters)
  }, [params, user])
  return (
    <div>


        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <CourseOverview courseData={course} className="col-span-full" />
                <CourseProgress className="md:col-span-2 lg:col-span-2" />
                <Achievements className="md:col-span-2 lg:col-span-1" />
         </div>
              <CourseChapters chapters={course?.courseOutput?.chapters} className="mt-6" />
              <RecentActivity className="mt-6" />
    </div>
  )
}

export default page