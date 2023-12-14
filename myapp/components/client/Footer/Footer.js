'use client'
import React from 'react';
import { FiYoutube, FiSettings, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-200 w-full py-8">
      <div className="max-w-screen-xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              FAQ
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              Configuration
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              Github
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
            <FiYoutube size={20} color="#FF0000" />
          </a>
          <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
            <FiSettings size={20} color="#00FF00" />
          </a>
          <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
            <FiGithub size={20} color="#0000FF" />
          </a>
          <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
            <FiLinkedin size={20} color="#FF00FF" />
          </a>
          <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
            <FiTwitter size={20} color="#FFA500" />
          </a>
          <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
            <FiInstagram size={20} color="#800080" />
          </a>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
         By TheJayaDad
        </div>
      </div>
    </footer>
  );
};

export default Footer;
