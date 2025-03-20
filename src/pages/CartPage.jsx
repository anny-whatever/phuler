// File: pages/CartPage.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Truck,
  RotateCcw,
} from "lucide-react";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

  // Calculate shipping cost
  const shippingCost = subtotal > 1500 ? 0 : 99;

  // Calculate total
  const total = subtotal + shippingCost;

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-medium mb-8">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cartItems.map((item) => {
                      const itemPrice = item.salePrice || item.price;
                      const itemTotal = itemPrice * item.quantity;

                      return (
                        <tr key={item.cartItemId}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-16 w-16">
                                <img
                                  className="h-16 w-16 rounded-md object-cover"
                                  src={item.images[0]}
                                  alt={item.name}
                                />
                              </div>
                              <div className="ml-4">
                                <h3 className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </h3>
                                <div className="text-sm text-gray-500">
                                  {Object.entries(item.selectedOptions).map(
                                    ([key, value]) => (
                                      <p key={`${item.cartItemId}-${key}`}>
                                        {key}: {value}
                                      </p>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.salePrice ? (
                              <div>
                                <span className="text-rose-700">
                                  ₹{item.salePrice}
                                </span>
                                <span className="line-through ml-2">
                                  ₹{item.price}
                                </span>
                              </div>
                            ) : (
                              <span>₹{item.price}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center border border-gray-300 rounded-md w-28">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.cartItemId,
                                    item.quantity - 1
                                  )
                                }
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900"
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="flex-grow text-center text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.cartItemId,
                                    item.quantity + 1
                                  )
                                }
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ₹{itemTotal.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                            <button
                              onClick={() => removeFromCart(item.cartItemId)}
                              className="text-gray-400 hover:text-rose-600 transition"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Cart Actions */}
              <div className="mt-6 flex flex-col sm:flex-row justify-between">
                <div className="flex mb-4 sm:mb-0">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition">
                    Apply
                  </button>
                </div>
                <Link to="/products" className="btn-secondary">
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shippingCost === 0
                        ? "Free"
                        : `₹${shippingCost.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-3 flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-medium text-lg">
                      ₹{total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="btn-primary w-full py-3 flex items-center justify-center"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>

                <div className="mt-6 text-sm text-gray-500">
                  <p className="mb-2">We accept:</p>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 border border-gray-200 rounded">
                      Visa
                    </span>
                    <span className="px-2 py-1 border border-gray-200 rounded">
                      Mastercard
                    </span>
                    <span className="px-2 py-1 border border-gray-200 rounded">
                      Razorpay
                    </span>
                    <span className="px-2 py-1 border border-gray-200 rounded">
                      UPI
                    </span>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <div className="flex items-start mb-3">
                  <Truck className="flex-shrink-0 w-5 h-5 text-gray-500 mr-2 mt-1" />
                  <div>
                    <p className="text-sm text-gray-700">
                      Free shipping on orders over ₹1500. Expected delivery
                      within 5-7 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <RotateCcw className="flex-shrink-0 w-5 h-5 text-gray-500 mr-2 mt-1" />
                  <div>
                    <p className="text-sm text-gray-700">
                      30-day easy returns on all orders. Read our{" "}
                      <Link
                        to="/return-policy"
                        className="text-emerald-700 hover:underline"
                      >
                        return policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
