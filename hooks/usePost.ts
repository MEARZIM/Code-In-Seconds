"use client"

import useSWR from  "swr";

import fetcher from "@/lib/fetcher";

const usePosts = (postId : string) =>{

    const url =`/api/post?postId=${postId}`
   

    const { data, error, isLoading, mutate } = useSWR(url, fetcher)


    return {
        post: data,
        isLoading,
        isError: error,
        mutate
      }
}

export default usePosts;