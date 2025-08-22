"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { FaSearch, FaGraduationCap, FaUserCheck } from "react-icons/fa"
import { CheckCircle2 } from "lucide-react"

interface Step {
  id: number
  icon: any
  title: string
  description: string
  color: string
}

export default function CreativeSteps() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])
  const [activeStep, setActiveStep] = useState(1)

  const steps: Step[] = [
    {
      id: 1,
      icon: FaSearch,
      title: "Explore Insights",
      description: "Select an industry or role to view detailed market analysis, salaries, and skill requirements.",
      color: "rgb(129, 92, 216)",
    },
    {
      id: 2,
      icon: FaGraduationCap,
      title: "Generate Courses",
      description: "Enter any course title and let our AI instantly create a structured learning path for you.",
      color: "rgb(139, 92, 246)",
    },
    {
      id: 3,
      icon: FaUserCheck,
      title: "Practice Interviews",
      description: "Choose a job role and engage with our AI interviewer to simulate real interview scenarios.",
      color: "rgb(236, 72, 153)",
    },
  ]

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-50"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-30 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-pink-100 to-indigo-100 opacity-30 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div className="container mx-auto px-4 relative z-10" style={{ opacity, y }}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-4"
          >
            Your Learning Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Three Simple Steps to Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Follow these three steps to transform your career preparation and achieve your goals
          </motion.p>
        </div>

        {/* Interactive 3D Steps Journey */}
        <div className="max-w-6xl mx-auto">
          {/* Path SVG */}
          <div className="relative h-24 mb-8 hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M0,50 C250,150 350,-50 500,50 C650,150 750,-50 1000,50"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                initial={{ strokeDashoffset: 1000 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(var(--primary))" />
                  <stop offset="50%" stopColor="rgb(139, 92, 246)" />
                  <stop offset="100%" stopColor="rgb(236, 72, 153)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Step markers */}
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`absolute top-1/2 transform -translate-y-1/2 z-20 cursor-pointer`}
                style={{ left: `${index * 50}%`, marginLeft: index === 0 ? "0" : index === 2 ? "-24px" : "-12px" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveStep(step.id)}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeStep >= step.id
                      ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
                      : "bg-white border-2 border-slate-200 text-slate-400"
                  } transition-all duration-300`}
                >
                  {activeStep > step.id ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <span className="font-bold text-lg">{step.id}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile step indicators */}
          <div className="flex justify-center space-x-4 mb-8 md:hidden">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${
                  activeStep >= step.id
                    ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
                    : "bg-white border-2 border-slate-200 text-slate-400"
                } transition-all duration-300`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveStep(step.id)}
              >
                {activeStep > step.id ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <span className="font-bold">{step.id}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Steps content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[60vh]">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
                  className={`relative ${activeStep === step.id ? "z-10" : "z-0"}`}
                >
                  <Card
                    className={`h-full overflow-hidden transition-all duration-500  ${
                      activeStep === step.id
                        ? "border-2 shadow-lg scale-105 border-indigo-200"
                        : "border border-slate-200 opacity-70 scale-95"
                    }`}
                  >
                    {/* Decorative top gradient */}
                    <div
                      className="h-2 w-full"
                      style={{
                        background: `linear-gradient(to right, ${step.color}, ${
                          index < steps.length - 1 ? steps[index + 1].color : step.color
                        })`,
                      }}
                    ></div>

                    <CardContent className="p-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white`}
                        style={{ backgroundColor: step.color }}
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{step.title}</h3>
                        <p className="text-slate-600 text-center">{step.description}</p>
                      </motion.div>

                      {/* Step number badge */}
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <span className="text-sm font-bold text-slate-600">{step.id}</span>
                      </div>

                      {/* Interactive elements based on step */}
                      {step.id === 1 && (
                        <motion.div
                          className="mt-6 p-3 bg-slate-50 rounded-lg"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: activeStep === step.id ? 1 : 0,
                            height: activeStep === step.id ? "auto" : 0,
                          }}
                        >
                          <div className="flex items-center space-x-2 text-sm text-slate-600">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span>Data Science: High Demand</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-slate-600 mt-2">
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <span>Web Dev: Moderate Growth</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-slate-600 mt-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span>Cloud: Rapid Expansion</span>
                          </div>
                        </motion.div>
                      )}

                      {step.id === 2 && (
                        <motion.div
                          className="mt-6 p-3 bg-slate-50 rounded-lg"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: activeStep === step.id ? 1 : 0,
                            height: activeStep === step.id ? "auto" : 0,
                          }}
                        >
                          <div className="text-sm text-slate-600">
                            <div className="font-medium">Sample Course: Machine Learning</div>
                            <ul className="mt-2 space-y-1 list-disc list-inside">
                              <li>Fundamentals & Math</li>
                              <li>Algorithms & Models</li>
                              <li>Practical Applications</li>
                            </ul>
                          </div>
                        </motion.div>
                      )}

                      {step.id === 3 && (
                        <motion.div
                          className="mt-6 p-3 bg-slate-50 rounded-lg"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: activeStep === step.id ? 1 : 0,
                            height: activeStep === step.id ? "auto" : 0,
                          }}
                        >
                          <div className="text-sm text-slate-600">
                            <div className="font-medium">Interview Simulation</div>
                            <div className="mt-2 flex items-start space-x-2">
                              <div className="w-6 h-6 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600">
                                AI
                              </div>
                              <div className="bg-indigo-50 p-2 rounded-lg rounded-tl-none">
                                Tell me about your experience with React.
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Interactive controls */}
          <div className="flex justify-center mt-12 space-x-4">
            <motion.button
              className={`px-4 py-2 rounded-lg ${
                activeStep > 1
                  ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
              whileHover={activeStep > 1 ? { scale: 1.05 } : {}}
              whileTap={activeStep > 1 ? { scale: 0.95 } : {}}
              onClick={() => activeStep > 1 && setActiveStep(activeStep - 1)}
            >
              Previous Step
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-lg ${
                activeStep < 3
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
              whileHover={activeStep < 3 ? { scale: 1.05 } : {}}
              whileTap={activeStep < 3 ? { scale: 0.95 } : {}}
              onClick={() => activeStep < 3 && setActiveStep(activeStep + 1)}
            >
              Next Step
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
