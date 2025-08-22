
import type { ActivityHeatmapData } from "./types"
import { format, subDays } from "date-fns"



type CourseStatus = "Not Started" | "In Progress" | "Completed"
type InterviewStatus = "Scheduled" | "Completed" | "Feedback Pending" | "Feedback Ready" | "Cancelled"
type InsightType = "Report" | "Article" | "Trend Analysis" | "Video Summary"
type NotificationType = "Info" | "Success" | "Warning" | "Error" | "Reminder"
type ActivityType =
  | "COURSE_GENERATED"
  | "COURSE_STARTED"
  | "MODULE_COMPLETED"
  | "COURSE_COMPLETED"
  | "INTERVIEW_SCHEDULED"
  | "INTERVIEW_COMPLETED"
  | "INTERVIEW_FEEDBACK_READY"
  | "INSIGHT_VIEWED"
  | "ACHIEVEMENT_UNLOCKED"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert" // Or use a numerical scale 0-100

interface UserInfo {
  userId: string
  name: string
  email: string
  profilePictureUrl?: string // Optional
  joinDate: string // ISO 8601 Date string
  subscriptionTier: "Free" | "Premium" | "Enterprise" // Example tiers
  timezone?: string // e.g., "America/New_York"
}

interface DashboardSummary {
  coursesInProgress: number
  coursesCompleted: number
  interviewsTaken: number
  averageCompletionRate: number // Percentage (0-100)
  skillsTracked: number
  pendingTasks: number // e.g., upcoming interviews, overdue modules
  unreadNotifications: number
}

interface CourseInfo {
  id: string
  title: string
  description: string // Short description
  thumbnailUrl?: string
  status: CourseStatus
  progressPercent: number // 0-100
  lastAccessed: string // ISO 8601 Date string
  generatedOn?: string // ISO 8601 Date string (if AI generated)
  estimatedDurationMinutes: number
  modulesTotal: number
  modulesCompleted: number
  skillsCovered: string[] // List of skill names
  certificateUrl?: string // Link if completed and certificate issued
}

interface InterviewInfo {
  id: string
  roleTitle: string // e.g., "Software Engineer", "Product Manager"
  scheduledDate?: string // ISO 8601 Date string (null if not scheduled/completed)
  completedDate?: string // ISO 8601 Date string (null if not completed)
  status: InterviewStatus
  overallScore?: number // e.g., 0-100 or similar scale
  feedbackSummary?: string // Short AI feedback snippet
  detailedFeedbackUrl?: string // Link to the full AI interview report
  skillsAssessed: string[]
}

interface InsightInfo {
  id: string
  title: string
  type: InsightType
  source: string // e.g., "NeoPrep AI Analysis", "External Partner"
  publishDate: string // ISO 8601 Date string
  accessedDate?: string // ISO 8601 Date string (when user last viewed it)
  summary: string
  fullContentUrl: string // Link to the detailed insight
  isSaved: boolean // Did the user bookmark/save this?
  relatedSkills: string[]
}

interface SkillProficiency {
  skillName: string
  currentLevel: SkillLevel // Or number score
  progressTrend: "Improving" | "Steady" | "Declining" // Based on recent activity
  lastAssessed: string // ISO 8601 Date string
  evidence: Array<{ type: "Course" | "Interview" | "Assessment"; id: string; title: string }>
}

interface TimeDataPoint {
  date: string // e.g., "YYYY-MM-DD" or "YYYY-MM"
  value: number
}

interface LearningAnalytics {
  // Data for charts/visualizations
  timeSpentWeekly: TimeDataPoint[] // { date: "YYYY-Www", value: minutes }
  courseCompletionTrend: TimeDataPoint[] // { date: "YYYY-MM", value: count }
  interviewPerformanceTrend: TimeDataPoint[] // { date: "YYYY-MM", value: average_score }
  activeDays: {
    // Heatmap data perhaps
    last30Days: number
    last90Days: number
  }
  topSkills: SkillProficiency[] // Top 3-5 skills
  weakestSkills: SkillProficiency[] // Bottom 3-5 skills needing focus
}

interface ActivityLogItem {
  id: string
  timestamp: string // ISO 8601 Date string
  type: ActivityType
  description: string // e.g., "Completed module 'State Management' in 'Advanced React'"
  relatedItemId?: string // ID of the course, interview, etc.
  link?: string // Direct link to the related item
}

interface NotificationItem {
  id: string
  timestamp: string // ISO 8601 Date string
  type: NotificationType
  title: string
  message: string
  isRead: boolean
  link?: string // Optional link to related content
}

interface Achievement {
  id: string
  name: string
  description: string
  iconUrl?: string
  achievedDate: string // ISO 8601 Date string
}

interface CalendarEvent {
  id: string
  title: string
  startDate: string // ISO 8601 Date string
  endDate?: string // ISO 8601 Date string (for events with duration)
  type: "Interview" | "Course Deadline" | "Reminder"
  relatedItemId?: string
  link?: string
}

// Add the activityHeatmap property to the NeoPrepDashboardData interface
export interface NeoPrepDashboardData {
  userInfo: UserInfo
  summary: DashboardSummary

  // Course Data Sections
  courses: {
    inProgress: CourseInfo[] // Courses actively being worked on
    completed: CourseInfo[] // Completed courses
    suggested: CourseInfo[] // AI or manually suggested courses (not started)
    generatedByUser: CourseInfo[] // Courses the user explicitly generated
  }

  // Interview Data Sections
  interviews: {
    scheduled: InterviewInfo[] // Upcoming interviews
    completed: InterviewInfo[] // Past interviews (may or may not have feedback yet)
  }

  // Industry Insights Section
  industryInsights: {
    latest: InsightInfo[] // Most recent insights pushed by the platform
    recommended: InsightInfo[] // Insights recommended based on user profile/activity
    saved: InsightInfo[] // Insights bookmarked by the user
  }

  // Analytics & Progress Section
  analytics: LearningAnalytics
  skillProfile: {
    allSkills: SkillProficiency[] // Comprehensive list of tracked skills
  }

  // Activity & Notifications
  recentActivity: ActivityLogItem[] // A feed of the latest actions
  notifications: NotificationItem[] // User notifications
  activityHeatmap?: ActivityHeatmapData // Activity heatmap data

  // Achievements & Calendar
  achievements: Achievement[] // Badges, certificates earned
  upcomingEvents: CalendarEvent[] // Merged view for calendar widget

  // Quick Actions & Links (for UI elements)
  quickActions: Array<{
    label: string // e.g., "Generate New Course", "Practice Interview"
    targetUrl: string // Link to the specific feature page
    icon?: string // Optional icon identifier (e.g., 'add', 'video')
  }>
  settingsUrl: string // Link to user settings page
  helpCenterUrl: string // Link to help/support
}



// Generate mock activity data for the past 365 days
export const generateActivityHeatmapData = (): ActivityHeatmapData => {
  const today = new Date()
  const data: ActivityHeatmapData = []

  // Generate data for the past 365 days
  for (let i = 365; i >= 0; i--) {
    const date = subDays(today, i)

    // Generate a random activity level with some patterns
    // More likely to have activity on weekdays
    const dayOfWeek = date.getDay() // 0 = Sunday, 6 = Saturday
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

    // Create some patterns in the data
    let activityProbability = isWeekend ? 0.3 : 0.7 // Less activity on weekends

    // Add some seasonal patterns (less activity during holidays)
    const month = date.getMonth() // 0 = January, 11 = December
    if (month === 11 && date.getDate() > 20) {
      // Christmas period
      activityProbability *= 0.5
    }

    // Add some streaks of activity
    const dateNum = date.getDate()
    if (dateNum > 10 && dateNum < 20) {
      activityProbability *= 1.2 // More likely to have activity in the middle of the month
    }

    // Determine activity level based on probability
    let activityLevel: 0 | 1 | 2 | 3 | 4 = 0
    const random = Math.random()
    if (random < activityProbability) {
      if (random < activityProbability * 0.2) activityLevel = 1
      else if (random < activityProbability * 0.5) activityLevel = 2
      else if (random < activityProbability * 0.8) activityLevel = 3
      else activityLevel = 4
    }

    data.push({
      date: format(date, "yyyy-MM-dd"),
      activityLevel,
    })
  }

  return data
}

// Add activityHeatmap to the placeholderData object
const placeholderData: NeoPrepDashboardData = {
  userInfo: {
    userId: "user-123",
    name: "Alex Johnson",
    email: "alex.j@example.com",
    profilePictureUrl: "/images/avatars/alex.png",
    joinDate: new Date().toISOString(),
    subscriptionTier: "Premium",
    timezone: "Europe/London",
  },
  summary: {
    coursesInProgress: 3,
    coursesCompleted: 5,
    interviewsTaken: 2,
    averageCompletionRate: 75,
    skillsTracked: 15,
    pendingTasks: 1, // e.g., 1 scheduled interview
    unreadNotifications: 2,
  },
  courses: {
    inProgress: [
      {
        id: "crs-001",
        title: "Advanced React Patterns",
        description: "Deep dive into React...",
        thumbnailUrl: "/images/courses/react.jpg",
        status: "In Progress",
        progressPercent: 60,
        lastAccessed: new Date(Date.now() - 86400000).toISOString(),
        estimatedDurationMinutes: 480,
        modulesTotal: 10,
        modulesCompleted: 6,
        skillsCovered: ["React", "State Management", "Hooks"],
      },
      {
        id: "crs-002",
        title: "Python for Data Science",
        description: "Learn Python fundamentals...",
        thumbnailUrl: "/images/courses/python.jpg",
        status: "In Progress",
        progressPercent: 25,
        lastAccessed: new Date(Date.now() - 172800000).toISOString(),
        estimatedDurationMinutes: 600,
        modulesTotal: 15,
        modulesCompleted: 4,
        skillsCovered: ["Python", "Pandas", "NumPy"],
      },
    ],
    completed: [
      {
        id: "crs-003",
        title: "Introduction to Cloud Computing",
        description: "Basics of cloud...",
        thumbnailUrl: "/images/courses/cloud.jpg",
        status: "Completed",
        progressPercent: 100,
        lastAccessed: new Date(Date.now() - 604800000).toISOString(),
        estimatedDurationMinutes: 180,
        modulesTotal: 5,
        modulesCompleted: 5,
        skillsCovered: ["Cloud Computing", "AWS Basics"],
        certificateUrl: "/certificates/crs-003.pdf",
      },
    ],
    suggested: [
      {
        id: "crs-gen-suggest-1",
        title: "Machine Learning Fundamentals",
        description: "Based on your interest in Python...",
        thumbnailUrl: "/images/courses/ml.jpg",
        status: "Not Started",
        progressPercent: 0,
        lastAccessed: "",
        estimatedDurationMinutes: 720,
        modulesTotal: 12,
        modulesCompleted: 0,
        skillsCovered: ["Machine Learning", "Scikit-learn"],
      },
    ],
    generatedByUser: [
      // Potentially list courses explicitly generated by the user via the 'Generate Course' feature
    ],
  },
  interviews: {
    scheduled: [
      {
        id: "int-003",
        roleTitle: "Frontend Developer",
        scheduledDate: new Date(Date.now() + 2 * 86400000).toISOString(),
        status: "Scheduled",
        skillsAssessed: ["React", "JavaScript", "CSS", "Problem Solving"],
      },
    ],
    completed: [
      {
        id: "int-001",
        roleTitle: "Software Engineer Intern",
        completedDate: new Date(Date.now() - 7 * 86400000).toISOString(),
        status: "Feedback Ready",
        overallScore: 85,
        feedbackSummary: "Strong problem-solving, good communication. Needs more depth in system design.",
        detailedFeedbackUrl: "/interviews/int-001/feedback",
        skillsAssessed: ["Data Structures", "Algorithms", "Communication"],
      },
      {
        id: "int-002",
        roleTitle: "Data Analyst",
        completedDate: new Date(Date.now() - 14 * 86400000).toISOString(),
        status: "Feedback Ready",
        overallScore: 78,
        feedbackSummary: "Solid Python skills, needs practice in SQL query optimization.",
        detailedFeedbackUrl: "/interviews/int-002/feedback",
        skillsAssessed: ["Python", "SQL", "Data Visualization"],
      },
    ],
  },
  industryInsights: {
    latest: [
      {
        id: "ins-001",
        title: "The Rise of Serverless Edge Computing",
        type: "Trend Analysis",
        source: "NeoPrep AI Analysis",
        publishDate: new Date(Date.now() - 3 * 86400000).toISOString(),
        summary: "Explore how edge computing is changing cloud...",
        fullContentUrl: "/insights/ins-001",
        isSaved: false,
        relatedSkills: ["Cloud Computing", "Serverless", "Edge Computing"],
      },
    ],
    recommended: [
      {
        id: "ins-002",
        title: "React vs Vue vs Angular in 2024",
        type: "Article",
        source: "Tech Insights Blog",
        publishDate: new Date(Date.now() - 10 * 86400000).toISOString(),
        summary: "A comparison of popular frontend frameworks...",
        fullContentUrl: "/insights/ins-002",
        isSaved: false,
        relatedSkills: ["React", "Vue", "Angular", "Frontend Development"],
      },
    ],
    saved: [
      // Insights the user explicitly saved
    ],
  },
  analytics: {
    timeSpentWeekly: [
      { date: "2024-W20", value: 180 },
      { date: "2024-W21", value: 240 },
      { date: "2024-W22", value: 150 },
    ],
    courseCompletionTrend: [
      { date: "2024-04", value: 2 },
      { date: "2024-05", value: 1 },
    ],
    interviewPerformanceTrend: [
      { date: "2024-04", value: 78 },
      { date: "2024-05", value: 85 },
    ],
    activeDays: { last30Days: 15, last90Days: 40 },
    topSkills: [
      {
        skillName: "React",
        currentLevel: "Advanced",
        progressTrend: "Improving",
        lastAssessed: new Date().toISOString(),
        evidence: [{ type: "Course", id: "crs-001", title: "Advanced React Patterns" }],
      },
    ],
    weakestSkills: [
      {
        skillName: "System Design",
        currentLevel: "Beginner",
        progressTrend: "Steady",
        lastAssessed: new Date(Date.now() - 7 * 86400000).toISOString(),
        evidence: [{ type: "Interview", id: "int-001", title: "Software Engineer Intern" }],
      },
    ],
  },
  skillProfile: {
    allSkills: [
      {
        skillName: "React",
        currentLevel: "Advanced",
        progressTrend: "Improving",
        lastAssessed: new Date().toISOString(),
        evidence: [{ type: "Course", id: "crs-001", title: "Advanced React Patterns" }],
      },
      {
        skillName: "Python",
        currentLevel: "Intermediate",
        progressTrend: "Improving",
        lastAssessed: new Date().toISOString(),
        evidence: [{ type: "Course", id: "crs-002", title: "Python for Data Science" }],
      },
      // ... more skills
    ],
  },
  recentActivity: [
    {
      id: "act-001",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      type: "MODULE_COMPLETED",
      description: "Completed module 'React Hooks Deep Dive' in 'Advanced React Patterns'",
      relatedItemId: "crs-001",
    },
    {
      id: "act-002",
      timestamp: new Date(Date.now() - 2 * 86400000).toISOString(),
      type: "COURSE_STARTED",
      description: "Started course 'Python for Data Science'",
      relatedItemId: "crs-002",
    },
    {
      id: "act-003",
      timestamp: new Date(Date.now() - 7 * 86400000).toISOString(),
      type: "INTERVIEW_FEEDBACK_READY",
      description: "Feedback ready for 'Software Engineer Intern' interview",
      relatedItemId: "int-001",
      link: "/interviews/int-001/feedback",
    },
  ],
  notifications: [
    {
      id: "notif-001",
      timestamp: new Date(Date.now() - 7 * 86400000).toISOString(),
      type: "Success",
      title: "Interview Feedback Ready",
      message: "Your feedback for the Software Engineer Intern AI interview is now available.",
      isRead: false,
      link: "/interviews/int-001/feedback",
    },
    {
      id: "notif-002",
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      type: "Reminder",
      title: "Upcoming Interview",
      message: "Your Frontend Developer interview is scheduled for tomorrow.",
      isRead: false,
      link: "/interviews/scheduled",
    },
  ],
  achievements: [
    {
      id: "ach-001",
      name: "Cloud Beginner",
      description: "Completed Introduction to Cloud Computing",
      iconUrl: "/images/badges/cloud.svg",
      achievedDate: new Date(Date.now() - 604800000).toISOString(),
    },
  ],
  upcomingEvents: [
    {
      id: "cal-001",
      title: "Interview: Frontend Developer",
      startDate: new Date(Date.now() + 2 * 86400000).toISOString(),
      type: "Interview",
      relatedItemId: "int-003",
      link: "/interviews/scheduled",
    },
    // Add course deadlines here if applicable
  ],
  quickActions: [
    { label: "Generate New Course", targetUrl: "/courses/generate", icon: "add_circle" },
    { label: "Practice AI Interview", targetUrl: "/interviews/practice", icon: "video_call" },
    { label: "Explore Insights", targetUrl: "/insights", icon: "insights" },
  ],
  // Add the activityHeatmap property
  activityHeatmap: generateActivityHeatmapData(),
  settingsUrl: "/settings/profile",
  helpCenterUrl: "/help",
}

export default placeholderData
