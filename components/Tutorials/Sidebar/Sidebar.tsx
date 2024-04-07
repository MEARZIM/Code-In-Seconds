"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';

const montserrat = Montserrat({
    weight: "700",
    subsets: ["latin"]
});

export const Sidebar = () => {
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
       <div className='px-3 py-2 flex-1'>
       <Link
                    href="/dashboard"
                    className='flex items-center pl-3 mb-14'
                >
                    <div className='relative w-8 h-8 mr-4'>
                        <Image
                            fill
                            alt="logo"
                            src="/coding.png"
                        />

                    </div>
                    <h1 className={cn(`text-xl`, montserrat.className)}>
                        Code in Seconds
                    </h1>
                </Link>
       </div>
    </div>
  )
}


