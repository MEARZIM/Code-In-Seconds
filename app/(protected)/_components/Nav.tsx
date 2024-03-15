import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { UserButton } from '@/components/auth/user-button';

export const Nav = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <nav className='sticky shadow-md w-full top-0 left-0'>
            <div className='md:flex items-center justify-between mx-auto bg-inherit py-4 md:px-10 px-7 max-w-7xl'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <div className=' text-blue-600' >
                        LOGO
                    </div>
                    <span>Website Name</span>
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
                                <a href={link.link} className='text-white hover:text-blue-400 duration-500'>{link.name}</a>
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

