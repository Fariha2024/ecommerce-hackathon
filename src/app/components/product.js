import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Product = ({ id, title, price, imageUrl, description }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, imageUrl }));
  };

  return (
    <div className="product-card border p-4 rounded shadow-md">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-lg font-bold mt-2">${price.toFixed(2)}</p>
      <button 
        onClick={handleAddToCart} 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
