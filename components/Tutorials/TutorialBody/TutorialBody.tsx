import React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from 'lucide-react'
import useGetTutorials from '@/hooks/useGetTutorials'
import { Skeleton } from '@/components/ui/skeleton'

interface Props {
    catSlug?: string
    slug?: string
}

export const TutorialBody = ({ catSlug, slug }: Props) => {

    const { data, isLoading } = useGetTutorials(catSlug, slug);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center flex-col space-y-3">
                    <Skeleton className="h-12 w-[30vw]" />
                <div className="space-y-2">
                <Skeleton className="h-[40vh] w-[60vw] rounded-xl" />
                </div>
            </div>
        )
    }

    return (
        <>
            <section className="w-full max-w-4xl mx-auto py-6 md:py-12">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 md:gap-8 lg:gap-10">
                        <div className="grid gap-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
                                {data.title} {`→`}
                            </h2>
                            <p
                                className="text-gray-500 leading-loose md:text-base/relaxed dark:text-gray-400"
                                dangerouslySetInnerHTML={{ __html: data.desc }}
                            />


                        </div>

                        <hr className="border-gray-200 border-t border-1 dark:border-gray-800" />
                        {/* <div className="grid gap-6 md:gap-8">
                            <div className="grid gap-2">
                                <h3 className="text-2xl font-bold tracking-tight">Deploying a Next.js App</h3>
                                <p className="text-gray-500 leading-loose md:text-base/relaxed dark:text-gray-400">
                                    Learn how to deploy a Next.js app to the Vercel platform with zero configuration.
                                </p>
                            </div>
                            <div className="grid gap-4 md:gap-8">
                                <div className="flex flex-col gap-2">
                                    <Link
                                        className="inline-flex items-center text-sm font-medium underline transition-colors hover:text-gray-950 dark:hover:text-gray-50"
                                        href="#"
                                    >
                                        Read the Tutorial
                                        <ChevronRightIcon className="w-4 h-4 ml-1 inline-block" />
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

