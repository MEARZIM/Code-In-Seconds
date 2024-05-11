"use client"

import React, {
  useEffect,
  useState
} from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { TextGenerateEffect } from '../ui/text-generate-effect'

const FocusWords = `Coding Simplified In Seconds`
const highlights = `The go-to platform for Learning, practising and landing your ideal job. Now no need to toggle between platforms, sign up to discover gems of content here to thrive in the tech world.
`


export const HeroSection = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return "loading..."
  }

  return (
    <>
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24">
          <div className="container flex justify-center items-center gap-4 px-4 text-center md:px-6 lg:gap-10 ">
            <div className="space-y-10">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-800">
                Code & Innovate
              </div>
              <h1 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <TextGenerateEffect words={FocusWords} />

              </h1>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                <TextGenerateEffect words={highlights} className='md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-normal' />

              </p>
              <div className='p-10 '>
                <Button
                  variant="ghost"
                  className=' text-white bg-violet-600 hover:bg-violet-800 hover:text-white '
                  size="lg"
                  onClick={() => {
                    router.push('/Tutorials');
                  }}
                >
                  Start Reading Tutorials
                </Button>
              </div>
            </div>

          </div>
        </section>





      </main>
    </>
  )
}

