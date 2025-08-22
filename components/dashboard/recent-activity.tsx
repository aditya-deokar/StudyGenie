"use client"

import { motion } from "framer-motion"

import { useDashboardStore } from "@/lib/store"
import { formatTimeAgo } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentActivity() {
  const { data } = useDashboardStore()
  const { recentActivity } = data

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "COURSE_GENERATED":
      case "COURSE_STARTED":
      case "MODULE_COMPLETED":
      case "COURSE_COMPLETED":
        return "📚"
      case "INTERVIEW_SCHEDULED":
      case "INTERVIEW_COMPLETED":
      case "INTERVIEW_FEEDBACK_READY":
        return "🎯"
      case "INSIGHT_VIEWED":
        return "💡"
      case "ACHIEVEMENT_UNLOCKED":
        return "🏆"
      default:
        return "📝"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest learning activities</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
          {recentActivity.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">
              No recent activity. Start learning to see your progress!
            </div>
          ) : (
            recentActivity.map((activity) => (
              <motion.div key={activity.id} variants={item} className="flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  <span className="text-lg">{getActivityIcon(activity.type)}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">{formatTimeAgo(activity.timestamp)}</p>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </CardContent>
    </Card>
  )
}
