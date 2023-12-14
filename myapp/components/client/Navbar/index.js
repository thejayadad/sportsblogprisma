'use client'
import React from 'react'
import MenuItems from './MenuItems'
import Logo from '@/components/logo/Logo'
import AuthLinks from './AuthLinks'

const Navbar = () => {
  return (
    <header className='px-4 py-6'>
        <nav className='flex justify-between items-center max-w-screen-xl mx-auto'>
        <MenuItems />
        <Logo size={120} />
        <AuthLinks />
        </nav>
    </header>
  )
}

export default Navbar