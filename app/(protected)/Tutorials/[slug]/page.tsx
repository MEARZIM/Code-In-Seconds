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
            <section className="w-full py-6 md:py-12 ">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 md:gap-8 lg:gap-10">
                        <div className="grid gap-2">
                            
                            <p className="text-gray-500 leading-loose md:text-base/relaxed dark:text-gray-400">
                                Welcome to our premier tutorial platform, where coding mastery begins! Our mission is to empower learners of all levels to delve into the captivating world of programming with confidence and enthusiasm. Whether you're taking your first steps into the realm of coding or seeking to expand your expertise, our comprehensive library of tutorials offers a rich tapestry of knowledge waiting to be explored.
                                <br />
                                <br />
                                At the heart of our platform lies a commitment to accessibility and inclusivity. We believe that anyone with a passion for learning should have the opportunity to acquire coding skills, regardless of their background or prior experience. That's why our tutorials are crafted with meticulous care, designed to be engaging, informative, and above all, accessible to learners of diverse backgrounds and learning styles.
                                <br />
                                <br />
                                Embark on your coding journey with us, and discover a wealth of resources covering an extensive range of coding languages. From the essential building blocks of web development such as HTML and CSS to the dynamic realms of Python, JavaScript, Java, and beyond, our tutorials provide a solid foundation for mastering the intricacies of modern programming languages.
                                <br />
                                <br />
                                Each tutorial is thoughtfully structured to guide you through the learning process step-by-step. Clear explanations break down complex concepts into easily digestible chunks, while hands-on examples and interactive exercises allow you to put your newfound knowledge into practice. Whether you prefer to learn through reading, watching videos, or engaging in interactive coding challenges, our platform offers a variety of learning resources to suit your preferences.
                                <br />
                                <br />

                                But learning to code is more than just mastering syntax and algorithms—it's about cultivating problem-solving skills, fostering creativity, and embracing a growth mindset. That's why our tutorials go beyond mere technical instruction, providing insights and tips to help you develop as a well-rounded coder. Whether you're tackling a challenging coding problem or exploring the latest trends in software development, our platform is here to support you every step of the way.
                                <br />
                                <br />

                                But the journey doesn't end with mastering a single language or skill set. In today's rapidly evolving tech landscape, lifelong learning is essential for staying ahead of the curve. That's why our platform is continuously updated with new tutorials, covering emerging technologies and industry trends. Whether you're interested in machine learning, blockchain development, or mobile app development, you'll find the resources you need to stay at the forefront of technology.
                                <br />
                                <br />

                                Join our vibrant community of learners today and embark on a transformative journey towards coding proficiency. Whether you're a student looking to kickstart your career in tech, a professional seeking to expand your skill set, or simply a curious individual with a passion for learning, there's a place for you here at our tutorial platform. Start your coding odyssey now and unlock the doors to endless opportunities in the digital realm!
                            </p>
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

export default page
