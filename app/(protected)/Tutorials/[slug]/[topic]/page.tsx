"use client"

import React from 'react'
import { usePathname } from 'next/navigation';

import useGetTutorials from '@/hooks/useGetTutorials';
import { TutorialBody } from '@/components/Tutorials/TutorialBody/TutorialBody';

const page = ({
  params
}: {
  params: {
    topic: string
  }
}) => {
  const pathname = usePathname();

  const catSlug = pathname.split("/")[2];
  const slug = pathname.split("/").pop();
  
  return (

    <>
      <TutorialBody catSlug={catSlug} slug={slug} />
    </>
  )
}

export default page