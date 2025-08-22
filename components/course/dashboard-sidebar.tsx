"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import { BookOpen, GraduationCap, Home, Settings, Trophy } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { CourseProgress } from "./course-progress";

import { useEffect, useState } from "react";
import {  getCourseById2 } from "@/actions/createCourse";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import { CourseListType } from "@/types/courseList";




export function DashboardSidebar() {
  const pathname = usePathname();
  const { user } = useUser()
  
  const params = useParams()
  const [course, setCourse] = useState<CourseListType | null>(null)
  const [loading, setLoading] = useState(false)

 


  const fetchCourse = async () => {
    if (params?.courseId) {  //courseId will be id (UUID)
      setLoading(true);
      try {
        const result = await getCourseById2(params.courseId as string);
        // console.log(result);
        setCourse(result);
      } catch (error) {
        console.error("Error fetching course:", error);
        toast.error("Failed to load course.");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    console.log(params.courseId);
    fetchCourse()
    console.log(course?.courseOutput?.chapters)
  }, [params, user])

    return (
        <Sidebar variant="inset">
            <SidebarHeader className="p-4">
                <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6" />
                    <span className="font-semibold ">{course?.name}</span>
                </div>
                <div className="mt-4">
                    <CourseProgress compact />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={pathname === "/course/dashboard"}>
                                    <Link href="/course">
                                        <Home className="h-4 w-4" />
                                        <span>Dashboard</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={pathname === "/course/achievements"}>
                                    <Link href="/course/achievements">
                                        <Trophy className="h-4 w-4" />
                                        <span>Achievements</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={pathname === "/course/settings"}>
                                    <Link href="/course/settings">
                                        <Settings className="h-4 w-4" />
                                        <span>Settings</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Chapters</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            { 
                            course?.courseOutput?.chapters.map((chapter,index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={pathname === `/course/dashboard/${params?.courseId}/chapters/${index +1}`}
                                    >
                                        <Link href={`/course/dashboard/${params?.courseId}/chapters/${index +1}`}>
                                            <BookOpen className="h-4 w-4" />
                                            <span>{chapter.ChapterName}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}