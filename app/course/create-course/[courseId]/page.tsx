"use client"

import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import CourseBasicInfo from "./_components/CourseBasicInfo"
import CourseDetail from "./_components/CourseDetail"
import ChapterList from "./_components/ChapterList"
import LoadingDialog from "../_components/LoadingDialog"
import { CourseList } from "@prisma/client"
import {  getCourseById2 } from "@/actions/createCourse"
import { toast } from "sonner"
import { GenerateAndSaveAllChapters } from "@/actions/createChapters"




const CoursePage = () => {
  const { user } = useUser()
  const router = useRouter()
  const params = useParams()
  const [course, setCourse] = useState<CourseList | null>(null)
  const [loading, setLoading] = useState(false)

 


  const fetchCourse = async () => {
    if (params?.courseId) {  //courseId will be id (UUID)
      setLoading(true);
      try {
        const result = await getCourseById2(params.courseId as string);
        console.log(result);
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
  }, [params, user])

  const handleGenerateChapters = async () => {
    if (!course) return

    setLoading(true)
    try {
      await GenerateAndSaveAllChapters(course)
      console.log(course)
      router.replace(`/course/create-course/${course.courseId}/finish`)
    } catch (error) {
      console.error("Error generating chapters:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">Course Layout</h2>
      <LoadingDialog loading={loading} />

      {course && (
        <>
          <CourseBasicInfo course={course} refreshData={fetchCourse} />
          <CourseDetail course={course} />
          <ChapterList course={course} refreshData={fetchCourse} /> 
          <Button onClick={handleGenerateChapters} className="my-10">
            Generate Course Content
          </Button>
        </>
      )}
    </div>
  )
}

export default CoursePage


