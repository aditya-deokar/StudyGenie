import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { format, formatDistanceToNow } from "date-fns"



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  // Format as Indian currency (lakhs and crores)
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} L`
  } else {
    return `₹${amount.toLocaleString("en-IN")}`
  }
}





export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return format(date, "MMM d, yyyy")
  } catch (error) {
    return "Invalid date"
  }
}

export function formatTimeAgo(dateString: string): string {
  try {
    const date = new Date(dateString)
    return formatDistanceToNow(date, { addSuffix: true })
  } catch (error) {
    return "Invalid date"
  }
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`
  }

  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  if (remainingMinutes === 0) {
    return `${hours} hr`
  }

  return `${hours} hr ${remainingMinutes} min`
}

export function getStatusColor(status: string): string {
  const statusMap: Record<string, string> = {
    "Not Started": "bg-gray-200 text-gray-800",
    "In Progress": "bg-amber-100 text-amber-800",
    Completed: "bg-green-100 text-green-800",
    Scheduled: "bg-purple-100 text-purple-800",
    "Feedback Pending": "bg-blue-100 text-blue-800",
    "Feedback Ready": "bg-emerald-100 text-emerald-800",
    Cancelled: "bg-red-100 text-red-800",
  }

  return statusMap[status] || "bg-gray-200 text-gray-800"
}

export function getNotificationIcon(type: string): string {
  const iconMap: Record<string, string> = {
    Info: "info",
    Success: "check-circle",
    Warning: "alert-triangle",
    Error: "x-circle",
    Reminder: "bell",
  }

  return iconMap[type] || "info"
}

export function getSkillLevelColor(level: string): string {
  const levelMap: Record<string, string> = {
    Beginner: "bg-blue-100 text-blue-800",
    Intermediate: "bg-green-100 text-green-800",
    Advanced: "bg-purple-100 text-purple-800",
    Expert: "bg-rose-100 text-rose-800",
  }

  return levelMap[level] || "bg-gray-100 text-gray-800"
}

export function getTrendIcon(trend: string): string {
  const trendMap: Record<string, string> = {
    Improving: "trending-up",
    Steady: "minus",
    Declining: "trending-down",
  }

  return trendMap[trend] || "minus"
}
