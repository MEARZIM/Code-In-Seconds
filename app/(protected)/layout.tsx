import { AuthProvider } from '@/providers/auth-provider'
import { SWRProvider } from '@/providers/swr-provider'
import React from 'react'

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
