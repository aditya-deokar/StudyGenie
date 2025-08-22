"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Filter, Search, TrendingDown, TrendingUp, Minus } from "lucide-react"

import { useDashboardStore } from "@/lib/store"
import { formatDate, getSkillLevelColor } from "@/lib/utils"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsPage() {
  const { data, setCurrentView } = useDashboardStore()
  const { skillProfile, analytics } = data

  useEffect(() => {
    // Set the current view to skills when this page loads
    setCurrentView("skills")
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

  const getProgressValue = (level: string): number => {
    switch (level) {
      case "Beginner":
        return 25
      case "Intermediate":
        return 50
      case "Advanced":
        return 75
      case "Expert":
        return 100
      default:
        return 0
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "Improving":
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case "Declining":
        return <TrendingDown className="h-4 w-4 text-red-500" />
      default:
        return <Minus className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-6"
  >
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Skills Profile</h1>
      <p className="text-muted-foreground">Track and improve your professional skills</p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search skills..." className="w-full pl-8" />
      </div>
      <Button variant="outline">
        <Filter className="mr-2 h-4 w-4" />
        Filter
      </Button>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-full md:col-span-2">
        <CardHeader>
          <CardTitle>Skill Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
              <span className="text-3xl font-bold">{skillProfile.allSkills.length}</span>
              <span className="text-sm text-muted-foreground">Skills Tracked</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
              <span className="text-3xl font-bold">{analytics.topSkills.length}</span>
              <span className="text-sm text-muted-foreground">Top Skills</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
              <span className="text-3xl font-bold">{analytics.weakestSkills.length}</span>
              <span className="text-sm text-muted-foreground">Skills to Improve</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-1">
        <CardHeader>
          <CardTitle>Active Learning</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
              <span className="text-3xl font-bold">{analytics.activeDays.last30Days}</span>
              <span className="text-sm text-muted-foreground">Active Days (Last 30 Days)</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
              <span className="text-3xl font-bold">{analytics.activeDays.last90Days}</span>
              <span className="text-sm text-muted-foreground">Active Days (Last 90 Days)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <Tabs defaultValue="all">
      <TabsList>
        <TabsTrigger value="all">All Skills</TabsTrigger>
        <TabsTrigger value="top">Top Skills</TabsTrigger>
        <TabsTrigger value="improve">Skills to Improve</TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="mt-6">
        <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
          {skillProfile.allSkills.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No skills tracked yet. Complete courses to build your skill profile!
            </div>
          ) : (
            skillProfile.allSkills.map((skill) => (
              <motion.div key={skill.skillName} variants={item}>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{skill.skillName}</h3>
                          <Badge className={getSkillLevelColor(skill.currentLevel)}>{skill.currentLevel}</Badge>
                          {getTrendIcon(skill.progressTrend)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Last assessed: {formatDate(skill.lastAssessed)}
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Proficiency</span>
                          <span>{skill.currentLevel}</span>
                        </div>
                        <Progress value={getProgressValue(skill.currentLevel)} className="h-2" />
                      </div>
                    </div>

                    {skill.evidence.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Evidence:</p>
                        <div className="flex flex-wrap gap-2">
                          {skill.evidence.map((item, index) => (
                            <Badge key={index} variant="outline">
                              {item.type}: {item.title}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>
      </TabsContent>

      <TabsContent value="top" className="mt-6">
        <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
          {analytics.topSkills.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No top skills identified yet. Complete more courses to build your profile!
            </div>
          ) : (
            analytics.topSkills.map((skill) => (
              <motion.div key={skill.skillName} variants={item}>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{skill.skillName}</h3>
                          <Badge className={getSkillLevelColor(skill.currentLevel)}>{skill.currentLevel}</Badge>
                          {getTrendIcon(skill.progressTrend)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Last assessed: {formatDate(skill.lastAssessed)}
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Proficiency</span>
                          <span>{skill.currentLevel}</span>
                        </div>
                        <Progress value={getProgressValue(skill.currentLevel)} className="h-2" />
                      </div>
                    </div>

                    {skill.evidence.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Evidence:</p>
                        <div className="flex flex-wrap gap-2">
                          {skill.evidence.map((item, index) => (
                            <Badge key={index} variant="outline">
                              {item.type}: {item.title}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>
      </TabsContent>

      <TabsContent value="improve" className="mt-6">
        <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
          {analytics.weakestSkills.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No skills to improve identified yet. Complete more assessments to get recommendations!
            </div>
          ) : (
            analytics.weakestSkills.map((skill) => (
              <motion.div key={skill.skillName} variants={item}>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{skill.skillName}</h3>
                          <Badge className={getSkillLevelColor(skill.currentLevel)}>{skill.currentLevel}</Badge>
                          {getTrendIcon(skill.progressTrend)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Last assessed: {formatDate(skill.lastAssessed)}
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Proficiency</span>
                          <span>{skill.currentLevel}</span>
                        </div>
                        <Progress value={getProgressValue(skill.currentLevel)} className="h-2" />
                      </div>
                    </div>

                    {skill.evidence.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Evidence:</p>
                        <div className="flex flex-wrap gap-2">
                          {skill.evidence.map((item, index) => (
                            <Badge key={index} variant="outline">
                              {item.type}: {item.title}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4">
                      <Button variant="outline" className="w-full">
                        Find Courses to Improve
                      </Button>
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
