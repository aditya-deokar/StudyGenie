"use client"

import { BookOpen, Calendar, CheckCircle, Clock, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

import { useDashboardStore } from "@/lib/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SummaryCards() {
  const { data } = useDashboardStore()
  const { summary } = data

  const cards = [
    {
      title: "Courses In Progress",
      value: summary.coursesInProgress,
      icon: BookOpen,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Courses Completed",
      value: summary.coursesCompleted,
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      title: "Interviews Taken",
      value: summary.interviewsTaken,
      icon: Calendar,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      title: "Completion Rate",
      value: `${summary.averageCompletionRate}%`,
      icon: TrendingUp,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      title: "Pending Tasks",
      value: summary.pendingTasks,
      icon: Clock,
      color: "text-rose-500",
      bgColor: "bg-rose-50",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.div
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {cards.map((card, index) => (
        <motion.div key={index} variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <div className={`${card.bgColor} ${card.color} p-2 rounded-full`}>
                <card.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
