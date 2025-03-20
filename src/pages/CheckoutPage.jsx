// File: pages/CheckoutPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { ArrowLeft, Check, CreditCard, Shield } from "lucide-react";

const CheckoutPage = () => {
  const { cartItems, subtotal } = useCart();
  const [activeStep, setActiveStep] = useState("information");
  const [orderComplete, setOrderComplete] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    paymentMethod: "card",
    saveInfo: false,
  });

  // Calculate shipping cost
  const shippingCost = subtotal > 1500 ? 0 : 99;

  // Calculate total
  const total = subtotal + shippingCost;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleContinueToShipping = (e) => {
    e.preventDefault();
    setActiveStep("shipping");
  };

  const handleContinueToPayment = (e) => {
    e.preventDefault();
    setActiveStep("payment");
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate order processing
    setTimeout(() => {
      setOrderComplete(true);
    }, 1500);
  };

  if (orderComplete) {
    return (
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-emerald-700" />
            </div>
            <h1 className="text-3xl font-serif font-medium mb-4">Thank You!</h1>
            <p className="text-gray-700 mb-6">
              Your order has been placed successfully. We've sent a confirmation
              to your email.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <h2 className="font-medium mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">
                  #PH{Math.floor(100000 + Math.random() * 900000)}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Order Date:</span>
                <span className="font-medium">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Total:</span>
                <span className="font-medium">₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Address:</span>
                <span className="font-medium">
                  {formData.address}, {formData.city}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/" className="btn-secondary">
                Return to Home
              </Link>
              <Link to="/products" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Checkout Form */}
          <div className="lg:w-3/5">
            <Link
              to="/cart"
              className="inline-flex items-center text-gray-600 mb-6 hover:text-emerald-700"
            >
              <ArrowLeft size={16} className="mr-2" />
              <span>Return to cart</span>
            </Link>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h1 className="text-2xl font-serif font-medium mb-6">Checkout</h1>

              {/* Checkout Steps */}
              <div className="flex mb-8">
                <div
                  className={`flex-1 text-center ${
                    activeStep === "information"
                      ? "text-emerald-700 font-medium"
                      : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center ${
                      activeStep === "information"
                        ? "bg-emerald-700 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    1
                  </div>
                  <span className="text-sm">Information</span>
                </div>
                <div className="w-16 pt-4">
                  <div className="h-0.5 bg-gray-200"></div>
                </div>
                <div
                  className={`flex-1 text-center ${
                    activeStep === "shipping"
                      ? "text-emerald-700 font-medium"
                      : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center ${
                      activeStep === "shipping"
                        ? "bg-emerald-700 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    2
                  </div>
                  <span className="text-sm">Shipping</span>
                </div>
                <div className="w-16 pt-4">
                  <div className="h-0.5 bg-gray-200"></div>
                </div>
                <div
                  className={`flex-1 text-center ${
                    activeStep === "payment"
                      ? "text-emerald-700 font-medium"
                      : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center ${
                      activeStep === "payment"
                        ? "bg-emerald-700 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    3
                  </div>
                  <span className="text-sm">Payment</span>
                </div>
              </div>

              {/* Step 1: Information */}
              {activeStep === "information" && (
                <form onSubmit={handleContinueToShipping}>
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Shipping Address</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          State
                        </label>
                        <select
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          required
                        >
                          <option value="">Select State</option>
                          <option value="delhi">Delhi</option>
                          <option value="maharashtra">Maharashtra</option>
                          <option value="karnataka">Karnataka</option>
                          <option value="tamil-nadu">Tamil Nadu</option>
                          <option value="telangana">Telangana</option>
                          {/* Add more states */}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="pincode"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Pincode
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleInputChange}
                        className="rounded text-emerald-700 focus:ring-emerald-700 mr-2"
                      />
                      <span className="text-sm text-gray-700">
                        Save this information for next time
                      </span>
                    </label>
                  </div>

                  <div className="flex justify-end">
                    <button type="submit" className="btn-primary">
                      Continue to Shipping
                    </button>
                  </div>
                </form>
              )}

              {/* Step 2: Shipping */}
              {activeStep === "shipping" && (
                <form onSubmit={handleContinueToPayment}>
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Shipping Method</h3>
                    <div className="space-y-3">
                      <label className="flex p-4 border border-gray-300 rounded-md cursor-pointer hover:border-emerald-700">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="standard"
                          className="text-emerald-700 focus:ring-emerald-700 mt-0.5"
                          defaultChecked
                        />
                        <div className="ml-3 flex-grow">
                          <div className="flex justify-between">
                            <span className="font-medium">
                              Standard Shipping
                            </span>
                            <span>{subtotal > 1500 ? "Free" : "₹99"}</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            5-7 business days
                          </p>
                        </div>
                      </label>

                      <label className="flex p-4 border border-gray-300 rounded-md cursor-pointer hover:border-emerald-700">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="express"
                          className="text-emerald-700 focus:ring-emerald-700 mt-0.5"
                        />
                        <div className="ml-3 flex-grow">
                          <div className="flex justify-between">
                            <span className="font-medium">
                              Express Shipping
                            </span>
                            <span>₹199</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            2-3 business days
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveStep("information")}
                      className="text-gray-600 hover:text-emerald-700"
                    >
                      <ArrowLeft size={16} className="inline mr-1" />
                      Back to Information
                    </button>
                    <button type="submit" className="btn-primary">
                      Continue to Payment
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3: Payment */}
              {activeStep === "payment" && (
                <form onSubmit={handlePlaceOrder}>
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Payment Method</h3>
                    <div className="space-y-3">
                      <label className="flex p-4 border border-gray-300 rounded-md cursor-pointer hover:border-emerald-700">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === "card"}
                          onChange={handleInputChange}
                          className="text-emerald-700 focus:ring-emerald-700 mt-0.5"
                        />
                        <div className="ml-3">
                          <span className="font-medium">
                            Credit / Debit Card
                          </span>
                        </div>
                      </label>

                      <label className="flex p-4 border border-gray-300 rounded-md cursor-pointer hover:border-emerald-700">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={formData.paymentMethod === "upi"}
                          onChange={handleInputChange}
                          className="text-emerald-700 focus:ring-emerald-700 mt-0.5"
                        />
                        <div className="ml-3">
                          <span className="font-medium">UPI</span>
                        </div>
                      </label>

                      <label className="flex p-4 border border-gray-300 rounded-md cursor-pointer hover:border-emerald-700">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === "cod"}
                          onChange={handleInputChange}
                          className="text-emerald-700 focus:ring-emerald-700 mt-0.5"
                        />
                        <div className="ml-3">
                          <span className="font-medium">Cash on Delivery</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {formData.paymentMethod === "card" && (
                    <div className="mb-6 p-4 border border-gray-300 rounded-md">
                      <div className="flex items-center mb-4">
                        <CreditCard size={20} className="text-gray-500 mr-2" />
                        <h4 className="font-medium">Card Details</h4>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="cardNumber"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Card Number
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="expiryDate"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              id="expiryDate"
                              placeholder="MM/YY"
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="cvv"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              CVV
                            </label>
                            <input
                              type="text"
                              id="cvv"
                              placeholder="123"
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="cardName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Name on Card
                          </label>
                          <input
                            type="text"
                            id="cardName"
                            placeholder="John Doe"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === "upi" && (
                    <div className="mb-6 p-4 border border-gray-300 rounded-md">
                      <h4 className="font-medium mb-3">UPI Details</h4>
                      <div>
                        <label
                          htmlFor="upiId"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          UPI ID
                        </label>
                        <input
                          type="text"
                          id="upiId"
                          placeholder="name@bank"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center mb-6">
                    <Shield size={20} className="text-gray-500 mr-2" />
                    <p className="text-sm text-gray-600">
                      Your payment information is secure. We use
                      industry-standard encryption to protect your data.
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveStep("shipping")}
                      className="text-gray-600 hover:text-emerald-700"
                    >
                      <ArrowLeft size={16} className="inline mr-1" />
                      Back to Shipping
                    </button>
                    <button type="submit" className="btn-primary">
                      Place Order
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-28">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>

              <div className="border-b border-gray-200 pb-4 mb-4">
                {cartItems.map((item) => {
                  const itemPrice = item.salePrice || item.price;
                  return (
                    <div key={item.cartItemId} className="flex py-2">
                      <div className="relative flex-shrink-0">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="ml-4 flex-grow">
                        <h3 className="text-sm font-medium text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">
                            {Object.values(item.selectedOptions)[0] || ""}
                          </span>
                          <span className="text-sm font-medium">
                            ₹{(itemPrice * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

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
                  <div className="text-right">
                    <span className="font-medium text-lg block">
                      ₹{total.toFixed(2)}
                    </span>
                    <span className="text-xs text-gray-500">Including GST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
