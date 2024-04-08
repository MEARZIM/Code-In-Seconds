import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = ({
    params
}: {
    params: {
        slug: string
    }
}) => {
    return (
        <>
            <section className="w-full py-6 md:py-12">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 md:gap-8 lg:gap-10">
                        <div className="grid gap-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
                                Tutorials {`→`}
                            </h2>
                            <p className="text-gray-500 leading-loose md:text-base/relaxed dark:text-gray-400">
                                Learn how to build, deploy, and scale applications with in-depth guides from the experts.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ratione ipsam temporibus voluptas est fugiat unde, alias beatae omnis provident distinctio quod perspiciatis aut enim, magnam reprehenderit tenetur harum officiis! Porro tenetur ducimus voluptatibus ullam vitae sapiente, at optio laborum rem iure beatae dolorem quaerat quisquam mollitia ut minima, aliquam unde eligendi id dicta consequatur cum explicabo illo similique! Aliquam, esse! Culpa quidem cum magni praesentium quas nihil voluptates ab assumenda. Aspernatur, velit alias! Ipsum similique qui, dolores esse molestias eum quibusdam aliquam consequatur quam distinctio dolore libero labore. Culpa explicabo error debitis vel ut odit architecto quibusdam commodi tempore est enim nulla voluptas dicta nesciunt, incidunt itaque quidem. Dignissimos similique unde mollitia labore harum enim eaque id quia magni nulla. Possimus soluta corporis nam, saepe officiis maxime veritatis, voluptate suscipit veniam ipsam natus molestiae. Tempore, expedita fuga nemo, a, libero placeat veritatis pariatur debitis officiis ipsa vero aspernatur dolorum consequatur repellat quos omnis doloribus dicta dignissimos aut repellendus error sapiente! Nihil, similique exercitationem. Minima rem voluptates minus ipsum! Optio enim ullam reprehenderit a voluptate! At molestias doloremque tenetur reprehenderit iusto fugit expedita totam repellendus esse quidem quis officiis facere odit optio tempora veniam dicta beatae, sint officia molestiae aliquam provident et. Nisi labore beatae possimus quos nesciunt. Possimus cupiditate veniam, quo repellat facilis officiis repudiandae temporibus earum dolor quasi nam officia incidunt minus hic provident distinctio aspernatur veritatis quaerat explicabo laborum, sunt nisi.
                            </p>
                        </div>
                        
                        <hr className="border-gray-200 border-t border-1 dark:border-gray-800" />
                        <div className="grid gap-6 md:gap-8">
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
