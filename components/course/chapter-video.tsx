"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useStore } from "@/lib/store"
import { useToast } from "../ui/use-toast"
import YouTube, { YouTubeProps } from "react-youtube"

interface ChapterVideoProps {
  videoId: string
  chapterId: string
}

export function ChapterVideo({ videoId, chapterId }: ChapterVideoProps) {
  const { watchedVideos, markVideoAsWatched } = useStore()
  const { toast } = useToast()

  const isWatched = watchedVideos.includes(chapterId)

  const handleVideoEnd: YouTubeProps["onEnd"] = () => {
    if (!isWatched) {
      markVideoAsWatched(chapterId)
      toast({
        title: "Video completed",
        description: "This video has been marked as watched",
      })
    }
  }

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
    },
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Chapter Video</CardTitle>
            {isWatched && (
              <div className="flex items-center gap-1 text-sm text-green-500">
                <CheckCircle className="h-4 w-4" />
                <span>Watched</span>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex justify-center my-6">
            <YouTube videoId={videoId} opts={opts} onEnd={handleVideoEnd} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
