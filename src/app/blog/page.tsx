

import React from "react";
import ContacHeroSection from "../components/conhero";
import Image from 'next/image';

const Blog = () => {
  return (
    <div>
    <ContacHeroSection title="Blog" />
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      {/* Blog Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div>
        <Image
            src="https://via.placeholder.com/800x400"
            alt="Blog Image"
            className="w-full h-64 object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-3">Blog Title Goes Here</h1>

          {/* Paragraph */}
          <p className="text-gray-700 mb-6">
            This is the content of the blog post. It includes a description or
            story about the topic. You can add more text here as needed to
            provide detailed information.
          </p>

          {/* Info Row */}
          <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
            <div className="flex items-center space-x-2">
              {/* Admin Icon */}
              <div className="flex items-center">
                <span className="material-icons">person</span>
                <span>Admin</span>
              </div>
              {/* Date */}
              <div className="flex items-center">
                <span className="material-icons">event</span>
                <span>December 8, 2024</span>
              </div>
            </div>
          </div>
          </div>
          {/* Button */}
          <div className="text-right">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Blog;









/*import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>Learn more about our company and values.</p>
    </div>
  );
};

export default About;*/