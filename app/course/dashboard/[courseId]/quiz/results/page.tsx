"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { useQuizStore } from "@/lib/store"
import { CodeBlock } from "../_component/code-block"
import { CertificateSection } from "../_component/certificate-section"
import { useUser } from "@clerk/nextjs"
import { toast } from "sonner"
import { getCourseById2 } from "@/actions/createCourse"
import { CourseListType } from "@/types/courseList"


export default function QuizResults() {
  const router = useRouter()
  const params = useParams();
  const { user } = useUser();
  const courseId = params?.courseId as string;
  const { questions, answers, quizCompleted, getScore, resetQuiz } = useQuizStore()

  const score = getScore()
  const isPassing = score.percentage >= 70

  // Redirect if quiz not completed
  useEffect(() => {
    if (!quizCompleted) {
      router.push(`/course/dashboard/${courseId}/quiz/active`)
    }
  }, [quizCompleted, router])

  // Format question text to handle code blocks
  const formatQuestionText = (text: string) => {
    if (!text.includes("```")) return text

    const parts = text.split("```")
    return (
      <>
        {parts.map((part, index) => {
          if (index % 2 === 0) {
            return <p key={index}>{part}</p>
          } else {
            return <CodeBlock key={index} code={part} language="python" />
          }
        })}
      </>
    )
  }

  const handleRetakeQuiz = () => {
    resetQuiz()
    router.push(`/course/dashboard/${courseId}/quiz/instructions`)
  }

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
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="mb-8">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Quiz Results</CardTitle>
              <CardDescription>Python Fundamentals Assessment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-medium">Your Score</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{score.percentage}%</span>
                    <span className="text-muted-foreground">
                      ({score.correct}/{score.total} correct)
                    </span>
                  </div>
                  <Progress value={score.percentage} className="h-2" />
                </div>

                <div className="flex-1 flex items-center justify-center p-6 bg-muted rounded-lg">
                  {isPassing ? (
                    <div className="flex flex-col items-center text-center">
                      <CheckCircle2 className="h-12 w-12 text-green-500 mb-2" />
                      <h3 className="text-xl font-medium">Passed!</h3>
                      <p className="text-sm text-muted-foreground">Congratulations on passing the assessment</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center">
                      <XCircle className="h-12 w-12 text-red-500 mb-2" />
                      <h3 className="text-xl font-medium">Not Passed</h3>
                      <p className="text-sm text-muted-foreground">You need 70% to pass. Try again!</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => router.push("/dashboard/courses")}>
                Back to Dashboard
              </Button>
              <Button onClick={handleRetakeQuiz}>Retake Quiz</Button>
            </CardFooter>
          </Card>

          {/* Certificate Section - Only shown if user passed */}
          {isPassing && (
            <div className="mb-8">
              <CertificateSection
                userName={user?.fullName!}
                quizTitle={course?.courseOutput.courseName}
                score={score}
                completionDate={new Date()}
              />
            </div>
          )}

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Questions</TabsTrigger>
              <TabsTrigger value="correct">Correct ({score.correct})</TabsTrigger>
              <TabsTrigger value="incorrect">Incorrect ({score.total - score.correct})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {questions.map((question) => {
                const userAnswer = answers[question.id]
                const isCorrect = userAnswer === question.correctAnswerId

                return (
                  <Card key={question.id} className={isCorrect ? "border-green-200" : "border-red-200"}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <Badge variant="outline" className="mb-1">
                            {question.topic}
                          </Badge>
                          <CardTitle className="text-base">{formatQuestionText(question.questionText)}</CardTitle>
                        </div>
                        {isCorrect ? (
                          <Badge className="bg-green-500">Correct</Badge>
                        ) : (
                          <Badge variant="destructive">Incorrect</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 pb-4">
                      <div className="space-y-2">
                        {question.options.map((option) => {
                          const isUserAnswer = userAnswer === option.id
                          const isCorrectAnswer = question.correctAnswerId === option.id

                          let optionClass = "border p-3 rounded-md"

                          if (isUserAnswer && isCorrectAnswer) {
                            optionClass += " bg-green-50/50 text-green-900 border-green-200"
                          } else if (isUserAnswer && !isCorrectAnswer) {
                            optionClass += " bg-red-50/50 text-red-900 border-red-200"
                          } else if (isCorrectAnswer) {
                            optionClass += " bg-green-50/50 text-green-900 border-green-200"
                          }

                          return (
                            <div key={option.id} className={optionClass}>
                              <div className="flex items-start">
                                <div className="mr-2 mt-0.5">
                                  {isUserAnswer && isCorrectAnswer && (
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                  )}
                                  {isUserAnswer && !isCorrectAnswer && <XCircle className="h-5 w-5 text-red-500" />}
                                  {!isUserAnswer && isCorrectAnswer && (
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                  )}
                                  {!isUserAnswer && !isCorrectAnswer && (
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full border">
                                      {option.id}
                                    </span>
                                  )}
                                </div>
                                <div>
                                  <p className="font-medium">{option.text}</p>
                                </div>
                              </div>
                            </div>
                          )
                        })}

                        {question.explanation && (
                          <div className="mt-4 p-4 bg-muted rounded-md">
                            <div className="flex items-start">
                              <AlertCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                              <div>
                                <p className="font-medium mb-1">Explanation</p>
                                <p className="text-sm">{question.explanation}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </TabsContent>

            <TabsContent value="correct" className="space-y-6">
              {questions
                .filter((question) => answers[question.id] === question.correctAnswerId)
                .map((question) => (
                  <Card key={question.id} className="border-green-200">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <Badge variant="outline" className="mb-1">
                            {question.topic}
                          </Badge>
                          <CardTitle className="text-base">{formatQuestionText(question.questionText)}</CardTitle>
                        </div>
                        <Badge className="bg-green-500">Correct</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 pb-4">
                      <div className="space-y-2">
                        {question.options.map((option) => {
                          const isCorrectAnswer = question.correctAnswerId === option.id

                          let optionClass = "border p-3 rounded-md"
                          if (isCorrectAnswer) {
                            optionClass += " bg-green-50/50 text-green-900 border-green-200"
                          }

                          return (
                            <div key={option.id} className={optionClass}>
                              <div className="flex items-start">
                                <div className="mr-2 mt-0.5">
                                  {isCorrectAnswer ? (
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                  ) : (
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full border">
                                      {option.id}
                                    </span>
                                  )}
                                </div>
                                <div>
                                  <p className="font-medium">{option.text}</p>
                                </div>
                              </div>
                            </div>
                          )
                        })}

                        {question.explanation && (
                          <div className="mt-4 p-4 bg-muted rounded-md">
                            <div className="flex items-start">
                              <AlertCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                              <div>
                                <p className="font-medium mb-1">Explanation</p>
                                <p className="text-sm">{question.explanation}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="incorrect" className="space-y-6">
              {questions
                .filter((question) => answers[question.id] !== question.correctAnswerId)
                .map((question) => {
                  const userAnswer = answers[question.id]

                  return (
                    <Card key={question.id} className="border-red-200">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <Badge variant="outline" className="mb-1">
                              {question.topic}
                            </Badge>
                            <CardTitle className="text-base">{formatQuestionText(question.questionText)}</CardTitle>
                          </div>
                          <Badge variant="destructive">Incorrect</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-2 pb-4">
                        <div className="space-y-2">
                          {question.options.map((option) => {
                            const isUserAnswer = userAnswer === option.id
                            const isCorrectAnswer = question.correctAnswerId === option.id

                            let optionClass = "border p-3 rounded-md"

                            if (isUserAnswer) {
                              optionClass += " bg-red-50/50 text-red-900 border-red-200"
                            } else if (isCorrectAnswer) {
                              optionClass += " bg-green-50/50 text-green-900 border-green-200"
                            }

                            return (
                              <div key={option.id} className={optionClass}>
                                <div className="flex items-start">
                                  <div className="mr-2 mt-0.5">
                                    {isUserAnswer && <XCircle className="h-5 w-5 text-red-500" />}
                                    {!isUserAnswer && isCorrectAnswer && (
                                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    )}
                                    {!isUserAnswer && !isCorrectAnswer && (
                                      <span className="flex h-5 w-5 items-center justify-center rounded-full border">
                                        {option.id}
                                      </span>
                                    )}
                                  </div>
                                  <div>
                                    <p className="font-medium">{option.text}</p>
                                  </div>
                                </div>
                              </div>
                            )
                          })}

                          {question.explanation && (
                            <div className="mt-4 p-4 bg-muted rounded-md">
                              <div className="flex items-start">
                                <AlertCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                                <div>
                                  <p className="font-medium mb-1">Explanation</p>
                                  <p className="text-sm">{question.explanation}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
