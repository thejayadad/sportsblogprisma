'use client'
// StylishMenu.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';
import Logo from '@/components/logo/Logo';

const MenuIcon = ({ isOpen, onClose }) => {
  const menuAnimation = useAnimation();

  const variants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  const closeMenu = async () => {
    await menuAnimation.start({ x: '-100%' });
    onClose();
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-62 h-full bg-orange text-white p-8 z-30"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-end">
        <button onClick={closeMenu}>
          <RiCloseLine size={30} />
        </button>
      </div>
      <nav className="mt-8 flex flex-col items-center justify-between gap-48">
        <div>
            <Logo size={70} />
        </div>
        <div>
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        </div>
        <div className='bg-secondary w-full py-24 text-white'>
            Footer
        </div>
      </nav>
    </motion.div>
  );
};

export default MenuIcon;
