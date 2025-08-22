"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, Clock, FileQuestion } from "lucide-react"

export default function QuizInstructions() {
  const router = useRouter()
  const [agreed, setAgreed] = useState(false)
  const params = useParams();
  const courseId = params?.courseId as string;

  const startQuiz = () => {
    if (agreed) {
   
      router.push(`/course/dashboard/${courseId}/quiz/active`)
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="border-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Assessment</CardTitle>
              <CardDescription>Please review the instructions before starting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <FileQuestion className="h-8 w-8 mb-2 text-primary" />
                  <p className="text-lg font-medium">20 Questions</p>
                  <p className="text-sm text-center text-muted-foreground">Multiple choice format</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Clock className="h-8 w-8 mb-2 text-primary" />
                  <p className="text-lg font-medium">30 Minutes</p>
                  <p className="text-sm text-center text-muted-foreground">Time limit for completion</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <AlertCircle className="h-8 w-8 mb-2 text-primary" />
                  <p className="text-lg font-medium">70% to Pass</p>
                  <p className="text-sm text-center text-muted-foreground">Minimum passing score</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Quiz Rules:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You can navigate between questions freely during the quiz.</li>
                  <li>Your answers are saved automatically as you progress.</li>
                  <li>You can flag questions to review them later.</li>
                  <li>Once the time expires, the quiz will be automatically submitted.</li>
                  <li>You can submit the quiz early if you finish before the time limit.</li>
                </ul>
              </div>

              <div className="flex items-start space-x-2 pt-4">
                <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked === true)} />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I understand the instructions and am ready to begin the quiz
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => router.push("/dashboard/course")}>
                Back to Dashboard
              </Button>
              <Button onClick={startQuiz} disabled={!agreed}>
                Start Quiz
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
