"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Flag, ChevronLeft, ChevronRight, Clock, AlertCircle } from "lucide-react"
import { useQuizStore } from "@/lib/store"
import { CodeBlock } from "../_component/code-block"
import { formatTime } from "@/lib/utils"
import { QuestionNavigator } from "../_component/question-navigator"



export default function ActiveQuiz() {
  const router = useRouter()
  const params = useParams();
  const courseId = params?.courseId as string;
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  const {
    questions,
    currentQuestionIndex,
    answers,
    flaggedQuestions,
    timeRemaining,
    quizCompleted,
    setAnswer,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    toggleFlagQuestion,
    updateTimeRemaining,
    completeQuiz,
    getQuestionStatus,
  } = useQuizStore()

  const currentQuestion = questions[currentQuestionIndex]
  const { answered, total } = getQuestionStatus()

  // Handle timer
  useEffect(() => {
    if (timer) clearInterval(timer)

    const interval = setInterval(() => {
      if (timeRemaining <= 0) {
        clearInterval(interval)
        handleSubmitQuiz()
        return
      }

      updateTimeRemaining(timeRemaining - 1)
    }, 1000)

    setTimer(interval)

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timeRemaining])

  // Redirect to results if quiz is completed
  // useEffect(() => {
  //   if (quizCompleted) {
  //     router.push(`/course/dashboard/${courseId}/quiz/results`)
  //   }
  // }, [quizCompleted])

  const handleSubmitQuiz = () => {
    completeQuiz()
    router.push(`/course/dashboard/${courseId}/quiz/results`)
  }

  const isQuestionFlagged = flaggedQuestions.includes(currentQuestion.id)
  const selectedAnswerId = answers[currentQuestion.id] || ""
  const progressPercentage = (currentQuestionIndex / (questions.length - 1)) * 100

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

  return (
    <div className="container mx-auto py-4 px-4 min-h-screen flex flex-col">
      {/* Header with quiz info */}
      <div className="sticky top-0 z-10 bg-background pb-4 border-b mb-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-semibold">Python Fundamentals Assessment</h1>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="font-medium">{formatTime(timeRemaining)}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span>
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <Badge
              variant={
                currentQuestion.difficulty === "Easy"
                  ? "outline"
                  : currentQuestion.difficulty === "Medium"
                    ? "secondary"
                    : "destructive"
              }
            >
              {currentQuestion.difficulty}
            </Badge>
          </div>
          <div>
            <Badge variant="outline" className="bg-muted">
              {answered} of {total} answered
            </Badge>
          </div>
        </div>

        <Progress value={progressPercentage} className="h-2" />
      </div>

      <div className="flex flex-1 gap-4">
        {/* Main content area */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Question */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {currentQuestion.topic}
                      </Badge>
                      <h2 className="text-xl font-medium">{formatQuestionText(currentQuestion.questionText)}</h2>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleFlagQuestion(currentQuestion.id)}
                      className={isQuestionFlagged ? "text-yellow-500" : ""}
                      aria-label={isQuestionFlagged ? "Unflag question" : "Flag question for review"}
                    >
                      <Flag className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Answer options */}
                  <RadioGroup
                    value={selectedAnswerId}
                    onValueChange={(value) => setAnswer(currentQuestion.id, value)}
                    className="space-y-3"
                  >
                    {currentQuestion.options.map((option) => (
                      <div
                        key={option.id}
                        className={`flex items-center space-x-2 rounded-md border p-4 transition-colors ${
                          selectedAnswerId === option.id ? "border-primary bg-primary/5" : ""
                        }`}
                      >
                        <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                        <Label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer font-medium">
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Navigation buttons */}
              <div className="flex justify-between">
                <Button variant="outline" onClick={previousQuestion} disabled={currentQuestionIndex === 0}>
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>

                {currentQuestionIndex === questions.length - 1 ? (
                  <Button onClick={() => setShowConfirmDialog(true)}>Submit Quiz</Button>
                ) : (
                  <Button onClick={nextQuestion}>
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Question navigator sidebar */}
        <div className="hidden md:block w-64">
          <QuestionNavigator />
        </div>
      </div>

      {/* Submit confirmation dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Quiz?</DialogTitle>
            <DialogDescription>Are you sure you want to submit your quiz?</DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-muted">
                {answered} of {total} answered
              </Badge>

              {answered < total && (
                <div className="flex items-center text-amber-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  You have unanswered questions
                </div>
              )}
            </div>

            <p className="text-sm text-muted-foreground">Once submitted, you won't be able to change your answers.</p>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Continue Quiz
            </Button>
            <Button onClick={handleSubmitQuiz}>Submit Quiz</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
