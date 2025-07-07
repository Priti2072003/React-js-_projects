import React from 'react';
import './styles/CartItem.css';

function CartItem({ item, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>₹{item.price.toFixed(2)} x {item.quantity}</p>
        <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
      </div>
      <button className="remove-item-button" onClick={() => onRemoveItem(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
