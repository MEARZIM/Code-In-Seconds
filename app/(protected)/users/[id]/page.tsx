"use client"

import React from 'react'
import { DNA } from 'react-loader-spinner'
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { FaFacebook, FaUser } from 'react-icons/fa6'

import useUser from '@/hooks/useUser'
import { Button } from '@/components/ui/button'
import { AvatarFallback,Avatar, AvatarImage } from '@/components/ui/avatar'
import { Header } from '@/app/(protected)/_components/Header'

const page = ({
  params
}: {
  params: {
    id: string
  }
}) => {

  const { user, isLoading } = useUser(params.id);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center'>
        <DNA
          visible={true}
          height="10"
          width="10"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    )
  }

  console.log(user)

  return (
    <>
    <Header/>
      <div className="bg-[#1c2331] text-white h-full">
        <div
          className="bg-cover bg-center bg-no-repeat py-20 px-4 md:px-10"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end">
            <div className="md:flex-1 text-center md:text-left mt-4 md:mt-0">
              <div className="md:flex-1 mb-4 flex justify-center md:justify-start">
               
                  <Avatar className='h-20 w-20'>
                    <AvatarImage alt="User profile image" src={user.user.image} />
                    <AvatarFallback >
                      <FaUser className="text-white" size={30} />
                    </AvatarFallback>
                  </Avatar>
              
              </div>
              <h1 className="text-4xl font-bold">{user.user.name}</h1>
              <p className="text-xl">Photographer</p>
              <div className="flex justify-center md:justify-start space-x-6 my-6">
                <div>
                  <p className="text-2xl font-bold">{user.followersCount}</p>
                  <p>Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">26</p>
                  <p>Comments</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">48</p>
                  <p>Bookmarks</p>
                </div>
              </div>
              <Button className="mx-auto md:mx-0 mb-4 md:mb-0">Follow</Button>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-center space-x-4 mb-6">
            <TwitterLogoIcon className="text-white" />
            <FaFacebook className="text-white" />
            <InstagramLogoIcon className="text-white" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Bio</h2>
            <p>
              An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy —
              writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove
              structure. An artist of considerable range.
            </p>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default page
