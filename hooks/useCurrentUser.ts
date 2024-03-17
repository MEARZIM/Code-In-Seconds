import useSWR from  "swr";

import fetcher from "@/lib/fetcher";

const useCurrentUser = () =>{
    const { data, error, isLoading } = useSWR('/api/current', fetcher)

    console.log(data);
    console.log(error);

    return {
        user: data,
        isLoading,
        isError: error
      }
}

export default useCurrentUser;