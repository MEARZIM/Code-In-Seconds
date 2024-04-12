import useSWR from "swr"

import fetcher from "@/lib/fetcher"

const useGetCategories = () => {
    const url =`/api/categories`
    const { data, isLoading, mutate } = useSWR(url, fetcher)

    return {
        data,
        isLoading,
        mutate
    }
}

export default useGetCategories;