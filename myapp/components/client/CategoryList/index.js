'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FiSoccer, FiFootball, FiBasketball, FiBaseball, FiTennis } from 'react-icons/fi';

const CategoryList = () => {
  const categories = [
    { name: 'All',  filter: 'all' },
    { name: 'Football',  filter: 'football' },
    { name: 'Soccer',  filter: 'soccer' },
    { name: 'Basketball',  filter: 'basketball' },
    { name: 'Baseball',  filter: 'baseball' },
    { name: 'Tennis', filter: 'tennis' },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (filter) => {
    setSelectedCategory(filter);
  };

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center mt-12">
      <h3 className='text-xs text-secondary tracking-widest font-medium title-font mb-1 cursor-pointer'>CATEGORIES</h3>
      <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-orange cursor-pointer'>Check Out Our Categories Below</h1>
      <div className="w-16 h-1 rounded-full bg-secondary inline-flex"></div>
      <div className='flex items-center justify-around mt-12 w-full'>
        {categories.map(({ name, filter }) => (
          <button
            key={name}
            onClick={() => handleCategoryClick(filter)}
            className={`flex items-center text-gray-700 hover:text-orange cursor-pointer focus:outline-none ${
              selectedCategory === filter ? 'text-orange font-bold' : ''
            }`}
          >
          
            <span className="ml-2">{name}</span>
          </button>
        ))}
      </div>
      {/* Render items based on the selected category */}
      {/* Replace this with your actual data rendering */}
      <ul>
        {/* Example: Display items based on the selected category */}
        {selectedCategory && (
          <li>{`Items related to ${selectedCategory} category`}</li>
        )}
      </ul>
    </div>
  );
};

export default CategoryList;

