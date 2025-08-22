"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, ExternalLink } from "lucide-react"

import { useDashboardStore } from "@/lib/store"
import { formatTimeAgo, formatDuration, getStatusColor } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function CourseProgress() {
  const { data } = useDashboardStore()
  const { courses } = data

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div>
          <CardTitle>Course Progress</CardTitle>
          <CardDescription>Your ongoing learning journey</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="ml-auto">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
          {courses.inProgress.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">No courses in progress. Start learning today!</div>
          ) : (
            courses.inProgress.map((course) => (
              <motion.div key={course.id} variants={item} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">{course.title}</div>
                    <Badge className={getStatusColor(course.status)}>{course.status}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    Last accessed {formatTimeAgo(course.lastAccessed)}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Progress value={course.progressPercent} className="h-2" />
                  <span className="text-sm font-medium">{course.progressPercent}%</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="text-muted-foreground">
                    {course.modulesCompleted} of {course.modulesTotal} modules completed
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">{formatDuration(course.estimatedDurationMinutes)}</span>
                    <Link href={`/courses/${course.id}`}>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </CardContent>
    </Card>
  )
}
