import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { CheckCircle, Clock, Play } from "lucide-react"
import Link from "next/link"
import { Chapter } from "@/types/courseOutput"


interface CourseChaptersProps {
  chapters?:Chapter[]
  className?: string
}

export function CourseChapters({chapters, className }: CourseChaptersProps) {
  

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Course Chapters</CardTitle>
        <CardDescription>All chapters in this course</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {chapters?.map((chapter, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{chapter.ChapterName}</h3>
                  {/* {chapter.completed && <CheckCircle className="h-4 w-4 text-green-500" />} */}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{chapter.About}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{chapter.duration}</span>
                  </div>
                  <div>
                    {/* {chapter.progress > 0 ? <span>{chapter.progress}% complete</span> : <span>Not started</span>} */}
                  </div>
                </div>
              </div>
              <Button asChild size="sm" className="mt-2 sm:mt-0">
                <Link href={`/chapters/${index +1}`} className="flex items-center gap-1">
                  <Play className="h-3.5 w-3.5" />
                  {/* {chapter.progress > 0 && chapter.progress < 100 ? "Continue" : chapter.completed ? "Review" : "Start"} */}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
