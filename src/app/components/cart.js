// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from './cartSlice';

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    dispatch(removeItem(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button onClick={clearCartHandler}>Clear Cart</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title} - {item.quantity} x ${item.price} = ${item.totalPrice.toFixed(2)}
            <button onClick={() => removeItemHandler(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

