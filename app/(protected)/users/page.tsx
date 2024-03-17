"use client"

import React from 'react'

import { SignOut } from '@/actions/signout';
import { Button } from '@/components/ui/button';
import { useCurrentUserThroughSessions } from '@/hooks/useCurrentUserThroughSessions';

const UserPage = () => {
  // const user = useCurrentUserThroughSessions();

  const onClick = () => {
    SignOut();
  }

  return (
    <>
     
      <div className='w-full'>

        {/* {JSON.stringify(user)} */}
        lorem20000
      </div>
      <form >
        <Button variant="outline" size="lg" onClick={onClick}>
          SignOut
        </Button>
      </form>
    </>
  )
}

export default UserPage
