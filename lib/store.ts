import { create } from "zustand"
import { persist } from "zustand/middleware"
import placeholderData, {
  type NeoPrepDashboardData,

  generateActivityHeatmapData,
} from "./placeholder-data"
import { ActivityHeatmapData } from "./types"
// import type { ActivityHeatmapData } from "./types"

// Update the DashboardState interface to include activityHeatmap
interface DashboardState {
  data: NeoPrepDashboardData & {
    activityHeatmap: ActivityHeatmapData
  }
  isLoading: boolean
  error: string | null

  // Actions
  markNotificationAsRead: (id: string) => void
  toggleInsightSaved: (id: string) => void
  updateUserPreferences: (preferences: Partial<{ darkMode: boolean; sidebarCollapsed: boolean }>) => void

  // UI State
  ui: {
    darkMode: boolean
    sidebarCollapsed: boolean
    currentView: "dashboard" | "courses" | "interviews" | "insights" | "skills"
  }
  setCurrentView: (view: "dashboard" | "courses" | "interviews" | "insights" | "skills") => void
  toggleSidebar: () => void
  toggleDarkMode: () => void
}

// Remove the incorrect ActivityHeatmapData definition and generateActivityHeatmapData function
// Use the imported types and functions from placeholder-data instead

// Update the initial state to include activityHeatmap
export const useDashboardStore = create<DashboardState>()(
  persist(
    (set) => ({
      data: {
        ...placeholderData,
        activityHeatmap: placeholderData.activityHeatmap || generateActivityHeatmapData(),
      },
      isLoading: false,
      error: null,

      // Actions
      markNotificationAsRead: (id: string) =>
        set((state) => ({
          data: {
            ...state.data,
            notifications: state.data.notifications.map((notification) =>
              notification.id === id ? { ...notification, isRead: true } : notification,
            ),
          },
        })),

      toggleInsightSaved: (id: string) =>
        set((state) => ({
          data: {
            ...state.data,
            industryInsights: {
              ...state.data.industryInsights,
              latest: state.data.industryInsights.latest.map((insight) =>
                insight.id === id ? { ...insight, isSaved: !insight.isSaved } : insight,
              ),
              recommended: state.data.industryInsights.recommended.map((insight) =>
                insight.id === id ? { ...insight, isSaved: !insight.isSaved } : insight,
              ),
              saved: state.data.industryInsights.saved.filter((insight) => insight.id !== id),
            },
          },
        })),

      updateUserPreferences: (preferences) =>
        set((state) => ({
          ui: {
            ...state.ui,
            ...preferences,
          },
        })),

      // UI State
      ui: {
        darkMode: false,
        sidebarCollapsed: false,
        currentView: "dashboard",
      },

      setCurrentView: (view) =>
        set((state) => ({
          ui: {
            ...state.ui,
            currentView: view,
          },
        })),

      toggleSidebar: () =>
        set((state) => ({
          ui: {
            ...state.ui,
            sidebarCollapsed: !state.ui.sidebarCollapsed,
          },
        })),

      toggleDarkMode: () =>
        set((state) => ({
          ui: {
            ...state.ui,
            darkMode: !state.ui.darkMode,
          },
        })),
    }),
    {
      name: "neoprep-dashboard-storage",
      partialize: (state) => ({ ui: state.ui }),
    },
  ),
)



interface CourseState {
  // User progress
  chapterProgress: Record<string, number>
  currentChapterId: string | null
  overallProgress: number

  // Read sections
  readSections: string[]

  // Completed exercises
  completedExercises: string[]

  // Completed objectives
  completedObjectives: string[]

  // Watched videos
  watchedVideos: string[]

  // Quiz results
  completedQuizzes: string[]
  quizScores: Record<string, number>

  // Achievements
  achievements: {
    id: string
    title: string
    unlocked: boolean
    unlockedAt?: Date
  }[]

  // Actions
  updateChapterProgress: (chapterId: string, progress: number) => void
  completeChapter: (chapterId: string) => void
  setCurrentChapter: (chapterId: string) => void
  unlockAchievement: (achievementId: string) => void

  // New actions for interactive sections
  markSectionAsRead: (sectionId: string) => void
  completeExercise: (exerciseId: string) => void
  completeObjective: (objectiveId: string) => void
  markVideoAsWatched: (videoId: string) => void
  completeQuiz: (quizId: string, score: number) => void
}

export const useStore = create<CourseState>()(
  persist(
    (set, get) => ({
      // Initial state
      chapterProgress: {},
      currentChapterId: null,
      overallProgress: 0,
      readSections: [],
      completedExercises: [],
      completedObjectives: [],
      watchedVideos: [],
      completedQuizzes: [],
      quizScores: {},
      achievements: [],

      // Actions
      updateChapterProgress: (chapterId, progress) => {
        set((state) => {
          const updatedProgress = {
            ...state.chapterProgress,
            [chapterId]: progress,
          }

          // Calculate overall progress
          const totalChapters = 5 // In a real app, this would be dynamic
          const chapterIds = Object.keys(updatedProgress)
          const completedChapters = chapterIds.filter((id) => updatedProgress[id] === 100).length
          const inProgressPercentage = chapterIds
            .filter((id) => updatedProgress[id] < 100 && updatedProgress[id] > 0)
            .reduce((acc, id) => acc + updatedProgress[id] / 100, 0)

          const overallProgress = Math.round(((completedChapters + inProgressPercentage) / totalChapters) * 100)

          return {
            chapterProgress: updatedProgress,
            overallProgress,
          }
        })
      },

      completeChapter: (chapterId) => {
        get().updateChapterProgress(chapterId, 100)

        // Check for achievements
        if (!get().achievements.find((a) => a.id === "first-chapter" && a.unlocked)) {
          get().unlockAchievement("first-chapter")
        }
      },

      setCurrentChapter: (chapterId) => {
        set({ currentChapterId: chapterId })
      },

      unlockAchievement: (achievementId) => {
        set((state) => {
          const existingAchievement = state.achievements.find((a) => a.id === achievementId)

          if (existingAchievement && existingAchievement.unlocked) {
            return state
          }

          const achievementData: Record<string, { id: string; title: string }> = {
            "first-chapter": {
              id: "first-chapter",
              title: "First Chapter Completed",
            },
            "perfect-quiz": {
              id: "perfect-quiz",
              title: "Perfect Quiz Score",
            },
            reader: {
              id: "reader",
              title: "Avid Reader",
            },
            "exercise-master": {
              id: "exercise-master",
              title: "Exercise Master",
            },
          }

          const achievement = achievementData[achievementId]
          if (!achievement) return state

          return {
            achievements: [
              ...state.achievements.filter((a) => a.id !== achievementId),
              {
                ...achievement,
                unlocked: true,
                unlockedAt: new Date(),
              },
            ],
          }
        })
      },

      // New actions for interactive sections
      markSectionAsRead: (sectionId) => {
        set((state) => {
          if (state.readSections.includes(sectionId)) {
            return state
          }

          const newReadSections = [...state.readSections, sectionId]

          // Update chapter progress based on read sections
          // In a real app, we would calculate this based on the total sections in the chapter
          const chapterId = sectionId.split("_")[0] + "_" + sectionId.split("_")[1]
          const totalSections = 4 // Hardcoded for this example
          const chapterSections = newReadSections.filter((s) => s.startsWith(chapterId))
          const progress = Math.round((chapterSections.length / totalSections) * 100)

          get().updateChapterProgress(chapterId, progress)

          // Check for achievements
          if (newReadSections.length >= 3 && !state.achievements.find((a) => a.id === "reader")) {
            get().unlockAchievement("reader")
          }

          return { readSections: newReadSections }
        })
      },

      completeExercise: (exerciseId) => {
        set((state) => {
          if (state.completedExercises.includes(exerciseId)) {
            return state
          }

          const newCompletedExercises = [...state.completedExercises, exerciseId]

          // Check for achievements
          if (newCompletedExercises.length >= 3 && !state.achievements.find((a) => a.id === "exercise-master")) {
            get().unlockAchievement("exercise-master")
          }

          return { completedExercises: newCompletedExercises }
        })
      },

      completeObjective: (objectiveId) => {
        set((state) => {
          if (state.completedObjectives.includes(objectiveId)) {
            return {
              completedObjectives: state.completedObjectives.filter((id) => id !== objectiveId),
            }
          }

          return { completedObjectives: [...state.completedObjectives, objectiveId] }
        })
      },

      markVideoAsWatched: (videoId) => {
        set((state) => {
          if (state.watchedVideos.includes(videoId)) {
            return state
          }

          return { watchedVideos: [...state.watchedVideos, videoId] }
        })
      },

      completeQuiz: (quizId, score) => {
        set((state) => {
          // Check for perfect score achievement
          if (score === 100 && !state.achievements.find((a) => a.id === "perfect-quiz")) {
            get().unlockAchievement("perfect-quiz")
          }

          return {
            completedQuizzes: [...state.completedQuizzes.filter((id) => id !== quizId), quizId],
            quizScores: { ...state.quizScores, [quizId]: score },
          }
        })
      },
    }),
    {
      name: "course-storage",
    },
  ),
)




