import React, { useEffect } from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    if (!cart || cart.length === 0) {
        return (
          <div className="cart-container">
            <h2>Shopping Cart</h2>
            <p>Your cart is empty.</p>
          </div>
        );
      }

      //rendering items in the cart
  const cartItems = cart.map((item) => (
    <div key={item.id} className="cart-item">
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <img src={item.image} width="100" height="200" alt={item.title} />
      </div>
      <button onClick={() => handleRemoveFromCart(item.id)} className="remove-button">
        Remove
      </button>
    </div>
  ));

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">{cartItems}</div>
    </div>
  );
};

export default Cart;
