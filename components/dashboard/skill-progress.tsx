"use client"

import { motion } from "framer-motion"
import { TrendingDown, TrendingUp, Minus } from "lucide-react"

import { useDashboardStore } from "@/lib/store"
import { getSkillLevelColor } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function SkillProgress() {
  const { data } = useDashboardStore()
  const { analytics } = data

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  const getProgressValue = (level: string): number => {
    switch (level) {
      case "Beginner":
        return 25
      case "Intermediate":
        return 50
      case "Advanced":
        return 75
      case "Expert":
        return 100
      default:
        return 0
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "Improving":
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case "Declining":
        return <TrendingDown className="h-4 w-4 text-red-500" />
      default:
        return <Minus className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Skills</CardTitle>
        <CardDescription>Your strongest areas of expertise</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
          {analytics.topSkills.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">
              No skills tracked yet. Complete courses to build your skill profile!
            </div>
          ) : (
            analytics.topSkills.map((skill) => (
              <motion.div key={skill.skillName} variants={item} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{skill.skillName}</div>
                  <div className="flex items-center gap-2">
                    <Badge className={getSkillLevelColor(skill.currentLevel)}>{skill.currentLevel}</Badge>
                    {getTrendIcon(skill.progressTrend)}
                  </div>
                </div>
                <Progress value={getProgressValue(skill.currentLevel)} className="h-2" />
              </motion.div>
            ))
          )}
        </motion.div>
      </CardContent>
    </Card>
  )
}
