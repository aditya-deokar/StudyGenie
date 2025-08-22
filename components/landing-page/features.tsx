"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { IconType } from "react-icons"
import { useRef } from "react"
import { FaChartLine, FaLightbulb, FaRobot } from "react-icons/fa"

interface FeatureData {
  id: string
  icon: IconType
  title: string
  description: string
}


const features: FeatureData[]= [
  {
    id: "feature-insights",
    icon: FaChartLine,
    title: "Deep Industry Insights",
    description:
      "Access real-time data on salary ranges, growth rates, demand levels, and key trends for specific tech roles and locations (e.g., India).",
  },
  {
    id: "feature-course-gen",
    icon: FaLightbulb,
    title: "AI Course Generator",
    description:
      "Instantly generate comprehensive course outlines on any tech topic, from 'Introduction to Python' to 'Advanced Kubernetes'. Just provide a title!",
  },
  {
    id: "feature-ai-interview",
    icon: FaRobot,
    title: "AI Interview Practice",
    description:
      "Prepare for technical interviews with an AI interviewer. Practice answering questions for any role, get feedback, and build confidence.",
  },
]

export default function Features() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-50"></div>

      <motion.div className="container mx-auto px-4" style={{ opacity, y }}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-4"
          >
            Platform Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Powerful Features to Accelerate Your Career
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            NeoPrep combines industry data, AI-powered learning, and interview practice to give you the edge in your
            tech career journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
              >
                <Card className="h-full border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full translate-x-16 -translate-y-16 group-hover:bg-indigo-200 transition-colors duration-300"></div>
                  <CardHeader className="relative z-10">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300"
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-slate-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
