"use client"

import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT_URL } from '@/routes'


export const Social = () => {
    const onClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT_URL
        })
    }

    return (
        <div className='flex items-center w-full gap-x-2'>
            <Button
                size="lg"
                className='w-full'
                variant="outline"
                onClick={()=>onClick("google")}
            >
                <FcGoogle className='h-5 w-5'/> 
            </Button>
            <Button
                size="lg"
                className='w-full'
                variant="outline"
                onClick={()=>onClick("github")}
            >
                <FaGithub className='h-5 w-5'/> 
            </Button>
        </div>
    )
}

