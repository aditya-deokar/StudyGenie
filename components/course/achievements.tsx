import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Award, Medal, Trophy } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

interface AchievementsProps {
  className?: string
}

export function Achievements({ className }: AchievementsProps) {
  // In a real app, this would come from an API or state management
  const achievements = [
    {
      id: 1,
      title: "First Chapter Completed",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      unlocked: true,
    },
    {
      id: 2,
      title: "Perfect Quiz Score",
      icon: <Trophy className="h-8 w-8 text-gray-400" />,
      unlocked: false,
    },
    {
      id: 3,
      title: "Code Challenge Master",
      icon: <Medal className="h-8 w-8 text-gray-400" />,
      unlocked: false,
    },
  ]

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
        <CardDescription>Track your learning milestones</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          {achievements.slice(0, 3).map((achievement) => (
            <div
              key={achievement.id}
              className={cn(
                "flex items-center gap-3 rounded-lg border p-3",
                achievement.unlocked ? "bg-muted/50" : "opacity-70",
              )}
            >
              {achievement.icon}
              <div>
                <h4 className="font-medium">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground">{achievement.unlocked ? "Unlocked" : "Locked"}</p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" asChild className="w-full">
          <Link href="/achievements">View All Achievements</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
