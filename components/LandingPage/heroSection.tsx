import React from 'react'
import Link from 'next/link'


import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Weal } from './skillWeal'

export const HeroSection = () => {
  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10 lg:grid-cols-2">
            <div className="space-y-10">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                New Features
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Introducing the new workflow
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
              </p>
              <div className='p-10 '>
                <Button variant="ghost" className=' text-white bg-violet-600 hover:bg-violet-800 hover:text-white ' size="lg"> Start Reading</Button>
              </div>
            </div>
            <div className="mx-auto aspect-[16/9] overflow-hidden rounded-xl">
              <img
                alt="Hero"
                className="aspect-iframe object-cover rounded-xl"
                height="540"
                src="https://wallpapers.com/images/hd/4k-tech-twtykjtj0sv4hi62.jpg"
                width="960"
              />
            </div>
          </div>
        </section>

        <section className='border-t'>
          <Weal />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t ">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
       
       
      </main>
    </div>
  )
}

