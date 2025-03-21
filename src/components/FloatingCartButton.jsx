// src/components/FloatingCartButton.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const FloatingCartButton = ({ onClick }) => {
  const { cartCount } = useCart();

  if (cartCount === 0) return null;

  return (
    <motion.button
      onClick={onClick}
      className="fixed z-40 flex flex-col items-center justify-center w-16 h-16 text-white rounded-full shadow-lg bottom-6 right-6 bg-emerald-700 hover:bg-emerald-800"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <ShoppingBag size={24} />
      <div className="absolute flex items-center justify-center w-6 h-6 text-xs font-medium bg-white rounded-full -top-2 -right-2 text-emerald-700">
        {cartCount}
      </div>
    </motion.button>
  );
};

export default FloatingCartButton;
