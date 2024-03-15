"use client"

import React from 'react'

import { SignOut } from '@/actions/signout';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/use-current-user';
import { Header } from '../../_components/Header';

const UserPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    SignOut();
  }

  return (
    <>
      <Header />
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
