"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

import { useDashboardStore } from "@/lib/store"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { SummaryCards } from "@/components/dashboard/summary-cards"
import { CourseProgress } from "@/components/dashboard/course-progress"
import { UpcomingInterviews } from "@/components/dashboard/upcoming-interviews"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { SkillProgress } from "@/components/dashboard/skill-progress"
import { InsightsPreview } from "@/components/dashboard/insights-preview"
import { ActivityHeatmap } from "@/components/dashboard/activity-heatmap"

export default function DashboardPage() {
  const { ui, setCurrentView } = useDashboardStore()

  useEffect(() => {
    // Set the current view to dashboard when this page loads
    setCurrentView("dashboard")
  }, [setCurrentView])

  return (
    <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                    <p className="text-muted-foreground">Here's an overview of your learning progress</p>
                  </div>
      
                  <SummaryCards />
      
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <CourseProgress />
                    <div className="space-y-6 lg:col-span-1">
                      <UpcomingInterviews />
                      <SkillProgress />
                    </div>
                  </div>
      
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <InsightsPreview />
                    <RecentActivity />
                  </div>
      
                  <div className="grid gap-6 md:grid-cols-1">
                    <ActivityHeatmap />
                  </div>
                </motion.div>
  )
}
