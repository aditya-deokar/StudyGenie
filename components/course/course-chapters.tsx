import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { CheckCircle, Clock, Play } from "lucide-react"
import Link from "next/link"

interface CourseChaptersProps {
  className?: string
}

export function CourseChapters({ className }: CourseChaptersProps) {
  // In a real app, this would come from an API or database
  const chapters = [
    {
      id: "TS_CH01",
      ChapterName: "Advanced Types and Generics",
      About: "Explore advanced type manipulations, conditional types, mapped types, and advanced generic patterns.",
      duration: "30 minutes",
      completed: true,
      progress: 100,
    },
    {
      id: "chapter-2",
      ChapterName: "Decorators and Metadata",
      About: "Learn how to use decorators to add metadata and modify class behavior at runtime.",
      duration: "35 minutes",
      completed: false,
      progress: 25,
    },
    {
      id: "chapter-3",
      ChapterName: "Modules and Namespaces",
      About: "Understand the modular system in TypeScript and how to organize code using modules and namespaces.",
      duration: "35 minutes",
      completed: false,
      progress: 0,
    },
    {
      id: "chapter-4",
      ChapterName: "Working with External Libraries and APIs",
      About: "Learn how to integrate TypeScript with existing JavaScript libraries and APIs using declaration files.",
      duration: "40 minutes",
      completed: false,
      progress: 0,
    },
    {
      id: "chapter-5",
      ChapterName: "Advanced Design Patterns with TypeScript",
      About:
        "Apply design patterns like dependency injection, inversion of control, and the module pattern in TypeScript projects.",
      duration: "40 minutes",
      completed: false,
      progress: 0,
    },
  ]

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Course Chapters</CardTitle>
        <CardDescription>All chapters in this course</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{chapter.ChapterName}</h3>
                  {chapter.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{chapter.About}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{chapter.duration}</span>
                  </div>
                  <div>
                    {chapter.progress > 0 ? <span>{chapter.progress}% complete</span> : <span>Not started</span>}
                  </div>
                </div>
              </div>
              <Button asChild size="sm" className="mt-2 sm:mt-0">
                <Link href={`/chapters/${chapter.id}`} className="flex items-center gap-1">
                  <Play className="h-3.5 w-3.5" />
                  {chapter.progress > 0 && chapter.progress < 100 ? "Continue" : chapter.completed ? "Review" : "Start"}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
