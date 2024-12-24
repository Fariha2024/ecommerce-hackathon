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





/*import React from 'react';
import { FaAngleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import Card from './Card';
const Hero = () => {
  return (
<div className="relative w-full h-[50rem] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero copy.png')" }}>
  <div className="absolute top-2/3 left-2/4 transform -translate-y-1/2 text-left bg-[#FFF3E3] p-8 rounded-lg "style={{ width: "600px", height: "400px" }}>
    <h6 className="text-lg font-bold">New Arrival</h6>
    <h3 className="text-4xl my-4 font-bold text-[#B88E2F]">
      Discover Our <br /> New Collection
    </h3>
    <p className="text-base mb-6 ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
    </p>
    <button className="bg-[#B88E2F] text-white py-3 px-6 text-lg rounded-md z-10">
      BUY NOW
    </button>
  </div>
</div>



  );
};


export const Hero1 = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
     <h1 className='font-bold text-4xl ml-96'>Browse The Range</h1>
     <p className='ml-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, molestias!</p>
    

<div className=" ml-10 w-full flex gap-3">
<div><Image
  src="/images/pic1.jpg"
  alt="hero"
  width={300}
  height={200}
  className="w-full  h-auto rounded-lg"
/>
<p className='text-center text-bold text-2xl'>living</p>
</div>
<div><Image
  src="/images/pic2.jpg"
  alt="hero"
  width={300}
  height={200}
  className="w-full  h-auto rounded-lg"
/>
 <p className='text-center text-bold text-2xl'>bedroom</p>
</div>
<div><Image
  src="/images/pic3.jpg"
  alt="hero"
  width={300}
  height={200}
  className="w-full  h-auto rounded-lg"
/>
<p className='text-center text-bold text-2xl'>bedroom</p>
</div>
</div>

</div>
       

  );
} 

<div className='w-full'> 
  <h1 className='font-bold text-4xl p-10 ml-96'>Our Products</h1>
  </div>

export const CardDetails = () => {
  
  const data = [
   
    {
      id: 1,
      img: "/images/pro3.jpg",
      title: "Syltherine",
       rate: "stylish Cafe Chair",
       price: "Rp: 2500000",
      

      
    },
    {
      id: 2,
      img: "/images/pro7.jpeg",
      title: "Leviosa",
      rate: "stylish Cafe Chair",
      price: "250,000",
      
    },
    {
      id: 3,
      img: "/images/pro6.jpg",
      title: "Lolito",
      rate: "Luxury big sofa",
      price: "7000,000",
     
    },
    {
      id: 4,
      img: "/images/pro8.jpg",
      title: "Respira",
      rate: "Outdoor bar table sofa",
      price: "500,000",
     
    },

    //new4
    {
      id: 5,
      img: "/images/pro5.jpg",
      title: "Grifo",
       rate: "Night Lamp",
       price: "Rp:5000,000",
      

      
    },
    {
      id: 6,
      img: "/images/pro6.jpg",
      title: "Muggo",
      
      rate: "small mug",
      price: "Rp 150,000",
      
    },
    {
      id: 7,
      img: "/images/pro8.jpg",
      title: "Pingky",
      rate: "cute bed set",
      price: "RP:7000000",
     
    },
    {
      id: 8,
      img: "/images/pro2.jpg",
      title: "Potty",
      rate: "minimalist flower pot",
      price: "RP 500,000",
     
    },
   
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {data.map((item) => (
       
          <Card
          key={item.id}
          img={item.img}
          title={item.title}
         rate={item.rate}
          price={item.price}
        />
           
      ))}
    </div>
  );
};

export const Hero3 = () => {
  return (
    <div className=" justify-center ml-4 items-center ">
    <button className="w-40 p-2 ml-80 bg-white-800 font-bold border border-amber-600 text-2xl text-amber-600 rounded-lg">
      Show more
    </button>
  
  

    <div className="flex flex-col md:flex-row p-6 gap-6">
      
      <div className="flex flex-col md:flex-row items-center md:items-start">
      {/* <div className="w-full md:w-[217px] h-auto gap-4 ml-0 md:ml-[150px]"> 
      <div className='mt-60 ml-28'>
        <h1 className='text-4xl font-bold '>50+ Beautiful Room</h1>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, autem?</p>
        <button className=' w-40 bg-amber-600 font-bold text-white'>Explore more</button>
        </div>

       
      </div>

      <div className="flex justify-center md:justify-end">
        <Image
          src="/images/tem1.JPG"
          alt="hero"
          width={400}
          height={200}
          className="md:w-[696px] h-auto rounded-lg"
        />
      </div>
      <div className="flex justify-center md:justify-end">
        <Image
          src="/images/tem2.JPG"
          alt="hero"
          width={400}
          height={200}
          className=" md:w-[696px] h-auto rounded-lg"
        />
      </div>
    </div>
    </div>
  );
};
export default Hero3;*/