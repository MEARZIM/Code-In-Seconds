import fetcher from "@/lib/fetcher";
import axios from "axios";
import useSWR from "swr";


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