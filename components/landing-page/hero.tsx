"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { FloatingPaper } from "./floating-paper"
import { RoboAnimation } from "./robo-animation"


interface HeroProps {
  data: {
    headline: string
    subHeadline: string
    ctaButtonText: string
    ctaButtonLink: string
    imageUrl?: string
  }
}

export default function Hero({ data }: HeroProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden py-20 md:py-28 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={20} />
      </div>

      {/* Background elements */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col  items-center justify-between gap-12">
          <div className=" text-center ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.span
                className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                Powered by Advanced AI
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 gradient-text"
            >
              {data.headline.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                  className="inline-block ml-3"
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-center md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto "
            >
              {data.subHeadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.7, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={data.ctaButtonLink}>
                <Button
                  size="lg"
                  className=" bg-primary text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transition-all duration-200 mb-5"
                >
                  {data.ctaButtonText}
                  <ArrowRight className="ml-2 h-5 w-5 animate-pulse-slow" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 100 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative ">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-purple-600 rounded-2xl rotate-3 scale-105 opacity-10"></div>
              
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 rounded-full opacity-80 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-100 rounded-full opacity-80 blur-xl"></div>

                {/* 3D Illustration */}
                <RoboAnimation />



                {/* for insights */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white rounded-xl p-3 shadow-lg border border-slate-100 "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Instant Insights</p>
                      <p className="text-xs text-slate-500">Real-time data analysis</p>
                    </div>
                  </div>
                </motion.div>


                {/* for course */}
                <motion.div
                  className="absolute -bottom-32 -left-32  rounded-xl p-3 shadow-lg border glass "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Create Courses</p>
                      <p className="text-xs text-slate-500">with Most latest Content</p>
                    </div>
                  </div>
                </motion.div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
