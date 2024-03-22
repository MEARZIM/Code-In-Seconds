"use client"

import React from 'react'
import { TfiWrite } from "react-icons/tfi";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import useUser from '@/hooks/useUser';
import { UserAvatar } from '../userAvatar';
import { Input } from '@/components/ui/input'
import { useCurrentUserThroughSessions } from '@/hooks/useCurrentUserThroughSessions';
import { usePostModal } from '@/hooks/usePostModal';
import PostForm from './postForm';
import { Skeleton } from '@/components/ui/skeleton';

export const PostSection = () => {
    const loginUser = useCurrentUserThroughSessions();

    const { user, isLoading } = useUser(loginUser?.id as string);


    const isOpen = usePostModal((state) => state.isOpen);
    const onOpen = usePostModal((state) => state.onOpen);

    if (isLoading) {
        return (
        <>
            <div className="flex justify-center items-center space-x-4 m-2">
                <Skeleton className="h-12 w-12 rounded-full bg-slate-200" />
                <div className='space-y-2'>
                    <Skeleton className="h-12 w-72 bg-slate-200" />
                </div>
                <Skeleton className="h-12 w-12 rounded-xl bg-slate-200" />
              
            </div>
        </>
        )
    }

    return (
        <section className='p-1'>
            <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md flex ">
                <UserAvatar
                    userId={user.user.id}
                />
                <Input
                    className="flex-1"
                    placeholder="Start a post"
                    type="text"
                    onClick={onOpen}

                />
                <div className='flex justify-center items-center relative bottom-1.5 px-2'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <TfiWrite
                                    size={25}
                                    className=' text-gray-400 cursor-pointer hover:text-gray-500 transition'
                                    onClick={onOpen}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Create a Post</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            {isOpen && (

                <div className="flex justify-center items-center">
                    <PostForm />
                </div>
            )}
        </section>
    )
}

