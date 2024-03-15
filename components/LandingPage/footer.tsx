import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-400 dark:text-gray-400">© 2024. Acme Inc. All rights reserved.</p>
            <div className="flex gap-4 sm:ml-auto sm:gap-6">
                <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
                    Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
                    Privacy
                </Link>
            </div>
        </footer>
    )
}

