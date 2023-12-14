'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';


const Card = () => {
  return (
    <div className='flex justify-center items-center flex-col rounded-2xl drop-shadow-card'>
        <Link 
        className='flex justify-center items-center group relative w-full h-full'
        href={'/'}>
        <img
        src="https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // Replace with your image URL
        width={414}
        height={314}
        className="w-full h-full object-cover rounded-2xl"
        />
        <div className="hidden group-hover:flex justify-end items-end w-full h-1/3 bg-gradient-to-b from-transparent to-black/50 rounded-b-2xl gap-2 absolute bottom-0 right-0 font-semibold text-lg text-white p-4">
            <p className="w-full">Title</p>
            </div>
        </Link>
        <div
        className=' w-full px-2 mt-3 font-semibold text-sm flex justify-between items-center'
        >
        <Link href={'/'}>
            <div className='flex justify-center items-center gap-2'>
            <img
                src='https://images.pexels.com/photos/18509060/pexels-photo-18509060/free-photo-of-woman-in-elegant-white-jacket-posing-with-lantern-under-storm-clouds-in-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                width={24}
                height={24}
                className='rounded-full'
                alt="profile image"
                />
                <p>Name</p>
            </div>
        </Link>
        <div className='flex justify-center items-center gap-3'>
            <div className='flex justify-center items-center gap-2'>
                <p>Likes</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <p>Views</p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Card;
