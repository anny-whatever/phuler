import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

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

    setSubtotal(total);
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product, quantity = 1, selectedOptions = {}) => {
    setCartItems((prevItems) => {
      // Check if item is already in cart
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          JSON.stringify(item.selectedOptions) ===
            JSON.stringify(selectedOptions)
      );

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, { ...product, quantity, selectedOptions }];
      }
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
  };

  const value = {
    cartItems,
    subtotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
