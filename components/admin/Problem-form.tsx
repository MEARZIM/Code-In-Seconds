"use client"


import * as z from 'zod'

import {
    useEffect,
    useState
} from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
import toast from 'react-hot-toast'


interface CategoriesProps {
    id: string,
    slug: string,
    title: string,
    img?: string,
    post?: []
}

const formSchema = z.object({
    catSlug: z.string().min(1, {
        message: "Categories must be filled."
    }),
    question: z.string().min(2, {
        message: "Question must be at least 2 characters.",
    }),
    answer: z.string().min(2, {
        message: "Question must be at least 2 characters.",
    })
})


export const ProblemForm = () => {
    const [Category, setCategory] = useState<CategoriesProps[]>([]);
    const [isLoadings, setIsLoadings] = useState<boolean>(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            question: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        try {
            const res = await axios.post('/api/admin/problems', values);

            toast.success(res.data);

            form.reset();

        } catch (err) {
            toast.error("Something went wrong")
        } finally {
            setIsLoadings(false);
        }
    }




    useEffect(() => {
        setIsLoadings(true)
        const getData = async () => {
            try {
                const res = await axios.get("/api/categories");
                setCategory(res.data);

            } catch (err) {
                console.log(err);
            } finally {
                setIsLoadings(false);
            }
        };
        getData();

    }, [])

    if (isLoadings) {
        return (
            <div>
                loading...
            </div>
        )
    }
    return (


        <>
            <div className='border my-4'>
                <div className="p-4">
                    <h1 className="font-semibold underline decoration-sky-500/30">Add New Problem</h1>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
                        <FormField
                            control={form.control}
                            name="catSlug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        required
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select a Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Categories</SelectLabel>
                                                {Category.map((item) => (
                                                    <SelectItem
                                                        key={item.id}
                                                        value={item.title}
                                                    >{item.title}
                                                    </SelectItem>

                                                ))}

                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        This is your problem category.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="question"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Question</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Write your questions" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display question.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="answer"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Answer</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Write your answer here..."
                                            className="resize"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display answer.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end">

                            <Button type="submit" variant="destructive">
                                Publish
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </>
    )
}


