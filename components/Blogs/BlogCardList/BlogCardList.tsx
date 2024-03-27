"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import Pagination from "../Pagination/Pagination";
import { BlogCard } from "../BlogCard/BlogCard";


interface BlogCardListProps {
  page: number;
  cat: string;
}






export const BlogCardList = ({ page, cat }: BlogCardListProps) => {
  const [post, setPost] = useState();
  // const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  // const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `/api/posts?page=${page}&cat=${cat || ""}`,
      );
      return res.data;
    };

    getData();
  }, [])




  return (
    <div className="flex-5">
      <h1 className="my-8 text-3xl font-semibold">Recent Posts</h1>
      <div className="gap-6">
        {/* {posts?.map((item :any) => (
          <BlogCard item={item} key={item._id} />
        ))} */}
        {/* start */}
        <div className=" mx-auto p-1">
          <div className="flex flex-col py-6 md:flex-row md:items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              alt="Coastal town"
              className="h-fit w-fit md:h-auto md:w-1/2 p-2 rounded-lg"
              height="480"
              src="/culture.png"
              style={{
                aspectRatio: "480/480",
                objectFit: "cover",
              }}
              width="480"
            />
            <div className="pl-6 pr-2 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </div>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque dignissimos ullam commodi eos adipisci
                  facere! Quis id explicabo ipsam totam libero ipsa aliquam obcaecati, in facere molestiae architecto
                  asperiores?...
                </p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">11.02.2023 - CULTURE</p>
                  <Link className="text-blue-500 hover:text-red-400 hover:underline" href="#">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        <div className=" mx-auto p-1">
          <div className="flex flex-col py-6 md:flex-row md:items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              alt="Coastal town"
              className="h-fit w-fit md:h-auto md:w-1/2 p-2 rounded-lg"
              height="480"
              src="/culture.png"
              style={{
                aspectRatio: "480/480",
                objectFit: "cover",
              }}
              width="480"
            />
            <div className="pl-6 pr-2 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </div>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque dignissimos ullam commodi eos adipisci
                  facere! Quis id explicabo ipsam totam libero ipsa aliquam obcaecati, in facere molestiae architecto
                  asperiores?...
                </p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">11.02.2023 - CULTURE</p>
                  <Link className="text-blue-500 hover:text-red-400 hover:underline" href="#">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
    </div>
  );
};

