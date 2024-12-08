

import React from "react";
import Link from "next/link";
import { FiUser, FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi'; 
import Image from 'next/image';

function Header() {
  return (
    <header>
      {/* Navigation Bar */}
      <nav className="w-full h-[4.75rem] bg-zinc-50 flex justify-between items-center px-4 md:px-8 lg:px-16">
        {/* Left Side (Logo and Brand Name) */}
        <div className="flex items-center">
          <img 
            src="/Meubel House_Logos-05(1).png" 
            alt="logo" 
            className="w-14 h-14 object-contain"
          />
          <h1 className="text-zinc-950 text-2xl font-bold pl-4 md:text-3xl lg:text-4xl">
            Furniro
          </h1>
        </div>

        {/* Right Side (Navigation Links) */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link href="/" className="text-zinc-950 hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/shop" className="text-zinc-950 hover:text-gray-300">Shop</Link>
          </li>
          <li>
            <Link href="/about" className="text-zinc-950 hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-zinc-950 hover:text-gray-300">Contact</Link>
          </li>
        </ul>

        {/* Right Side (Icons) */}
        <div className="flex items-center space-x-4 md:space-x-7">
          {/* User Icon */}
          <FiUser className="text-zinc-950 w-6 h-6 hover:text-gray-700 cursor-pointer" />


          {/* Search Icon */}
          <FiSearch className="text-zinc-950 w-6 h-6 hover:text-gray-700 cursor-pointer" />

          {/* Wishlist Icon */}
          <FiHeart className="text-zinc-950 w-6 h-6 hover:text-gray-700 cursor-pointer" />

          {/* Cart Icon */}
          <FiShoppingCart className="text-zinc-950 w-6 h-6 hover:text-gray-700 cursor-pointer hidden sm:block" />
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden flex items-center">
          {/* You can add a hamburger menu here */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
