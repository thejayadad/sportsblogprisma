'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiMenu2Line } from 'react-icons/ri';
import MenuIcon from './MenuIcon'

const MenuItems = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
      setIsMenuOpen(true);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  return (
    <div>
        <motion.button whileTap={{ scale: 0.9 }} onClick={openMenu}>
        <RiMenu2Line size={30} />
      </motion.button>

      {isMenuOpen && <MenuIcon isOpen={isMenuOpen} onClose={closeMenu} />}
    </div>
  )
}

export default MenuItems