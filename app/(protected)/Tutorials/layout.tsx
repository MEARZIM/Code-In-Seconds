import React from 'react'

import { TutorialHeader } from '@/components/Tutorials/Header/Header'
import {Sidebar} from '@/components/Tutorials/Sidebar/Sidebar'

const TutorialPagelayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full 2xl:flex 2xl:w-72 2xl:fixed 2xl:flex-col 2xl:inset-y-0 z-[80] bg-gray-900  text-white" >
                <div>
                    <Sidebar />
                </div>
            </div>
            <main className="2xl:pl-72">
                <TutorialHeader />
                {children}
            </main>

        </div>
    )
}

export default TutorialPagelayout
