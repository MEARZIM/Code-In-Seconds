"use client"

import useSWR from  "swr";

import fetcher from "@/lib/fetcher";

const usePosts = (userId ?: string) =>{

    const url = userId ? (
        `/api/post?${userId}`
    ) : (
        `/api/post`
    )

    const { data, error, isLoading, mutate } = useSWR(url, fetcher)

    console.log(data);
    console.log(error);

    return {
        post: data,
        isLoading,
        isError: error,
        mutate
      }
}

export default usePosts;