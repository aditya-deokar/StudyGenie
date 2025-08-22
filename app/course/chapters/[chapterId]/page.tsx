
import { ChapterContent } from "@/components/course/chapter-content"
import { ChapterExercises } from "@/components/course/chapter-exercises"
import { ChapterNavigation } from "@/components/course/chapter-navigation"
import { ChapterObjectives } from "@/components/course/chapter-objectives"
import { ChapterProgress } from "@/components/course/chapter-progress"
import { ChapterQuiz } from "@/components/course/chapter-quiz"
import { ChapterResources } from "@/components/course/chapter-resources"
import { ChapterVideo } from "@/components/course/chapter-video"
import { DashboardShell } from "@/components/course/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"


interface ChapterPageProps {
  params: {
    chapterId: string
  }
}

export default function ChapterPage({ params }: ChapterPageProps) {
  // In a real app, we would fetch the chapter data based on the chapterId
  // For now, we'll use the sample data and check if the chapterId exists

  const chapterId = params.chapterId

  // This would be a server action or API call in a real app
  const chapterExists = ["TS_CH01", "chapter-2", "chapter-3", "chapter-4", "chapter-5"].includes(chapterId)

  if (!chapterExists) {
    notFound()
  }

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <ChapterProgress />
      </div>
      <Separator className="my-4" />

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
          <TabsTrigger value="objectives">Objectives</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <TabsContent value="content" className="mt-0">
              <ChapterContent chapterId={chapterId} />
            </TabsContent>

            <TabsContent value="video" className="mt-0">
              <ChapterVideo chapterId={chapterId} />
            </TabsContent>

            <TabsContent value="exercises" className="mt-0">
              <ChapterExercises chapterId={chapterId} />
            </TabsContent>

            <TabsContent value="objectives" className="mt-0">
              <ChapterObjectives chapterId={chapterId} />
            </TabsContent>

            <TabsContent value="quiz" className="mt-0">
              <ChapterQuiz chapterId={chapterId} />
            </TabsContent>

            <TabsContent value="resources" className="mt-0">
              <ChapterResources chapterId={chapterId} />
            </TabsContent>
          </div>

          <div>
            <ChapterNavigation />
          </div>
        </div>
      </Tabs>
    </DashboardShell>
  )
}
