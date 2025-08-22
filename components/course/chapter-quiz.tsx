"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "../ui/use-toast"
import { chapterData } from "@/lib/course-data"
import { useStore } from "@/lib/store"
import { AlertCircle, CheckCircle, ChevronRight, XCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"

interface ChapterQuizProps {
  chapterId: string
}

export function ChapterQuiz({ chapterId }: ChapterQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const { toast } = useToast()
  const { completeQuiz, completedQuizzes } = useStore()

  const isQuizCompleted = completedQuizzes.includes(chapterId)
  const questions = chapterData.assessmentQuestions || []
  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[currentQuestionIndex] = answerIndex
    setSelectedAnswers(newSelectedAnswers)
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Calculate score
      let correctAnswers = 0
      questions.forEach((question, index) => {
        if (selectedAnswers[index] === question.correctAnswerIndex) {
          correctAnswers++
        }
      })

      const finalScore = Math.round((correctAnswers / questions.length) * 100)
      setScore(finalScore)
      setIsSubmitted(true)

      if (!isQuizCompleted) {
        completeQuiz(chapterId, finalScore)
        toast({
          title: "Quiz completed!",
          description: `You scored ${finalScore}% on this quiz.`,
        })
      }
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers([])
    setIsSubmitted(false)
    setScore(null)
  }

  if (!questions.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Chapter Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No quiz questions available for this chapter.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Chapter Quiz</CardTitle>
            {isQuizCompleted && (
              <div className="flex items-center gap-1 text-sm text-green-500">
                <CheckCircle className="h-4 w-4" />
                <span>Completed</span>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="text-center py-6">
                  <h3 className="text-2xl font-bold">Quiz Results</h3>
                  <div className="mt-4 text-4xl font-bold">{score}%</div>
                  <p className="mt-2 text-muted-foreground">
                    {score && score >= 70 ? "Great job!" : "Keep practicing!"}
                  </p>
                </div>

                <div className="space-y-4">
                  {questions.map((question, index) => {
                    const isCorrect = selectedAnswers[index] === question.correctAnswerIndex

                    return (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          {isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          )}
                          <div>
                            <p className="font-medium">{question.questionText}</p>
                            <p className="text-sm mt-2">
                              Your answer:{" "}
                              <span className={isCorrect ? "text-green-500" : "text-red-500"}>
                                {question.options[selectedAnswers[index]]}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p className="text-sm mt-1">
                                Correct answer:{" "}
                                <span className="text-green-500">{question.options[question.correctAnswerIndex]}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Button onClick={resetQuiz} className="w-full">
                  Retake Quiz
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="question"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  <span className="text-xs px-2 py-1 bg-muted rounded-full">{currentQuestion.bloomLevel}</span>
                </div>

                <div className="py-2">
                  <h3 className="text-lg font-medium">{currentQuestion.questionText}</h3>
                </div>

                <RadioGroup
                  value={selectedAnswers[currentQuestionIndex]?.toString()}
                  onValueChange={(value:any) => handleAnswerSelect(Number.parseInt(value))}
                >
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 py-2">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="text-sm">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {selectedAnswers[currentQuestionIndex] === undefined && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Please select an answer</AlertTitle>
                    <AlertDescription>You need to select an answer before proceeding.</AlertDescription>
                  </Alert>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>

        {!isSubmitted && (
          <CardFooter>
            <Button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestionIndex] === undefined}
              className="ml-auto flex items-center gap-1"
            >
              {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  )
}
