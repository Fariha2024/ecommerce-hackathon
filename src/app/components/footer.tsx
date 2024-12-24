

/* eslint-disable @typescript-eslint/no-unused-vars */


import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import Image from 'next/image';
const Footer = () => {
  return (
    <div className='w-[1270px] h-[440px] flex justify-evenly pt-[10%] bg-white'>
        <div>
        <h2 className='h-[24px] w-[118px] text-[24px] mb-4 font-inter font-bold text-[#000000] 3%'>Funiro</h2>
        <br/>
        {/* <h2 className='w-[101px] h-[28px] font-poppins mb-3 font-[500] text-[20px] text-[#FAFAFA]'>Subscribe</h2> */}
        <p className='font-poppins text-[16px] font-normal mb-3 w-[206px] text-[#000000]  h-[24px]'>400 University drive suits 200 carol Gables</p>
        {/* <button className='flex text-[#FAFAFA] w-[217px] gap-[10px] pl-[16px] pt-[12px] pb-[12px] border-[1.5px] rounded-[4px] h-[48px]'><input type="email" placeholder='Enter your email' className='w-[150px] bg-[#000000] text-[#FAFAFA]'/><LuSendHorizontal className='w-[20px] h-[18px] mt-1 text-[#FAFAFA]'/></button> */}
        <br/>
        <p className='font-poppins text-[16px] font-normal mb-3 w-[206px] text-[#000000] h-[24px]'>FL 33134 USA</p>
        <br/>
        <br/>
        <br/>
        <p>2023 Funiro.All right reserved</p>
        </div>
        <div>
            <h2 className='w-[81px] h-[28px] mb-4 font-poppins text-[20px] font-bold text-[#000000]'>Link</h2>
            <p className='w-[175px] h-[48px] font-poppins mb-3 text-[16px] font-bold text-[#000000]'>Home</p>
            <p className='w-[175px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'>About</p>
            <p className='w-[175px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'>Shop</p>
            <p className='w-[175px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'>Contact</p>
        </div>
        <div>
        <h2 className='w-[90px] h-[28px] mb-4 font-poppins text-[15px] font-bold text-[#000000]'>Help</h2>
        <p className='w-[94px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'>Payment Option</p>
        
        <p className='w-[35px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'>Privacy Policies</p>
       
        
        </div>
        <div>
        <h2 className='w-[110px] h-[28px] mb-4 font-poppins text-[20px] font-bold text-[#000000]'>News Letter</h2>
        <p className='w-[109px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'><a>Enter your e-mail address</a></p>
        <p className='w-[105px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'><a>Subscribe</a></p>

        </div>
        
        </div>
  )
}
export default Footer;
        
        /* <h2 className='w-[148px] h-[28px] mb-4 font-poppins text-[20px] font-[500] text-[#FAFAFA]'>Download App</h2>
        <p className='w-[194px] opacity-[70%] h-[48px] font-poppins text-[12px] font-normal text-[#FAFAFA]'>Save $3 with App New User Only</p> */
        /* <div className='flex gap-3'>
        <Image src="/images/Qr.png" alt="Qr code" width={100} height={100} className='w-[80px] h-[80px]'/>
        <div>
        <Image src="/images/goo.png" alt="Qr code" width={100} height={100} className='w-[108px] h-[38px] mt-1 rounded-[4px]'/>
        <Image src="/images/app.png" alt="Qr code" width={100} height={100} className='w-[108px] h-[38px] mt-1 rounded-[4px]'/>  
        </div>
        </div> */
        /* <div className='flex gap-[24px] w-[168px] h-[24px] text-[#FAFAFA] mt
        -3'>
        <FiFacebook className='w-[24px] h-[24px]' />
        <CiTwitter  className='w-[24px] h-[24px]'/>
        <FaInstagram className='w-[24px] h-[24px]' />
        <FiLinkedin  className='w-[24px] h-[24px]'/>
        </div>
        </div> */
    /* </div>
  )
}

export default Footer */







/*import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center mb-6 px-16">
      {/* Footer Image *
      <Image
        src="/footer.png"
        alt="Footer Logo"
        width={1240.01}
        height={419}
        className="object-contain"
      />
    </div>
  );
};

export default Footer;*/





/*import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import React, { useState } from 'react';


import Image from "next/image";

const ContactPage = () => {
  return (
    <>
    
    <div>

   <Header/>
  <div className="relative w-full sm:w-80 h-48 sm:h-64 bg-[url('/images/temp2.jpg')] bg-cover bg-center rounded-lg" style={{width:1500 ,height:400}}
 >
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white" >
   <h3 className="text-lg sm:text-xl font-bold"></h3>
  <p className="text-sm sm:text-base mt-2"></p>
 </div>
  </div> 

   </div>
    <div className="flex flex-col gap-6 p-6">
          <h1 className='font-bold text-4xl ml-96'>Get In Touch With Us</h1>
          <p className='ml-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, molestias consectetur adipisicing elit.!</p>
       </div>
      {/* Flex Container *
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Contact Form *
        <form className="flex-1 bg-white shadow-lg rounded-lg p-6 space-y-6">
          <div className="space-y-4">
            <h1>Your name</h1>
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
              <h1>E-mail</h1>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
              <h1>Phone number</h1>
            <input
              type="number"
              placeholder="Phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
              <h1>Subject</h1>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
          <h1>Message</h1>
            <textarea
              placeholder="Your Message"
             
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              submit
            </button>
          </div>
        </form>

        {/* Info Section *
        <div className="flex-1 bg-gray-50 shadow-lg rounded-lg p-6 space-y-6">
          {/* Address *
          <div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-700">
              123 Main Street, <br />
              Springfield, USA
            </p>
          </div>

          {/* Phone *
          <div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-700">
              +1 (123) 456-7890 <br />
              Available 9:00 AM - 6:00 PM
            </p>
          </div>

          {/* Working Hours *
          <div>
            <h3 className="text-xl font-bold mb-2">Working Hours</h3>
            <p className="text-gray-700">
              Monday - Friday: 9:00 AM - 6:00 PM <br />
              Saturday: 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>
      </div>
      <div
   className="relative w-full sm:w-80 h-48 sm:h-64 bg-[url('/images/temp1.jpg')] bg-cover bg-center rounded-lg" style={{width:1300 ,height:200}}
 >
   </div>
  
    <Footer/>
    
    </>
  );
};

export default ContactPage;*/