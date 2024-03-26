import Menu from '@/components/Blogs/Menu/Menu'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const page = ({
  params
}: {
  params: {
    id: string
  }
}) => {
  return (
    <>
     <div className="bg-white">
      <div className="bg-[#ff6a28] text-white px-4 py-8 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest">SEO / General SEO</div>
            <h1 className="text-4xl font-bold leading-tight">16 SEO Techniques to Boost Organic Traffic + Rankings</h1>
            <p className="text-sm">Carlos Silva · Feb 26, 2024 · 16 min read</p>
            <p className="text-sm">Contributors: Tushar Pol, Christine Skopec, and Connor Lahey</p>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-4">
            <img
              alt="SEO Techniques"
              className="aspect-[2/1] object-cover"
              height="200"
              src="/coding.png"
              width="400"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
        
          <div className="flex-1 space-y-6">
            <p className="text-lg">Here are 16 SEO techniques for building an effective SEO strategy.</p>
            <section>
              <h2 className="text-3xl font-bold">1. Emulate Top-Performing Pages</h2>
              <p className="mt-2">Don’t guess what content will perform best.</p>
              <p className="mt-2">
                Instead, use the SEO tactic of researching your competitors’ best-performing pages. To find what’s
                already working for them and create something better or similar.
                
              </p>
            </section>
          </div>
          <aside className="w-full lg:w-56 flex-shrink-0 mt-8 lg:mt-0">
            <div className="sticky top-12 p-6 rounded-lg">
              <Menu/>
            </div>
          </aside>
        </div>
      </div>
    </div>
    </>
  )
}

export default page
