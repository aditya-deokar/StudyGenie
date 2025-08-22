
import { motion } from "framer-motion"
import { Filter, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import UserCourseListWrapper from "./_component/UserCourseListWrapper"

export default function CoursesPage() {

  return (
   
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
                <p className="text-muted-foreground">Browse and manage your learning materials</p>
              </div>

              <Link href={'/course/create-course'}>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Generate New Course
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search courses..." className="w-full pl-8" />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
            <UserCourseListWrapper/>
           
          </motion.div>
        
  )
}
