"use client"

import { Progress } from "../ui/progress"
import { motion } from "framer-motion"
import { useStore } from "@/lib/store"
import { useEffect, useState } from "react"

export function ChapterProgress() {
  const { readSections } = useStore()
  const [progress, setProgress] = useState(0)

  // Calculate progress based on read sections
  useEffect(() => {
    // In a real app, we would get the total number of sections from the API
    const totalSections = 3 // Hardcoded for this example (3 sections in our data)
    const completedSections = readSections.filter((id) => id.startsWith("TS_CH01")).length
    const calculatedProgress = Math.round((completedSections / totalSections) * 100)

    // Animate progress change
    setProgress(calculatedProgress)
  }, [readSections])

  return (
    <div className="flex items-center gap-2">
      <motion.div
        className="w-24"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "6rem" }}
        transition={{ duration: 0.5 }}
      >
        <Progress value={progress} className="h-2" />
      </motion.div>
      <motion.span
        className="text-xs font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={progress} // Re-animate when progress changes
      >
        {progress}%
      </motion.span>
    </div>
  )
}
