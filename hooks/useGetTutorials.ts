import useSWR from "swr"

import fetcher from "@/lib/fetcher"


const useGetTutorials = ( catSlug?: string , slug ?: string) => {
    console.log(catSlug)
    console.log(slug)
    const url = `/api/tutorials?slug=${slug || ""}&catSlug=${catSlug || ""}`;
    const { data, isLoading, mutate } = useSWR(url, fetcher)

    return {
        data,
        isLoading,
        mutate
    }
}

export default useGetTutorials;