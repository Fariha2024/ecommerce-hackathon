import React from 'react';
import Image from 'next/image';

const cardData = [
  {
    imageUrl: '/image1.png',
    title: 'Sylthrine',
    description: 'Stylish Cafe Chair',
    price: 'Rs 700000',
  },
  {
    imageUrl: '/image2.png',
    title: 'Levioso',
    description: 'Stylish Cafe Chair',
    price: 'Rs 200000',
  },
  {
    imageUrl: '/image3.png',
    title: 'Lalito',
    description: 'Luxury Big Sofa',
    price: 'Rs 450000',
  },
  {
    imageUrl: '/image4.png',
    title: 'Respira',
    description: 'Outdoor Bar Table and Stool',
    price: 'Rs 250000',
  },
  {
    imageUrl: '/image5.png',
    title: 'Grifo',
    description: 'Night Lamp',
    price: 'Rs 500000',
  },
  {
    imageUrl: '/image6.png',
    title: 'Muggo',
    description: 'Small',
    price: 'Rs 500000',
  },
  {
    imageUrl: '/image7.png',
    title: 'Pingky',
    description: 'Cute Bed Set',
    price: 'Rs 500000',
  },
  {
    imageUrl: '/image8.png',
    title: 'Potty',
    description: 'Minimalist Flower Pot',
    price: 'Rs 500000',
  },
];

const CustomProductCards = () => {
  return (
    <div className="bg-zinc-50 py-18 mb-10">
      {/* Main Container */}
      <div className="container mx-auto px-8">
        {/* "Our Products" Title */}
        <h2 className="grid place-items-center text-3xl font-bold pl-15 mb-6 text-center [-110px]">Our Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-16">
        {cardData.map((item, index) => (
          <div key={index} className="bg-white">
            {/* Product Image */}
            <div className="object-cover object-center w-full h-[301] mb-20">
              <Image
                src={item.imageUrl}
                alt={item.title}
                className="object-cover object-center w-full h-[443px]  "
                width={285} // Default width
                height={301} // Default height
              />

              {/* Product Information */}
              <div className="text-left">
                <h2 className="text-1xl font-semibold text-zinc-950 mb-2 mt-2">{item.title}</h2>
                <p className="text-gray-600 text-base mb-2">{item.description}</p>
                <p className="text-1xl font-semibold text-zinc-950">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomProductCards;
