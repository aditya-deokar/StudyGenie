"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useStore } from "@/lib/store"

export function ChapterNavigation() {
  const { readSections } = useStore()

  // In a real app, we would fetch the chapter navigation based on the current chapter
  const navigation = {
    previous: {
      id: null,
      title: null,
    },
    next: {
      id: "chapter-2",
      title: "Decorators and Metadata",
    },
    sections: [
      {
        id: "TS_CH01_S01",
        title: "Introduction to TypeScript Types",
      },
      {
        id: "TS_CH01_S02",
        title: "Basic Types: number, string, boolean",
      },
      {
        id: "TS_CH01_S03",
        title: "Special Types: any, unknown, void",
      },
    ],
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <CardTitle>Chapter Navigation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Sections</h3>
            <nav className="space-y-1">
              {navigation.sections.map((section) => {
                const isRead = readSections.includes(section.id)

                return (
                  <Button
                    key={section.id}
                    variant={isRead ? "secondary" : "ghost"}
                    className="w-full justify-start text-sm"
                    asChild
                  >
                    <a href={`#${section.id}`} className="flex items-center justify-between">
                      <span>{section.title}</span>
                      {isRead && <CheckCircle className="h-3 w-3 text-green-500" />}
                    </a>
                  </Button>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center justify-between pt-4">
            {navigation.previous.id ? (
              <Button variant="outline" size="sm" asChild>
                <Link href={`/chapters/${navigation.previous.id}`} className="flex items-center gap-1">
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Link>
              </Button>
            ) : (
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
            )}

            {navigation.next.id && (
              <Button size="sm" asChild>
                <Link href={`/chapters/${navigation.next.id}`} className="flex items-center gap-1">
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
