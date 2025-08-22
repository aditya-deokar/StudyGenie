"use client"

import { useState } from "react"
import type { IndustryData } from "@/lib/types"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { BarChartIcon, BookOpenIcon, BriefcaseIcon, GraduationCapIcon, HomeIcon, TrendingUpIcon } from "lucide-react"
import OverviewSection from "./industry-sections/overview-section"
import SalarySection from "./industry-sections/salary-section"
import SkillsSection from "./industry-sections/skills-section"
import EducationSection from "./industry-sections/education-section"
import TrendsSection from "./industry-sections/trends-section"
import { Separator } from "./ui/separator"
import { ThemeSelector } from "./theme-selector"
import { ModeToggle } from "./ui/mode-toggle"

type DashboardProps = {
  data: IndustryData
}

export default function Dashboard({ data }: DashboardProps) {
  const [activeSection, setActiveSection] = useState<string>("overview")

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection data={data} />
      case "salary":
        return <SalarySection data={data} />
      case "skills":
        return <SkillsSection data={data} />
      case "education":
        return <EducationSection data={data} />
      case "trends":
        return <TrendsSection data={data} />
      default:
        return <OverviewSection data={data} />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-muted/40">
        <Sidebar>
          <SidebarHeader className="border-b">
            <div className="flex items-center gap-2 px-2 py-4">
              <BarChartIcon className="h-6 w-6" />
              <span className="font-semibold">Industry Insights</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setActiveSection("overview")}
                      isActive={activeSection === "overview"}
                    >
                      <HomeIcon className="h-4 w-4" />
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => setActiveSection("salary")} isActive={activeSection === "salary"}>
                      <BriefcaseIcon className="h-4 w-4" />
                      <span>Salary Insights</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => setActiveSection("skills")} isActive={activeSection === "skills"}>
                      <BookOpenIcon className="h-4 w-4" />
                      <span>Skills & Career</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setActiveSection("education")}
                      isActive={activeSection === "education"}
                    >
                      <GraduationCapIcon className="h-4 w-4" />
                      <span>Education & Internships</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => setActiveSection("trends")} isActive={activeSection === "trends"}>
                      <TrendingUpIcon className="h-4 w-4" />
                      <span>Trends & Outlook</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="text-xs text-muted-foreground">Data updated: April 2025</div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 overflow-auto">



          {/* <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger/>
            <h1 className="text-xl font-semibold">{data.industryName}</h1>
           
          </header> */}



          <header className="flex my-2 h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
              <SidebarTrigger className="ml-1" />
              <Separator
                orientation="vertical"
                className="mx-2 data-[orientation=vertical]:h-4"
              />
              <h1 className="text-base font-medium">{data.industryName}</h1>
              <div className="ml-auto flex items-center gap-2 ">
                <ThemeSelector />
                <ModeToggle />
              </div>
            </div>
          </header>








          <main className="container mx-auto p-6">{renderSection()}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
