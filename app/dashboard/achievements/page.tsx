"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Search, Trophy } from "lucide-react"

import { useDashboardStore } from "@/lib/store"
import { formatDate } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// Mock data for achievements
const mockAchievements = [
  {
    id: "ach-001",
    name: "Cloud Beginner",
    description: "Completed Introduction to Cloud Computing",
    iconUrl: "/placeholder.svg?height=64&width=64",
    achievedDate: new Date(Date.now() - 604800000).toISOString(),
    category: "Course",
  },
  {
    id: "ach-002",
    name: "Python Enthusiast",
    description: "Completed 3 Python-related courses",
    iconUrl: "/placeholder.svg?height=64&width=64",
    achievedDate: new Date(Date.now() - 1209600000).toISOString(),
    category: "Course",
  },
  {
    id: "ach-003",
    name: "Interview Ready",
    description: "Completed 5 mock interviews",
    iconUrl: "/placeholder.svg?height=64&width=64",
    achievedDate: new Date(Date.now() - 2592000000).toISOString(),
    category: "Interview",
  },
]

// Mock data for locked achievements
const mockLockedAchievements = [
  {
    id: "ach-004",
    name: "React Master",
    description: "Complete all React-related courses",
    iconUrl: "/placeholder.svg?height=64&width=64",
    progress: 60,
    category: "Course",
  },
  {
    id: "ach-005",
    name: "Perfect Score",
    description: "Get a 100% score on any interview",
    iconUrl: "/placeholder.svg?height=64&width=64",
    progress: 85,
    category: "Interview",
  },
  {
    id: "ach-006",
    name: "Learning Streak",
    description: "Learn for 7 consecutive days",
    iconUrl: "/placeholder.svg?height=64&width=64",
    progress: 40,
    category: "Activity",
  },
  {
    id: "ach-007",
    name: "Skill Master",
    description: "Reach Expert level in any skill",
    iconUrl: "/placeholder.svg?height=64&width=64",
    progress: 75,
    category: "Skill",
  },
]

export default function AchievementsPage() {
  const { data } = useDashboardStore()
  const { achievements } = data
  const [filter, setFilter] = useState("all")

  // Combine mock achievements with data from store
  const allAchievements = [...achievements, ...mockAchievements]

  // Filter achievements based on category
  const filteredAchievements =
    filter === "all" ? allAchievements : allAchievements.filter((achievement) => achievement.category === filter)

  // Filter locked achievements based on category
  const filteredLockedAchievements =
    filter === "all"
      ? mockLockedAchievements
      : mockLockedAchievements.filter((achievement) => achievement.category === filter)

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
      <h1 className="text-3xl font-bold tracking-tight">Achievements</h1>
      <p className="text-muted-foreground">Track your progress and unlock rewards</p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search achievements..." className="w-full pl-8" />
      </div>
      <div className="flex gap-2">
        <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
          All
        </Button>
        <Button variant={filter === "Course" ? "default" : "outline"} onClick={() => setFilter("Course")}>
          Courses
        </Button>
        <Button variant={filter === "Interview" ? "default" : "outline"} onClick={() => setFilter("Interview")}>
          Interviews
        </Button>
        <Button variant={filter === "Skill" ? "default" : "outline"} onClick={() => setFilter("Skill")}>
          Skills
        </Button>
      </div>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-full md:col-span-2">
        <CardHeader>
          <CardTitle>Achievement Stats</CardTitle>
          <CardDescription>Your progress and milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
              <Trophy className="h-8 w-8 text-amber-500 mb-2" />
              <span className="text-3xl font-bold">{allAchievements.length}</span>
              <span className="text-sm text-muted-foreground">Achievements Earned</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
              <Award className="h-8 w-8 text-purple-500 mb-2" />
              <span className="text-3xl font-bold">{mockLockedAchievements.length}</span>
              <span className="text-sm text-muted-foreground">Achievements In Progress</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold">
                {Math.round(
                  (allAchievements.length / (allAchievements.length + mockLockedAchievements.length)) * 100,
                )}
                %
              </div>
              <span className="text-sm text-muted-foreground">Completion Rate</span>
              <Progress
                value={
                  (allAchievements.length / (allAchievements.length + mockLockedAchievements.length)) * 100
                }
                className="h-2 w-full mt-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <Tabs defaultValue="unlocked">
      <TabsList>
        <TabsTrigger value="unlocked">Unlocked ({filteredAchievements.length})</TabsTrigger>
        <TabsTrigger value="locked">In Progress ({filteredLockedAchievements.length})</TabsTrigger>
      </TabsList>

      <TabsContent value="unlocked" className="mt-6">
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredAchievements.length === 0 ? (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No achievements unlocked yet. Keep learning!
            </div>
          ) : (
            filteredAchievements.map((achievement, i) => (
              <motion.div key={i} variants={item}>
                <Card className="overflow-hidden">
                  <div className="bg-muted p-6 flex justify-center">
                    <img
                      src={achievement.iconUrl || "/placeholder.svg"}
                      alt={achievement.name}
                      className="h-16 w-16"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{achievement.name}</CardTitle>
                      <Badge>{achievement.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <div className="text-xs text-muted-foreground">
                      Achieved on {formatDate(achievement.achievedDate)}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>
      </TabsContent>

      <TabsContent value="locked" className="mt-6">
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredLockedAchievements.length === 0 ? (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No achievements in progress for this category.
            </div>
          ) : (
            filteredLockedAchievements.map((achievement,i) => (
              <motion.div key={i} variants={item}>
                <Card className="overflow-hidden">
                  <div className="bg-muted p-6 flex justify-center relative">
                    <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                      <Badge variant="outline" className="bg-background">
                        In Progress
                      </Badge>
                    </div>
                    <img
                      src={achievement.iconUrl || "/placeholder.svg"}
                      alt={achievement.name}
                      className="h-16 w-16 opacity-50"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{achievement.name}</CardTitle>
                      <Badge variant="outline">{achievement.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-2" />
                    </div>
                  </CardContent>
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
