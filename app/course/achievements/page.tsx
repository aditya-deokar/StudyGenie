
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { DashboardShell } from "@/components/course/dashboard-shell"
import { AchievementsList } from "@/components/course/achievements-list"

export default function AchievementsPage() {
  return (
    <DashboardShell>
      <div className="flex w-full items-center justify-between">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-xl font-semibold">Your Achievements</h1>
      </div>
      <Separator className="my-4" />
      <AchievementsList />
    </DashboardShell>
  )
}
