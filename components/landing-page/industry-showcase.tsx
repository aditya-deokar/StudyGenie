"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts"
import { useRef } from "react"

interface IndustryShowcaseProps {
  data: {
    title: string
    description: string
    exampleIndustry: string
    charts: {
      title: string
      data: any[]
      xAxisKey: string
      yAxisKeys: { key: string; color: string; name?: string; unit?: string }[]
      chartType: "bar" | "line" | "composed"
      description?: string
    }[]
    keyHighlights: { label: string; value: string | number }[]
  }
}

export default function IndustryShowcase({ data }: IndustryShowcaseProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
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
            Market Intelligence
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            {data.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            {data.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4"
          >
            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 px-4 py-1.5 text-lg font-medium">
              {data.exampleIndustry}
            </Badge>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {data.keyHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Card className="border-slate-200 h-full hover:border-indigo-200 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-600">{highlight.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.p
                    className="text-3xl font-bold text-indigo-600"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index, type: "spring" }}
                  >
                    {highlight.value}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.charts.map((chart, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 * index, ease: "easeOut" }}
              className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">{chart.title}</h3>
              <p className="text-slate-600 mb-6">{chart.description}</p>

              <motion.div
                className="h-80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + 0.2 * index }}
              >
                {chart.chartType === "bar" && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chart.data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis
                        dataKey={chart.xAxisKey}
                        tick={{ fill: "#64748b" }}
                        angle={-45}
                        textAnchor="end"
                        height={70}
                      />
                      <YAxis tick={{ fill: "#64748b" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          borderRadius: "0.5rem",
                          border: "1px solid #e2e8f0",
                          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        }}
                        formatter={(value, name) => {
                          const yAxis = chart.yAxisKeys.find((y) => y.key === name || y.name === name)
                          return [`${value}${yAxis?.unit || ""}`, yAxis?.name || name]
                        }}
                        animationDuration={300}
                      />
                      <Legend />
                      {chart.yAxisKeys.map((yAxis, i) => (
                        <Bar
                          key={i}
                          dataKey={yAxis.key}
                          fill={yAxis.color}
                          name={yAxis.name || yAxis.key}
                          radius={[4, 4, 0, 0]}
                          animationDuration={1500}
                          animationBegin={300 * i}
                        />
                      ))}
                    </BarChart>
                  </ResponsiveContainer>
                )}

                {chart.chartType === "line" && (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chart.data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey={chart.xAxisKey} tick={{ fill: "#64748b" }} />
                      <YAxis tick={{ fill: "#64748b" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          borderRadius: "0.5rem",
                          border: "1px solid #e2e8f0",
                          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        }}
                        formatter={(value, name) => {
                          const yAxis = chart.yAxisKeys.find((y) => y.key === name || y.name === name)
                          return [`${value}${yAxis?.unit || ""}`, yAxis?.name || name]
                        }}
                        animationDuration={300}
                      />
                      <Legend />
                      {chart.yAxisKeys.map((yAxis, i) => (
                        <Line
                          key={i}
                          type="monotone"
                          dataKey={yAxis.key}
                          stroke={yAxis.color}
                          name={yAxis.name || yAxis.key}
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                          animationDuration={1500}
                          animationBegin={300 * i}
                        />
                      ))}
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
