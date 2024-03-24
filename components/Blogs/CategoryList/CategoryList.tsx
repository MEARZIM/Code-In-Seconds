"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div>
      <h1 className="my-8 text-3xl font-semibold">Popular Categories</h1>
      <div className="flex flex-wrap gap-4">
        {data?.map((item: any) => (
          <Link
            href="/blog?cat=style"
            className={`flex items-center gap-2 p-4 rounded-lg text-white text-base ${item.slug}`}
            key={item._id}
          >
            {item.img && (
              <div className="w-8 h-8">
                <Image
                  src={item.img}
                  alt=""
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
