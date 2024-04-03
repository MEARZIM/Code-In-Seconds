"use client"

import React, { useEffect, useState } from 'react'

import Menu from '@/components/Blogs/Menu/Menu'
import SlugHeader from './_components/SlugHeader'
import axios from 'axios'
import { Comments } from '@/components/Blogs/comments/Comments'

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
  coverImage: string,
  profileImage: string,
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
  user: UserProps,
  likedIds: []
}


const page = ({
  params
}: {
  params: {
    slug: string
  }
}) => {
  const [blogContent, setBlogContent] = useState<BlogContentProps>();
  console.log(blogContent)

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
  // console.log(blogContent)

  return (
    <>
      <div className="bg-white mt-4">
        <div className="bg-gradient-to-l from-sky-400 to-indigo-600 text-white px-4 py-8 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest">{blogContent.catSlug}</div>
              <h1
                className="text-4xl font-bold leading-tight"
                dangerouslySetInnerHTML={{ __html: blogContent.title }}
              />
            </div>

          </div>
        </div>
        <div className='m-2'>
          <SlugHeader
            user={blogContent.user}
            views={blogContent.views}
            likedIds={blogContent.likedIds}
            postId={params.slug}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:space-x-8">

            <div className="flex-1 space-y-6">
              <p className='text-3xl font-extrabold' dangerouslySetInnerHTML={{ __html: blogContent.title }} />
              <section>
                <p dangerouslySetInnerHTML={{ __html: blogContent.desc }} />
              </section>
              <Comments postId={blogContent.id} />
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
