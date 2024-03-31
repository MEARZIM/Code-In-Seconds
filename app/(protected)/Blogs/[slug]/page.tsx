"use client"

import React, { useEffect, useState } from 'react'

import Menu from '@/components/Blogs/Menu/Menu'
import SlugHeader from './_components/SlugHeader'
import axios from 'axios'

interface UserProps {
  id: string,
  name: string,
  bio: string,
  email: string,
  emailVerified: string,
  image: string,
  password: string,
  role: string,
  isTwoFactorEnabled: false,
  coverImage: null,
  profileImage: null,
  createdAt: string,
  updatedAt: string,
  followingIds: [],
  hasNotifications: boolean
}

interface BlogContentProps {
  id: string
  createdAt: string,
  updatedAt: string,
  slug: string,
  title: string,
  desc: string,
  img?: string,
  views: number
  catSlug: string,
  userId: string,
  user: UserProps
      
}


const page = ({
  params
}: {
  params: {
    slug: string
  }
}) => {
  const [blogContent, setBlogContent] = useState<BlogContentProps>();

  useEffect(() => {
    const getData = async (slug: string) => {
      try {
        const res = await axios.get(`/api/post/${slug}`);
        setBlogContent(res.data)

      } catch (error) {
        console.log(error)
      }

    };
    getData(params.slug);
  }, [])

  if (!blogContent) {
    return (
      <div>
        loading...
      </div>
    )
  }
  console.log(blogContent)

  return (
    <>
      <div className="bg-white mt-4">
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
        <div className='m-2'>
          <SlugHeader />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:space-x-8">

            <div className="flex-1 space-y-6">
              <p className='text-3xl font-extrabold' dangerouslySetInnerHTML={{ __html: blogContent.title }} />
              <section>
                <p  dangerouslySetInnerHTML={{ __html: blogContent.desc }}/>
              </section>
            </div>
            <aside className="w-full lg:w-56 flex-shrink-0 mt-8 lg:mt-0">
              <div className="sticky top-12 p-6 rounded-lg">
                <Menu />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
