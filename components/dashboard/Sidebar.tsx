"use client"

import { signOut } from 'next-auth/react';
import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

import { useCurrentUser } from '@/hooks/use-current-user';

import SidebarItem from './SidebarItem';

export const Sidebar = () => {
  const  currentUser  = useCurrentUser();

  const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/',
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
    //   alert: currentUser?.hasNotification
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
  ]

  return (
    <div className="col-span-1 h-full py-2 md:px-4 md:py-10 ">
        <div className="flex flex-col justify-center items-center lg:bg-sky-100/60 backdrop-blur-sm rounded-lg">
          <div className="space-y-2 py-6 px-2">
            {items.map((item) => (
              <SidebarItem
                key={item.href}
                // alert={item.alert}
                auth={item.auth}
                href={item.href} 
                icon={item.icon} 
                label={item.label}
              />
            ))}
            {currentUser && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />}
          </div>
        </div>
      </div>
  )
};

