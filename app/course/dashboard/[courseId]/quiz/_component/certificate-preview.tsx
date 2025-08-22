"use client"

import { CertificateData } from "@/types/zodAssesmentSchema"
import { useRef, useEffect } from "react"


interface CertificatePreviewProps {
  data: CertificateData
  template: string
}

export function CertificatePreview({ data, template }: CertificatePreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 800
    canvas.height = 600

    // Clear canvas
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw border based on template
    ctx.strokeStyle = template === "professional" ? "#1a365d" : template === "modern" ? "#2563eb" : "#047857"
    ctx.lineWidth = 10
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40)

    // Add decorative elements
    if (template === "professional") {
      // Add professional template elements
      ctx.fillStyle = "#1a365d"
      ctx.fillRect(0, 0, canvas.width, 60)
      ctx.fillRect(0, canvas.height - 60, canvas.width, 60)
    } else if (template === "modern") {
      // Add modern template elements
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop(0, "rgba(37, 99, 235, 0.1)")
      gradient.addColorStop(1, "rgba(37, 99, 235, 0.3)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Add certificate title
    ctx.fillStyle = "#000000"
    ctx.font = "bold 36px serif"
    ctx.textAlign = "center"
    ctx.fillText("Certificate of Completion", canvas.width / 2, 120)

    // Add recipient name
    ctx.font = "bold 28px sans-serif"
    ctx.fillText(data.userName, canvas.width / 2, 250)

    // Add course/quiz title
    ctx.font = "24px sans-serif"
    ctx.fillText(`has successfully completed`, canvas.width / 2, 300)
    ctx.font = "bold 26px sans-serif"
    ctx.fillText(data.quizTitle, canvas.width / 2, 340)

    // Add score
    ctx.font = "22px sans-serif"
    ctx.fillText(`with a score of ${data.score.percentage}%`, canvas.width / 2, 390)

    // Add date
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(data.completionDate)
    ctx.font = "20px sans-serif"
    ctx.fillText(formattedDate, canvas.width / 2, 450)

    // Add signature line
    ctx.beginPath()
    ctx.moveTo(canvas.width / 2 - 100, 500)
    ctx.lineTo(canvas.width / 2 + 100, 500)
    ctx.stroke()

    ctx.font = "18px sans-serif"
    ctx.fillText("Instructor Signature", canvas.width / 2, 530)
  }, [data, template])

  return (
    <div className="w-full overflow-hidden rounded-lg border shadow-sm">
      <canvas ref={canvasRef} className="w-full h-auto" style={{ maxWidth: "100%" }} />
    </div>
  )
}
