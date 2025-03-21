// src/components/CartDrawer.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingBag,
  Trash2,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../contexts/ToastContext";

const CartDrawer = () => {
  const {
    cartItems,
    subtotal,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    closeCart,
    lastAddedProduct,
  } = useCart();
  const { addToast } = useToast();

  // Show toast when a product is added - with proper dependency control to prevent infinite loop
  useEffect(() => {
    if (lastAddedProduct && isCartOpen) {
      // Use a flag to prevent infinite loop
      const timer = setTimeout(() => {
        addToast(`${lastAddedProduct.name} added to your cart!`, "cart", 3000);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [lastAddedProduct, addToast]);

  // Calculate shipping cost
  const shippingCost = subtotal > 1500 ? 0 : 99;

  // Calculate total
  const total = subtotal + shippingCost;

  // Handle quantity changes
  const handleQuantityChange = (cartItemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(cartItemId, newQuantity);
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Cart drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-lg z-[70] flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Cart header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center">
                <ShoppingBag size={20} className="mr-2 text-emerald-700" />
                <h2 className="text-xl font-medium">Your Cart</h2>
                <span className="flex items-center justify-center w-5 h-5 ml-2 text-xs text-white rounded-full bg-emerald-700">
                  {cartItems.length}
                </span>
              </div>
              <button
                onClick={closeCart}
                className="text-gray-500 transition hover:text-gray-700"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-grow p-6 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <div className="p-6 mb-4 rounded-full bg-gray-50">
                    <ShoppingBag size={32} className="text-gray-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium">
                    Your cart is empty
                  </h3>
                  <p className="mb-6 text-gray-500">
                    Looks like you haven't added any items to your cart yet.
                  </p>
                  <button onClick={closeCart} className="btn-primary">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-gray-100">
                  {cartItems.map((item) => {
                    const itemPrice = item.salePrice || item.price;
                    const itemTotal = itemPrice * item.quantity;

                    return (
                      <li key={item.cartItemId} className="py-4">
                        <motion.div
                          className="flex"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Product image */}
                          <Link
                            to={`/products/${item.id}`}
                            className="relative flex-shrink-0 w-20 h-20"
                          >
                            <img
                              src={item.images[0]}
                              alt={item.name}
                              className="object-cover w-full h-full rounded-md"
                            />
                            {item.salePrice && (
                              <span className="absolute top-0 right-0 bg-rose-100 text-rose-700 text-xs px-1.5 py-0.5 rounded-bl-md rounded-tr-md">
                                Sale
                              </span>
                            )}
                          </Link>

                          {/* Product details */}
                          <div className="flex-grow ml-4">
                            <div className="flex justify-between">
                              <Link
                                to={`/products/${item.id}`}
                                className="font-medium text-gray-900 transition-colors hover:text-emerald-700"
                              >
                                {item.name}
                              </Link>
                              <button
                                onClick={() => removeFromCart(item.cartItemId)}
                                className="text-gray-400 transition hover:text-rose-600"
                                aria-label="Remove item"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>

                            {/* Product options */}
                            {Object.keys(item.selectedOptions).length > 0 && (
                              <div className="mt-1 mb-2 text-xs text-gray-500">
                                {Object.entries(item.selectedOptions).map(
                                  ([key, value]) => (
                                    <div key={key}>
                                      {key}: {value}
                                    </div>
                                  )
                                )}
                              </div>
                            )}

                            {/* Price */}
                            <div className="mt-1 mb-2">
                              {item.salePrice ? (
                                <div className="flex items-center">
                                  <span className="font-medium text-rose-700">
                                    ₹{item.salePrice}
                                  </span>
                                  <span className="ml-2 text-xs text-gray-400 line-through">
                                    ₹{item.price}
                                  </span>
                                </div>
                              ) : (
                                <span className="text-gray-900">
                                  ₹{item.price}
                                </span>
                              )}
                            </div>

                            {/* Quantity controls */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center border border-gray-200 rounded-md">
                                <button
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.cartItemId,
                                      item.quantity - 1
                                    )
                                  }
                                  className="flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-700"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="w-8 text-sm text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.cartItemId,
                                      item.quantity + 1
                                    )
                                  }
                                  className="flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-700"
                                >
                                  <Plus size={14} />
                                </button>
                              </div>

                              <div className="font-medium">
                                ₹{itemTotal.toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Cart footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                {/* Subtotal */}
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? (
                      <span className="text-emerald-700">Free</span>
                    ) : (
                      `₹${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>

                {/* Free shipping message */}
                {subtotal < 1500 && (
                  <div className="mb-3 text-xs text-emerald-700">
                    Add ₹{(1500 - subtotal).toFixed(2)} more to qualify for free
                    shipping
                  </div>
                )}

                {/* Total */}
                <div className="flex justify-between pt-2 mb-4 border-t border-gray-200">
                  <span className="font-medium">Total</span>
                  <span className="text-lg font-medium">
                    ₹{total.toFixed(2)}
                  </span>
                </div>

                {/* CTA buttons */}
                <div className="space-y-2">
                  <Link
                    to="/checkout"
                    onClick={closeCart}
                    className="flex items-center justify-center w-full py-3 btn-primary"
                  >
                    Checkout
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="flex items-center justify-center w-full py-3 btn-secondary"
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
