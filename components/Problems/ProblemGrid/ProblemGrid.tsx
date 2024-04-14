import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { FollowerPointerCard } from '@/components/ui/following-pointer'
import { TitleComponent } from '../Cards/Cards'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'


const problemsDemoData = {
    slug: 'HTML',
    question: 'is html is good?',
    answer: 'yes'
}

const ProblemGrid = () => {
    const { ref, inView } = useInView()

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
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_page=' + pageParam)
            console.log(res.data)
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
    return (
        <div className="w-full max-w-4xl mx-auto">
            <FollowerPointerCard
                title={
                    <TitleComponent
                        title={problemsDemoData.slug}
                    />
                }
            >
                <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                    <div className=" p-4">
                        <h2 className="font-bold my-4 text-lg text-zinc-700">
                            {problemsDemoData.question}
                        </h2>
                        <h2 className="font-normal my-4 text-sm text-zinc-500">
                            {problemsDemoData.answer}
                        </h2>
                        <div className="flex flex-row justify-between items-center mt-10">
                            <span className="text-sm text-gray-500">
                                <Badge variant="destructive">{problemsDemoData.slug}</Badge>
                            </span>
                            <Link href={`/Problems/${problemsDemoData.slug}`}>
                                <Button className="relative z-10 px-6 py-2 text-xs">
                                    Solve Problems
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </FollowerPointerCard>
            <ReactQueryDevtools initialIsOpen />
        </div>
    )
}


export default ProblemGrid


