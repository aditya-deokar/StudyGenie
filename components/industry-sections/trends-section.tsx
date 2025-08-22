"use client"

import type { IndustryData } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

type TrendsSectionProps = {
  data: IndustryData
}

export default function TrendsSection({ data }: TrendsSectionProps) {

  const growthData = data.marketGrowthProjections.data.map(({ year, market, jobs }) => ({
    year,
    market,
    jobs,
  }));


  const chartConfig = {
    market: {
      label: "Market Size ($ Billion)",
      color: "hsl(258, 57%, 61%)",
    },
    jobs: {
      label: "Job Openings (100K)",
      color: "hsl(258, 22%, 61%)",
    },
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Market Growth Projections</CardTitle>
          <CardDescription>Projected growth of {data.industryName}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-fit w-full relative">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="400px">
                <LineChart data={growthData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="font-medium">{label}</div>
                            <div className="mt-1 grid grid-cols-1 gap-2">
                              <div className="text-xs">Market Size: ${payload[0].value} Billion</div>
                              <div className="text-xs">Job Openings: {payload[1].value}00K</div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="market"
                    name="Market Size ($ Billion)"
                    stroke="hsl(258, 57%, 61%)"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="jobs"
                    name="Job Openings (100K)"
                    stroke="hsl(128, 37%, 61%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          <p>{data.marketGrowthProjections.description}</p>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              The Indian cloud computing market is projected to grow at a CAGR of {data.growthRate}% through 2027,
              creating substantial job opportunities across various specializations.
            </p>
           
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Key Industry Trends</CardTitle>
            <CardDescription>Emerging trends shaping {data.industryName}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.keyTrends.map((trend, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-primary"></div>
                  <div>
                    <p className="font-medium">{trend}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Industry Outlook</CardTitle>
            <CardDescription>Future prospects for {data.industryName}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <p className="font-medium">Market Outlook: {data.marketOutlook}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {data.overview}
              </p>

              <div className="space-y-2">
                <h3 className="font-medium">Key Growth Drivers</h3>
                <p className="text-xs text-muted-foreground">{data.keyGrowthDrivers.description}</p>
                <div className="grid gap-2 md:grid-cols-2">

                  {data.keyGrowthDrivers.drivers.map((item, index)=>(
                    <div className="rounded-lg border bg-card p-3">
                      <p className="font-medium">{item.driverName}</p>
                      <p className="text-xs text-muted-foreground">{item.driverDescription}</p>
                   </div>
                  ))}
                  

                </div>
              </div>


              {/* Challenges */}

              <div className="space-y-2">
                <h3 className="font-medium">Challenges</h3>
                <div className="flex flex-wrap gap-2">

                  {data.challenges.map((item,index)=>(
                    <Badge key={index} variant="outline">{item}</Badge>
                  ))}
                  
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
