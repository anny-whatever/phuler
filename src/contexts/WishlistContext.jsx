// File: contexts/WishlistContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const storedWishlist = localStorage.getItem("phulerWishlist");
    if (storedWishlist) {
      try {
        setWishlistItems(JSON.parse(storedWishlist));
      } catch (error) {
        console.error("Error parsing wishlist from localStorage:", error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("phulerWishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Add item to wishlist
  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      // Check if item is already in wishlist
      if (prevItems.some((item) => item.id === product.id)) {
        return prevItems;
      }
      return [...prevItems, product];
    });
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Check if an item is in wishlist
  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  // Clear wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}
