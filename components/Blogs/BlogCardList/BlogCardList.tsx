"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import Pagination from "../Pagination/Pagination";
import { BlogCard } from "../BlogCard/BlogCard";
import toast from "react-hot-toast";


interface BlogCardListProps {
  page: number;
  cat: string;
}






export const BlogCardList = ({ page, cat }: BlogCardListProps) => {
  const [post, setPost] = useState([]);
  const [postCount, setPostCount] =useState<number>(0);
  const [loading, setLoading]= useState(false);
  // const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 5;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < postCount;

  useEffect(() => {
    const getData = async () => {

      try{
        setLoading(true);

        const res = await axios.get(
          `/api/post?page=${page}&cat=${cat || ""}`
        );
        
        setPostCount(res.data.count);
        setPost(res.data.purifiedPosts);

      }catch (err) {
        console.error(err);
        toast.error("Something went wrong")
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [page, cat])

  // console.log(post)
  if (loading) {
    return (
      <div>
        loading...
      </div>
    )
  }


  return (
    <div className="flex-5">
      <h1 className="my-8 text-3xl font-semibold">Recent Posts</h1>
      <div className="gap-6">
        {post?.map((item: any) => (
          <BlogCard item={item} key={item._id} />
        ))}
       
      </div>
      <Pagination page={page} hasNext={hasNext}  hasPrev={hasPrev}  />
    </div>
  );
};

