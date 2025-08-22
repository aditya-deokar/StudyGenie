"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Volume2, VolumeX, Maximize, SkipBack, SkipForward, Pause, CheckCircle } from "lucide-react"
import { useState } from "react"
import { Slider } from "../ui/slider"
import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { useStore } from "@/lib/store"
import { useToast } from "../ui/use-toast"

interface ChapterVideoProps {
  chapterId: string
}

export function ChapterVideo({ chapterId }: ChapterVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(80)
  const { watchedVideos, markVideoAsWatched } = useStore()
  const { toast } = useToast()

  const isWatched = watchedVideos.includes(chapterId)

  // In a real app, we would fetch the video URL based on the chapterId
  const videoUrl = "/placeholder.svg?height=400&width=800"

  const togglePlay = () => {
    setIsPlaying(!isPlaying)

    // Simulate video completion after 3 seconds when playing
    if (!isPlaying && !isWatched) {
      setTimeout(() => {
        markVideoAsWatched(chapterId)
        toast({
          title: "Video completed",
          description: "This video has been marked as watched",
        })
      }, 3000)
    }
  }

  const toggleMute = () => setIsMuted(!isMuted)

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
          <div className="relative aspect-video bg-muted">
            {/* Video placeholder - in a real app, this would be a video element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={videoUrl || "/placeholder.svg"} alt="Video thumbnail" className="h-full w-full object-cover" />
              {!isPlaying && (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute h-16 w-16 rounded-full opacity-90"
                    onClick={togglePlay}
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Slider
                  value={[progress]}
                  max={100}
                  step={1}
                  className="flex-1"
                  onValueChange={(value:any) => setProgress(value[0])}
                />
                <span className="text-xs tabular-nums">
                  {formatTime(progress)} / {formatTime(100)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="icon" onClick={togglePlay}>
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="icon">
                      <SkipBack className="h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="icon">
                      <SkipForward className="h-4 w-4" />
                    </Button>
                  </motion.div>
                  <div className="flex items-center gap-2">
                    <motion.div whileTap={{ scale: 0.9 }}>
                      <Button variant="ghost" size="icon" onClick={toggleMute}>
                        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </Button>
                    </motion.div>
                    <Slider
                      value={[volume]}
                      max={100}
                      step={1}
                      className="w-20"
                      onValueChange={(value:any) => setVolume(value[0])}
                    />
                  </div>
                </div>
                <motion.div whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon">
                    <Maximize className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function formatTime(seconds: number): string {
  // This is a placeholder - in a real app, we would convert seconds to MM:SS format
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
}
