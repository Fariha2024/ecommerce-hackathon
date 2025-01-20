import { useState, useEffect } from 'react';
import { FaShoppingBag } from 'react-icons/fa';


import { CartItem, addToCart, removeFromCart, updateItemQuantity, getTotalPrice } from '../utils/cartutils'; // Importing utility functions
import { useCart } from '../utils/useCart'; // Custom hook for cart state
import {products} from './productCard'; // A component for rendering individual cart items
import CartIcon  from './shoppingbag'; // Icon for displaying cart count





const Cart = () => {
  const [cart, setCart] = useState<any[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const saveCartToLocalStorage = (cart: any[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  const addToCart = (item: any) => {
    const existingItemIndex = cart.findIndex((i) => i.id === item.id);
    let updatedCart;

    if (existingItemIndex >= 0) {
      updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const removeFromCart = (itemId: string) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Shopping Cart</h1>
        <div className="relative">
          <FaShoppingBag className="text-2xl text-gray-800" />
          {getCartItemCount() > 0 && (
            <span className="absolute top-0 right-0 text-xs text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
              {getCartItemCount()}
            </span>
          )}
        </div>
      </header>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty. Start shopping!</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border p-4 rounded-lg shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <label htmlFor={`quantity-${item.id}`} className="mr-2 text-sm">Quantity:</label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, +e.target.value)}
                      min="1"
                      className="w-16 text-center border p-1 rounded-md"
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 bg-red-100 px-4 py-2 rounded-lg text-sm"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-green-600 hover:text-green-800 bg-green-100 px-4 py-2 rounded-lg text-sm"
                  >
                    + Increase
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-yellow-600 hover:text-yellow-800 bg-yellow-100 px-4 py-2 rounded-lg text-sm"
                  >
                    - Decrease
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: ${getTotalPrice().toFixed(2)}</h3>
            <button
              onClick={() => alert('Proceeding to checkout!')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
