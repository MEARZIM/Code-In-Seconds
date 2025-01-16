"use client";

import React from 'react'

import { AuthProvider } from '@/providers/auth-provider'
import { SWRProvider } from '@/providers/swr-provider'

const MainComponentlayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <SWRProvider>
                <AuthProvider>
                    <div className='bg-white text-black'>
                        {children}
                    </div>
                </AuthProvider>
            </SWRProvider>
        </>
    )
}

export default MainComponentlayout
