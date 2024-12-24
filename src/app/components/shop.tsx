import React from 'react';
import Image from 'next/image';

interface Product {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

const products: Product[] = [
  {
    imageUrl: '/image1.png', // Path to image in public folder
    title: 'Stylish Sofa',
    description: 'Minimalist Flower Pot',
    price: 'Rs 500000',
  },
  {
    imageUrl: '/image2.png', // Path to image in public folder
    title: 'Luxury Chair',
    description: 'Comfortable and Elegant',
    price: 'Rs 150000',
  },
  {
    imageUrl: '/image3.png', // Path to image in public folder
    title: 'Modern Lamp',
    description: 'Sleek and Bright',
    price: 'Rs 25000',
  },
  {
    imageUrl: '/image4.png', // Path to image in public folder
    title: 'Chic Coffee Table',
    description: 'Elegant Design',
    price: 'Rs 35000',
  },
  // Add more products here as needed
];

// Repeat the products to fill a 6x6 grid
const repeatedProducts = Array.from({ length: 16 }, (_, i) => products[i % products.length]);

const ProductGrid: React.FC = () => {
  return (
    <div className="  sm:grid-cols-2 md:grid-cols-4 grid grid-cols-4 gap-6 p-6">
      {repeatedProducts.map((product, index) => (
        <div key={index} className="flex flex-col items-start bg-gray-50 py-8 px-4 border-r-2 border-gray-400">
          {/* Image */}
          <div className="relative w-72 h-72 mb-4">
            <Image
              src={product.imageUrl}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Title and Description */}
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h2>
            <p className="text-gray-600 text-base mb-2">{product.description}</p>
            <p className="text-xl font-bold text-gray-900">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;




































{/*}
import React from 'react';
import Image from 'next/image';

interface Product {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

const product: Product = {
  imageUrl: '/image4.png (2).png', // Correct image path (ensure the image is in the public folder)
  title: 'Stylish Sofa',
  description: 'Minimalist Flower Pot',
  price: 'Rs 500000',
};

const SingleImageWithDescription: React.FC = () => {
  return (
   
    <div className="flex flex-col items-start bg-gray-50 py-8 px-14">
      {/* Image 
      <div className="relative w-72 h-72 mb-4">
        <Image
          src={product.imageUrl}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Title and Description 
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h2>
        <p className="text-gray-600 text-base mb-2">{product.description}</p>
        <p className="text-xl font-bold text-gray-900">{product.price}</p>
      </div>

    </div>
  );
};

export default SingleImageWithDescription;*/}
