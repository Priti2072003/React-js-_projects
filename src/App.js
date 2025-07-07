import React, { useState, useEffect } from 'react';
import MenuItem from './components/MenuItem';
import CartItem from './components/CartItem';
import Header from './components/Header';
import './components/styles/App.css';

function App() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Margherita Pizza', description: 'Classic cheese pizza', price: 99, image: 'pizaa.jpg' },
    { id: 2, name: 'Cheeseburger', description: 'Juicy beef patty with cheese', price: 90.99, image: 'burger.jpg' },
    { id: 3, name: 'Caesar Salad', description: 'Fresh salad with Caesar dressing', price: 78.50, image: 'salad2.jpg' },
    { id: 4, name: 'French Fries', description: 'Crispy golden fries', price: 70.50, image: 'fries233.jpg' },
  ]);

  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to increase quantity of an item in the cart
  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  // Function to decrease quantity of an item in the cart
  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: Math.max(1, cartItem.quantity - 1) } // Don't go below 1
          : cartItem
      ).filter(cartItem => cartItem.quantity > 0) // Remove item if quantity becomes 0 (optional, could also handle in a separate remove function)
    );
  };

  // Function to remove a specific item from the cart
  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  // Function to remove all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="menu-section">
          <h2>Our Menu</h2>
          <div className="menu-items">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} onAddToCart={addToCart} />
            ))}
          </div>
        </div>

        <div className="cart-section">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncreaseQuantity={increaseQuantity}
                    onDecreaseQuantity={decreaseQuantity}
                    onRemoveItem={removeItem}
                  />
                ))}
              </div>
              <div className="cart-summary">
                <h3>Total: ₹{calculateTotal()}</h3>
                <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
                <button className="checkout-button">Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
