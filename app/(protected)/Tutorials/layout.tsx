"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

import { TutorialHeader } from '@/components/Tutorials/Header/Header'
import { Sidebar } from '@/components/Tutorials/Sidebar/Sidebar'
import { TutorialPageFooter } from '@/components/Tutorials/Footer/Footer'

const TutorialPagelayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const pathname = usePathname();
    console.log(pathname)

    return (
        <div className="h-full relative">
            <div className={`hidden h-full 2xl:flex 2xl:w-72 2xl:fixed 2xl:flex-col 2xl:inset-y-0 z-[80] bg-gray-900  text-white ${pathname === '/Tutorials' ? "hidden 2xl:hidden" : ""}`} >
                <div>
                   <Sidebar />
                </div>
            </div> 
            <main className="2xl:pl-72">
                <TutorialHeader />
                {children}
                <TutorialPageFooter />
            </main>
        </div>
    )
}

export default TutorialPagelayout
