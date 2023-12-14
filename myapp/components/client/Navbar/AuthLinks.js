'use client'
import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [status] = useState("authenticated");

  const openTooltip = () => setTooltipVisible(true);
  const closeTooltip = () => setTooltipVisible(false);

  return (
    <div className='flex items-center space-x-4'>
      <motion.div
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        className="relative"
      >
        <FiUser size={24} className='color-secondary' />

        <AnimatePresence>
          {isTooltipVisible && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-2 bg-yellow px-4 py-2 text-secondary rounded-md"
            >
              {status === "unauthenticated" ? "Login" : "User Menu"}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
   </div>
  );
}

export default AuthLinks;
