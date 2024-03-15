
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";

import Logo from './logo'

import { UserButton } from '@/components/auth/user-button'

import {Nav} from './Nav';

export const Header = () => {
    const [isMobileView, setIsMobileView] = useState(false)

    const toggleMenu = () => {
        setIsMobileView(!isMobileView)
    }

    return (
      <Nav />
    )
}


