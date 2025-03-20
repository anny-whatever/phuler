// File: pages/ProductDetailPage.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import SizeGuide from "../components/SizeGuide";
import VirtualTryOn from "../components/VirtualTryOn";
import ProductCard from "../components/ProductCard";
import {
  Heart,
  Share2,
  Minus,
  Plus,
  ChevronDown,
  ChevronUp,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";

// Import dummy data
import { allProducts } from "../data/products";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [expandedSection, setExpandedSection] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // In a real app, fetch product from API
    // For now, use dummy data
    setLoading(true);

    // Simulate API fetch delay
    setTimeout(() => {
      const foundProduct = allProducts.find(
        (p) => p.id.toString() === productId
      );
      setProduct(foundProduct);

      if (foundProduct) {
        // Set default selected options based on product
        const defaultOptions = {};
        if (foundProduct.options) {
          foundProduct.options.forEach((option) => {
            defaultOptions[option.name] = option.values[0];
          });
        }
        setSelectedOptions(defaultOptions);

        // Get related products with the same category
        const related = allProducts
          .filter(
            (p) =>
              p.category === foundProduct.category && p.id !== foundProduct.id
          )
          .slice(0, 4);
        setRelatedProducts(related);
      }

      setLoading(false);
    }, 500);

    // Reset state when product changes
    setSelectedImage(0);
    setQuantity(1);
    setExpandedSection("description");
  }, [productId]);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleOptionChange = (optionName, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: value,
    }));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedOptions);

      // Show success message or open cart drawer
      // (This would be implemented in a real app)
    }
  };

  const toggleWishlist = () => {
    if (product) {
      if (isInWishlist(product.id)) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist(product);
      }
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (loading) {
    return (
      <div className="pt-28 pb-16 container mx-auto px-4">
        <div className="animate-pulse">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg h-96 mb-4"></div>
              <div className="flex space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-200 rounded-lg h-20 w-20"
                  ></div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3 mb-6"></div>
              <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-28 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-6">
          We couldn't find the product you're looking for. It may have been
          removed or the URL might be incorrect.
        </p>
        <Link to="/products" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6">
          <ol className="flex space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-emerald-700">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link
                to="/products"
                className="text-gray-500 hover:text-emerald-700"
              >
                Products
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link
                to={`/products?category=${product.category}`}
                className="text-gray-500 hover:text-emerald-700"
              >
                {product.category}
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row md:space-x-8 mb-16">
          {/* Product Images */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />

              {/* Tag indicators */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {product.isNew && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded">
                    New
                  </span>
                )}
                {product.isBestseller && (
                  <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded">
                    Bestseller
                  </span>
                )}
                {product.salePrice && (
                  <span className="bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded">
                    Sale
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md border-2 ${
                    selectedImage === index
                      ? "border-emerald-700"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-serif font-medium mb-1">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center mb-4">
              {product.salePrice ? (
                <>
                  <span className="text-2xl text-rose-700 font-medium mr-2">
                    ₹{product.salePrice}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ₹{product.price}
                  </span>
                  <span className="ml-2 bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded">
                    {Math.round(
                      ((product.price - product.salePrice) / product.price) *
                        100
                    )}
                    % OFF
                  </span>
                </>
              ) : (
                <span className="text-2xl font-medium">₹{product.price}</span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-amber-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < product.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <span className="text-gray-600">
                {product.reviewCount} Reviews
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">{product.shortDescription}</p>

            {/* Product Options */}
            {product.options &&
              product.options.map((option) => (
                <div key={option.name} className="mb-6">
                  <h3 className="text-sm font-medium mb-2">
                    {option.name.toUpperCase()}
                  </h3>

                  {option.type === "select" && (
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value) => (
                        <button
                          key={value}
                          onClick={() => handleOptionChange(option.name, value)}
                          className={`px-4 py-2 border rounded-md transition ${
                            selectedOptions[option.name] === value
                              ? "border-emerald-700 bg-emerald-50 text-emerald-700"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  )}

                  {option.type === "color" && (
                    <div className="flex flex-wrap gap-3">
                      {option.values.map((value) => (
                        <button
                          key={value}
                          onClick={() => handleOptionChange(option.name, value)}
                          className={`w-8 h-8 rounded-full transition ${
                            selectedOptions[option.name] === value
                              ? "ring-2 ring-offset-2 ring-emerald-700"
                              : ""
                          }`}
                          style={{ backgroundColor: value }}
                          title={value}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">QUANTITY</h3>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="flex-grow text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="btn-primary py-3 flex items-center justify-center"
              >
                Add to Cart
              </button>

              <div className="flex space-x-3">
                <button
                  onClick={toggleWishlist}
                  className="flex-1 border border-gray-300 rounded-md py-3 flex items-center justify-center hover:bg-gray-50 transition"
                >
                  <Heart
                    size={18}
                    className="mr-2"
                    fill={isInWishlist(product.id) ? "#047857" : "none"}
                    stroke={
                      isInWishlist(product.id) ? "#047857" : "currentColor"
                    }
                  />
                  <span>Wishlist</span>
                </button>

                <button className="flex-1 border border-gray-300 rounded-md py-3 flex items-center justify-center hover:bg-gray-50 transition">
                  <Share2 size={18} className="mr-2" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="border-t border-gray-200 pt-6 mb-6">
              <div className="flex items-start mb-4">
                <Truck className="flex-shrink-0 w-5 h-5 text-gray-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-gray-600">
                    On orders over ₹1500. Otherwise ₹99.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <RotateCcw className="flex-shrink-0 w-5 h-5 text-gray-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Easy Returns</p>
                  <p className="text-sm text-gray-600">
                    30-day return policy for unworn items.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="flex-shrink-0 w-5 h-5 text-gray-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Quality Guarantee</p>
                  <p className="text-sm text-gray-600">
                    Each piece is carefully inspected before shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap -mb-px">
              <button
                className={`mr-6 py-4 border-b-2 font-medium transition ${
                  expandedSection === "description"
                    ? "border-emerald-700 text-emerald-700"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => toggleSection("description")}
              >
                Description
              </button>
              <button
                className={`mr-6 py-4 border-b-2 font-medium transition ${
                  expandedSection === "details"
                    ? "border-emerald-700 text-emerald-700"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => toggleSection("details")}
              >
                Details & Care
              </button>
              <button
                className={`mr-6 py-4 border-b-2 font-medium transition ${
                  expandedSection === "shipping"
                    ? "border-emerald-700 text-emerald-700"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => toggleSection("shipping")}
              >
                Shipping & Returns
              </button>
              <button
                className={`py-4 border-b-2 font-medium transition ${
                  expandedSection === "reviews"
                    ? "border-emerald-700 text-emerald-700"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => toggleSection("reviews")}
              >
                Reviews ({product.reviewCount})
              </button>
            </div>
          </div>

          <div className="py-6">
            {expandedSection === "description" && (
              <div>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {product.features &&
                    product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                </ul>
              </div>
            )}

            {expandedSection === "details" && (
              <div>
                <h3 className="font-medium mb-4">Product Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <dl>
                      <div className="py-2 grid grid-cols-3 gap-4 border-b border-gray-100">
                        <dt className="text-sm font-medium text-gray-500">
                          Material
                        </dt>
                        <dd className="text-sm text-gray-900 col-span-2">
                          {product.material}
                        </dd>
                      </div>
                      <div className="py-2 grid grid-cols-3 gap-4 border-b border-gray-100">
                        <dt className="text-sm font-medium text-gray-500">
                          Dimensions
                        </dt>
                        <dd className="text-sm text-gray-900 col-span-2">
                          {product.dimensions}
                        </dd>
                      </div>
                      <div className="py-2 grid grid-cols-3 gap-4 border-b border-gray-100">
                        <dt className="text-sm font-medium text-gray-500">
                          Weight
                        </dt>
                        <dd className="text-sm text-gray-900 col-span-2">
                          {product.weight}
                        </dd>
                      </div>
                      <div className="py-2 grid grid-cols-3 gap-4">
                        <dt className="text-sm font-medium text-gray-500">
                          Collection
                        </dt>
                        <dd className="text-sm text-gray-900 col-span-2">
                          {product.collection}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Care Instructions</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                      <li>Store in the provided pouch when not in use</li>
                      <li>
                        Avoid contact with perfumes, lotions, and chemicals
                      </li>
                      <li>Remove before swimming or showering</li>
                      <li>Clean with a soft, dry cloth</li>
                      <li>
                        Avoid exposure to extreme humidity or direct sunlight
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {expandedSection === "shipping" && (
              <div>
                <h3 className="font-medium mb-4">Shipping Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Delivery</h4>
                    <p className="text-gray-700 mb-2">
                      We offer the following shipping options:
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                      <li>
                        <span className="font-medium">Standard Shipping:</span>{" "}
                        5-7 business days (Free for orders over ₹1500, otherwise
                        ₹99)
                      </li>
                      <li>
                        <span className="font-medium">Express Shipping:</span>{" "}
                        2-3 business days (₹199)
                      </li>
                      <li>
                        <span className="font-medium">Same-Day Delivery:</span>{" "}
                        Available for select pin codes in metropolitan areas
                        (₹299)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Returns & Exchanges</h4>
                    <p className="text-gray-700 mb-2">
                      We want you to love your Phuler pieces. If you're not
                      completely satisfied, we offer:
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                      <li>
                        30-day return policy for unworn items in original
                        packaging
                      </li>
                      <li>
                        Free returns and exchanges for all domestic orders
                      </li>
                      <li>
                        International returns are accepted but shipping costs
                        are non-refundable
                      </li>
                    </ul>
                    <p className="text-sm text-gray-700 mt-2">
                      To initiate a return, please contact our customer service
                      team at returns@phuler.com or through the returns portal
                      in your account.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {expandedSection === "reviews" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-medium">Customer Reviews</h3>
                  <button className="btn-secondary">Write a Review</button>
                </div>

                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="text-5xl font-medium">
                      {product.rating.toFixed(1)}
                    </div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < Math.round(product.rating) ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.reviewCount} reviews
                    </div>
                  </div>

                  <div className="flex-grow">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center mb-1">
                        <div className="w-10 text-sm text-gray-600">
                          {star} star
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mx-2">
                          <div
                            className="bg-amber-400 h-2 rounded-full"
                            style={{
                              width: `${
                                (product.reviewDistribution?.[star] || 0) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <div className="w-10 text-sm text-gray-600 text-right">
                          {Math.round(
                            (product.reviewDistribution?.[star] || 0) * 100
                          )}
                          %
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Reviews */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="flex text-amber-400 mr-2">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>
                        <h4 className="font-medium">Simply Beautiful</h4>
                      </div>
                      <span className="text-sm text-gray-500">
                        2 months ago
                      </span>
                    </div>
                    <p className="text-sm mb-2">
                      <span className="font-medium">Meera K.</span> - Verified
                      Buyer
                    </p>
                    <p className="text-gray-700">
                      I purchased this necklace for my sister's birthday and she
                      absolutely loves it! The craftsmanship is exquisite and
                      the packaging was so elegant. Will definitely be
                      purchasing more pieces from Phuler.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="flex text-amber-400 mr-2">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>☆</span>
                        </div>
                        <h4 className="font-medium">Gorgeous but Delicate</h4>
                      </div>
                      <span className="text-sm text-gray-500">1 month ago</span>
                    </div>
                    <p className="text-sm mb-2">
                      <span className="font-medium">Anjali R.</span> - Verified
                      Buyer
                    </p>
                    <p className="text-gray-700">
                      The design is absolutely stunning and I get compliments
                      every time I wear it. My only concern is that it feels
                      quite delicate, so I'm careful when wearing it. But the
                      beauty makes it worth it!
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="flex text-amber-400 mr-2">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>
                        <h4 className="font-medium">Perfect Gift</h4>
                      </div>
                      <span className="text-sm text-gray-500">2 weeks ago</span>
                    </div>
                    <p className="text-sm mb-2">
                      <span className="font-medium">Priya M.</span> - Verified
                      Buyer
                    </p>
                    <p className="text-gray-700">
                      I bought this as an anniversary gift for my wife and she
                      was thrilled! The quality is excellent and it came in
                      beautiful packaging. The customer service was also
                      top-notch - they helped me pick the perfect piece.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="btn-secondary">Load More Reviews</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Size Guide and Virtual Try-On */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <SizeGuide category={product.category} />
          <VirtualTryOn product={product} />
        </div>

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-medium mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
