import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Logo from "./Logo";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, cartCount } = useCart();
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

  // Reset states on route change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setActiveSection(null);
    setCartOpen(false);
  }, [location]);

  // Categories for the menu
  const categories = [
    {
      id: "shop",
      label: "Shop",
      items: [
        { label: "Necklaces", url: "/products?category=necklaces" },
        { label: "Earrings", url: "/products?category=earrings" },
        { label: "Bracelets", url: "/products?category=bracelets" },
        { label: "Rings", url: "/products?category=rings" },
        { label: "Anklets", url: "/products?category=anklets" },
      ],
    },
    {
      id: "collections",
      label: "Collections",
      items: [
        { label: "Spring Bloom", url: "/products?collection=spring-bloom" },
        { label: "Summer Garden", url: "/products?collection=summer-garden" },
        { label: "Autumn Leaves", url: "/products?collection=autumn-leaves" },
        { label: "Winter Frost", url: "/products?collection=winter-frost" },
        {
          label: "Tropical Paradise",
          url: "/products?collection=tropical-paradise",
        },
      ],
    },
    {
      id: "featured",
      label: "Featured",
      items: [
        { label: "New Arrivals", url: "/products?feature=new" },
        { label: "Bestsellers", url: "/products?feature=bestsellers" },
        { label: "On Sale", url: "/products?feature=sale" },
      ],
    },
  ];

  return (
    <>
      {/* Vertical Side Header - Desktop Only */}
      <header className="fixed top-0 bottom-0 left-0 z-50 hidden w-20 transition-all duration-500 bg-white border-r border-gray-100 lg:block hover:w-64 group">
        <div className="flex flex-col justify-between w-full h-full py-8 overflow-hidden">
          {/* Logo Section */}
          <div className="flex justify-center px-4 group-hover:justify-start">
            <Link to="/" className="block">
              <Logo logoType="vertical" />
            </Link>
          </div>

          {/* Main Navigation - Vertical */}
          <nav className="flex flex-col flex-1 mt-16">
            <ul className="space-y-6">
              <li>
                <Link
                  to="/"
                  className={`flex items-center px-0 group-hover:px-6 py-2 transition-all duration-300 ${
                    location.pathname === "/"
                      ? "text-emerald-700"
                      : "text-gray-600"
                  }`}
                >
                  <div className="flex justify-center w-20 group-hover:justify-start group-hover:w-auto">
                    <span className="text-xs tracking-widest uppercase group-hover:hidden">
                      HOME
                    </span>
                    <span className="hidden group-hover:block">Home</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`flex items-center px-0 group-hover:px-6 py-2 transition-all duration-300 ${
                    location.pathname.includes("/products")
                      ? "text-emerald-700"
                      : "text-gray-600"
                  }`}
                >
                  <div className="flex justify-center w-20 group-hover:justify-start group-hover:w-auto">
                    <span className="text-xs tracking-widest uppercase group-hover:hidden">
                      SHOP
                    </span>
                    <span className="hidden group-hover:block">Shop All</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`flex items-center px-0 group-hover:px-6 py-2 transition-all duration-300 ${
                    location.pathname === "/about"
                      ? "text-emerald-700"
                      : "text-gray-600"
                  }`}
                >
                  <div className="flex justify-center w-20 group-hover:justify-start group-hover:w-auto">
                    <span className="text-xs tracking-widest uppercase group-hover:hidden">
                      ABOUT
                    </span>
                    <span className="hidden group-hover:block">Our Story</span>
                  </div>
                </Link>
              </li>
            </ul>

            {/* Categories section in expanded state */}
            <div className="px-6 mt-16 overflow-y-auto transition-opacity duration-300 delay-100 opacity-0 group-hover:opacity-100">
              <h3 className="mb-4 text-xs tracking-widest text-gray-400 uppercase">
                CATEGORIES
              </h3>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-medium text-gray-800">Shop</h4>
                <ul className="pl-2 space-y-2">
                  {categories[0].items.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.url}
                        className="text-sm text-gray-600 hover:text-emerald-700"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-medium text-gray-800">
                  Collections
                </h4>
                <ul className="pl-2 space-y-2">
                  {categories[1].items.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.url}
                        className="text-sm text-gray-600 hover:text-emerald-700"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-medium text-gray-800">
                  Featured
                </h4>
                <ul className="pl-2 space-y-2">
                  {categories[2].items.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.url}
                        className="text-sm text-gray-600 hover:text-emerald-700"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* Actions Section */}
          <div className="w-full space-y-4">
            {/* Icons in collapsed state */}
            <div className="flex flex-col items-center space-y-6 group-hover:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-gray-600 transition-colors hover:text-emerald-700"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link
                to="/wishlist"
                className="relative text-gray-600 transition-colors hover:text-emerald-700"
                aria-label="Wishlist"
              >
                <Heart size={20} />
                {wishlistItems.length > 0 && (
                  <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white rounded-full -top-1 -right-1 bg-emerald-700">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setCartOpen(true)}
                className="relative text-gray-600 transition-colors hover:text-emerald-700"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white rounded-full -top-1 -right-1 bg-emerald-700">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Extended view in expanded state */}
            <div className="hidden px-6 pb-6 space-y-3 group-hover:block">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center w-full py-2 text-gray-600 transition-colors hover:text-emerald-700"
              >
                <Search size={18} className="mr-3" />
                <span>Search</span>
              </button>
              <Link
                to="/wishlist"
                className="flex items-center w-full py-2 text-gray-600 transition-colors hover:text-emerald-700"
              >
                <Heart size={18} className="mr-3" />
                <span>Wishlist</span>
                {wishlistItems.length > 0 && (
                  <span className="ml-2 bg-emerald-700 text-white text-xs px-2 py-0.5 rounded-full">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setCartOpen(true)}
                className="flex items-center w-full py-2 text-gray-600 transition-colors hover:text-emerald-700"
              >
                <ShoppingBag size={18} className="mr-3" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="ml-2 bg-emerald-700 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-sm shadow-sm py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="container flex items-center justify-between px-6 mx-auto">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="transform -translate-x-3">
            <Logo logoType="horizontal" />
          </Link>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-gray-800"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              to="/wishlist"
              className="relative text-gray-800"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {wishlistItems.length > 0 && (
                <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white rounded-full -top-1 -right-1 bg-emerald-700">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              className="relative text-gray-800"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white rounded-full -top-1 -right-1 bg-emerald-700">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-in */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="absolute top-0 bottom-0 left-0 w-4/5 max-w-xs overflow-y-auto bg-white shadow-xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Logo logoType="horizontal" />
                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>

                <nav className="space-y-6">
                  <Link
                    to="/"
                    className="block py-2 text-lg font-medium text-gray-800 border-b border-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/products"
                    className="block py-2 text-lg font-medium text-gray-800 border-b border-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    Shop All
                  </Link>
                  <Link
                    to="/about"
                    className="block py-2 text-lg font-medium text-gray-800 border-b border-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    Our Story
                  </Link>

                  {/* Expandable sections */}
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="py-2 border-b border-gray-100"
                    >
                      <button
                        className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
                        onClick={() =>
                          setActiveSection(
                            activeSection === category.id ? null : category.id
                          )
                        }
                        aria-expanded={activeSection === category.id}
                      >
                        {category.label}
                        {activeSection === category.id ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>

                      <AnimatePresence>
                        {activeSection === category.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="pt-3 pb-1 pl-4 space-y-3">
                              {category.items.map((item, index) => (
                                <li key={index}>
                                  <Link
                                    to={item.url}
                                    className="flex items-center text-gray-600 hover:text-emerald-700"
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    <ChevronRight size={14} className="mr-2" />
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>

                <div className="mt-10 space-y-6">
                  <Link
                    to="/contact"
                    className="block text-gray-600 hover:text-emerald-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/faq"
                    className="block text-gray-600 hover:text-emerald-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Search Overlay - Both Mobile and Desktop */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              className="w-full max-w-2xl overflow-hidden bg-white shadow-xl rounded-xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Search Products
                  </h3>
                  <button
                    onClick={() => setSearchOpen(false)}
                    aria-label="Close search"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-4 pl-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    autoFocus
                  />
                  <Search
                    size={18}
                    className="absolute text-gray-400 transform -translate-y-1/2 left-4 top-1/2"
                  />
                </div>

                <div className="mt-6">
                  <h4 className="mb-3 text-sm text-gray-500">
                    Popular Searches
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Necklaces",
                      "Earrings",
                      "Spring Collection",
                      "Gift Ideas",
                    ].map((term, i) => (
                      <div
                        key={i}
                        className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 cursor-pointer"
                      >
                        {term}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
