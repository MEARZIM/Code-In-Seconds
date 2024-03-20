"use client"

import React from 'react'

import useUser from '@/hooks/useUser';
import { DNA } from 'react-loader-spinner';
import { UserAvatar } from '../userAvatar';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useCurrentUserThroughSessions } from '@/hooks/useCurrentUserThroughSessions';
import { usePostModal } from '@/hooks/usePostModal';
import PostForm from './postForm';

export const PostSection = () => {
    const loginUser = useCurrentUserThroughSessions();

    const { user, isLoading } = useUser(loginUser?.id as string);


    const isOpen = usePostModal((state) => state.isOpen);
    const onOpen = usePostModal((state) => state.onOpen);

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

            </div>
            {isOpen && (

                <div className="flex justify-center items-center">
                    <PostForm />
                </div>
            )}
        </section>
    )
}

