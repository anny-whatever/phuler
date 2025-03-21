// src/components/Toast.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, X, ShoppingBag } from "lucide-react";

const Toast = ({ message, type = "success", duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onClose && onClose();
      }, 300); // Wait for exit animation
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle size={20} className="text-emerald-500" />;
      case "error":
        return <AlertCircle size={20} className="text-rose-500" />;
      case "cart":
        return <ShoppingBag size={20} className="text-emerald-500" />;
      default:
        return <CheckCircle size={20} className="text-emerald-500" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-emerald-50 border-emerald-200";
      case "error":
        return "bg-rose-50 border-rose-200";
      case "cart":
        return "bg-emerald-50 border-emerald-200";
      default:
        return "bg-emerald-50 border-emerald-200";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 right-6 z-[100] shadow-lg rounded-lg p-4 flex items-center min-w-72 max-w-sm border ${getBgColor()}`}
        >
          <div className="flex-shrink-0 mr-3">{getIcon()}</div>
          <div className="flex-grow text-sm">{message}</div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 ml-3 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
