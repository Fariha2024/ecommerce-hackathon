
import Link from "next/link";
import {  FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import Image from 'next/image';
function Header() {
  

  return (
    <header>
      <nav className="w-full h-[4.75rem] bg-zinc-50 flex justify-between items-center px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Meubel House_Logos-05(1).png"
            alt="logo"
            className="w-14 h-14 object-contain"
          />
          <h1 className="text-zinc-950 text-2xl font-bold pl-4 md:text-3xl lg:text-4xl">
            Furniro
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-7">
          <div className="relative">
            <FiSearch className="cursor-pointer" />
            
              <div className="absolute right-0 bg-white shadow-md mt-2 w-40">
              
              </div>
          </div>
          <FiHeart className="cursor-pointer" />
          <div className="relative">
            <FiShoppingCart className="cursor-pointer" />
          
          </div>
        </div> 
      </nav>
    </header>
  );
}

export default Header;






/*import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';



export const Header = ()=>{
    return(
    

        <div className='flex w-[1170px] h-[38px] mb-4 ml-[135px]  mt-[70px] gap-[130px] '>
        <h2 className="h-[24px] w-[118px] text-[24px] font-inter font-[700] text-[#000000] flex items-center">
          <Image src="/images/logo copy.png" alt="Logo" width={200} height={100} />
        </h2>
           <ul className='w-[370px] h-[24px] flex gap-[48px] text-[#000000]'>
            <li className='font-poppins text-[16px] text-center font-normal w-[48px] h-[24px]'><Link href="/" className="text-black-500 hover:underline">Home</Link></li>
            <li className='font-poppins text-[16px] text-center font-normal w-[66px] h-[24px]'><Link href="/shop" className="text-black-500 hover:underline">Shop
            </Link></li>
            <li className='font-poppins text-[16px] text-center font-normal w-[48px] h-[24px]'><Link href="../about" className="text-black-500 hover:underline">blog</Link></li>
            <li className='font-poppins text-[16px] text-center font-normal w-[61px] h-[24px]'><Link href="/contact" className="text-black-500 hover:underline">contact</Link></li>
           </ul>
           <div className='flex gap-3'>
            <button className='flex border-2 border-[#F5F5F5]  pl-[20px] pt-[7px] pb-[7px] pr-[12px] bg-[#F5F5F5]  gap-[10px] rounded-[4px]'><input type="text" placeholder='What are you looking for?' className='w-[130pxx] h-[18px] text-[12px] font-poppins font-normal opacity-[50%] text-[#000000]'/><IoIosSearch className='w-[16px] h-[16px]'/></button>
            <FaRegUserCircle  className='h-[28px] w-[28px] '/>
            <br/>
            <br/>
            <FaRegHeart className='h-[28px] w-[28px]'/>
            <br/>
            <br/>
            <MdOutlineShoppingCart className='h-[28px] w-[28px]' />
            
           </div>
        </div>
        
    )
}*/





{/*import React from "react";
import Link from "next/link";
import { FiUser, FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi'; 
import Image from 'next/image';

function Header() {
  return (
    <header>
      {/* Navigation Bar */}
     {/*} <nav className="w-full h-[4.75rem] bg-zinc-50 flex justify-between items-center px-4 md:px-8 lg:px-16">
        {/* Left Side (Logo and Brand Name) */}
       {/*} <div className="flex items-center">
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
        {/*<ul className="hidden md:flex items-center space-x-8">
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
       {/*} <div className="flex items-center space-x-4 md:space-x-7">
          {/* User Icon */}
        {/*}  <FiUser className="text-zinc-950 w-6 h-6 hover:text-gray-700 cursor-pointer" />


          {/* Search Icon */}
         {/*} <FiSearch className="text-zinc-950 w-6 h-6 hover:text-gray-700 cursor-pointer" />

          {/* Wishlist Icon */}
         {/*<FiHeart className="text-zinc-950 w-6 h-6 hover:text-gray-700 cursor-pointer" />

          {/* Cart Icon */}
         {/*} <FiShoppingCart className="text-zinc-950 w-6 h-6 hover:text-gray-700 cursor-pointer hidden sm:block" />
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
       {/*} <div className="md:hidden flex items-center">
          {/* You can add a hamburger menu here */}
      {/*}  </div>
      </nav>
    </header>
  );
}

export default Header;*/}


/*  <div className='flex gap-3'>
          <button className='flex border-2 border-[#F5F5F5]  pl-[20px] pt-[7px] pb-[7px] pr-[12px] bg-[#F5F5F5]  gap-[10px] rounded-[4px]'><input type="text" placeholder='What are you looking for?' className='w-[130pxx] h-[18px] text-[12px] font-poppins font-normal opacity-[50%] text-[#000000]'/><FiSearch className='w-[16px] h-[16px]'/></button>
          <FiSearch className="cursor-pointer" />*/
