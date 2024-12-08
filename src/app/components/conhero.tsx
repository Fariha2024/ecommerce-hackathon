// src/components/AboutHeroSection.tsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing an arrow icon from react-icons

const ContacHeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[400px] bg-gray-200">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/two.png)' }}></div>

      {/* Overlay with text */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
        {/* Shop Text */}
        <h1 className="text-4xl font-bold text-white mb-4">Shop</h1>

        {/* Arrow Navigation */}
        <div className="flex items-center">
          {/* Left Navigation Text */}
          <p className="text-lg text-white mr-4">Home</p>

          {/* Arrow Icon */}
          <FaArrowRight className="text-white text-2xl mx-4" />

          {/* Right Navigation Text */}
          <p className="text-lg text-white ml-4">Contact</p>
        </div>
      </div>
    </section>
  );
};

export default ContacHeroSection;
