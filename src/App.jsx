import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { FilterProvider } from "./contexts/FilterContext";
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a realistic loading time (2.5 seconds)
    // This gives enough time for the progress bar to animate
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <FilterProvider>
        <WishlistProvider>
          <CartProvider>
            <LoadingScreen isLoading={isLoading} />
            <div
              className={`flex flex-col min-h-screen ${
                isLoading ? "hidden" : ""
              }`}
            >
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route
                    path="/products/:productId"
                    element={<ProductDetailPage />}
                  />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                </Routes>
              </main>
              <Footer />
              <NewsletterPopup />
            </div>
          </CartProvider>
        </WishlistProvider>
      </FilterProvider>
    </Router>
  );
}

export default App;
