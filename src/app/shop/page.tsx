


import React from 'react';
import ProductGrid from '../components/shop'; // Adjust path if needed
import ShoptHeroSection from "../components/ShopHero";

const ShopPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
       <ShoptHeroSection />
      <ProductGrid />
      
     
    </div>
  );
};

export default ShopPage;
