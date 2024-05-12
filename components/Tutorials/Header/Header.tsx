"use client";
import React, {
    useState
} from "react";
import Link from "next/link";

import {
    HoveredLink,
    Menu,
    MenuItem,
    ProductItem
} from "@/components/ui/navbar-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";
import { UserButton } from "@/components/auth/user-button";
import MobileSidebar from "../Sidebar/MobileSidebar";
import useGetCategories from "@/hooks/useGetCategories";

export function TutorialHeader() {
    return (
        <div className="relative w-full flex items-center justify-center h-28 md:h-[14vh]">
            <Navbar className="top-0" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const { data, isLoading } = useGetCategories();
    const [active, setActive] = useState<string | null>(null);

    if (isLoading) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div
            className={cn("fixed top-5 inset-x-0 max-w-4xl mx-auto z-50", className)}
        >

            <Menu setActive={setActive}>
                <MobileSidebar />
                <Link href={"/"}>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p className="text-zinc-400 text-xs md:text-sm">Home</p>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white text-black">
                                <p>Go Back to home</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Topics">
                    <div className="flex flex-col space-y-4 text-xs md:text-sm">
                        {data.map((category: any) => (
                            <div key={category.id}>
                                <HoveredLink
                                    href={`/Tutorials/${category.slug}`}
                                    className=""
                                >{category.title}</HoveredLink>
                            </div>
                        ))}

                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Products">
                    <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Coding interviews"
                            href=""
                            src="/interview.jpg"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Tailwind Master"
                            href=""
                            src="/tailwindCss.webp"
                            description="Master your Tailwind Css skills"
                        />
                        <ProductItem
                            title="Explore"
                            href=""
                            src="/explore.jpg"
                            description="Explore Differnet Domains."
                        />
                        <ProductItem
                            title="Get a Hired"
                            href=""
                            src="/jobs.jpg"
                            description="If you are ready apply for a new job."
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/Tutorials">Free Tutorials</HoveredLink>
                        <HoveredLink href="/Blogs">Blogs</HoveredLink>
                        <HoveredLink href="/Jobs">Find a Job</HoveredLink>
                    </div>
                </MenuItem>
                <div className="m-0 p-0 flex items-center justify-center">

                    <UserButton />
                </div>
            </Menu>
        </div>
    );
}
