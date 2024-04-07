"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils';
import { SidebarItems } from './SideBarItems';

const montserrat = Montserrat({
    weight: "700",
    subsets: ["latin"]
});

export const Sidebar = () => {
    const pathname = usePathname();
    console.log(pathname)
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

                <div className='space-y-1'>
                    {SidebarItems.map((SidebarItem: any) => (
                        <Link
                            key={SidebarItem.href}
                            href={SidebarItem.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === SidebarItem.href ? "text-white bg-white/10" : "text-zinc-400",
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <SidebarItem.icon className={cn("h-5 w-5 mr-3", SidebarItem.color)} />
                                {SidebarItem.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}


