'use client'
import React from 'react'
import MenuItems from './MenuItems'
import Logo from '@/components/logo/Logo'
import AuthLinks from './AuthLinks'

const Navbar = () => {
  return (
    <header className='px-4 py-12'>
        <nav className='flex justify-between items-center max-w-screen-lg mx-auto'>
        <MenuItems />
        <Logo />
        <AuthLinks />
        </nav>
    </header>
  )
}

export default Navbar