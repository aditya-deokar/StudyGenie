import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Clock, GraduationCap, BookOpen } from "lucide-react"

interface CourseOverviewProps {
  className?: string
}

export function CourseOverview({ className }: CourseOverviewProps) {
  // In a real app, this would come from an API or database
  const courseData = {
    CourseName: "Advanced TypeScript Programming",
    Description: "A comprehensive course covering advanced concepts and techniques in TypeScript development.",
    Duration: "3 Hours",
    NoOfChapters: 5,
    level: "Advanced",
    category: "Programming",
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">{courseData.CourseName}</CardTitle>
            <CardDescription className="mt-2 text-base">{courseData.Description}</CardDescription>
          </div>
          <Badge variant="outline" className="text-sm font-medium">
            {courseData.level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{courseData.Duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{courseData.NoOfChapters} Chapters</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{courseData.category}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
