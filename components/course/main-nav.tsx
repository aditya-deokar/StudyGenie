"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/course" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/course/achievements"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/course/achievements" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Achievements
      </Link>
      <Link
        href="/course/settings"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/course/settings" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Settings
      </Link>
    </nav>
  )
}
