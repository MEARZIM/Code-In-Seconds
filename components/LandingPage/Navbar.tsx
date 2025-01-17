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
        (<nav className="p-2 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className=" mx-4">
                    <Image
                        alt="Logo"
                        src="/icon.png"
                        width={40}
                        height={40}
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
                <h1 className={cn("text-lg md:text-2xl text-sky-400 font-bold", font.className)}>
                    Code In Seconds
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <LoginButton>
                    <Button
                        variant="outline"
                        className="block py-2 pl-5 pr-6 text-white bg-teal-400 border-0 rounded-full hover:bg-teal-500 transition ease-out duration-700">
                        Get Started
                    </Button>
                </LoginButton>
            </div>
        </nav >)
    );
}