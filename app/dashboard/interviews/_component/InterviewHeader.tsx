'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Filter, Plus, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InterviewHeader = () => {
  return (
    <>
           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Interviews</h1>
                <p className="text-muted-foreground">Practice and prepare for your next job interview</p>
              </div>
              <Button>
                <Link className="flex gap-1 items-center" href="/dashboard/interviews/interview">
                  <Plus className="mr-2 h-4 w-4" />
                  Schedule Interview
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search interviews..." className="w-full pl-8" />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
      
    
    </>
  )
}

export default InterviewHeader