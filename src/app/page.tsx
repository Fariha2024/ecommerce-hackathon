"use client";
//origional code
{/*
import React from 'react';
import Products from "./components/gala1";
import CustomProductCards from "./components/gala2";
import HeroSection from './components/HeroSection';
import Hero3 from './components/products3';
import Card4  from "./components/product4";
import button from "./components/button"


const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 ">
      {/* Header Component *
      <header className="bg-white shadow sticky top-0 z-50    sm:text">
       
      </header>
    <HeroSection />
    <Products />
    <CustomProductCards />
    <Hero3 />
      {/* Render Card4 *
      <Card4 /> 
      <button />
    </div>
  );
};

export default Page;*/}



// page.tsx
  // Mark the file as a Client Component
{/*}//////////////////////////////////////added the cart by a button only
import React, { useState } from 'react';
import Button from './components/button'; // Adjust the path
import Cart from '../componentss/cart'; // The main cart component

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 49.99 },
  // Add more products as needed
];

const Page = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-lg bg-white"
          >
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            {/* Add "Add to Cart" button for each product *
            <Button
              label="Add to Cart"
              onClick={() => handleAddToCart(product)}
            />
          </div>
        ))}
      </div>
      
      {/* Optionally, show the cart *
      <div className="mt-4">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;*/}

// pages/index.tsx
import React from 'react';
import { useCart } from '../utils/useCart'; // Import the custom hook
import ProductsCard from '../componentss/productdata'; // Import the product card component
import { ProductCard} from '../componentss/productCard'; // Import the products data

const Home: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shop Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.imageUrl}
            price={product.price}
            description={product.description}
            addToCart={addToCart}
          />
        ))}
      </div>
     
    </div>
  );
};

export default Home;













// import Footer from "@/components/footer";
// import { Header } from "@/components/Header";
// import Hero, { Hero1, CardDetails } from "@/components/hero";
// import { Hero3 } from "@/components/hero";


// import Image from "next/image";

// export default function Home() {
//   return (
//    <div>
  
//     <Header/>
//     <div
//   className="relative w-full sm:w-80 h-48 sm:h-64 bg-[url('/images/hero2.png')] bg-cover bg-center rounded-lg"
// >
//   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//     <h3 className="text-lg sm:text-xl font-bold">Welcome</h3>
//     <p className="text-sm sm:text-base mt-2">Discover the Collection</p>
//   </div>
//   </div>
//     <Hero/>
   
//     <Hero1/>
//     <div className='font-bold text-4xl p-10 ml-96 '> <h1>Our Products</h1></div>
//     <CardDetails/>
//     <Hero3/>
    
 
    
//     <br />
//     <Footer/>
//    </div>
//   );
// }
/*import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import Hero, { Hero1, CardDetails } from "@/components/hero";
import { Hero3 } from "@/components/hero";


import Image from "next/image";

export default function Home() {
  return (
   <div>


   

     <div
  className="relative w-full sm:w-80 h-48 sm:h-64 bg-[url('/images/shop.jpg')] bg-cover bg-center rounded-lg" style={{width:1500 ,height:400}}
>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white" >
    <h3 className="text-lg sm:text-xl font-bold"></h3>
    <p className="text-sm sm:text-base mt-2"></p>
  </div>
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
}
*/


/*import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import Hero, { Hero1, CardDetails } from "@/components/hero";
import { Hero3 } from "@/components/hero";


import Image from "next/image";

export default function Home() {
  return (
   <div>
  
    <Header/>
    <Hero/>
   
    <Hero1/>
    <div className='font-bold text-4xl p-10 ml-96 '> <h1>Our Products</h1></div>
    <CardDetails/>
    <Hero3/>
    
 
    
    <br />
    <Footer/>
   </div>
  );
}*/



/*import Footer from "@/components/footer";
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































