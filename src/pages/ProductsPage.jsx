// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Grid,
  List,
  SlidersHorizontal,
  Search,
  ChevronDown,
  ArrowUpDown,
  X,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import { useFilter } from "../contexts/FilterContext";

// Import dummy data
import { allProducts } from "../data/products";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const { filters, priceRange, sortBy, updateSortBy } = useFilter();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Set initial filter based on URL params
  useEffect(() => {
    // In a real app, you'd fetch products from an API here
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setProducts(allProducts);
      setIsLoading(false);
    }, 500);

    // Apply any category/collection filter from URL
    const categoryParam = searchParams.get("category");
    const collectionParam = searchParams.get("collection");

    if (categoryParam) {
      // Handle category filtering logic
    }

    if (collectionParam) {
      // Handle collection filtering logic
    }
  }, [searchParams]);

  // Apply filters whenever filters, price range, or sort option changes
  useEffect(() => {
    let result = [...products];

    // Apply search filter if query exists
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.collection.toLowerCase().includes(query) ||
          product.shortDescription.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (filters.categories.length > 0) {
      result = result.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Apply collection filter
    if (filters.collections.length > 0) {
      result = result.filter((product) =>
        filters.collections.includes(product.collection)
      );
    }

    // Apply material filter
    if (filters.materials.length > 0) {
      result = result.filter((product) =>
        filters.materials.includes(product.material)
      );
    }

    // Apply price range filter
    result = result.filter((product) => {
      const price = product.salePrice || product.price;
      return price >= priceRange.min && price <= priceRange.max;
    });

    // Apply other filters
    if (filters.onSale) {
      result = result.filter((product) => product.salePrice !== null);
    }

    if (filters.newArrivals) {
      result = result.filter((product) => product.isNew);
    }

    if (filters.bestsellers) {
      result = result.filter((product) => product.isBestseller);
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low-high":
        result.sort(
          (a, b) => (a.salePrice || a.price) - (b.salePrice || b.price)
        );
        break;
      case "price-high-low":
        result.sort(
          (a, b) => (b.salePrice || b.price) - (a.salePrice || a.price)
        );
        break;
      case "newest":
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "bestselling":
        result.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        break;
      case "top-rated":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "featured":
      default:
        // Featured products are already sorted
        break;
    }

    setFilteredProducts(result);
  }, [products, filters, priceRange, sortBy, searchQuery]);

  // Get active sort label
  const getActiveSortLabel = () => {
    switch (sortBy) {
      case "price-low-high":
        return "Price: Low to High";
      case "price-high-low":
        return "Price: High to Low";
      case "newest":
        return "Newest";
      case "bestselling":
        return "Best Selling";
      case "top-rated":
        return "Top Rated";
      case "featured":
        return "Featured";
      default:
        return "Featured";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Top section with title and search */}
        <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
          <h1 className="font-serif text-3xl font-medium text-gray-900">
            Shop All Products
          </h1>

          <div className="flex items-center gap-3">
            {/* Search Button / Input */}
            <div className="relative">
              <AnimatePresence>
                {isSearchOpen ? (
                  <motion.div
                    initial={{ width: 40, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 40, opacity: 0 }}
                    className="flex items-center"
                  >
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full py-2 pr-8 text-sm border border-gray-200 rounded-full pl-9 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      autoFocus
                    />
                    <Search
                      size={16}
                      className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2"
                    />
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="absolute text-gray-400 -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
                    >
                      <X size={16} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.button
                    onClick={() => setIsSearchOpen(true)}
                    className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors bg-white border border-gray-200 rounded-full shadow-sm hover:text-emerald-600 hover:border-emerald-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Search size={18} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* View Toggle - Desktop Only */}
            <div className="hidden overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm md:flex">
              <button
                onClick={() => setIsGridView(true)}
                className={`p-2.5 transition-colors ${
                  isGridView
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
                aria-label="Grid view"
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-2.5 transition-colors ${
                  !isGridView
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
                aria-label="List view"
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Sidebar - Desktop Only */}
          <div className="flex-shrink-0 hidden md:block md:w-64 lg:w-72">
            <div className="sticky top-28">
              <FilterSidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Sort Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 bg-white border border-gray-100 shadow-sm rounded-xl">
              <div className="flex items-center gap-3">
                {/* Mobile Only - Filter Toggle */}
                <div className="md:hidden">
                  <FilterSidebar />
                </div>

                {/* Results count */}
                <p className="text-sm text-gray-600">
                  <span className="font-medium">{filteredProducts.length}</span>{" "}
                  products
                </p>
              </div>

              {/* Sort Dropdown */}
              <div className="relative z-20 group">
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 transition-colors hover:text-emerald-700">
                  <ArrowUpDown size={14} className="opacity-70" />
                  <span>Sort: {getActiveSortLabel()}</span>
                  <ChevronDown
                    size={14}
                    className="transition-transform group-hover:rotate-180"
                  />
                </button>

                <div className="absolute right-0 invisible mt-1 overflow-hidden transition-all duration-200 origin-top-right transform translate-y-2 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 min-w-48 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  <div className="py-1">
                    {[
                      { id: "featured", label: "Featured" },
                      { id: "newest", label: "Newest" },
                      { id: "bestselling", label: "Best Selling" },
                      { id: "top-rated", label: "Top Rated" },
                      { id: "price-low-high", label: "Price: Low to High" },
                      { id: "price-high-low", label: "Price: High to Low" },
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => updateSortBy(option.id)}
                        className={`w-full text-left px-4 py-2 text-sm ${
                          sortBy === option.id
                            ? "bg-emerald-50 text-emerald-700 font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {isLoading ? (
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden bg-white shadow-sm rounded-xl animate-pulse"
                  >
                    <div className="bg-gray-200 aspect-square"></div>
                    <div className="p-4 space-y-3">
                      <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                      <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
                      <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="p-8 text-center bg-white border border-gray-100 shadow-sm rounded-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-full">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="mb-2 text-xl font-medium">No products found</h3>
                <p className="max-w-md mx-auto mb-6 text-gray-600">
                  We couldn't find any products that match your current filters
                  or search terms. Try adjusting your filters or browse our
                  categories below.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchOpen(false);
                  }}
                  className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div
                className={
                  isGridView
                    ? "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
                    : "space-y-6"
                }
              >
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProductCard
                        key={product.id}
                        product={product}
                        layout={isGridView ? "grid" : "list"}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* No results message will appear in the else statement above */}

            {/* Pagination (static for demo) */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="inline-flex items-center bg-white border border-gray-200 rounded-lg shadow-sm">
                  <button className="px-3 py-2 text-sm text-gray-400 border-r">
                    Previous
                  </button>
                  <button className="px-3 py-2 text-sm text-white bg-emerald-600">
                    1
                  </button>
                  <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-2 text-sm text-gray-700 border-l hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
