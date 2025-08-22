import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Clock, GraduationCap, BookOpen } from "lucide-react"
import { CourseListType } from "@/types/courseList"

interface CourseOverviewProps {
  courseData?: CourseListType,
  className?: string
}

export function CourseOverview({courseData, className }: CourseOverviewProps) {
  

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">{courseData?.name}</CardTitle>
            <CardDescription className="mt-2 text-base">{courseData?.courseOutput?.description}</CardDescription>
          </div>
          <Badge variant="outline" className="text-sm font-medium">
            {courseData?.level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{courseData?.courseOutput?.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{courseData?.courseOutput?.noOfChapters} Chapters</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{courseData?.category}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
