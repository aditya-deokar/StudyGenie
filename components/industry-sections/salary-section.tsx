"use client"

import { useState } from "react"
import type { IndustryData } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatCurrency } from "@/lib/utils"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

type SalarySectionProps = {
  data: IndustryData
}

export default function SalarySection({ data }: SalarySectionProps) {
  const [chartView, setChartView] = useState<"bar" | "comparison">("bar")

  // Format data for the bar chart
  const barChartData = data.salaryRange.map((item) => ({
    name: item.role.split(" ")[0],
    min: item.min,
    median: item.median,
    max: item.max,
    fullName: item.role,
    location: item.location,
  }))

  // Format data for the comparison chart
  const comparisonData = data.salaryRange.map((item) => ({
    name: item.role.split(" ")[0],
    value: item.median,
    fullName: item.role,
    location: item.location,
  }))

  const chartConfig = {
    min: {
      label: "Minimum",
      color: "hsl(var(--chart-1))",
    },
    median: {
      label: "Median",
      color: "hsl(var(--chart-2))",
    },
    max: {
      label: "Maximum",
      color: "hsl(var(--chart-3))",
    },
    value: {
      label: "Median Salary",
      color: "hsl(var(--chart-1))",
    },
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Salary Insights</CardTitle>
          <CardDescription>Salary ranges for different roles in cloud computing (INR per annum)</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chart" className="space-y-4">
            <TabsList>
              <TabsTrigger value="chart">Chart View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
            </TabsList>
            <TabsContent value="chart" className="space-y-4">
              <div className="flex justify-end space-x-2">
                <TabsList className="h-8">
                  <TabsTrigger
                    value="bar"
                    className="h-8 px-3"
                    onClick={() => setChartView("bar")}
                    data-state={chartView === "bar" ? "active" : "inactive"}
                  >
                    Range
                  </TabsTrigger>
                  <TabsTrigger
                    value="comparison"
                    className="h-8 px-3"
                    onClick={() => setChartView("comparison")}
                    data-state={chartView === "comparison" ? "active" : "inactive"}
                  >
                    Comparison
                  </TabsTrigger>
                </TabsList>
              </div>

              {chartView === "bar" ? (
                // <ChartContainer config={chartConfig} className="h-[400px]">
                //   <ResponsiveContainer width="100%" height="100%">
                //     <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                //       <CartesianGrid strokeDasharray="3 3" vertical={false} />
                //       <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} tick={{ fontSize: 12 }} />
                //       <YAxis tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} width={80} />
                //       <Tooltip
                //         content={({ active, payload, label }) => {
                //           if (active && payload && payload.length) {
                //             const data = payload[0].payload
                //             return (
                //               <div className="rounded-lg border bg-background p-2 shadow-sm">
                //                 <div className="font-medium">{data.fullName}</div>
                //                 <div className="text-xs text-muted-foreground">{data.location}</div>
                //                 <div className="mt-1 grid grid-cols-2 gap-2">
                //                   <div className="text-xs">Min: {formatCurrency(data.min)}</div>
                //                   <div className="text-xs">Max: {formatCurrency(data.max)}</div>
                //                   <div className="col-span-2 text-xs font-medium">
                //                     Median: {formatCurrency(data.median)}
                //                   </div>
                //                 </div>
                //               </div>
                //             )
                //           }
                //           return null
                //         }}
                //       />
                //       <Legend />
                //       <Bar dataKey="min" name="Minimum" fill="hsl(var(--chart-1))" />
                //       <Bar dataKey="median" name="Median" fill="hsl(var(--chart-2))" />
                //       <Bar dataKey="max" name="Maximum" fill="hsl(var(--chart-3))" />
                //     </BarChart>
                //   </ResponsiveContainer>
                // </ChartContainer>

                <ChartContainer config={chartConfig} className="h-[450px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barChartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 70, // Increased bottom margin for rotated labels
              }}
              barGap={4} // Adds a small gap between bars of the same group
              barCategoryGap="20%" // Adds gap between different role groups
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="role"
                tickLine={false}
                // tickMargin={10} 
                axisLine={false}
                angle={-45} 
                textAnchor="end" 
                height={70} 
                tick={{ fontSize: 12 }} 
             
              />
              <YAxis
                tickFormatter={(value) => formatCurrency(value)}
                width={80} 
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                cursor={false}
                content={
                    <ChartTooltipContent
                        // Customize tooltip appearance and data
                        labelFormatter={(label, payload) => {
                          
                            const location = payload?.[0]?.payload?.location;
                            return (
                                <div>
                                    <div className="font-medium">{label}</div>
                                    {location && <div className="text-xs text-muted-foreground">{location}</div>}
                                </div>
                            );
                        }}
                        formatter={(value, name, props) => {
                            // Use the label from chartConfig and format the value
                            return [`${formatCurrency(value as number)}`, chartConfig[props.dataKey as keyof typeof chartConfig]?.label];
                        }}
                        itemStyle={{ fontSize: '0.8rem' }}
                        labelStyle={{ marginBottom: '0.25rem' }}
                    />
                }
              />
              <Legend verticalAlign="top" height={36}/>
              <Bar
                dataKey="min"
                fill="var(--chart-3)" // Uses color from ChartContainer config
                radius={[4, 4, 0, 0]} // Apply radius to top corners
                name={chartConfig.min.label} // Set name for Legend/Tooltip
              />
              <Bar
                dataKey="median"
                fill="var(--chart-1)"
                radius={[4, 4, 0, 0]}
                name={chartConfig.median.label}
              />
              <Bar
                dataKey="max"
                fill="var(--chart-2)"
                radius={[4, 4, 0, 0]}
                name={chartConfig.max.label}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
              ) : (
                <ChartContainer config={chartConfig} className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={comparisonData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 120, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                      <XAxis type="number" tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
                      <YAxis type="category" dataKey="fullName" width={120} tick={{ fontSize: 12 }} />
                      <Tooltip
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="font-medium">{data.fullName}</div>
                                <div className="text-xs text-muted-foreground">{data.location}</div>
                                <div className="mt-1">
                                  <div className="text-sm font-medium">Median: {formatCurrency(data.value)}</div>
                                </div>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <Bar dataKey="value" name="Median Salary" fill="hsl(var(--chart-1))" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              )}


            </TabsContent>
            <TabsContent value="table">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Role</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-right">Minimum</TableHead>
                    <TableHead className="text-right">Median</TableHead>
                    <TableHead className="text-right">Maximum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.salaryRange.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.role}</TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell className="text-right">{formatCurrency(item.min)}</TableCell>
                      <TableCell className="text-right">{formatCurrency(item.median)}</TableCell>
                      <TableCell className="text-right">{formatCurrency(item.max)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Salary Factors</CardTitle>
          <CardDescription>{data.salaryFactors.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
          {
            data.salaryFactors.factors.map((item, index)=>(
              <div key={index} className="space-y-2">
                <h3 className="font-medium">{item.factorName}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.factorDescription}
                </p>
              </div>
            ))
           
          }
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
