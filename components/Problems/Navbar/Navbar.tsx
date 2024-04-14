"use client"

import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { UserButton } from '@/components/auth/user-button';
import Link from 'next/link';

export const ProblemNavbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "COURSES", link: "/" },
        { name: "BLOGS", link: "/Blogs" },
        { name: "TUTORIALS", link: "/Tutorials" },
        { name: "JOBS", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <nav className='sticky z-50 shadow-md w-full top-0 left-0 bg-blue-400'>
            <div className='md:flex items-center justify-between mx-auto bg-inherit py-4 md:px-10 px-7 max-w-5xl'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <div className=' text-blue-600' >
                        LOGO
                    </div>
                    <span>CodeInSeconds</span>
                </div>
                {/* Menu icon */}
                <div className=''>
                    <div onClick={() => setOpen(!open)} className='absolute right-8 top-4 cursor-pointer md:hidden w-7 h-7 '>

                        {
                            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                        }
                    </div>
                </div>
                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-inherit md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 bg-black' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.link}>
                                <Link href={link.link} className='text-white text-xs hover:text-blue-800 duration-500'>
                                    {link.name}
                                    </Link>
                            </li>))
                    }

                    <span className=' pl-4 '>
                        <UserButton />
                    </span>
                </ul>
                {/* button */}
            </div>

        </nav>
    );
};

