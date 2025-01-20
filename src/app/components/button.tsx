
"use client";  // Keep this at the top to mark the component as a Client Component
import { useCart } from '../../utils/useCart'; // Custom hook to access cart actions
import { products } from '../../componentss/productCard'; // Cart item type for the button

import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const baseStyles =
    'inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg';
  const primaryStyles = 'text-white bg-indigo-500 hover:bg-indigo-600';

  const buttonStyles = `${baseStyles} ${primaryStyles}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
