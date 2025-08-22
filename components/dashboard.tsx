"use client"

import { useState } from "react"
import type { IndustryData } from "@/lib/types"
import {
  BarChartIcon,
  BookOpenIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  HomeIcon,
  LayoutDashboard,
  TrendingUpIcon,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" // Import Tabs components
import OverviewSection from "./industry-sections/overview-section"
import SalarySection from "./industry-sections/salary-section"
import SkillsSection from "./industry-sections/skills-section"
import EducationSection from "./industry-sections/education-section"
import TrendsSection from "./industry-sections/trends-section"
import { Separator } from "./ui/separator"

type DashboardProps = {
  data: IndustryData
}

// Define the sections for easier mapping
const sections = [
  {
    value: "overview",
    label: "Overview",
    icon: HomeIcon,
    component: OverviewSection,
  },
  {
    value: "salary",
    label: "Salary Insights",
    icon: BriefcaseIcon,
    component: SalarySection,
  },
  {
    value: "skills",
    label: "Skills & Career",
    icon: BookOpenIcon,
    component: SkillsSection,
  },
  {
    value: "education",
    label: "Education & Internships",
    icon: GraduationCapIcon,
    component: EducationSection,
  },
  {
    value: "trends",
    label: "Trends & Outlook",
    icon: TrendingUpIcon,
    component: TrendsSection,
  },
]

export default function Dashboard({ data }: DashboardProps) {

  const [activeSection, setActiveSection] = useState<string>("overview")

  return (
    <div className="flex min-h-screen w-full flex-col">
    
      <main className="flex flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        
         
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <BarChartIcon className="h-6 w-6" />
                    <span>{data.industryName} Industry Insights</span>
                  </h2>
            
                 <Tabs value={activeSection} onValueChange={setActiveSection} defaultValue="overview" className="w-full">
                    {/* Tab Triggers */}
                    <TabsList className="grid w-full max-sm:h-fit  grid-cols-1 sm:grid-cols-2 md:grid-cols-5 mb-4  dark:dark-gradient light-gradient">
                        {sections.map((section) => {
                        const Icon = section.icon
                        return (
                            <TabsTrigger key={section.value} value={section.value} className="max-sm:justify-start">
                            <Icon className="mr-2 h-4 w-4" />
                            {section.label}
                            </TabsTrigger>
                        )
                        })}
                    </TabsList>

                    {/* Separator */}
                    <Separator className="my-4"/>

                    {/* Tab Content Panes */}
                    {sections.map((section) => {
                        const SectionComponent = section.component
                        return (
                        <TabsContent key={section.value} value={section.value}>
                            {/* Render the specific section component */}
                            <SectionComponent data={data} />
                        </TabsContent>
                        )
                    })}
                </Tabs>
        


      </main>
    </div>
  )
}