import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import { Header } from '../_components/Header';
import Sidebar from '@/components/dashboard/Sidebar';


const DashboardLayout = async ({
  children
}: { children: React.ReactNode }) => {

  const session = await auth();

  return (
    <SessionProvider session={session}>
      <Header />
      <div className='h-screen'>
        <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
          <div className='grid grid-cols-4 h-full'>
            <Sidebar/>
            <div className='col-span-3 lg:col-span-2 border-x-[1px] border-white' >
              {children}
            </div>
          </div>
        </div>
      </div>
    </SessionProvider>
  )
}

export default DashboardLayout
