import type React from "react"
import { Award, BookOpen, CheckCircle, Medal, Star, Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Progress } from "../ui/progress"

export function AchievementsList() {
  // In a real app, this would come from an API or state management
  const achievements = [
    {
      id: 1,
      title: "First Chapter Completed",
      description: "Complete your first chapter",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      unlocked: true,
      category: "progress",
    },
    {
      id: 2,
      title: "Perfect Quiz Score",
      description: "Score 100% on any quiz",
      icon: <Trophy className="h-8 w-8 text-gray-400" />,
      unlocked: false,
      category: "quiz",
    },
    {
      id: 3,
      title: "Code Challenge Master",
      description: "Complete all code challenges in a chapter",
      icon: <Medal className="h-8 w-8 text-gray-400" />,
      unlocked: false,
      category: "challenge",
    },
    {
      id: 4,
      title: "Halfway There",
      description: "Complete 50% of the course",
      icon: <CheckCircle className="h-8 w-8 text-gray-400" />,
      unlocked: false,
      category: "progress",
    },
    {
      id: 5,
      title: "TypeScript Expert",
      description: "Complete the entire course",
      icon: <Star className="h-8 w-8 text-gray-400" />,
      unlocked: false,
      category: "progress",
    },
    {
      id: 6,
      title: "Quick Learner",
      description: "Complete a chapter in under 30 minutes",
      icon: <BookOpen className="h-8 w-8 text-gray-400" />,
      unlocked: false,
      category: "challenge",
    },
  ]

  const unlockedCount = achievements.filter((a) => a.unlocked).length
  const totalCount = achievements.length
  const progressPercentage = Math.round((unlockedCount / totalCount) * 100)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Achievement Progress</CardTitle>
          <CardDescription>
            You've unlocked {unlockedCount} out of {totalCount} achievements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{progressPercentage}% Complete</span>
              <span className="text-sm text-muted-foreground">
                {unlockedCount}/{totalCount} Achievements
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
          <TabsTrigger value="challenge">Challenge</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="progress" className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements
              .filter((a) => a.category === "progress")
              .map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="quiz" className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements
              .filter((a) => a.category === "quiz")
              .map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="challenge" className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements
              .filter((a) => a.category === "challenge")
              .map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface AchievementCardProps {
  achievement: {
    id: number
    title: string
    description: string
    icon: React.ReactNode
    unlocked: boolean
    category: string
  }
}

function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <Card className={achievement.unlocked ? "" : "opacity-70"}>
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
        {achievement.icon}
        <div>
          <CardTitle className="text-base">{achievement.title}</CardTitle>
          <CardDescription>{achievement.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-xs font-medium">
          {achievement.unlocked ? (
            <span className="text-green-500 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" /> Unlocked
            </span>
          ) : (
            <span className="text-muted-foreground">Locked</span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
