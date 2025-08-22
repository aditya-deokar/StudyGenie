'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Plus, Search } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

const CourseHeader = () => {
  return (
    <>
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

              <section className="card-cta dark:dark-gradient light-gradient ">
                    <div className="flex flex-col gap-6 max-w-lg">
                      <h2>"Instant Course Generation, Tailored to You"</h2>
                      <p className="text-lg">
                      Enter your topic and let our AI craft a smart, structured learning journey.
                      </p>
            
                      <Button asChild variant={"outline"} className=" max-sm:w-full">
                        <Link href="/course/create-course">Create Course</Link>
                      </Button>
                    </div>
            
                    <Image
                      src="/robot.png"
                      alt="robo-dude"
                      width={400}
                      height={400}
                      className="max-sm:hidden"
                    />
                  </section>
    
    </>
  )
}

export default CourseHeader