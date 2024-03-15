import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'


const DashboardLayout = async ({
  children
}: { children: React.ReactNode }) => {

  const session = await auth();

  return (
    <SessionProvider session={session}> 
      <div className='flex flex-col gap-y-4'>
        {children}
      </div>
    </SessionProvider>
  )
}

export default DashboardLayout
