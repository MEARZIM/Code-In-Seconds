"use client"

import { BeatLoader } from "react-spinners"
import { useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'

import { FormError } from './errors/form-error'
import { FormSuccess } from './success/form-success'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { newVerificationAction } from '@/actions/new-verification'

export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const searchParams = useSearchParams();

    const token = searchParams.get('token');

    const onSubmit = useCallback(() => {
        if(success || error) {
            return;
        }

        if (!token) {
            setError("Missing token")
            return;
        };
        newVerificationAction(token)
            .then((data) => {
                setSuccess(data.success);
                setError(data.error);
            })
            .catch((err) => {
                setError("Something went wrong");
            })
    }, [token, success, error])

    useEffect(() => {
        onSubmit();
    }, [onSubmit])

    return (
        <div>
            <CardWrapper
                headerLabel="Confirming Your Email"
                backButtonLabel="Back to signin"
                backButtonHref="/auth/signin"
            >
                <div className='flex items-center justify-center w-full '>
                    {!success && !error && (
                        <BeatLoader />
                    )}
                    {!success && (
                        <FormError message={error} />
                    )}
                    <FormSuccess message={success} />
                </div>
            </CardWrapper>
        </div>
    )
}

