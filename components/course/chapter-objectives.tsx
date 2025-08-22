"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { chapterData } from "@/lib/course-data"
import { CheckCircle } from "lucide-react"
import { useStore } from "@/lib/store"

interface ChapterObjectivesProps {
  chapterId: string
}

export function ChapterObjectives({ chapterId }: ChapterObjectivesProps) {
  const { completedObjectives, completeObjective } = useStore()

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
          <CardTitle>Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {chapterData.learningObjectives?.map((objective, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 p-3 border rounded-lg cursor-pointer"
                whileHover={{ scale: 1.01, backgroundColor: "rgba(0,0,0,0.02)" }}
                onClick={() => completeObjective(`objective-${index}`)}
              >
                <div className="mt-0.5">
                  {completedObjectives.includes(`objective-${index}`) ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <div className="h-5 w-5 border-2 rounded-full" />
                  )}
                </div>
                <div>
                  <p className="text-sm">{objective.objectiveText}</p>
                  <p className="text-xs text-muted-foreground mt-1">Bloom's Level: {objective.bloomLevel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
