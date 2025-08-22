"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Share2, Award, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface CertificateProps {
  userName: string
  quizTitle: string
  score: {
    percentage: number
    correct: number
    total: number
  }
  completionDate: Date
}

export function CertificateSection({ userName, quizTitle, score, completionDate }: CertificateProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [showCustomizeDialog, setShowCustomizeDialog] = useState(false)
  const [template, setTemplate] = useState("standard")
  const [displayName, setDisplayName] = useState(userName)
  const { toast } = useToast()

  const handleDownload = async () => {
    setIsGenerating(true)

    // Simulate certificate generation delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsGenerating(false)

    toast({
      title: "Certificate Downloaded",
      description: "Your certificate has been successfully downloaded.",
      duration: 5000,
    })
  }

  const handleShare = () => {
    toast({
      title: "Share Your Achievement",
      description: "Sharing options opened in a new window.",
      duration: 3000,
    })
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(completionDate)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="border-2 border-green-200 overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-white rounded-full p-3 shadow-sm">
              <Award className="h-10 w-10 text-green-500" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-green-700 flex items-center justify-center md:justify-start gap-2">
                <CheckCircle className="h-5 w-5" />
                Congratulations! You've Earned a Certificate
              </h3>
              <p className="text-green-600 mt-1">
                Your score of {score.percentage}% qualifies you for a certificate of completion.
              </p>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6 border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-white/90"></div>
                <div className="relative p-8 flex flex-col items-center text-center">
                  <div className="mb-4 text-primary/20">
                    <Award className="h-20 w-20" />
                  </div>

                  <h2 className="text-2xl font-serif mb-1">Certificate of Completion</h2>
                  <p className="text-sm text-muted-foreground mb-6">This certifies that</p>

                  <p className="text-xl font-medium mb-6">{displayName}</p>

                  <p className="text-sm text-muted-foreground mb-2">has successfully completed</p>
                  <p className="text-lg font-medium mb-6">{quizTitle}</p>

                  <div className="flex items-center gap-2 mb-6">
                    <p className="text-sm">with a score of</p>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium">
                      {score.percentage}%
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">{formattedDate}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1" onClick={handleDownload} disabled={isGenerating}>
                {isGenerating ? (
                  <>
                    <Skeleton className="h-4 w-4 mr-2 rounded-full animate-pulse" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </>
                )}
              </Button>

              <Button variant="outline" onClick={() => setShowCustomizeDialog(true)}>
                Customize
              </Button>

              <Button variant="outline" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showCustomizeDialog} onOpenChange={setShowCustomizeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Customize Your Certificate</DialogTitle>
            <DialogDescription>Personalize how your name appears and choose a template style.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Display Name</Label>
              <Input
                id="name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter your name as you want it to appear"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="template">Certificate Template</Label>
              <Select value={template} onValueChange={setTemplate}>
                <SelectTrigger id="template">
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="modern">Modern</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={() => setShowCustomizeDialog(false)}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
