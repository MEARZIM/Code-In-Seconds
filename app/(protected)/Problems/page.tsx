"use client"
import React from 'react'

import { ProblemCard } from '@/components/Problems/Cards/Cards'
import useGetCategories from '@/hooks/useGetCategories'
import { Skeleton } from '@/components/ui/skeleton'

interface CategoriesProps {
  id: string,
  slug: string,
  title: string,
  titleDescription: string,
  description: string
  img?: string,
}

const page = () => {
  const { data, isLoading } = useGetCategories();

  if (isLoading) {
    return (
      <div className='flex flex-wrap m-2 gap-10 max-w-4xl mx-auto'>
        {Array(6).fill(null).map((_, index) =>
          <Skeleton key={index} className="h-[200px] w-full rounded-xl"
          />
        )}
      </div>
    )
  }

  return (
    <div className='flex flex-wrap m-2 gap-10'>
      {data && data.map((category: CategoriesProps) => (
        <section key={category.id} className='max-w-4xl mx-auto'>
          <ProblemCard categoryContent={category} />
        </section>
      ))}
    </div>
  )
}

export default page
