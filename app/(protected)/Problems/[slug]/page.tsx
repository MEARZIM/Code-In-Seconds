"use client"

import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import ProblemGrid from '@/components/Problems/ProblemGrid/ProblemGrid'

const queryClient = new QueryClient()

const page=({
  params
} : {
  params: {
    slug: string
  }
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProblemGrid params={params} />
    </QueryClientProvider>
  )
}



export default page