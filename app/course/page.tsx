import { Achievements } from "@/components/course/achievements";
import { CourseChapters } from "@/components/course/course-chapters";
import { CourseOverview } from "@/components/course/course-overview";
import { CourseProgress } from "@/components/course/course-progress";
import { DashboardShell } from "@/components/course/dashboard-shell";
import { RecentActivity } from "@/components/course/recent-activity";


export default function Home() {
  return (
    <DashboardShell>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CourseOverview className="col-span-full" />
        <CourseProgress className="md:col-span-2 lg:col-span-2" />
        <Achievements className="md:col-span-2 lg:col-span-1" />
      </div>
      <CourseChapters className="mt-6" />
      <RecentActivity className="mt-6" />
    </DashboardShell>
  )
}
