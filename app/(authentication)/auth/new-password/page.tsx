'use client'
import React from 'react'
import { Suspense } from 'react'

import { NewPasswordForm } from '@/components/auth/new-password-form'

const ResetPasswordPage = () => {
    return (
        <>
            <Suspense>
                <NewPasswordForm />
            </Suspense>
        </>
    )
}

export default ResetPasswordPage
