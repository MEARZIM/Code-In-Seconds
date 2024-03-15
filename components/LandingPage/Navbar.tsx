"use client";

import Link from "next/link"
import Image from "next/image"
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "../auth/login-button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-8 w-8 mr-4">
                    <img alt="Logo" src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=826&t=st=1710429570~exp=1710430170~hmac=ef9fc14d93c1d985396b1ae06cc0c6140ef0208225fe2a351386e6bd79808f71" />
                    
                </div>
                <h1 className={cn("text-2xl font-bold text-white", font.className)}>
                    Title
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <LoginButton>
                    <Button variant="outline" className="rounded-full">
                        Get Started
                    </Button>
                </LoginButton>
            </div>
        </nav >
    )
}