"use client"

import { motion } from "framer-motion"
import { Bot } from "lucide-react"

export function RoboAnimation() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <Bot className="w-32 h-32 text-purple-500" />
          </motion.div>

          {/* Orbiting elements */}
          <motion.div
            className="absolute w-6 h-6 bg-indigo-400 rounded-full opacity-70"
            animate={{
              x: [0, 30, 0, -30, 0],
              y: [30, 0, -30, 0, 30],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute w-4 h-4 bg-purple-400 rounded-full opacity-70"
            animate={{
              x: [0, -20, 0, 20, 0],
              y: [-20, 0, 20, 0, -20],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 1,
            }}
          />

          {/* Additional orbiting elements */}
          <motion.div
            className="absolute w-3 h-3 bg-pink-400 rounded-full opacity-70"
            animate={{
              x: [10, -15, 10, 25, 10],
              y: [15, 25, -15, -5, 15],
            }}
            transition={{
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 0.5,
            }}
          />

          <motion.div
            className="absolute w-5 h-5 bg-blue-400 rounded-full opacity-70"
            animate={{
              x: [-15, 5, 25, 5, -15],
              y: [5, 25, 5, -15, 5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 1.5,
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
