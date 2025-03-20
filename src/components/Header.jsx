// File: components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import { ShoppingBag, Heart, User, Menu, X, Search } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const location = useLocation();

  // Track page scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing pages
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-800 hover:text-emerald-700 transition"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-800 hover:text-emerald-700 transition"
            >
              Shop
            </Link>
            <Link
              to="/products?category=necklaces"
              className="text-gray-800 hover:text-emerald-700 transition"
            >
              Necklaces
            </Link>
            <Link
              to="/products?category=earrings"
              className="text-gray-800 hover:text-emerald-700 transition"
            >
              Earrings
            </Link>
            <Link
              to="/products?category=bracelets"
              className="text-gray-800 hover:text-emerald-700 transition"
            >
              Bracelets
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-emerald-700 transition"
            >
              Our Story
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-800 hover:text-emerald-700 transition"
            >
              <Search size={20} />
            </button>
            <Link
              to="/wishlist"
              className="text-gray-800 hover:text-emerald-700 transition relative"
            >
              <Heart size={20} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-700 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className="text-gray-800 hover:text-emerald-700 transition relative"
            >
              <ShoppingBag size={20} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-700 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link
              to="/account"
              className="hidden md:block text-gray-800 hover:text-emerald-700 transition"
            >
              <User size={20} />
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-800 hover:text-emerald-700 transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="mt-4 fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg fade-in">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="block py-2 text-gray-800 hover:text-emerald-700 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block py-2 text-gray-800 hover:text-emerald-700 transition"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=necklaces"
                  className="block py-2 text-gray-800 hover:text-emerald-700 transition"
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=earrings"
                  className="block py-2 text-gray-800 hover:text-emerald-700 transition"
                >
                  Earrings
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=bracelets"
                  className="block py-2 text-gray-800 hover:text-emerald-700 transition"
                >
                  Bracelets
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 text-gray-800 hover:text-emerald-700 transition"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  className="block py-2 text-gray-800 hover:text-emerald-700 transition"
                >
                  My Account
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
