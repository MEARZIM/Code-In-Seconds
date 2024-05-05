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

const categoryFormSchema = z.object({
    title: z.string().min(1, {
        message: "Categories must be filled."
    }),

    titleDescription: z.string().min(2, {
        message: "Title Description must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "Description must be at least 2 characters.",
    })
})


export const CategoryForm = () => {
    const [Category, setCategory] = useState<CategoriesProps[]>([]);
    const [isLoadings, setIsLoadings] = useState<boolean>(false)

    const form = useForm<z.infer<typeof categoryFormSchema>>({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            title: "",
            titleDescription: "",
            description: "",
        },
    })

    async function onSubmit(values: z.infer<typeof categoryFormSchema>) {
        console.log(values)
        try {
            const res = await axios.post('/api/admin/categories', values);

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
                    <h1 className="font-semibold underline decoration-sky-500/30">Add New Category</h1>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter a new Category"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Add a new Category.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="titleDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter a title description for that category"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is your title description for the catgory.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter a description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Add a description
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


