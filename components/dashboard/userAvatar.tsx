import useUser from '@/hooks/useUser';
import React, { useCallback } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { FaUser } from 'react-icons/fa6';
import { DNA } from 'react-loader-spinner';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';


interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
}

export const UserAvatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
    const router = useRouter()
    const { user, isLoading } = useUser(userId);

    const onClick = useCallback((event: any) => {
        event.stopPropagation();

        const url = `/users/${userId}`

        router.push(url)

    }, [router, userId])

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

    return (
        <div
            className={`
                ${hasBorder ? 'border-4 border-black' : ''}
                ${isLarge ? 'h-32' : 'h-12'}
                ${isLarge ? 'w-32' : 'w-12'}
                rounded-full 
                hover:opacity-90 
                transition 
                cursor-pointer
                relative
            `}
        >
            <Button 
            size="icon" 
            className='rounded-full'
            onClick={onClick}
            >

                <Avatar>
                    <AvatarImage
                        alt="User profile picture"
                        src={user.user.image || ""}
                    />
                    <AvatarFallback className="bg-sky-500">
                        <FaUser className="text-white" />
                    </AvatarFallback>
                </Avatar>
            </Button>
        </div>
    )
}


