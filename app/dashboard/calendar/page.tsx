"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns"

import { useDashboardStore } from "@/lib/store"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CalendarPage() {
  const { data } = useDashboardStore()
  const { upcomingEvents } = data
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // Get days for the current month view
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Navigation functions
  const previousMonth = () => setCurrentDate(subMonths(currentDate, 1))
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const goToToday = () => setCurrentDate(new Date())

  // Get events for a specific day
  const getEventsForDay = (day: Date) => {
    return upcomingEvents.filter((event) => {
      const eventDate = new Date(event.startDate)
      return isSameDay(eventDate, day)
    })
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
                <p className="text-muted-foreground">Manage your schedule and upcoming events</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Event
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Event</DialogTitle>
                    <DialogDescription>Create a new event in your calendar.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="title">Event Title</Label>
                      <Input id="title" placeholder="Enter event title" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="type">Event Type</Label>
                      <Select>
                        <SelectTrigger id="type">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="interview">Interview</SelectItem>
                          <SelectItem value="course">Course Deadline</SelectItem>
                          <SelectItem value="reminder">Reminder</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="time">Time</Label>
                      <Input id="time" type="time" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save Event</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Calendar */}
              <Card className="flex-1">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>{format(currentDate, "MMMM yyyy")}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" onClick={previousMonth}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={goToToday}>
                        Today
                      </Button>
                      <Button variant="outline" size="icon" onClick={nextMonth}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Day names */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center text-sm font-medium py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar grid */}
                  <motion.div
                    className="grid grid-cols-7 gap-1"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    key={format(currentDate, "yyyy-MM")}
                  >
                    {monthDays.map((day, i) => {
                      const dayEvents = getEventsForDay(day)
                      const isCurrentMonth = isSameMonth(day, currentDate)
                      const isSelected = selectedDate ? isSameDay(day, selectedDate) : false
                      const isTodayDate = isToday(day)

                      return (
                        <motion.div
                          key={i}
                          variants={item}
                          className={`
                            min-h-[80px] p-1 border rounded-md relative
                            ${isCurrentMonth ? "" : "text-muted-foreground bg-muted/30"}
                            ${isSelected ? "ring-2 ring-primary" : ""}
                            ${isTodayDate ? "bg-muted" : ""}
                            hover:bg-muted/50 cursor-pointer transition-colors
                          `}
                          onClick={() => setSelectedDate(day)}
                        >
                          <div className="text-right p-1">{format(day, "d")}</div>
                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map((event, index) => (
                              <div
                                key={index}
                                className={`
                                  text-xs p-1 rounded truncate
                                  ${
                                    event.type === "Interview"
                                      ? "bg-purple-100 text-purple-800"
                                      : event.type === "Course Deadline"
                                        ? "bg-amber-100 text-amber-800"
                                        : "bg-blue-100 text-blue-800"
                                  }
                                `}
                              >
                                {event.title}
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-xs text-center text-muted-foreground">
                                +{dayEvents.length - 2} more
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </CardContent>
              </Card>

              {/* Event details */}
              <Card className="w-full md:w-80">
                <CardHeader>
                  <CardTitle>{selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Upcoming Events"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedDate
                      ? getEventsForDay(selectedDate).map((event, index) => (
                          <div key={index} className="border rounded-md p-3 space-y-2">
                            <div className="flex justify-between items-start">
                              <div className="font-medium">{event.title}</div>
                              <Badge
                                variant="outline"
                                className={
                                  event.type === "Interview"
                                    ? "bg-purple-100 text-purple-800"
                                    : event.type === "Course Deadline"
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-blue-100 text-blue-800"
                                }
                              >
                                {event.type}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {format(new Date(event.startDate), "h:mm a")}
                            </div>
                          </div>
                        ))
                      : upcomingEvents.slice(0, 5).map((event, index) => (
                          <div key={index} className="border rounded-md p-3 space-y-2">
                            <div className="flex justify-between items-start">
                              <div className="font-medium">{event.title}</div>
                              <Badge
                                variant="outline"
                                className={
                                  event.type === "Interview"
                                    ? "bg-purple-100 text-purple-800"
                                    : event.type === "Course Deadline"
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-blue-100 text-blue-800"
                                }
                              >
                                {event.type}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">{formatDate(event.startDate)}</div>
                          </div>
                        ))}

                    {selectedDate && getEventsForDay(selectedDate).length === 0 && (
                      <div className="text-center py-6 text-muted-foreground">No events scheduled for this day</div>
                    )}

                    {!selectedDate && upcomingEvents.length === 0 && (
                      <div className="text-center py-6 text-muted-foreground">No upcoming events scheduled</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
  )
}
