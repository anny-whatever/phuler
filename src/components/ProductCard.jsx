import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useWishlist } from "../contexts/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const toggleWishlist = (e) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="group block">
        <div className="relative overflow-hidden rounded-lg mb-3">
          {/* Product image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Wishlist button */}
          <button
            onClick={toggleWishlist}
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition"
          >
            <Heart
              size={18}
              fill={inWishlist ? "#047857" : "none"}
              stroke={inWishlist ? "#047857" : "currentColor"}
            />
          </button>

          {/* Tags */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {product.isNew && (
              <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                Bestseller
              </span>
            )}
            {product.salePrice && (
              <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded">
                Sale
              </span>
            )}
          </div>
        </div>

        {/* Product info */}
        <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>

        <div className="flex items-center">
          {product.salePrice ? (
            <>
              <span className="text-rose-700 font-medium">
                ₹{product.salePrice}
              </span>
              <span className="ml-2 text-gray-500 line-through text-sm">
                ₹{product.price}
              </span>
            </>
          ) : (
            <span className="font-medium">₹{product.price}</span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
