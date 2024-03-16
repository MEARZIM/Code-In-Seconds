"use client"

import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'
import { BiArrowBack } from 'react-icons/bi'

interface HeaderProps {
    label: string,
    showBackArrow?: boolean
}

export const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
    const router = useRouter();

    const HandleBack = useCallback(() =>{
        router.back();
    },[router])

    return (
        <div className='border-b-[1px] border-neutral-800 p-5'>
            <div className='flex flex-row items-center gap-2'>
                {
                    showBackArrow && (
                        <BiArrowBack
                            size={20}
                            color='white'
                            className=' cursor-pointer hover:opacity-70 transition'
                            onClick={HandleBack}
                        />
                    )
                }

                <h1 className='text-white text-lg font-semibold'> {label} </h1>
            </div>
        </div>
    )
}


