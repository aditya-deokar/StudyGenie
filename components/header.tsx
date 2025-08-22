"use client"

import { Bell, Search } from "lucide-react"
import { motion } from "framer-motion"

import { useDashboardStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { ThemeSelector } from "./theme-selector"
import { ModeToggle } from "./ui/mode-toggle"

export function Header() {
  const { data, markNotificationAsRead } = useDashboardStore()
  const { notifications } = data
  const unreadCount = notifications.filter((n) => !n.isRead).length

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <div className="hidden md:block md:w-32 lg:w-64">
        <span className="text-lg font-semibold">Dashboard</span>
      </div>

      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search..." className="w-full bg-background pl-8 md:w-2/3 lg:w-1/2" />
      </div>

      <div className="flex items-center gap-2">
        <ThemeSelector />
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -right-1 -top-1">
                  <Badge
                    variant="destructive"
                    className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]"
                  >
                    {unreadCount}
                  </Badge>
                </motion.div>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">No notifications</div>
            ) : (
              <>
                {notifications.map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className="cursor-pointer flex flex-col items-start p-3"
                    onClick={() => markNotificationAsRead(notification.id)}
                  >
                    <div className="flex w-full justify-between">
                      <span className="font-medium">{notification.title}</span>
                      {!notification.isRead && (
                        <Badge variant="secondary" className="ml-2">
                          New
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground mt-1">{notification.message}</span>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer justify-center font-medium">
                  View all notifications
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
