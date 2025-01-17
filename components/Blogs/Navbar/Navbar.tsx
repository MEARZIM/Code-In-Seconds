"use client"

import React, {
    useState
} from 'react';
import {
    Bars3BottomRightIcon,
    XMarkIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link';
import Image from "next/image";
import { TfiWrite } from "react-icons/tfi";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { UserButton } from '@/components/auth/user-button';


export const BlogPageNavBar = () => {
    let Links = [
        { name: "BLOGS", link: "/Blogs" },
        // { name: "COURSES", link: "/" },
        { name: "TUTORIALS", link: "/Tutorials" },
        { name: "JOBS", link: "/" },
        { name: "PROBLEMS", link: "/Problems" },
        // { name: "CONTACT", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        (<nav className='sticky z-50 shadow-md w-full top-0 left-0 bg-indigo-800'>
            <div className='md:flex items-center justify-between mx-auto bg-inherit py-4 md:px-10 px-7 max-w-5xl'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>

                    <div className=" mx-4 bg-indigo-800">
                        <Image
                            alt="Logo"
                            src="/icon.png"
                            width={40}
                            height={40}
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <span className='text-white font-semibold' >CodeInSeconds</span>
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
                                <Link href={link.link} className='text-white text-xs hover:text-blue-400 duration-500'>
                                    {link.name}
                                </Link>
                            </li>))
                    }
                    <span className='pl-2 '>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className=' bg-inherit border-0 hover:bg-blue-800 duration-500'
                                    >
                                        <Link href="/Blogs/write">
                                            <TfiWrite
                                                size={16}
                                                color='white'
                                                
                                            />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Write Your Blog</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </span>

                    <span className=' pl-4 '>
                        <UserButton />
                    </span>
                </ul>
                {/* button */}
            </div>
        </nav>)
    );
};

