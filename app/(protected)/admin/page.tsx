"use client"
import React from 'react'
import { UserRole } from '@prisma/client'

import { useCurrentRole } from '@/hooks/use-current-role'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RoleGate } from '@/components/auth/role-gate'
import { FormSuccess } from '@/components/auth/success/form-success'
import { TutorialForm } from '@/components/admin/Tutorials-form'

const Adminpage = () => {

    const role = useCurrentRole();

    return (
        <Card className='w-[600px] m-auto'>
            <CardHeader>
                <CardTitle className='text-3xl font-bold'>Admin</CardTitle>
            </CardHeader>
            <br />
            <CardContent className='space-y-4'>

                    <RoleGate
                        allowedRoles={UserRole.ADMIN}
                    >
                        <FormSuccess
                            message='Welcome Admin'
                        />
                        <TutorialForm />
                    </RoleGate>
               
            </CardContent>
        </Card>
    )
}

export default Adminpage