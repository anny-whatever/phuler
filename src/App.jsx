// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { FilterProvider } from "./contexts/FilterContext";
import { ToastProvider } from "./contexts/ToastContext";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/WishlistPage";
import NewsletterPopup from "./components/NewsletterPopup";
import LoadingScreen from "./components/LoadingScreen";
import CartDrawer from "./components/CartDrawer";
import FloatingCartButton from "./components/FloatingCartButton";
import { useCart } from "./contexts/CartContext";

import { useSmoothScroll } from "./hooks/useMotion";

// AnimatedRoutes component for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useSmoothScroll();

  useEffect(() => {
    // Add a class to enable smooth scrolling after initial load
    document.documentElement.classList.add("has-scroll-smooth");

    // Simulate a realistic loading time (1.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.documentElement.classList.remove("has-scroll-smooth");
    };
  }, []);

  return (
    <Router>
      <ToastProvider>
        <FilterProvider>
          <WishlistProvider>
            <CartProvider>
              <div className="relative">
                <LoadingScreen isLoading={isLoading} />

                <div
                  className={`min-h-screen bg-pattern ${
                    isLoading ? "hidden" : ""
                  }`}
                >
                  <Header />
                  <main>
                    <AnimatedRoutes />
                  </main>
                  <Footer />
                  <NewsletterPopup />
                  <CartDrawer />

                  {/* Floating cart button for mobile/tablet */}
                  <div className="lg:hidden">
                    <FloatingCartButtonWithContext />
                  </div>
                </div>
              </div>
            </CartProvider>
          </WishlistProvider>
        </FilterProvider>
      </ToastProvider>
    </Router>
  );
}

// Using the FloatingCartButton with context
const FloatingCartButtonWithContext = () => {
  const { toggleCart } = useCart();
  return <FloatingCartButton onClick={toggleCart} />;
};

export default App;
