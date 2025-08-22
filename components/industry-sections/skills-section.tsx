"use client"

import type { IndustryData } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

type SkillsSectionProps = {
  data: IndustryData
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  // Format data for the radar chart - top skills
  const topSkillsData = data.topSkills.map((skill, index) => ({
    subject: skill.split(" ")[0], // Use first word for chart
    A: Math.random() * 30 + 70, // Random value between 70-100 for visualization
    fullName: skill,
  }))

  // Format data for the radar chart - recommended skills
  const recommendedSkillsData = data.recommendedSkills.map((skill, index) => ({
    subject: skill.split(" ")[0], // Use first word for chart
    A: Math.random() * 30 + 70, // Random value between 70-100 for visualization
    fullName: skill,
  }))

  const chartConfig = {
    A: {
      label: "Demand Level",
      color: "hsl(var(--chart-1))",
    },
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Skills Analysis</CardTitle>
            <CardDescription>Current and recommended skills for cloud computing professionals</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="current" className="space-y-4">
              <TabsList>
                <TabsTrigger value="current">Current Skills</TabsTrigger>
                <TabsTrigger value="recommended">Recommended Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="current">
                <div className="h-[300px] w-full">
                  <ChartContainer config={chartConfig}>
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={topSkillsData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <Radar
                          name="Demand Level"
                          dataKey="A"
                          stroke="hsl(var(--chart-1))"
                          fill="hsl(var(--chart-1))"
                          fillOpacity={0.6}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {data.topSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="recommended">
                <div className="h-[300px] w-full">
                  <ChartContainer config={chartConfig}>
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={recommendedSkillsData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <Radar
                          name="Demand Level"
                          dataKey="A"
                          stroke="hsl(var(--chart-2))"
                          fill="hsl(var(--chart-2))"
                          fillOpacity={0.6}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {data.recommendedSkills.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Career Progression</CardTitle>
            <CardDescription>Common career paths in cloud computing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.careerProgressionExamples.map((progression, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <h3 className="font-medium">Career Path {index + 1}</h3>
                </div>
                <div className="ml-4 flex flex-wrap items-center">
                  {progression.split(" -> ").map((role, roleIndex, array) => (
                    <div key={roleIndex} className="flex items-center">
                      <Badge variant="outline" className="whitespace-nowrap">
                        {role}
                      </Badge>
                      {roleIndex < array.length - 1 && <div className="mx-2 text-muted-foreground">→</div>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Entry Level Outlook</CardTitle>
          <CardDescription>Prospects for students and new graduates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="font-medium">Prospects</h3>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <p className="font-medium">{data.entryLevelOutlook.prospects}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Entry-level cloud computing roles are abundant with strong growth projected over the next 5 years.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Common Entry Roles</h3>
              <div className="flex flex-wrap gap-2">
                {data.entryLevelOutlook.commonRoles.map((role, index) => (
                  <Badge key={index} variant="secondary">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Advice for Students</h3>
              <p className="text-sm text-muted-foreground">{data.entryLevelOutlook.advice}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
