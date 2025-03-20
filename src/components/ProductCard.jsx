import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Eye, Plus } from "lucide-react";
import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";

const ProductCard = ({ product, className = "", layout = "grid" }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, {});
  };

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Calculate discount percentage
  const discountPercentage = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : null;

  // Animation variants
  const containerVariants = {
    hover: {
      y: -8,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    initial: {
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.08,
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] },
    },
    initial: {
      scale: 1,
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const imageOverlayVariants = {
    hover: {
      opacity: 0.15,
      transition: { duration: 0.5 },
    },
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const actionsVariants = {
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
    initial: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const buttonVariants = {
    hover: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
    initial: {
      y: 15,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const tagVariants = {
    hover: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
    initial: {
      x: -10,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const categoryVariants = {
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    initial: {
      opacity: 0.7,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const textRevealVariants = {
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    initial: {
      y: 8,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={`group ${className} rounded-xl bg-white overflow-hidden relative`}
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      animate={isHovered ? "hover" : "initial"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0 20px 30px -12px rgba(0,0,0,0.1)"
          : "0 4px 12px -6px rgba(0,0,0,0.05)",
      }}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          {/* Product image */}
          <div className="relative w-full overflow-hidden aspect-square">
            <motion.div
              className="absolute inset-0"
              variants={imageOverlayVariants}
              style={{
                background: `linear-gradient(to top, rgba(${
                  product.salePrice ? "229, 62, 62" : "4, 120, 87"
                }, 0.2), transparent)`,
                zIndex: 2,
              }}
            />

            <motion.div
              className="w-full h-full bg-gray-50"
              variants={imageVariants}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover w-full h-full"
                style={{
                  opacity: isImageLoaded ? 1 : 0,
                  transition: "opacity 0.3s",
                }}
                onLoad={() => setIsImageLoaded(true)}
              />

              {/* Loading state */}
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
                  <div className="w-12 h-12 border-2 border-gray-200 rounded-full border-t-emerald-700 animate-spin" />
                </div>
              )}
            </motion.div>
          </div>

          {/* Quick action buttons */}
          <motion.div
            className="absolute inset-x-0 bottom-0 z-10 flex justify-center px-6 py-6"
            variants={actionsVariants}
          >
            <div className="flex space-x-3 items-center bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg">
              <motion.button
                onClick={toggleWishlist}
                className={`p-2 rounded-full ${
                  inWishlist
                    ? "text-emerald-700 bg-emerald-50"
                    : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={buttonVariants}
                aria-label={
                  inWishlist ? "Remove from wishlist" : "Add to wishlist"
                }
              >
                <Heart
                  size={18}
                  fill={inWishlist ? "#047857" : "none"}
                  stroke={inWishlist ? "#047857" : "currentColor"}
                />
              </motion.button>

              <motion.button
                onClick={handleAddToCart}
                className="flex items-center space-x-1 bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1.5 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={buttonVariants}
                aria-label="Add to cart"
              >
                <ShoppingBag size={16} />
                <span className="text-xs font-medium">Add</span>
              </motion.button>

              <motion.button
                className="p-2 text-gray-700 transition-colors rounded-full hover:text-gray-900 hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={buttonVariants}
                aria-label="View details"
              >
                <Link to={`/products/${product.id}`}>
                  <Eye size={18} />
                </Link>
              </motion.button>
            </div>
          </motion.div>

          {/* Product badges/tags */}
          <motion.div
            className="absolute z-10 flex flex-col space-y-2 top-4 left-4"
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
          >
            {product.isNew && (
              <motion.span
                variants={tagVariants}
                className="bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs px-2.5 py-1 rounded-full inline-flex items-center font-medium shadow-sm"
                custom={0}
              >
                New
              </motion.span>
            )}
            {product.isBestseller && (
              <motion.span
                variants={tagVariants}
                className="bg-amber-100 border border-amber-200 text-amber-800 text-xs px-2.5 py-1 rounded-full inline-flex items-center font-medium shadow-sm"
                custom={1}
              >
                Bestseller
              </motion.span>
            )}
            {product.salePrice && (
              <motion.span
                variants={tagVariants}
                className="bg-rose-100 border border-rose-200 text-rose-800 text-xs px-2.5 py-1 rounded-full inline-flex items-center font-medium shadow-sm"
                custom={2}
              >
                {discountPercentage}% Off
              </motion.span>
            )}
          </motion.div>

          {/* Decorative elements */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 pointer-events-none z-[1]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Plus
                  size={16}
                  className="absolute top-4 right-4 text-emerald-700 opacity-20"
                  strokeWidth={1.5}
                />
                <Plus
                  size={16}
                  className="absolute bottom-4 left-8 text-emerald-700 opacity-20"
                  strokeWidth={1.5}
                />
                <div className="absolute w-12 h-px rotate-45 top-1/3 right-8 bg-emerald-700 opacity-10"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product info */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-1.5">
            <h3 className="font-medium text-gray-900 transition-colors group-hover:text-emerald-700 line-clamp-1">
              {product.name}
            </h3>
            <div className="flex items-center bg-gray-50 px-1.5 py-0.5 rounded-sm">
              <span className="text-amber-400 mr-0.5">★</span>
              <span className="text-xs font-medium text-gray-700">
                {product.rating}
              </span>
            </div>
          </div>

          <motion.div
            variants={categoryVariants}
            className="inline-flex items-center px-2 py-0.5 bg-gray-100 rounded-sm mb-3"
          >
            <span className="text-xs text-gray-600 capitalize">
              {product.category}
            </span>
          </motion.div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              {product.salePrice ? (
                <>
                  <span className="text-lg font-medium text-rose-700">
                    ₹{product.salePrice}
                  </span>
                  <span className="ml-2 text-sm text-gray-400 line-through">
                    ₹{product.price}
                  </span>
                </>
              ) : (
                <span className="text-lg font-medium text-gray-900">
                  ₹{product.price}
                </span>
              )}
            </div>

            <motion.div
              variants={textRevealVariants}
              className="text-xs font-medium text-emerald-700"
            >
              View Details
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
