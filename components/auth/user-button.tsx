"use client"

import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { PiSignOutThin } from "react-icons/pi";

import {
    AvatarImage,
    AvatarFallback,
    Avatar
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SignOut } from '@/actions/signout';
import { ManageAccountModal } from "@/components/auth/modals/manageAccountModal";
import { useManageAccountModal } from "@/hooks/useManageAccountModal";
import { useCurrentUserThroughSessions } from "@/hooks/useCurrentUserThroughSessions";
import { Skeleton } from "../ui/skeleton";
import "./userButton.css"



export const UserButton = () => {
    const user = useCurrentUserThroughSessions();
    console.log(user);

    const isOpen = useManageAccountModal((state) => state.isOpen);
    const onOpen = useManageAccountModal((state) => state.onOpen);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const HandleSignOut = () => {
        SignOut();
    }

    const handleManageAccount = () => {
        setIsDropdownOpen(!isDropdownOpen);
        onOpen();
    }

    return (<div>

        <div className="relative">
            <Button
                size={"icon"}
                className="m-2 rounded-full shadow-lg bg-white hover:cursor-pointer"
                onClick={toggleDropdown}
            >
                {user ? (<Avatar>
                    <AvatarImage
                        alt="User profile picture"
                        src={user?.image || ""}
                    />
                    <AvatarFallback className="bg-sky-300">
                        <FaUser className="text-white" />
                    </AvatarFallback>
                </Avatar>) : <Skeleton className="h-12 w-12 rounded-full" />}
            </Button>

            {isDropdownOpen && (
                <div className={`absolute  md:right-2 mt-2 w-72 rounded-md shadow-lg bg-white ${isDropdownOpen ? 'slide-in' : 'slide-out'}`}>
                    <div className="flex items-center p-4 border-b">
                        <Avatar className="mr-3">
                            <AvatarImage alt="Not Found" src={user?.image || ""} />
                            <AvatarFallback className="bg-sky-500">
                                <FaUser className="text-white" />
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-medium">{user?.name}</div>
                            <div className="text-sm text-gray-500">{user?.email}</div>
                        </div>
                    </div>
                    <div className="py-1">
                        <Button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full border-collapse text-left"
                            variant="link"
                            onClick={handleManageAccount}
                        >
                            <span className="flex align-baseline gap-x-2">
                                <MdManageAccounts size={20} />  Manage account
                            </span>
                        </Button>
                        <Button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full border-collapse text-left"
                            variant='link'
                            onClick={HandleSignOut}
                        >
                            <span className="flex align-baseline gap-x-2">
                                <PiSignOutThin size={16} /> Sign out
                            </span>
                        </Button>
                    </div>
                    <div className="px-4 py-2 text-xs text-gray-400">
                        Devoloped By Ayan Saha <br />
                        {'(asahaayan@gmail.com)'}
                    </div>
                </div>
            )}
        </div>

        {isOpen && (
            <div className="flex justify-center items-center">
                <ManageAccountModal />
            </div>
        )}

    </div>
    );
};

