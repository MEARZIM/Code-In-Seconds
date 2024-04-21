"use client"

import React from 'react'
import { UserRole } from '@prisma/client'

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from '@/components/ui/card'
import { RoleGate } from '@/components/auth/role-gate'
import { useCurrentRole } from '@/hooks/use-current-role'
import { ProblemForm } from '@/components/admin/Problem-form'
import { TutorialForm } from '@/components/admin/Tutorials-form'
import { FormSuccess } from '@/components/auth/success/form-success'

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
                        <ProblemForm />
                    </RoleGate>
               
            </CardContent>
        </Card>
    )
}

export default Adminpage