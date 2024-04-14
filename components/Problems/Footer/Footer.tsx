import Link from 'next/link'
import React from 'react'

const ProblemPageFooter = () => {
    return (
        <footer className='max-w-5xl mx-auto mt-10'>
            <div className='flex flex-wrap md:flex-nowrap justify-between items-center m-6 md:m-0'>
                <div className='w-full'>
                    <h1 className='text-3xl font-bold text-blue-400 mb-2'>CodeInSeconds</h1>
                    <span className='text-slate-400 mt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero praesentium unde atque error ab dolores delectus consequuntur
                        mollitia quidem nulla obcaecati, repellat nobis impedit perspiciatis
                        quam aperiam cupiditate veritatis vitae!
                    </span>
                </div>
                <div className='flex lg:flex-row gap-8 pl-4 lg:gap-14'>
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-blue-500">Links</span>
                        <Link href="/">Homepage</Link>
                        <Link href="/Blogs">Blog</Link>
                        <Link href="/Tutorials">Tutorials</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-blue-500">Social</span>
                        <Link href="/">Facebook</Link>
                        <Link href="/">Instagram</Link>
                        <Link href="/">LinkedIn</Link>
                        <Link href="/">Youtube</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default ProblemPageFooter
