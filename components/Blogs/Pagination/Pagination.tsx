"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface PaginationProps {
    page: number,
    hasPrev?: boolean,
    hasNext?: boolean
}

const Pagination = ({
    page,
    hasPrev,
    hasNext
}: PaginationProps) => {
    const router = useRouter();

    return (
        <div className="flex justify-between mt-4">
            <Button
                className="border-none"
                onClick={() => router.push(`?page=${page - 1}`)}
                disabled={!hasPrev }
            >
                Previous
            </Button>
            <Button
                className="border-none"
                onClick={() => router.push(`?page=${page + 1}`)}
                disabled={!hasNext}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;