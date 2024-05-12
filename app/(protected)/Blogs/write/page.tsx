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
import ImageUpload from "@/components/auth/imageUpload";
import { Label } from "@/components/ui/label";


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



const Page = () => {
  const [blog, setblog] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [img, setImg] = useState<string | undefined>(undefined);
  const [catSlug, setCatSlug] = useState('');

  const [Category, setCategory] = useState<CategoriesProps[]>([]);
  const [isLoadings, setIsLoadings] = useState<boolean>(false)



  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/categories");
        setCategory(res.data);

      } catch (err) {
        console.log(err);
      }
    };


    getData();

  }, [])

  if (!Category) {
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
      return
    }
    if (!blogChecker(blog)) {
      toast.error("Blog length must be greater than 50 words.")
      return
    }
    try {
      await axios.post('/api/blogs', {
        title: title,
        catSlug: catSlug,
        blog: blog,
        img: img,
      });

      toast.success("Post Created Successfully");

      setTitle("");
      setCatSlug("");
      setblog("");

    } catch (err) {
      toast.error("Something went wrong")
    } finally {
      setIsLoadings(false);
    }
  }

  return (
    <div className='border my-4'>
      <div className="p-4">
        <h1 className="font-semibold">Add New Blog</h1>
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
            <Label>Thumbnail Image</Label>
            <ImageUpload
              value={img}
              onChange={(image) => setImg(image)}
              label="Upload image"
              className="w-fit"
            />
          </div>
          <div className="p-2">
            <ReactQuill
              className='w-full border'
              theme="bubble"
              value={title}
              onChange={setTitle}
              placeholder="Title of your story..."
              modules={toolbarOptions}
            />
          </div>
          <div className="p-2">
            <ReactQuill
              className='w-full h-[40dvh] border'
              theme="bubble"
              value={blog}
              onChange={setblog}
              placeholder="Tell your story..."
              modules={toolbarOptions}
            />
          </div>
          <div className="flex justify-end">

            <Button type="submit" variant="outline">
              Publish
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page
