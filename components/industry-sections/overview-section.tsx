"use client"

import type { IndustryData } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUpIcon, BriefcaseIcon, BarChart3Icon, BuildingIcon } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

type OverviewSectionProps = {
  data: IndustryData
}

export default function OverviewSection({ data }: OverviewSectionProps) {
  // Calculate average median salary
  const avgMedianSalary = data.salaryRange.reduce((sum, item) => sum + item.median, 0) / data.salaryRange.length

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.growthRate}%</div>
            <p className="text-xs text-muted-foreground">Annual industry growth</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Demand Level</CardTitle>
            <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.demandLevel}</div>
            <p className="text-xs text-muted-foreground">Current market demand</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Salary</CardTitle>
            <BarChart3Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(avgMedianSalary)}</div>
            <p className="text-xs text-muted-foreground">Average median salary</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
            <BuildingIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.marketOutlook}</div>
            <p className="text-xs text-muted-foreground">Future industry outlook</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Industry Overview</CardTitle>
          <CardDescription>Cloud Computing in India</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{data.overview}</p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Skills</CardTitle>
            <CardDescription>Most in-demand skills for cloud computing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {data.topSkills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Key Companies Hiring</CardTitle>
            <CardDescription>Major employers in the cloud computing industry</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {data.keyCompaniesHiring.slice(0, 12).map((company, index) => (
                <Badge key={index} variant="outline">
                  {company}
                </Badge>
              ))}
              {data.keyCompaniesHiring.length > 12 && (
                <Badge variant="outline">+{data.keyCompaniesHiring.length - 12} more</Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
