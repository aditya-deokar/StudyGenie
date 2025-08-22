import { createFeedback } from '@/actions/demo'
import React from 'react'

const page = async() => {

    await createFeedback();
  return (
    <div>page</div>
  )
}

export default page