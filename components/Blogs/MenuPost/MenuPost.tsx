"use client"

import React from "react";
import Link from "next/link";


import { Button } from "@/components/ui/button";
import useGetMostPopoularPosts from "@/hooks/useGetMostPopoularPosts";
import { Skeleton } from "@/components/ui/skeleton"

interface MenuPostProps {
  withImage: boolean;
}



const MenuPosts = ({ withImage }: MenuPostProps) => {
  const {
    data,
    isLoading
  } = useGetMostPopoularPosts();

  // console.log(data);

  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
    )
  }

  return (
    <div className="mt-9 mb-16 flex flex-col gap-9">
      <Link href="/" className="flex items-center gap-4">
        {/* {withImage && (
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image src="/p1.jpeg" alt="" layout="fill" className="rounded-full object-cover" />
          </div>
        )} */}
        {data.map((items: any, index: number) => (
          <div className="flex-1 flex flex-col" key={index}>
            <Button size="icon" className="px-8 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs">{items.catSlug}</Button>
            <h3
              className="text-sm pt-2 font-semibold text-gray-800"
              dangerouslySetInnerHTML={{
                __html: items.title
              }}
            />
            <div className="flex flex-col md:items-center md:flex-row text-sm text-gray-600">
              <span className="pt-2 md:pt-0">{items.user.name}</span>
              <span className="text-xs">{items.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default MenuPosts;
