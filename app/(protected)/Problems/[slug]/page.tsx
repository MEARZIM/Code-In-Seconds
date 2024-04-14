"use client"

import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import ProblemGrid from '@/components/Problems/ProblemGrid/ProblemGrid'

const queryClient = new QueryClient()

const page=() => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProblemGrid />
    </QueryClientProvider>
  )
}



export default page