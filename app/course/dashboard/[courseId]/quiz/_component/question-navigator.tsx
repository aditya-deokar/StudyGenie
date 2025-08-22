"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Flag } from "lucide-react"
import { useQuizStore } from "@/lib/store"

export function QuestionNavigator() {
  const { questions, currentQuestionIndex, answers, flaggedQuestions, goToQuestion } = useQuizStore()

  return (
    <Card className="sticky top-20">
      <CardHeader className="py-3">
        <CardTitle className="text-sm font-medium">Question Navigator</CardTitle>
      </CardHeader>
      <CardContent className="py-2">
        <div className="grid grid-cols-5 gap-2">
          {questions.map((question, index) => {
            const isAnswered = !!answers[question.id]
            const isFlagged = flaggedQuestions.includes(question.id)
            const isCurrent = index === currentQuestionIndex

            return (
              <Button
                key={question.id}
                variant={isCurrent ? "default" : isAnswered ? "secondary" : "outline"}
                size="sm"
                className={`relative h-8 w-8 p-0 font-normal ${isCurrent ? "ring-2 ring-primary ring-offset-2" : ""}`}
                onClick={() => goToQuestion(index)}
              >
                {index + 1}
                {isFlagged && <Flag className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500" />}
              </Button>
            )
          })}
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
            <span>Current Question</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="h-3 w-3 rounded-full bg-secondary"></div>
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="h-3 w-3 rounded-full border"></div>
            <span>Unanswered</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Flag className="h-3 w-3 text-yellow-500" />
            <span>Flagged for Review</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
