// src/contexts/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [lastAddedProduct, setLastAddedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("phulerCart");
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("phulerCart", JSON.stringify(cartItems));

    // Calculate subtotal
    const total = cartItems.reduce((sum, item) => {
      const price = item.salePrice || item.price;
      return sum + price * item.quantity;
    }, 0);

    // Calculate total item count
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    setSubtotal(total);
    setCartCount(count);
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product, quantity = 1, selectedOptions = {}) => {
    setCartItems((prevItems) => {
      // Generate a unique cart item ID
      const cartItemId = `${product.id}-${Date.now()}`;

      // Check if item is already in cart with same selected options
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          JSON.stringify(item.selectedOptions) ===
            JSON.stringify(selectedOptions)
      );

      let updatedItems;

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
      } else {
        // Add new item
        updatedItems = [
          ...prevItems,
          { ...product, quantity, selectedOptions, cartItemId },
        ];
      }

      // Set the last added product for toast notification
      setLastAddedProduct(product);

      // Open the cart drawer
      setIsCartOpen(true);

      return updatedItems;
    });
  };

  // Remove item from cart
  const removeFromCart = (cartItemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartItemId !== cartItemId)
    );
  };

  // Update item quantity
  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("phulerCart");
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Close cart
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const value = {
    cartItems,
    cartCount,
    subtotal,
    lastAddedProduct,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
