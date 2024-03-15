import React from 'react'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import { CardWrapper } from '@/components/auth/card-wrapper'


export const CustomErrorCard = () => {
    return (
        <>
            <CardWrapper
                headerLabel="Oops! Something went wrong"
                backButtonHref="auth/signin"
                backButtonLabel="Back to Sign in"
            >
                <div className='w-full flex justify-center items-center'>
                    <ExclamationTriangleIcon className='text-destructive' />
                </div>
            </CardWrapper>
        </>
    )
}


