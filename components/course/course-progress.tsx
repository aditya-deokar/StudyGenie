import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CourseProgressProps {
  className?: string
  compact?: boolean
}

export function CourseProgress({ className, compact = false }: CourseProgressProps) {
  // In a real app, this would come from an API or state management
  const progress = 35
  const nextChapter = {
    id: "TS_CH01",
    title: "Advanced Types and Generics",
  }

  if (compact) {
    return (
      <div className={cn("space-y-2", className)}>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Course Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    )
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
        <CardDescription>Continue your learning journey</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Course Completion</span>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Continue Learning</h3>
          <div className="rounded-lg border p-3">
            <h4 className="font-medium">{nextChapter.title}</h4>
            <p className="mt-1 text-sm text-muted-foreground">Pick up where you left off</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/chapters/${nextChapter.id}`} className="flex items-center justify-center gap-1">
            Continue Learning
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
