"use client"
import React, { useState } from 'react'

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


