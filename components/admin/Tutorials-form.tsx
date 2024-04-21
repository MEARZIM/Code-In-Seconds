"use client"

import React, {
    useEffect,
    useState
} from 'react';
import axios from "axios";
import dynamic from 'next/dynamic';
import toast from "react-hot-toast";
import 'quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.bubble.css';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Input } from '../ui/input';


interface CategoriesProps {
    id: string,
    slug: string,
    title: string,
    img?: string,
    post?: []
}


const toolbarOptions = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link'],
        ['clean'],
        [{ 'code-block': 'code' }]
    ]
};

const titleChecker = (data: string) => {
    if (data.length < 5) {
        return false;
    }
    return true;
}

const blogChecker = (data: string) => {
    if (data.length < 50) {
        return false;
    }
    return true;
}



export const TutorialForm = () => {
    const [title, setTitle] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [catSlug, setCatSlug] = useState<string>('');
    const [makeBlog, setMakeBlog] = useState<boolean>(false);

    const [Category, setCategory] = useState<CategoriesProps[]>([]);
    const [isLoadings, setIsLoadings] = useState<boolean>(false)



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


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoadings(true);

        if (!titleChecker(title)) {
            toast.error("Title length must be greater than five.")
            setIsLoadings(false);
            return
        }
        if (!blogChecker(desc)) {
            toast.error("desc length must be greater than 50 words.")
            setIsLoadings(false);
            return
        }
        try {
            const res= await axios.post('/api/admin/tutorials', {
                title: title,
                desc: desc,
                catSlug: catSlug,
                blogChecker: makeBlog
            });

            toast.success(res.data);

            setTitle("");
            setCatSlug("");
            setDesc("");

        } catch (err) {
            toast.error("Something went wrong")
        } finally {
            setIsLoadings(false);
        }
    }

    return (
        <div className='border my-4'>
            <div className="p-4">
                <h1 className="font-semibold underline decoration-sky-500/30">Add New Tutorial</h1>
            </div>

            <div className="">
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="p-2">
                        <Select
                            onValueChange={setCatSlug}
                            value={catSlug}
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
                    </div>


                    <div className="p-2">
                        <Input
                            className='w-full border'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title of your tutorial..."
                        />
                    </div>

                    <div className="p-2">
                        <ReactQuill
                            className='w-full h-[40dvh] border'
                            theme="bubble"
                            value={desc}
                            onChange={setDesc}
                            placeholder="Write about your tutorial..."
                            modules={toolbarOptions}
                        />
                    </div>
                    <div className="flex items-center space-x-2 p-2">
                        <input
                            type="checkbox"
                            checked={makeBlog}
                            onChange={(e) => setMakeBlog(e.target.checked)}
                        />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Want to add this tutorial as a blog?
                        </label>
                    </div>

                    <div className="flex justify-end">

                        <Button type="submit" variant="destructive">
                            Publish
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}


