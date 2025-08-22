"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { DashboardShell } from "@/components/course/dashboard-shell"
import { AchievementsList } from "@/components/course/achievements-list"
import { useParams } from "next/navigation"

export default function AchievementsPage() {

  const params = useParams();
  const courseId = params?.courseId as string;

  return (
    
      <AchievementsList />
   
  )
}
