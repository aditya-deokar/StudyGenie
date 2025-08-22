"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, ExternalLink } from "lucide-react"

import { useDashboardStore } from "@/lib/store"
import { formatDate, getStatusColor } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function UpcomingInterviews() {
  const { data } = useDashboardStore()
  const { interviews } = data

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Interviews</CardTitle>
        <CardDescription>Practice interviews scheduled</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
          {interviews.scheduled.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">No interviews scheduled. Book one today!</div>
          ) : (
            interviews.scheduled.map((interview) => (
              <motion.div key={interview.id} variants={item} className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{interview.roleTitle}</div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    {interview.scheduledDate && formatDate(interview.scheduledDate)}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(interview.status)}>{interview.status}</Badge>
                  <Link href={`/interviews/${interview.id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))
          )}

          <Button variant="outline" className="w-full mt-4">
            Schedule New Interview
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  )
}
