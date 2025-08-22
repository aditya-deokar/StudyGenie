import Dashboard from '@/components/dashboard'
import { industryData } from '@/lib/data'
import React from 'react'

const page = () => {
  return (
    <div>

        <Dashboard data={industryData}/>
    </div>
  )
}

export default page