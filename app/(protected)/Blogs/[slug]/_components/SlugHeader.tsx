import React from 'react'

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { BookmarkIcon, FaceIcon, HandIcon } from '@radix-ui/react-icons'
import { ShareIcon } from '@heroicons/react/24/solid'

const SlugHeader = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto p-4 border-y-2">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <Avatar>
                            <AvatarImage alt="Medium Staff" src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>MS</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">Medium Staff</span>
                            <span className="text-xs text-gray-500">Published in The Medium Blog • 7 min read • Mar 15, 2024</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <HandIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">6.7K</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaceIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">105</span>
                        </div>
                        <BookmarkIcon className="h-5 w-5 text-gray-500" />
                        <ShareIcon className="h-5 w-5 text-gray-500" />
                        <FaceIcon className="h-5 w-5 text-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlugHeader
