import React from 'react'
import { auth } from '@/auth'

import { Header } from '../_components/Header';
import { SessionProvider } from 'next-auth/react'
import { Sidebar } from '@/components/dashboard/Sidebar';
import { FollowBar } from '@/components/dashboard/FollowBar';
import { SWRProvider } from '@/providers/swr-provider';
import { AuthProvider } from '@/providers/auth-provider';

const DashboardLayout = async ({
  children
}: { children: React.ReactNode }) => {

  return (
    <SWRProvider>
      <AuthProvider>
        <Header />
        <div className='h-screen'>
          <div className='h-full mx-auto xl:px-30 max-w-6xl'>
            <div className='grid grid-cols-4 h-full'>
              <Sidebar />
              <div className='col-span-3 lg:col-span-2 border-x-[1px] border-white' >
                {children}
              </div>
              {/* <FollowBar /> */}
            </div>
          </div>
        </div>
      </AuthProvider>
    </SWRProvider>
  )
}

export default DashboardLayout
