import useSWR from "swr";
import fetcher from "@/lib/fetcher";


const useUser = (userId: string) => {
    const { 
        data, 
        error, 
        isLoading, 
        mutate 
    } = useSWR(`/api/users/profile?${userId}`, fetcher);
    
    return {
        user: data,
        isLoading,
        isError: error
    }
}

export default useUser;