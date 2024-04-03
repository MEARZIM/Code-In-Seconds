"use client"

import React, {
  useEffect,
  useState
} from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";



export const CategoryList = () => {
  const [Category, setCategory] = useState([]);



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

  if (Category.length == 0) {
    return (
      <section className='flex flex-col mx-auto gap-4 my-5'>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-12 w-[90%] " />
          <Skeleton className="h-12 w-[90%] " />
          <Skeleton className="h-12 w-[90%] " />
          <Skeleton className="h-12 w-[90%] " />
          <Skeleton className="h-12 w-[90%] " />
          <Skeleton className="h-12 w-[90%] " />
        </div>
      </section>
    )
  }


  return (
    <div>
      <h1 className="my-8 text-3xl font-semibold">Popular Categories</h1>
      <div className="flex flex-wrap gap-4">
        {Category?.map((item: any) => (
          <Link
            href={`/Blogs?cat=${item.title}`}
            className={`flex items-center gap-2 p-2 rounded-lg text-black text-base ${item.slug}`}
            key={item._id}
          >
            {item.img && (
              <div className="w-8 h-8">
                <Image
                  src={item.img}
                  alt=""
                  // layout="fill"
                  className="rounded-full object-cover"
                // objectFit="cover"
                />
              </div>
            )}
            <Button size="default" className="bg-red-400 hover:bg-red-500">
              {item.title}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};


