import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";
import { Trash2, ShoppingBag } from "lucide-react";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, 1, {});
    // Optional: Remove from wishlist after adding to cart
    // removeFromWishlist(product.id);
  };

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-medium">My Wishlist</h1>
          {wishlistItems.length > 0 && (
            <button
              onClick={clearWishlist}
              className="text-gray-600 hover:text-rose-600 transition text-sm"
            >
              Clear Wishlist
            </button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-medium mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Add items you love to your wishlist. Review them anytime and
              easily move them to your cart.
            </p>
            <Link to="/products" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden group"
              >
                <Link to={`/products/${item.id}`} className="block relative">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-1">
                    {item.isNew && (
                      <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">
                        New
                      </span>
                    )}
                    {item.isBestseller && (
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                        Bestseller
                      </span>
                    )}
                    {item.salePrice && (
                      <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded">
                        Sale
                      </span>
                    )}
                  </div>
                </Link>

                <div className="p-4">
                  <Link to={`/products/${item.id}`} className="block">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {item.category}
                    </p>

                    <div className="flex items-center mb-4">
                      {item.salePrice ? (
                        <>
                          <span className="text-rose-700 font-medium">
                            ₹{item.salePrice}
                          </span>
                          <span className="ml-2 text-gray-500 line-through text-sm">
                            ₹{item.price}
                          </span>
                        </>
                      ) : (
                        <span className="font-medium">₹{item.price}</span>
                      )}
                    </div>
                  </Link>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-grow flex items-center justify-center space-x-1 btn-primary py-2"
                    >
                      <ShoppingBag size={16} />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-2 border border-gray-300 rounded-md text-gray-500 hover:text-rose-600 hover:border-rose-600 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
