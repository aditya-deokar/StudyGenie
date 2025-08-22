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
  const avgMedianSalary = data?.salaryRange?.reduce((sum, item) => sum + item.median, 0) / data?.salaryRange?.length

  return (
    <div className="space-y-8">



      <section className="card-cta dark:dark-gradient light-gradient flex flex-col gap-6 items-start">
          <h2>Industry Overview</h2>
          
          <p className="text-muted-foreground text-justify">{data?.overview}</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 card-interview ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary">Growth Rate</CardTitle>
            <TrendingUpIcon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold ">{data?.growthRate}%</div>
            <p className="text-sm text-muted-foreground">Annual industry growth</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 card-interview">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary">Demand Level</CardTitle>
            <BriefcaseIcon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold ">{data?.demandLevel}</div>
            <p className="text-sm text-muted-foreground">Current market demand</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 card-interview">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary">Avg. Salary</CardTitle>
            <BarChart3Icon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold ">{formatCurrency(avgMedianSalary)}</div>
            <p className="text-sm text-muted-foreground">Average median salary</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 card-interview">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary">Market Outlook</CardTitle>
            <BuildingIcon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold ">{data?.marketOutlook}</div>
            <p className="text-sm text-muted-foreground">Future industry outlook</p>
          </CardContent>
        </Card>
      </div>

    

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-primary">Top Skills</CardTitle>
            <CardDescription className="text-muted-foreground">Most in-demand skills for {data?.industryName}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {data?.topSkills?.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm whitespace-break-spaces px-3 py-1 dark:dark-gradient light-gradient">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-primary">Key Companies Hiring</CardTitle>
            <CardDescription className="text-muted-foreground">Major employers in the {data?.industryName} industry</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {data?.keyCompaniesHiring?.slice(0, 12).map((company, index) => (
                <Badge key={index} variant="outline" className="text-sm px-3 py-1">
                  {company}
                </Badge>
              ))}
              {data?.keyCompaniesHiring?.length > 12 && (
                <Badge variant="outline" className="text-sm px-3 py-1">+{data?.keyCompaniesHiring?.length - 12} more</Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
