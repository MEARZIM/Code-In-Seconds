import useSWR from "swr"

import fetcher from "@/lib/fetcher"

const useGetMostPopoularPosts = () => {
    const url =`/api/MostPopularBlog`
    const { data, isLoading, mutate } = useSWR(url, fetcher)

    return {
        data,
        isLoading,
        mutate
    }
}

export default useGetMostPopoularPosts;