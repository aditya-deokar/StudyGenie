"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { BookOpen, Clock, Filter, Plus, Search } from "lucide-react"

import { useDashboardStore } from "@/lib/store"
import { formatDuration, getStatusColor } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function CoursesPage() {
  const { data, setCurrentView } = useDashboardStore()
  const { courses } = data

  useEffect(() => {
    // Set the current view to courses when this page loads
    setCurrentView("courses")
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
                <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
                <p className="text-muted-foreground">Browse and manage your learning materials</p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Generate New Course
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search courses..." className="w-full pl-8" />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <Tabs defaultValue="in-progress">
              <TabsList>
                <TabsTrigger value="in-progress">In Progress ({courses.inProgress.length})</TabsTrigger>
                <TabsTrigger value="completed">Completed ({courses.completed.length})</TabsTrigger>
                <TabsTrigger value="suggested">Suggested ({courses.suggested.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="in-progress" className="mt-6">
                <motion.div
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {courses.inProgress.length === 0 ? (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                      No courses in progress. Start learning today!
                    </div>
                  ) : (
                    courses.inProgress.map((course) => (
                      <motion.div key={course.id} variants={item}>
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg">{course.title}</CardTitle>
                              <Badge className={getStatusColor(course.status)}>{course.status}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span className="font-medium">{course.progressPercent}%</span>
                              </div>
                              <Progress value={course.progressPercent} className="h-2" />
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>
                                  {course.modulesCompleted} of {course.modulesTotal} modules
                                </span>
                                <div className="flex items-center">
                                  <Clock className="mr-1 h-3 w-3" />
                                  {formatDuration(course.estimatedDurationMinutes)}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="pt-2">
                            <Button variant="default" className="w-full">
                              Continue Learning
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
                  {courses.completed.length === 0 ? (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                      No completed courses yet. Keep learning!
                    </div>
                  ) : (
                    courses.completed.map((course) => (
                      <motion.div key={course.id} variants={item}>
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg">{course.title}</CardTitle>
                              <Badge className={getStatusColor(course.status)}>{course.status}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span className="font-medium">100%</span>
                              </div>
                              <Progress value={100} className="h-2" />
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>
                                  {course.modulesTotal} of {course.modulesTotal} modules
                                </span>
                                <div className="flex items-center">
                                  <Clock className="mr-1 h-3 w-3" />
                                  {formatDuration(course.estimatedDurationMinutes)}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="pt-2">
                            <Button variant="outline" className="w-full">
                              Review Course
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </TabsContent>

              <TabsContent value="suggested" className="mt-6">
                <motion.div
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {courses.suggested.length === 0 ? (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                      No suggested courses available. Check back later!
                    </div>
                  ) : (
                    courses.suggested.map((course) => (
                      <motion.div key={course.id} variants={item}>
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg">{course.title}</CardTitle>
                              <Badge className={getStatusColor(course.status)}>{course.status}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                            <div className="space-y-2">
                              <div className="flex items-center gap-1 text-sm">
                                <BookOpen className="h-4 w-4 text-muted-foreground" />
                                <span>{course.modulesTotal} modules</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>{formatDuration(course.estimatedDurationMinutes)}</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="pt-2">
                            <Button variant="default" className="w-full">
                              Start Course
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
