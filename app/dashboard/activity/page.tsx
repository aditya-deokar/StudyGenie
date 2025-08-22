"use client"
import { motion } from "framer-motion"
import { BarChart3, Calendar, Clock, LineChart } from "lucide-react"

import { useDashboardStore } from "@/lib/store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActivityHeatmap } from "@/components/dashboard/activity-heatmap"

export default function ActivityPage() {
  const { data } = useDashboardStore()
  const { analytics } = data

  // Animation variants
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
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Activity Tracking</h1>
              <p className="text-muted-foreground">Monitor your learning patterns and progress over time</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Active Days (Last 30)</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.activeDays.last30Days}</div>
                  <p className="text-xs text-muted-foreground">
                    {Math.round((analytics.activeDays.last30Days / 30) * 100)}% activity rate
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Active Days (Last 90)</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.activeDays.last90Days}</div>
                  <p className="text-xs text-muted-foreground">
                    {Math.round((analytics.activeDays.last90Days / 90) * 100)}% activity rate
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7 days</div>
                  <p className="text-xs text-muted-foreground">Your longest streak was 14 days</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Avg. Daily Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42 min</div>
                  <p className="text-xs text-muted-foreground">Up 15% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="heatmap">
              <TabsList>
                <TabsTrigger value="heatmap">Activity Heatmap</TabsTrigger>
                <TabsTrigger value="trends">Activity Trends</TabsTrigger>
                <TabsTrigger value="breakdown">Activity Breakdown</TabsTrigger>
              </TabsList>
              <TabsContent value="heatmap" className="mt-6">
                <ActivityHeatmap />
              </TabsContent>
              <TabsContent value="trends" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Trends</CardTitle>
                    <CardDescription>Your learning activity over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <div className="text-muted-foreground">Activity trends visualization coming soon</div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="breakdown" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Breakdown</CardTitle>
                    <CardDescription>How you spend your learning time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <div className="text-muted-foreground">Activity breakdown visualization coming soon</div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Time Spent</CardTitle>
                  <CardDescription>Hours spent learning per week</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <div className="flex h-full items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Activity by Day of Week</CardTitle>
                  <CardDescription>Your most productive days</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <div className="flex h-full items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
  )
}
