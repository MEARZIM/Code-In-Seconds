import useSWR from  "swr";

import fetcher from "@/lib/fetcher";

const useUsers = () =>{
    const { data, error, isLoading, mutate } = useSWR('/api/users', fetcher)

    console.log(data);
    console.log(error);

    return {
        user: data,
        isLoading,
        isError: error,
        mutate
      }
}

export default useUsers;