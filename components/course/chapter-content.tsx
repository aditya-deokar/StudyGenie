"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import { Check, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useToast } from "../ui/use-toast"
import { useStore } from "@/lib/store"
import { ContentType } from "@/types/chapters"


interface ChapterContentProps {
  chapter: ContentType
}

export function ChapterContent({ chapter }: ChapterContentProps) {

  // console.log(chapter);
  const { toast } = useToast()
  const { markSectionAsRead, readSections } = useStore()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <Card>
        <CardHeader>
          <CardTitle>{chapter.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <p className="text-muted-foreground">{chapter.description}</p>

          {chapter?.contentSections?.map((section, index) => (
            <motion.div key={section.sectionId} variants={itemVariants} className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold" id={section.sectionId}>
                  {section.heading}
                </h3>
                <MarkAsReadButton
                  sectionId={section.sectionId}
                  isRead={readSections.includes(section.sectionId)}
                  onMarkAsRead={() => {
                    markSectionAsRead(section.sectionId)
                    toast({
                      title: "Section marked as read",
                      description: `You've completed "${section.heading}"`,
                    })
                  }}
                />
              </div>

              {section?.content?.map((paragraph, pIndex) => (
                <>
                <p key={pIndex} className="text-sm">
                  {paragraph?.textContent}
                </p>

                </>
              ))}

              {section.examples && section.examples.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Examples</h4>
                  {section?.examples?.map((example, eIndex) => (
                    <motion.div
                      key={eIndex}
                      className="rounded-md bg-muted p-4"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="text-xs text-muted-foreground mb-2">{example.exampleDescription}</p>
                      <pre className="text-xs overflow-auto p-2 bg-black text-white rounded-md">
                        <code>{example.exampleCode}</code>
                      </pre>
                    </motion.div>
                  ))}
                </div>
              )}

              {index < chapter.contentSections.length - 1 && <Separator />}
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface MarkAsReadButtonProps {
  sectionId: string
  isRead: boolean
  onMarkAsRead: () => void
}

function MarkAsReadButton({ sectionId, isRead, onMarkAsRead }: MarkAsReadButtonProps) {
  return (
    <Button
      variant={isRead ? "outline" : "secondary"}
      size="sm"
      onClick={onMarkAsRead}
      className="flex items-center gap-1"
      disabled={isRead}
    >
      {isRead ? (
        <>
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>Completed</span>
        </>
      ) : (
        <>
          <Check className="h-4 w-4" />
          <span>Mark as Read</span>
        </>
      )}
    </Button>
  )
}
