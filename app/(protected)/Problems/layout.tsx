
import React from 'react'

import { ProblemNavbar } from '@/components/Problems/Navbar/Navbar'
import ProblemPageFooter from '@/components/Problems/Footer/Footer'

const MainComponentlayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <ProblemNavbar />
            <div className='max-w-7xl mx-auto'>
                {children}
                <ProblemPageFooter />
            </div>


        </>
    )
}

export default MainComponentlayout
