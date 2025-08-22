"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  format,
  parseISO,
  subMonths,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns"
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react"

import { useDashboardStore } from "@/lib/store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { ActivityDay } from "@/lib/types"

export function ActivityHeatmap() {
  const { data } = useDashboardStore()
  const { activityHeatmap } = data
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState<ActivityDay | null>(null)

  // Get days for the current month view
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Navigation functions
  const previousMonth = () => setCurrentDate(subMonths(currentDate, 1))
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const goToToday = () => setCurrentDate(new Date())

  // Get activity level for a specific day
  const getActivityForDay = (day: Date): ActivityDay | undefined => {
    const formattedDate = format(day, "yyyy-MM-dd")
    return activityHeatmap.find((activity) => activity.date === formattedDate)
  }

  // Get color based on activity level
  const getActivityColor = (level: number): string => {
    switch (level) {
      case 0:
        return "bg-gray-100 dark:bg-gray-800"
      case 1:
        return "bg-green-100 dark:bg-green-900"
      case 2:
        return "bg-green-200 dark:bg-green-800"
      case 3:
        return "bg-green-300 dark:bg-green-700"
      case 4:
        return "bg-green-500 dark:bg-green-600"
      default:
        return "bg-gray-100 dark:bg-gray-800"
    }
  }

  // Get text description based on activity level
  const getActivityDescription = (level: number): string => {
    switch (level) {
      case 0:
        return "No activity"
      case 1:
        return "Low activity"
      case 2:
        return "Moderate activity"
      case 3:
        return "Significant activity"
      case 4:
        return "High activity"
      default:
        return "Unknown activity level"
    }
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="flex items-center">
            Activity Heatmap
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    This heatmap shows your daily learning activity. Darker colors indicate more activity. Activity is
                    calculated based on courses completed, time spent, interviews taken, and insights viewed.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
          <CardDescription>Track your learning consistency</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={previousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={goToToday}>
            Today
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center font-medium">{format(currentDate, "MMMM yyyy")}</div>

          {/* Day names */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-xs font-medium py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <motion.div
            className="grid grid-cols-7 gap-1"
            variants={container}
            initial="hidden"
            animate="show"
            key={format(currentDate, "yyyy-MM")}
          >
            {monthDays.map((day, i) => {
              const activityData = getActivityForDay(day)
              const activityLevel = activityData?.activityLevel || 0
              const isCurrentMonth = isSameMonth(day, currentDate)
              const isToday = isSameDay(day, new Date())
              const isSelected = selectedDay?.date === format(day, "yyyy-MM-dd")

              return (
                <TooltipProvider key={i}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div
                        variants={item}
                        className={`
                          aspect-square flex items-center justify-center rounded-md relative cursor-pointer
                          ${isCurrentMonth ? "" : "opacity-40"}
                          ${isSelected ? "ring-2 ring-primary" : ""}
                          ${isToday ? "ring-1 ring-primary" : ""}
                          ${getActivityColor(activityLevel)}
                          hover:ring-1 hover:ring-primary transition-all
                        `}
                        onClick={() =>
                          setSelectedDay(activityData || { date: format(day, "yyyy-MM-dd"), activityLevel: 0 })
                        }
                      >
                        <span className={`text-xs font-medium ${activityLevel > 2 ? "text-white" : ""}`}>
                          {format(day, "d")}
                        </span>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-sm">
                        <div className="font-medium">{format(day, "MMMM d, yyyy")}</div>
                        <div>{getActivityDescription(activityLevel)}</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })}
          </motion.div>

          {/* Activity level legend */}
          <div className="flex items-center justify-center space-x-2 pt-2">
            <span className="text-xs text-muted-foreground">Activity:</span>
            <div className="flex items-center space-x-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <div key={level} className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded ${getActivityColor(level)}`}></div>
                  <span className="text-[10px] text-muted-foreground">{level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected day details */}
          {selectedDay && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-muted rounded-md"
            >
              <div className="flex justify-between items-center">
                <div className="font-medium">{format(parseISO(selectedDay.date), "MMMM d, yyyy")}</div>
                <div
                  className={`px-2 py-1 rounded-full text-xs ${
                    selectedDay.activityLevel > 0
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  }`}
                >
                  {getActivityDescription(selectedDay.activityLevel)}
                </div>
              </div>
              {selectedDay.activityLevel > 0 ? (
                <div className="text-sm text-muted-foreground mt-2">
                  On this day, you were actively learning and improving your skills.
                </div>
              ) : (
                <div className="text-sm text-muted-foreground mt-2">No learning activity recorded for this day.</div>
              )}
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
