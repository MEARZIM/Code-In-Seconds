"use client"
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";


const colorCodes = [
  "#57c4ff31", "#da85c731", "#7fb88133", "#ff795736", "#ffb04f45", "#5e4fff31"
]

const MenuCategories = () => {
  const [Category, setCategory] = useState([]);



  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/categories");
        setCategory(res.data);
      } catch (err) {
        toast.error("Something went wrong");
      }
    };


    getData();

  }, [])

  return (
    (<div className="mt-8 mb-16 flex flex-wrap gap-4">
      {Category?.map((item: any, index) => (
        <Link
          href={`/Blogs?cat=${item.title}`}
          className={`px-4 py-2 rounded-lg text-base ${item.slug}`}
          key={index}
        >
          {item.img && (
            <div className="w-8 h-8">
              <Image
                src={item.img}
                alt=""
                // layout="fill"
                // objectFit="cover"
                className="rounded-full object-cover"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          )}
          <Button
            size="default"
            className={`bg-[${colorCodes[index % colorCodes.length]}] hover:bg-red-500  text-black font-light`}

          >
            {item.title}
          </Button>
        </Link>
      ))}
    </div>)
  );
};

export default MenuCategories;
