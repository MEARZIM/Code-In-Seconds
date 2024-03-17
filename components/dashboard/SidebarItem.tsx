"use client"

import React, { useCallback } from 'react';
import { IconType } from "react-icons";
import { useRouter } from 'next/navigation';


import { BsDot } from 'react-icons/bs';
import { useCurrentUserThroughSessions } from '@/hooks/useCurrentUserThroughSessions';

interface SidebarItemProps {
    label: string;
    icon: IconType;
    href?: string;
    onClick?: () => void;
    auth?: boolean;
    alert?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label, icon:
    Icon, href,
    auth,
    onClick,
    alert
}) => {
      const router = useRouter();
    //   const loginModal = useLoginModal();

      const currentUser = useCurrentUserThroughSessions();

      const handleClick = useCallback(() => {
        if (onClick) {
          return onClick();
        }

        if (!currentUser) {
          router.push("auth/signin")
        } else if (href) {
          router.push(href);
        }
      }, [router, href, auth, onClick, currentUser]);

    return (
        <div
            onClick={handleClick} 
            className="flex flex-row items-center">
            <div className="relative rounded-full h-6 w-4 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer md:hidden ">
                <Icon size={20} color="white" />
                {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null}
            </div>
            <div className="relative flex items-row gap-4 p-4 rounded-full hover:bg-slate-500 hover:bg-opacity-10 cursor-pointer items-center">
                <Icon size={15} color="white" />
                <p className="hidden lg:block text-white text-sm">
                    {label}
                </p>
                {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null}
            </div>
        </div>
    );
}

export default SidebarItem;