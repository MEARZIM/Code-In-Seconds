import React from 'react'

import { AuthProvider } from '@/providers/auth-provider'

const layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <AuthProvider>
        {children}
      </AuthProvider>
    </>
  )
}

export default layout
