// components/ProductData.tsx
import React from 'react';
import Image from 'next/image'; // Import Image from next/image

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  description: string;
}

const ProductsData: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      title: 'Rustic Vase Set',
      imageUrl: 'https://example.com/vase.png',
      price: 210,
      description: 'Beautiful rustic vase set for your home.',
    },
    {
      id: '2',
      title: 'Timber Craft',
      imageUrl: 'https://example.com/timber.jpg',
      price: 320,
      description: 'Handcrafted timber art pieces.',
    },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={500} // Set an explicit width for the image
            height={400} // Set an explicit height for the image
            className="w-full h-64 object-cover mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="font-bold text-lg">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsData;
