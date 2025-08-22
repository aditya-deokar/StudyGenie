"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Bookmark, ExternalLink } from "lucide-react"

import { useDashboardStore } from "@/lib/store"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function InsightsPreview() {
  const { data, toggleInsightSaved } = useDashboardStore()
  const { industryInsights } = data

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  const insights = [...industryInsights.latest, ...industryInsights.recommended].slice(0, 3)

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div>
          <CardTitle>Industry Insights</CardTitle>
          <CardDescription>Latest trends and knowledge</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="ml-auto">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
          {insights.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">No insights available. Check back later!</div>
          ) : (
            insights.map((insight) => (
              <motion.div key={insight.id} variants={item} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">{insight.title}</div>
                    <Badge variant="outline">{insight.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => toggleInsightSaved(insight.id)}
                    >
                      <Bookmark className={`h-4 w-4 ${insight.isSaved ? "fill-current" : ""}`} />
                    </Button>
                    <Link href={insight.fullContentUrl}>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{insight.summary}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div>Source: {insight.source}</div>
                  <div>Published: {formatDate(insight.publishDate)}</div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </CardContent>
    </Card>
  )
}
