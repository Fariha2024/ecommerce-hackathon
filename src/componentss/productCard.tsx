// components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  description: string;
  addToCart: (item: any) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  imageUrl,
  price,
  description,
  addToCart,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">${price}</p>
        <button
          onClick={() => addToCart({ id, title, imageUrl, price, description })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
