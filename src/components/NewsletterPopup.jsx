// File: components/NewsletterPopup.js
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Show popup after 5 seconds
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenNewsletterPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    setIsSubmitted(true);

    // After 2 seconds, close the popup
    setTimeout(() => {
      setShowPopup(false);
      localStorage.setItem("hasSeenNewsletterPopup", "true");
    }, 2000);
  };

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("hasSeenNewsletterPopup", "true");
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fade-in">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif font-medium text-emerald-700 mb-2">
            Join Our Community
          </h3>
          <p className="text-gray-600">
            Subscribe to receive updates, exclusive offers, and a 10% discount
            on your first order.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                required
              />
            </div>
            <button type="submit" className="w-full btn-primary py-3">
              Subscribe & Get 10% Off
            </button>
            <p className="text-xs text-gray-500 mt-4 text-center">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from Phuler.
            </p>
          </form>
        ) : (
          <div className="text-center py-4">
            <div className="text-emerald-700 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h4 className="text-xl font-medium mb-2">Thank You!</h4>
            <p className="text-gray-600">
              Your 10% discount code has been sent to your email.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup;
