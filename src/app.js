import React from 'react';
import Product from './Product';
import Cart from './Cart';

const App = () => {
  const products = [
    { id: '1', title: 'Cloud Haven Chair', price: 230 },
    { id: '2', title: 'Bright Space', price: 180 },
    { id: '3', title: 'The Dandy Chair', price: 150 },
  ];

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
      <Cart />
    </div>
  );
};

export default App;
