import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface MenuPostProps {
    withImage: boolean;
}

const MenuPosts = ({ withImage }: MenuPostProps) => {
  return (
    <div className="mt-9 mb-16 flex flex-col gap-9">
      <Link href="/" className="flex items-center gap-4">
        {withImage && (
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image src="/p1.jpeg" alt="" layout="fill" className="rounded-full object-cover" />
          </div>
        )}
        <div className="flex-1 flex flex-col">
          <Button size="icon" className="px-8 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs">Travel</Button>
          <h3 className="text-sm font-semibold text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className="flex items-center text-sm text-gray-600">
            <span>John Doe</span>
            <span className="mx-1">-</span>
            <span>10.03.2023</span>
          </div>
        </div>
      </Link>
      {/* Other menu items */}
      <Link href="/" className="flex items-center gap-4">
        {withImage && (
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image src="/p1.jpeg" alt="" layout="fill" className="rounded-full object-cover" />
          </div>
        )}
        <div className="flex-1 flex flex-col">
          <Button size="icon" className="px-8 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs">Travel</Button>
          <h3 className="text-sm font-semibold text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className="flex items-center text-sm text-gray-600">
            <span>John Doe</span>
            <span className="mx-1">-</span>
            <span>10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
