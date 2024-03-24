import React from 'react'

import { Footer } from '@/components/Blogs/Footer/Footer';
import { BlogPageNavBar } from '@/components/Blogs/Navbar/Navbar';


const DashboardLayout = async ({
  children
}: { children: React.ReactNode }) => {

  return (
    <>
      <BlogPageNavBar />
      <div className='max-w-4xl mx-auto px-2 md:px-0'>
        {children}
        <Footer />
      </div>
    </>

  )
}

export default DashboardLayout
