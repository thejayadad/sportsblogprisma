'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = ({ size = 50 }) => {
  return (
    <Link href="/">
      <motion.img
        src="/logo.png"
        alt="Your Logo Alt Text"
        whileHover={{ scale: 1.3 }}
        transition={{ duration: 0.2 }}
        style={{ width: size, height: 'auto' }}
      />
    </Link>
  );
};

export default Logo;
