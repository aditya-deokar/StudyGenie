'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useParams, useRouter } from "next/navigation"

import { toast } from "sonner" 
import { GenerateAssesment } from "@/actions/assessment"
import { useQuizStore } from "@/lib/store"
import { useEffect, useState } from "react"
import { getCourseById2 } from "@/actions/createCourse"
import { useUser } from "@clerk/nextjs"
import { CourseListType } from "@/types/courseList"


export default function Home() {
  const params = useParams()
  const courseId = params?.courseId as string
  const router = useRouter()
  const { user } = useUser()
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

  const startQuizWithAssessment = async () => {
    try {
      const toastId = toast.loading("Generating your quiz...")

      const generatedQuestions = await GenerateAssesment(course?.courseOutput?.chapters!, course?.name!)

      // Store them in Zustand
      useQuizStore.getState().setQuestions(generatedQuestions)
      toast.dismiss(toastId)  // stop loading
      toast.success("Quiz ready! Good luck 🍀")
      router.push(`/course/dashboard/${courseId}/quiz/instructions`)
    } catch (error: any) {
      console.error("Failed to generate quiz:", error)
      toast.error("Failed to generate quiz. Try again.")
    }
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Assessment Dashboard</h1>

      <div className="grid gap-6">
        <Card className="dark:dark-gradient light-gradient">
          <CardHeader>
            <CardTitle>{course?.courseOutput.courseName}</CardTitle>
            <CardDescription>{course?.courseOutput.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span>Questions: 20</span>
                <span>Time Limit: 30 minutes</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Difficulty: Mixed</span>
                <span>Last Updated: -</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={startQuizWithAssessment}>
              Start Assessment
            </Button>
          </CardFooter>
        </Card>

        {/* Previous Attempts Card */}

        
        {/* <Card>
          <CardHeader>
            <CardTitle>Previous Attempts</CardTitle>
            <CardDescription>View your past quiz results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
             
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Python Fundamentals</p>
                  <p className="text-sm text-muted-foreground">April 5, 2025</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">16/20</p>
                  <p className="text-sm text-muted-foreground">80%</p>
                </div>
              </div>
            
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Python Fundamentals</p>
                  <p className="text-sm text-muted-foreground">March 28, 2025</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">14/20</p>
                  <p className="text-sm text-muted-foreground">70%</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/history" className="w-full">
              <Button variant="outline" className="w-full">
                View All Results
              </Button>
            </Link>
          </CardFooter>
        </Card> */}


      </div>
    </div>
  )
}
