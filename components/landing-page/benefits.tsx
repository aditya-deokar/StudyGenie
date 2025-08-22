"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import type { IconType } from "react-icons"
import { FaSearch, FaGraduationCap, FaUserCheck, FaChartLine } from "react-icons/fa"
import { useRef } from "react"

interface BenefitData {
  id: string
  icon: IconType
  title: string
  description: string
}

const benefits: BenefitData[] = [
  {
    id: "benefit-clarity",
    icon: FaSearch,
    title: "Career Clarity",
    description: "Make informed decisions about your career path with up-to-date industry data.",
  },
  {
    id: "benefit-learning",
    icon: FaGraduationCap,
    title: "Accelerated Learning",
    description: "Quickly structure your learning on any topic with AI-generated course outlines.",
  },
  {
    id: "benefit-confidence",
    icon: FaUserCheck,
    title: "Interview Confidence",
    description: "Sharpen your interview skills and reduce anxiety through realistic AI practice sessions.",
  },
  {
    id: "benefit-edge",
    icon: FaChartLine,
    title: "Competitive Edge",
    description: "Stay ahead by understanding market demands and acquiring the most relevant skills.",
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

      <motion.div className="container mx-auto px-4" style={{ opacity, y }}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-4"
          >
            Key Benefits
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Why Choose NeoPrep
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Our platform provides unique advantages to help you navigate your tech career journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                }}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600 mx-auto"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#818cf8",
                    color: "#ffffff",
                    rotate: [0, 10, -10, 10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-7 h-7" />
                </motion.div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{benefit.title}</h3>
                <p className="text-slate-600 text-center">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
