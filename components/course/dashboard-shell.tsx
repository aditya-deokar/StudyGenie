"use client"

import type React from "react"

import { cn } from "@/lib/utils"

import { UserNav } from "./user-nav"
import { MainNav } from "./main-nav"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "../ui/sidebar"
import { DashboardSidebar } from "./dashboard-sidebar"
import { Header } from "../header"

interface DashboardShellProps {
  children: React.ReactNode
  className?: string
}

export function DashboardShell({ children, className }: DashboardShellProps) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen flex-col">
        

        <Header/>
        <div className="flex flex-1">
          <DashboardSidebar />
          <SidebarInset>
            <main className="flex-1 p-2 md:p-3 lg:p-4"> 
              <SidebarTrigger />
              <div className={cn("mx-auto", className)}>{children}</div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
