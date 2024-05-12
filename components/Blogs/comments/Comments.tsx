"use client"

import { z } from "zod"
import useSWR from "swr"
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import fetcher from "@/lib/fetcher"
import { userCommentsSchema } from "@/schemas"
import toast from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { FaUser } from "react-icons/fa";

interface Props {
    postId: string;
}




export const Comments = (postId: Props) => {

    const { data, mutate, isLoading, error } = useSWR(
        `/api/comments?postId=${postId.postId}`,
        fetcher
    );
    // console.log(data);



    const form = useForm<z.infer<typeof userCommentsSchema>>({
        resolver: zodResolver(userCommentsSchema),
        defaultValues: {
            comments: "",
            postId: postId.postId
        },
    })

    // console.log(data)
    if (isLoading) {
        return (
            <div className="text-3xl">
                loading
            </div>
        )
    }


    const onSubmit = async (values: z.infer<typeof userCommentsSchema>) => {

        try {
            const res = await axios.post("/api/comments", {
                data: values
            })
            mutate();
            toast.success("Comments Added!");
            form.reset();

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong. Please try again")
        }
    }



    return (
        <>

            <section
                className='max-w-4xl mx-auto'
            >
                <div className='text-3xl font-extrabold mt-20'>
                    Comments
                </div>
                <div className="grid w-full gap-4">
                    <Form {...form} >
                        <form
                            className="space-y-6"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >

                            <FormField
                                control={form.control}
                                name="comments"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-400" >
                                            Write Your Comments
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                placeholder="Share your views"
                                                className="h-24"
                                            // disabled={isPending}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <Button
                                type="submit"
                                size="lg"
                            // disabled={isPending}
                            >
                                Post
                            </Button>
                        </form>
                    </Form>
                </div>

            </section>
            <section>
                {data && (
                    <section>
                        {data.map((item: any) => (

                            <div
                                className="max-w-4xl  mx-auto border px-6 py-4 rounded-lg my-2"
                                key={item.id}
                            >
                                <div className="flex align-baseline items-center mb-6 mx-2">
                                    <div className="w-10 " >
                                        <Avatar>
                                            <AvatarImage
                                                alt="User profile picture"
                                                src={item?.user.image || ""}
                                                className="rounded-fullmr-4"

                                            />
                                            <AvatarFallback >
                                                <FaUser className="text-sky-500" />
                                            </AvatarFallback>
                                        </Avatar>

                                    </div>
                                    <div className="">
                                        <div className="text-base font-bold text-gray-800">{item.user.name}</div>
                                        <div className="text-xs text-gray-500">{item.createdAt.substring(0, 10)}</div>
                                    </div>
                                </div>
                                <p className="text-base pl-3 leading-relaxed mb-6">{item.desc}</p>
                                {/* <div className="flex justify-between items-center">
                        <div>
                            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-thumbs-up"></i> Like</a>
                            <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-comment-alt"></i> Reply</a>
                        </div>
                        <div className="flex items-center">
                            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-flag"></i> Report</a>
                            <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-share-square"></i> Share</a>
                        </div>
                    </div> */}
                            </div>
                        ))}
                    </section>

                )}
            </section>
        </>
    )

}
