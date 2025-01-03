import ContacHeroSection from "../components/conhero";

import React from "react";

const ContactPage = () => {
  return (
    
    <div>
      {/* Hero Section */}
      <ContacHeroSection title="Contact" />
      
      
      {/* Get in Touch Section */}
      <div className="flex flex-col gap-6 p-6">
        <h1 className="font-bold text-4xl text-center mt-40">Get In Touch With Us</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
          molestias consectetur adipisicing elit.!
        </p>
      </div>

      {/* Flex Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <form className="flex-1 bg-white shadow-lg rounded-lg p-6 space-y-6">
          <div className="space-y-4">
            <label htmlFor="name" className="block font-medium">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            <label htmlFor="email" className="block font-medium">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            <label htmlFor="phone" className="block font-medium">Phone Number</label>
            <input
              id="phone"
              type="number"
              placeholder="Phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            <label htmlFor="subject" className="block font-medium">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Info Section */}
        <div className="flex-1 bg-gray-50 shadow-lg rounded-lg p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-700">
              123 Main Street, <br />
              Springfield, USA
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-700">
              +1 (123) 456-7890 <br />
              Available 9:00 AM - 6:00 PM
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Working Hours</h3>
            <p className="text-gray-700">
              Monday - Friday: 9:00 AM - 6:00 PM <br />
              Saturday: 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div
        className="relative w-full h-48 sm:h-64 bg-[url('/images/temp1.jpg')] bg-cover bg-center rounded-lg "
      ></div>
    </div>
  );
};

export default ContactPage;




/*import ContacHeroSection from "../components/conhero";

import React, { useState } from 'react';

const ContactPage = () => {
  return (
    
    
    <div>
    <ContacHeroSection />
   
  
    <div className="flex flex-col gap-6 p-6 mt-[-60]">
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
  
   <div/>
    
  
  );
};

export default ContactPage;*/



/*import React from 'react';
import ContacHeroSection from "../components/conhero";

const Contact: React.FC = () => {
  return (
<div>
<ContacHeroSection />
</div>

  );
};

export default Contact;*/
