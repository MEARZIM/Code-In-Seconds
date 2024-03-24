"use client";

import React from "react";
import styles from "./pagination.module.css";
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
        <div className="flex justify-between">
            <Button
                className="border-none"
                onClick={() => router.push(`?page=${page - 1}`)}
            >
                Previous
            </Button>
            <Button
                disabled={!hasNext}
                onClick={() => router.push(`?page=${page + 1}`)}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;