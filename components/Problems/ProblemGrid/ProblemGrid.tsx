import React, { 
    useState
} from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Badge } from '@/components/ui/badge'

interface ProblemProps {
    id: string,
    createdAt: string,
    updatedAt: string,
    slug: string,
    question: string,
    answer: string,
    views: number,
    catSlug: string,
    userId: string
}


const ProblemGrid = ({
    params
  } : {
    params: {
      slug: string
    }
  }) => {
   
    const { ref, inView } = useInView()
    const [problems, setProblems] = useState<ProblemProps[]>([]);

    const {
        status,
        data,
        error,
        isFetching,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
    } = useInfiniteQuery({
        queryKey: ['projects'],
        queryFn: async ({ pageParam }) => {
            const res = await axios.get(`/api/problems?page=${pageParam}&cat=${params.slug}`)
            setProblems(res.data);
            return res.data
        },
        initialPageParam: 1,
        getPreviousPageParam: (firstPage) => firstPage ?? undefined,
        getNextPageParam: (lastPage) => lastPage ?? undefined,
    })

    React.useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [fetchNextPage, inView])

    if (status === 'pending') {
        return (
            <div>
                Loading...
            </div>
        )
    }
    else if (problems.length === 0) {
        return (
            <div className='flex justify-center items-center text-2xl'>
                No Problems Found
            </div>
        )
    }
    
    console.log(problems)
    return (
        <div className="w-full max-w-4xl mx-auto my-2">
            {problems.map((problem: ProblemProps) => (
                <section className='my-2' key={problem.id}>
                        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                            <div className=" p-4">
                                <h2 className="font-bold my-4 text-lg text-zinc-700">
                                    {problem.question}
                                </h2>
                                <h2 className="font-normal my-4 text-sm text-zinc-500">
                                    {problem.answer}
                                </h2>
                                <div className="flex flex-row justify-between items-center mt-10">
                                    <span className="text-sm text-gray-500">
                                        <Badge variant="destructive">{problem.catSlug}</Badge>
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                </section>
            ))}
            <ReactQueryDevtools initialIsOpen />
        </div>
    )
}


export default ProblemGrid




