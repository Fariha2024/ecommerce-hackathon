import React from 'react';
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section className="relative text-gray-600 body-font mb-96
     ">
     
      <div className="absolute inset-0 w-full h-screen bg-white transform scale-100%">
        <Image
          alt="hero"
          src="/one.png" 
          layout="fill"
          objectFit="cover"
          className=" object-cover object-center transform scale-90"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-16 flex flex-col items-center justify-center">
        {/* Small Image */}
        <div className="absolute right-6 sm:right-8 top-2/3 transform -translate-y-1/2 mt-80 pr-14">
          <Image
            alt="small image"
            src="/Rectangle 77(1).png" 
            width={443} 
            height={243}
                className="w-full max-w-[443px] h-auto object-cover rounded-md shadow-lg " 
          />
  <div className="relative mx-auto flex px-5 py-24 items-center justify-center flex-col">
 

  {/* Text and Button on the Image */}
  <div className="absolute top-[-120%] left-0 w-full h-full flex flex-col justify-center items-center text-white ">
  <span className="text-1px sm:text-4px md:text-8px lg:text-10px text-zinc-950 pr-80 pl-6">
  New Arrival
</span>

    {/* Heading */}
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold pr-20 text-center text-[#B88E2F]">
     Discover Our 
    </h2>
    <h2 className="text-[1.5px]  text-2xl sm:text-4xl md:text-5xl font-bold pr-11 text-center text-[#B88E2F]" >New Collection</h2>
    {/* Paragraph */}
    <p className="text-xs sm:text-sm md:text-base text-center  max-w-[90%] mx-auto text-zinc-950 mt-4">
    Furniture Gala: A unique blend of modern and vintage designs, crafted to elevate your home.
    </p>
    
    {/* Button */}<div className="pr-48">
    <button className=" px-14 py-4  text-white font-bold mt-8 flex justify-start hover:bg-#a37a1a  bg-[#B88E2F]">
      BUY NOW
    </button>
    </div>
  </div>
</div>

          
        </div>

       
        
      </div>
    </section>
  );
};

export default HeroSection;
