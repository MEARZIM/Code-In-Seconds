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
            <div className="hidden h-full lg:flex lg:w-72 lg:fixed lg:flex-col lg:inset-y-0 z-[80] bg-gray-900  text-white" >
                <div>
                    <Sidebar />
                </div>
            </div>
            <main className="pl-72 lg:pl-72">
                <TutorialHeader />
                {children}
            </main>

        </div>
    )
}

export default TutorialPagelayout
