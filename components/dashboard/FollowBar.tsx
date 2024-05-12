"use client"

import React from 'react'

import useUsers from '@/hooks/useUsers'
import { UserAvatar } from "@/components/dashboard/userAvatar"
import { DNA } from 'react-loader-spinner'

export const FollowBar = () => {
  const { user, isLoading } = useUsers();

  // console.log(user)

  if (isLoading) {
    return (
      <div className='flex justify-center items-center'>
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    )
  }

  return (
    <div className='px-6 py-4 hidden lg:block'>
      <div className='bg-blue-500 rounded-xl p-4'>
        <h2 className='text-white text-xl font-semibold'>
          Who to follow?
        </h2>
        <div className='flex justify-center flex-col gap-4 mt-4'>
          {/* Users List */}
          {user && (user.map((user: Record<string, any>) => (
            <div className='flex flex-row gap-2' key={user.id}>
              <UserAvatar
                userId={user.id}
              />
              <div className='flex flex-col mt-1'>
                <p className='text-white font-semibold text-sm' >{user.name}</p>
              </div>
            </div>
          )))}
        </div>
      </div>

    </div>
  )
}


