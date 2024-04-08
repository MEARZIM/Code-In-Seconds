import React from 'react'
import Link from "next/link"

import { CardContent, Card } from "@/components/ui/card"
import { FeaturedTutorial } from '@/components/Tutorials/TutorialFeatured/Featured'

const page = () => {
  return (
    <div className=''>

      <FeaturedTutorial />
    </div>
  )
}

export default page
