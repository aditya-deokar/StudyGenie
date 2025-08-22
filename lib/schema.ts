import { z } from "zod"

// Basic schemas
export const userInfoSchema = z.object({
  userId: z.string(),
  name: z.string(),
  email: z.string().email(),
  profilePictureUrl: z.string().optional(),
  joinDate: z.string(),
  subscriptionTier: z.enum(["Free", "Premium", "Enterprise"]),
  timezone: z.string().optional(),
})

export const dashboardSummarySchema = z.object({
  coursesInProgress: z.number().int().nonnegative(),
  coursesCompleted: z.number().int().nonnegative(),
  interviewsTaken: z.number().int().nonnegative(),
  averageCompletionRate: z.number().min(0).max(100),
  skillsTracked: z.number().int().nonnegative(),
  pendingTasks: z.number().int().nonnegative(),
  unreadNotifications: z.number().int().nonnegative(),
})

export const courseInfoSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  thumbnailUrl: z.string().optional(),
  status: z.enum(["Not Started", "In Progress", "Completed"]),
  progressPercent: z.number().min(0).max(100),
  lastAccessed: z.string(),
  generatedOn: z.string().optional(),
  estimatedDurationMinutes: z.number().int().positive(),
  modulesTotal: z.number().int().positive(),
  modulesCompleted: z.number().int().nonnegative(),
  skillsCovered: z.array(z.string()),
  certificateUrl: z.string().optional(),
})

export const interviewInfoSchema = z.object({
  id: z.string(),
  roleTitle: z.string(),
  scheduledDate: z.string().optional(),
  completedDate: z.string().optional(),
  status: z.enum(["Scheduled", "Completed", "Feedback Pending", "Feedback Ready", "Cancelled"]),
  overallScore: z.number().min(0).max(100).optional(),
  feedbackSummary: z.string().optional(),
  detailedFeedbackUrl: z.string().optional(),
  skillsAssessed: z.array(z.string()),
})

export const insightInfoSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.enum(["Report", "Article", "Trend Analysis", "Video Summary"]),
  source: z.string(),
  publishDate: z.string(),
  accessedDate: z.string().optional(),
  summary: z.string(),
  fullContentUrl: z.string(),
  isSaved: z.boolean(),
  relatedSkills: z.array(z.string()),
})

export const skillProficiencySchema = z.object({
  skillName: z.string(),
  currentLevel: z.enum(["Beginner", "Intermediate", "Advanced", "Expert"]),
  progressTrend: z.enum(["Improving", "Steady", "Declining"]),
  lastAssessed: z.string(),
  evidence: z.array(
    z.object({
      type: z.enum(["Course", "Interview", "Assessment"]),
      id: z.string(),
      title: z.string(),
    }),
  ),
})

export const timeDataPointSchema = z.object({
  date: z.string(),
  value: z.number(),
})

export const learningAnalyticsSchema = z.object({
  timeSpentWeekly: z.array(timeDataPointSchema),
  courseCompletionTrend: z.array(timeDataPointSchema),
  interviewPerformanceTrend: z.array(timeDataPointSchema),
  activeDays: z.object({
    last30Days: z.number().int().nonnegative(),
    last90Days: z.number().int().nonnegative(),
  }),
  topSkills: z.array(skillProficiencySchema),
  weakestSkills: z.array(skillProficiencySchema),
})

export const activityLogItemSchema = z.object({
  id: z.string(),
  timestamp: z.string(),
  type: z.enum([
    "COURSE_GENERATED",
    "COURSE_STARTED",
    "MODULE_COMPLETED",
    "COURSE_COMPLETED",
    "INTERVIEW_SCHEDULED",
    "INTERVIEW_COMPLETED",
    "INTERVIEW_FEEDBACK_READY",
    "INSIGHT_VIEWED",
    "ACHIEVEMENT_UNLOCKED",
  ]),
  description: z.string(),
  relatedItemId: z.string().optional(),
  link: z.string().optional(),
})

export const notificationItemSchema = z.object({
  id: z.string(),
  timestamp: z.string(),
  type: z.enum(["Info", "Success", "Warning", "Error", "Reminder"]),
  title: z.string(),
  message: z.string(),
  isRead: z.boolean(),
  link: z.string().optional(),
})

export const achievementSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  iconUrl: z.string().optional(),
  achievedDate: z.string(),
})

export const calendarEventSchema = z.object({
  id: z.string(),
  title: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  type: z.enum(["Interview", "Course Deadline", "Reminder"]),
  relatedItemId: z.string().optional(),
  link: z.string().optional(),
})

// Main dashboard data schema
export const neoPrepDashboardDataSchema = z.object({
  userInfo: userInfoSchema,
  summary: dashboardSummarySchema,
  courses: z.object({
    inProgress: z.array(courseInfoSchema),
    completed: z.array(courseInfoSchema),
    suggested: z.array(courseInfoSchema),
    generatedByUser: z.array(courseInfoSchema),
  }),
  interviews: z.object({
    scheduled: z.array(interviewInfoSchema),
    completed: z.array(interviewInfoSchema),
  }),
  industryInsights: z.object({
    latest: z.array(insightInfoSchema),
    recommended: z.array(insightInfoSchema),
    saved: z.array(insightInfoSchema),
  }),
  analytics: learningAnalyticsSchema,
  skillProfile: z.object({
    allSkills: z.array(skillProficiencySchema),
  }),
  recentActivity: z.array(activityLogItemSchema),
  notifications: z.array(notificationItemSchema),
  achievements: z.array(achievementSchema),
  upcomingEvents: z.array(calendarEventSchema),
  quickActions: z.array(
    z.object({
      label: z.string(),
      targetUrl: z.string(),
      icon: z.string().optional(),
    }),
  ),
  settingsUrl: z.string(),
  helpCenterUrl: z.string(),
})
