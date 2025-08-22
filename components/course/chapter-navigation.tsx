"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useStore } from "@/lib/store"
import { ContentType } from "@/types/chapters"

interface ChapterContentProps {
  chapter: ContentType
}

export function ChapterNavigation({ chapter }: ChapterContentProps)  {
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

  console.log(chapter?.contentSections)
  return (
    <motion.div className="sticky top-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="dark:dark-gradient light-gradient">
        <CardHeader>
          <CardTitle>Chapter Navigation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Sections</h3>
            <nav className="space-y-1">
              {chapter?.contentSections.map((section) => {
                const isRead = readSections.includes(section.sectionId)

                return (
                  <Button
                    key={section.sectionId}
                    variant={isRead ? "secondary" : "ghost"}
                    className="w-full justify-start text-sm"
                    asChild
                  >
                    <a href={`#${section.sectionId}`} className="flex items-center justify-between">
                      <span>{section.heading}</span>
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
