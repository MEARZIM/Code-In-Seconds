"use client"
import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils';
import useGetTutorials from '@/hooks/useGetTutorials';

const montserrat = Montserrat({
    weight: "700",
    subsets: ["latin"]
});

export const Sidebar = () => {
    const pathname = usePathname();
    const currentPathname = pathname.split("/");
    // console.log(currentPathname[2])
    
    const { data, isLoading } = useGetTutorials(currentPathname[2]);


    // console.log(data)
    if (isLoading) {
        return (
            <div>

            </div>
        )
    }

    return (
        (<div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
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
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />

                    </div>
                    <h1 className={cn(`text-xl`, montserrat.className)}>
                        CodeInSeconds
                    </h1>
                </Link>

                <div className='space-y-1'>
                    {data && data.map((SidebarItem: any) => (
                        <Link
                            key={SidebarItem.id}
                            href={`/Tutorials/${SidebarItem.catSlug}/${SidebarItem.slug}`}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                currentPathname[3] === SidebarItem.slug ? "text-white bg-white/10" : "text-zinc-400",
                            )}
                        >
                            <div className="flex items-center flex-1">
                                {SidebarItem.title}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>)
    );
}


