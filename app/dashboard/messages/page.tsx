"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Send, User, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatTimeAgo } from "@/lib/utils"



export default function MessagesPage() {
 


  return (
    <div className="flex h-full">
            {/* Contacts sidebar */}
            <div className="w-full border-r flex flex-col">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold mb-2">Messages</h2>
              
              </div>

              <Tabs defaultValue="all" className="flex-1 flex flex-col">
                <div className="px-4 pt-2">
                  <TabsList className="w-full">
                    <TabsTrigger value="all" className="flex-1">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="unread" className="flex-1">
                      Unread
                    </TabsTrigger>
                  </TabsList>
                </div>

             

              </Tabs>

              
            </div>

         
          </div>
  )
}
