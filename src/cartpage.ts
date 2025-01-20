// pages/cart.tsx
import React from 'react';
import { useCart } from './utils/useCart'; // Import the custom hook
import {products} from './componentss/productCard'; // Import the product card component
import { products } from '../utils/products'; // Import the product data

const CartPage: React.FC = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
  };

  const handleIncreaseQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecreaseQuantity = (id: string, quantity: number) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleRemoveItem(item.id)} className="text-red-500">
                  Remove
                </button>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>-</button>
                <button onClick={() => handleIncreaseQuantity(item.id, item.quantity)}>+</button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="font-bold text-xl">Total: ${getTotalPrice().toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
