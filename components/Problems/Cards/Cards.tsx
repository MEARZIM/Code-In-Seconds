"use client"
import Image from "next/image";

import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/culture.png",
  authorAvatar: "/culture.png",
};

interface CategoriesProps {
  id: string,
  slug: string,
  title: string,
  titleDescription: string,
  description: string
  img?: string,
}

export const ProblemCard = ({
  categoryContent
}: {
  categoryContent: CategoriesProps
}) => {
 
  return (
    <div className="w-full max-w-4xl mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={categoryContent.title}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          {/* <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src={blogContent.image}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div> */}
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {categoryContent.titleDescription}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
              {categoryContent.description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">
                <Badge variant="destructive">{categoryContent.slug}</Badge>
              </span>
              <Link href={`/Problems/${categoryContent.slug}`}>
                <Button className="relative z-10 px-6 py-2 text-xs">
                  Solve Problems
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}





const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar?: string;
}) => (
  <div className="flex space-x-2 p-2 items-center">
    <p>{title}</p>
  </div>
);
