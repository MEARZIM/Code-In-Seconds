import React from 'react'

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { BookmarkIcon, FaceIcon, HandIcon } from '@radix-ui/react-icons'
import {
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import { FaEye, FaFacebook, FaLinkedin, FaShareFromSquare, FaXTwitter } from 'react-icons/fa6'

interface UserProps {
    user: {
        id: string,
        name: string,
        bio: string,
        email: string,
        emailVerified: string,
        image?: string,
        password: string,
        role: string,
        isTwoFactorEnabled: false,
        coverImage?: string,
        profileImage?: string,
        createdAt: string,
        updatedAt: string,
        followingIds: [],
        hasNotifications: boolean
    },
    views: number
}

const SlugHeader = (user: UserProps) => {
    console.log(user)
    return (
        <div>
            <div className="max-w-4xl mx-auto p-4 border-y-2">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <Avatar>
                            <AvatarImage alt="Medium Staff" src={
                                user.user.profileImage ? user.user.profileImage : user.user.image
                            } />
                            <AvatarFallback>PI</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">{user.user.name}</span>
                            <span className="text-xs text-gray-500">Published in The CodeInSeconds Blog • 7 min read • {user.user.createdAt.substring(0, 10)}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <HandIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">6.7K</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaceIcon color='black' className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">105</span>
                        </div>
                        <div className='flex'>
                            <FacebookShareButton
                                url='codeInSecond.com'
                                title='Shareing this Blog from CodeInSecond'
                                hashtag='#coding'
                                
                            >
                                <FaFacebook color='blue' className="h-5 w-5 text-gray-500" />
                            </FacebookShareButton>
                        </div>
                        <div className='flex'>
                            <TwitterShareButton
                                url='codeInSecond.com'
                                title='Shareing this Blog from CodeInSecond'
                                hashtags={["coding"]}
                            >
                                <FaXTwitter color='black' className="h-5 w-5 text-gray-500" />
                            </TwitterShareButton>
                        </div>
                        <div className='flex'>
                            <LinkedinShareButton
                                url='codeInSecond.com'
                                title='Shareing this Blog from CodeInSecond'
                                summary= 'This is the description'
                            >
                                <FaLinkedin color='blue' className="h-5 w-5 text-gray-500" />
                            </LinkedinShareButton>
                        </div>

                        <div className='flex items-center space-x-1'>
                            <FaEye color='black' className="h-5 w-5 text-gray-500" />
                            <span className='text-sm'>{user.views}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlugHeader
