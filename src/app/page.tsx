




import React from 'react';

import Products from "./components/gala1";
import CustomProductCards from "./components/gala2";
import HeroSection from './components/HeroSection';


const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Component */}
      <header className="bg-white shadow sticky top-0 z-50">
       
      </header>
    <HeroSection />
    <Products />
    <CustomProductCards />
   
    </div>
  );
};

export default Page;




















































