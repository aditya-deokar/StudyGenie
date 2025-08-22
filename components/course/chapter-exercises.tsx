"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { useState } from "react"
import { motion } from "framer-motion"
import { useToast } from "../ui/use-toast"

import { useStore } from "@/lib/store"
import { CheckCircle, Save } from "lucide-react"
import { ContentType } from "@/types/chapters"

interface ChapterExercisesProps {
  chapter: ContentType 
}

export function ChapterExercises({ chapter }: ChapterExercisesProps) {
  const { toast } = useToast()
  const { completedExercises, completeExercise } = useStore()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <Card>
        <CardHeader>
          <CardTitle>Practice Exercises</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {chapter?.contentSections?.map(
            (section) =>
              section.exercises &&
              section.exercises.length > 0 && (
                <motion.div key={section.sectionId} variants={itemVariants} className="space-y-4">
                  <h3 className="text-lg font-semibold">{section.heading}</h3>

                  {section?.exercises?.map((exercise) => (
                    <ExerciseItem
                      key={exercise.exerciseId}
                      exercise={exercise}
                      isCompleted={completedExercises.includes(exercise.exerciseId)}
                      onComplete={() => {
                        completeExercise(exercise.exerciseId)
                        toast({
                          title: "Exercise completed",
                          description: `Great job completing this exercise!`,
                        })
                      }}
                    />
                  ))}
                </motion.div>
              ),
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface ExerciseItemProps {
  exercise: any
  isCompleted: boolean
  onComplete: () => void
}

function ExerciseItem({ exercise, isCompleted, onComplete }: ExerciseItemProps) {
  const [answer, setAnswer] = useState("")

  return (
    <motion.div
      className="border rounded-lg p-4 space-y-3"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">{exercise.exerciseText}</span>
          <span className="text-xs px-2 py-1 bg-muted rounded-full inline-block w-fit">{exercise.bloomLevel}</span>
        </div>
        {isCompleted && <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />}
      </div>

      {exercise.exerciseCode && (
        <pre className="text-xs overflow-auto p-2 bg-black text-white rounded-md">
          <code>{exercise.exerciseCode}</code>
        </pre>
      )}

      <Textarea
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="min-h-[100px]"
        disabled={isCompleted}
      />

      <Button
        onClick={onComplete}
        disabled={answer.trim().length === 0 || isCompleted}
        className="flex items-center gap-1"
      >
        <Save className="h-4 w-4" />
        {isCompleted ? "Completed" : "Submit Answer"}
      </Button>
    </motion.div>
  )
}
