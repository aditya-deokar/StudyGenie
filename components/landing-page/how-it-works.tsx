"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { FaGraduationCap, FaSearch, FaUserCheck } from "react-icons/fa"
import type { IconType } from "react-icons"
import { useRef } from "react"

interface HowItWorksStep {
  id: number
  icon?: IconType
  title: string
  description: string
}

interface HowItWorksSectionData {
  title: string
  steps: HowItWorksStep[]
}

const howItWorks :HowItWorksSectionData= {
  title: "How NeoPrep Works",
  steps: [
    {
      id: 1,
      icon: FaSearch,
      title: "Explore Insights",
      description: "Select an industry or role to view detailed market analysis, salaries, and skill requirements.",
    },
    {
      id: 2,
      icon: FaGraduationCap,
      title: "Generate Courses",
      description: "Enter any course title and let our AI instantly create a structured learning path for you.",
    },
    {
      id: 3,
      icon: FaUserCheck,
      title: "Practice Interviews",
      description: "Choose a job role and engage with our AI interviewer to simulate real interview scenarios.",
    },
  ],
}

export default function HowItWorks() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section ref={ref} className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>

      <motion.div className="container mx-auto px-4" style={{ opacity, y }}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-4"
          >
            Simple Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            {howItWorks.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Get started in three simple steps and transform your career preparation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {howItWorks.steps.map((step, index) => {
            const Icon = step.icon || FaSearch

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
                className="relative"
              >
                {/* Connector line */}
                {index < howItWorks.steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-indigo-200 -translate-x-1/2 z-0">
                    <motion.div
                      className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-400"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + 0.2 * index, duration: 0.5 }}
                    ></motion.div>
                  </div>
                )}

                <motion.div
                  className="bg-white rounded-xl p-6 shadow-md border border-slate-100 relative z-10 h-full"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600 mx-auto"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#818cf8",
                      color: "#ffffff",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>

                  <motion.div
                    className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold"
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + 0.1 * index, duration: 0.5, type: "spring" }}
                  >
                    {step.id}
                  </motion.div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-slate-600 text-center">{step.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
