


import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <Product 
          key={product.id} 
          id={product.id} 
          title={product.title} 
          price={product.price} 
          imageUrl={product.imageUrl} 
          description={product.description} 
        />
      ))}
    </div>
  );
};

export default ProductList;












