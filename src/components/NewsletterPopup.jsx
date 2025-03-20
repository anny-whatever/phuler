import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle } from "lucide-react";

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasError(false);

    // Validate email
    if (!email) {
      setHasError(true);
      setErrorMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setHasError(true);
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // In a real app, send to backend
    setIsSubmitted(true);

    // After 2 seconds, close the popup
    setTimeout(() => {
      setShowPopup(false);
      localStorage.setItem("hasSeenNewsletterPopup", "true");
    }, 3000);
  };

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("hasSeenNewsletterPopup", "true");
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const popupVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  if (!showPopup) return null;

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="relative w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-elegant"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={handleClose}
              className="absolute z-10 p-1 text-gray-400 transition-colors top-4 right-4 hover:text-gray-600"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image section */}
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-emerald-800">
                  <img
                    src="https://images.pexels.com/photos/5370626/pexels-photo-5370626.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Phuler jewelry crafting"
                    className="object-cover w-full h-full opacity-80 mix-blend-multiply"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h4 className="mb-2 text-lg font-display">
                    Join our community
                  </h4>
                  <p className="text-sm text-white/80">
                    Get inspired by our handcrafted designs
                  </p>
                </div>
              </div>

              {/* Content section */}
              <div className="p-8">
                {!isSubmitted ? (
                  <div>
                    <div className="mb-6 text-center">
                      <h3 className="mb-2 text-2xl font-medium text-gray-900 font-display">
                        Join Our Community
                      </h3>
                      <p className="text-sm text-gray-600">
                        Subscribe to receive updates, exclusive offers, and a
                        10% discount on your first order.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail size={16} className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className={`w-full py-3 pl-10 pr-3 border ${
                              hasError
                                ? "border-rose-300 bg-rose-50"
                                : "border-gray-300"
                            } rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent`}
                          />
                        </div>
                        {hasError && (
                          <p className="mt-1 text-xs text-rose-600">
                            {errorMessage}
                          </p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full py-3 font-medium btn-primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Subscribe & Get 10% Off
                      </motion.button>

                      <p className="mt-4 text-xs text-center text-gray-500">
                        By subscribing, you agree to our Privacy Policy and
                        consent to receive updates from Phuler.
                      </p>
                    </form>
                  </div>
                ) : (
                  <motion.div
                    className="text-center py-4 min-h-[200px] flex flex-col items-center justify-center"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="mb-4 text-emerald-600">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: [0, 10, 0] }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.3,
                        }}
                      >
                        <CheckCircle size={56} />
                      </motion.div>
                    </div>
                    <h4 className="mb-2 text-xl font-medium">Thank You!</h4>
                    <p className="mb-6 text-gray-600">
                      Your 10% discount code has been sent to your email.
                    </p>
                    <div className="p-3 border rounded-md bg-emerald-50 border-emerald-100">
                      <span className="font-mono font-medium tracking-wider text-emerald-700">
                        WELCOME10
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
