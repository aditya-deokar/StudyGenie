"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, BarChart } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled ? "border-slate-200 bg-white/90 backdrop-blur-md shadow-sm" : "border-transparent bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
            <BarChart className="h-8 w-8 text-indigo-600" />
          </motion.div>
          <motion.span
            className="text-xl font-bold text-slate-900"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            NeoPrep
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/insights">Industry Insights</NavLink>
          <NavLink href="/courses">AI Courses</NavLink>
          <NavLink href="/interviews">Interview Prep</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="ghost" className="text-slate-700 hover:text-indigo-600">
              Sign In
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={'/dashboard'}>
            <Button className="bg-primary text-primary-foreground">Get Started</Button>
            </Link>
            
          </motion.div>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-slate-700">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-6 pt-6">
              <MobileNavLink href="/insights" setIsOpen={setIsOpen}>
                Industry Insights
              </MobileNavLink>
              <MobileNavLink href="/courses" setIsOpen={setIsOpen}>
                AI Courses
              </MobileNavLink>
              <MobileNavLink href="/interviews" setIsOpen={setIsOpen}>
                Interview Prep
              </MobileNavLink>
              <MobileNavLink href="/pricing" setIsOpen={setIsOpen}>
                Pricing
              </MobileNavLink>
              <div className="flex flex-col space-y-3 pt-6">
                <Button variant="outline" className="w-full justify-center">
                  Sign In
                </Button>
                <Button className="w-full justify-center bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Link href={href} className="text-slate-700 hover:text-indigo-600 font-medium transition-colors relative group">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full" />
      </Link>
    </motion.div>
  )
}

function MobileNavLink({
  href,
  children,
  setIsOpen,
}: {
  href: string
  children: React.ReactNode
  setIsOpen: (open: boolean) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ x: 5 }}
    >
      <Link
        href={href}
        className="text-slate-900 hover:text-indigo-600 font-medium text-lg transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Link>
    </motion.div>
  )
}
