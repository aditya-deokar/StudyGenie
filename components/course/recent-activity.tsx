import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BookOpen, CheckCircle, Clock, Trophy } from "lucide-react"

interface RecentActivityProps {
  className?: string
}

export function RecentActivity({ className }: RecentActivityProps) {
  // In a real app, this would come from an API or state management
  const activities = [
    {
      id: 1,
      type: "chapter_progress",
      title: "Completed section: Introduction to TypeScript Types",
      timestamp: "2 hours ago",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
    },
    {
      id: 2,
      type: "achievement",
      title: "Earned achievement: First Chapter Completed",
      timestamp: "2 hours ago",
      icon: <Trophy className="h-4 w-4 text-yellow-500" />,
    },
    {
      id: 3,
      type: "chapter_started",
      title: "Started chapter: Advanced Types and Generics",
      timestamp: "3 hours ago",
      icon: <BookOpen className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 4,
      type: "login",
      title: "Logged into the course platform",
      timestamp: "3 hours ago",
      icon: <Clock className="h-4 w-4 text-gray-500" />,
    },
  ]

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest course interactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="mt-0.5">{activity.icon}</div>
              <div>
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
