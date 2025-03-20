import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import { useFilter } from "../contexts/FilterContext";
import { Grid, List, SlidersHorizontal, X } from "lucide-react";

// Import dummy data
import { allProducts } from "../data/products";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const { filters, priceRange, sortBy, updateSortBy } = useFilter();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Set initial filter based on URL params
  useEffect(() => {
    // In a real app, you'd fetch products from an API here
    setProducts(allProducts);

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
      case "featured":
      default:
        // Featured products are already sorted
        break;
    }

    setFilteredProducts(result);
  }, [products, filters, priceRange, sortBy]);

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-medium mb-6">
          Shop All Products
        </h1>

        <div className="flex items-center justify-between mb-6">
          <button
            className="md:hidden flex items-center text-gray-800"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <SlidersHorizontal size={18} className="mr-1" />
            <span>Filters</span>
          </button>

          <div className="flex items-center">
            <div className="mr-4 hidden md:block">
              <span className="text-sm text-gray-600 mr-2">View:</span>
              <button
                className={`p-1 ${
                  isGridView ? "text-emerald-700" : "text-gray-400"
                }`}
                onClick={() => setIsGridView(true)}
              >
                <Grid size={20} />
              </button>
              <button
                className={`p-1 ${
                  !isGridView ? "text-emerald-700" : "text-gray-400"
                }`}
                onClick={() => setIsGridView(false)}
              >
                <List size={20} />
              </button>
            </div>

            <div>
              <span className="text-sm text-gray-600 mr-2">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => updateSortBy(e.target.value)}
                className="border border-gray-300 rounded-md p-1 text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar for desktop */}
          <div className="md:w-1/4 lg:w-1/5 hidden md:block md:pr-6">
            <FilterSidebar />
          </div>

          {/* Mobile filter sidebar */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
              <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg p-4 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-lg">Filters</h3>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Products Grid/List */}
          <div className="md:w-3/4 lg:w-4/5">
            {filteredProducts.length === 0 ? (
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or browse our categories below.
                </p>
                {/* Suggested categories would go here */}
              </div>
            ) : (
              <div
                className={
                  isGridView
                    ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    : "space-y-6"
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
