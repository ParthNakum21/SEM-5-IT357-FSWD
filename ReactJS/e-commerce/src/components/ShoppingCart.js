// src/components/ShoppingCart.js
import React, { useState, useEffect } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load product data from JSON file (assuming you have a utility function for this)
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error loading product data:', error));
  }, []);

  // Functions to add/remove items from the cart
  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      setCart([...cart, productToAdd]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) =>
        total + item.price * (1 - item.discount / 100),
      0
    );
  };

  return (
    <div className="shopping-cart">
      {/* Render cart items, quantity controls, and total price */}
      {/* Implement your cart rendering logic here */}
    </div>
  );
};

export default ShoppingCart;
