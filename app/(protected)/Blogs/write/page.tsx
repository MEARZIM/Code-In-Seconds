"use client"
import { z } from "zod"
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.bubble.css';

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
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import ImageUpload from "@/components/auth/imageUpload";
import { Label } from "@/components/ui/label";




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

const AllCategories = [
  {
    id: 1,
    category: "Coding"
  },
  {
    id: 2,
    category: "Styling"
  },
  {
    id: 3,
    category: "Food"
  },
  {
    id: 4,
    category: "Travel"
  },
  {
    id: 5,
    category: "Culture"
  },
]

const page = () => {
  const [value, setValue] = useState<string>('')
  const [img, setImg] = useState<string | undefined>(undefined);
  const [catSlug, setCatSlug] = useState("");


  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(
      img,
      value,
      catSlug
    )
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
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {AllCategories.map((item) => (
                    <SelectItem
                      key={item.id}
                      value={item.category}
                    >{item.category}
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
              className='w-full h-[40dvh] border'
              theme="bubble"
              value={value}
              onChange={setValue}
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

export default page
