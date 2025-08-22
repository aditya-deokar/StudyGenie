"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { chapterData } from "@/lib/course-data"
import { ExternalLink } from "lucide-react"
import { Button } from "../ui/button"
import { LearningResourceType } from "@/types/chapters"

interface ChapterResourcesProps {
  chapter: LearningResourceType[]
}

export function ChapterResources({ chapter }: ChapterResourcesProps) {
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
          <CardTitle>Learning Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {chapter?.map((resource) => (
              <motion.div
                key={resource.resourceId}
                variants={itemVariants}
                className="border rounded-lg p-4 space-y-2"
                whileHover={{ scale: 1.01, backgroundColor: "rgba(0,0,0,0.02)" }}
              >
                <h3 className="font-medium">{resource.resourceName}</h3>
                <p className="text-sm text-muted-foreground">{resource.resourceDescription}</p>
                <Button variant="outline" size="sm" asChild className="mt-2">
                  <a
                    href={resource.resourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Resource
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
