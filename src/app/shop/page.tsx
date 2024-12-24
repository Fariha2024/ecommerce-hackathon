


import React from 'react';
import ProductGrid from '../components/shop'; // Adjust path if needed

import ContacHeroSection from "../components/conhero";


const ShopPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
       {/* Use the ContacHeroSection with "Shop" title */}
       <ContacHeroSection title="Shop" />
       
      <ProductGrid />
      
     
    </div>
  );
};

export default ShopPage;



/*
import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import Hero, { Hero1, CardDetails } from "@/components/hero";
import { Hero3 } from "@/components/hero";


import Image from "next/image";

export default function Home() {
  return (
   <div>


    <Header/>

     {/* <div
  className="relative w-full sm:w-80 h-48 sm:h-64 bg-[url('/images/shop.jpg')] bg-cover bg-center rounded-lg" style={{width:1400 ,height:300}}
> *
  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white" >
    <h3 className="text-lg sm:text-xl font-bold"></h3>
    <p className="text-sm sm:text-base mt-2"></p>
  </div>
  </div> *
  <div className="shopsect">
  <Image 
        src='/images/shop.jpg' 
        alt="Picture of the author" 
        width={1400} 
        height={300} 
      />
            <h3 className="font-bold text-[1.5rem]"></h3>
            <h5 className="shopPara"><span className=" font-bold"></span> </h5>
        </div>
        
   
    <CardDetails/>
    <div
  className="relative w-full sm:w-80 h-48 sm:h-64 bg-[url('/images/temp1.jpg')] bg-cover bg-center rounded-lg" style={{width:1300 ,height:200}}
>
  </div>
   
    
 
    
    <br />
    <Footer/>
   </div>
  );
}*/
