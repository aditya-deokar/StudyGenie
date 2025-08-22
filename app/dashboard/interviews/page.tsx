"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Filter, Plus, Search, Video } from "lucide-react"

import { useDashboardStore } from "@/lib/store"
import { formatDate, getStatusColor } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function InterviewsPage() {
  const { data, setCurrentView } = useDashboardStore()
  const { interviews } = data

  useEffect(() => {
    // Set the current view to interviews when this page loads
    setCurrentView("interviews")
  }, [setCurrentView])

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Interviews</h1>
                <p className="text-muted-foreground">Practice and prepare for your next job interview</p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Schedule Interview
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search interviews..." className="w-full pl-8" />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <Tabs defaultValue="scheduled">
              <TabsList>
                <TabsTrigger value="scheduled">Scheduled ({interviews.scheduled.length})</TabsTrigger>
                <TabsTrigger value="completed">Completed ({interviews.completed.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="scheduled" className="mt-6">
                <motion.div
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {interviews.scheduled.length === 0 ? (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                      No interviews scheduled. Book one today!
                    </div>
                  ) : (
                    interviews.scheduled.map((interview) => (
                      <motion.div key={interview.id} variants={item}>
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg">{interview.roleTitle}</CardTitle>
                              <Badge className={getStatusColor(interview.status)}>{interview.status}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="space-y-4">
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>
                                  {interview.scheduledDate ? formatDate(interview.scheduledDate) : "Not scheduled"}
                                </span>
                              </div>

                              <div>
                                <p className="text-sm font-medium mb-1">Skills Assessed:</p>
                                <div className="flex flex-wrap gap-2">
                                  {interview.skillsAssessed.map((skill, index) => (
                                    <Badge key={index} variant="outline">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="pt-2">
                            <Button variant="default" className="w-full">
                              <Video className="mr-2 h-4 w-4" />
                              Join Interview
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </TabsContent>

              <TabsContent value="completed" className="mt-6">
                <motion.div
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {interviews.completed.length === 0 ? (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                      No completed interviews yet. Practice makes perfect!
                    </div>
                  ) : (
                    interviews.completed.map((interview) => (
                      <motion.div key={interview.id} variants={item}>
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg">{interview.roleTitle}</CardTitle>
                              <Badge className={getStatusColor(interview.status)}>{interview.status}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="space-y-4">
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>
                                  {interview.completedDate ? formatDate(interview.completedDate) : "Not completed"}
                                </span>
                              </div>

                              {interview.overallScore && (
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-green-500 rounded-full"
                                      style={{ width: `${interview.overallScore}%` }}
                                    />
                                  </div>
                                  <span className="text-sm font-medium">{interview.overallScore}%</span>
                                </div>
                              )}

                              {interview.feedbackSummary && (
                                <div>
                                  <p className="text-sm font-medium mb-1">Feedback:</p>
                                  <p className="text-sm text-muted-foreground">{interview.feedbackSummary}</p>
                                </div>
                              )}
                            </div>
                          </CardContent>
                          <CardFooter className="pt-2">
                            <Button variant="outline" className="w-full">
                              View Detailed Feedback
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
  )
}
