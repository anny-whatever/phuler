// src/contexts/FilterContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize filters from URL params if present
  const initializeFiltersFromURL = () => {
    const categoryParam = searchParams.get("category");
    const collectionParam = searchParams.get("collection");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const onSale = searchParams.get("onSale");
    const newArrivals = searchParams.get("new");
    const bestsellers = searchParams.get("bestsellers");
    const materialParam = searchParams.get("material");

    const initialFilters = {
      categories: categoryParam ? [categoryParam] : [],
      collections: collectionParam ? [collectionParam] : [],
      materials: materialParam ? materialParam.split(",") : [],
      onSale: onSale === "true",
      newArrivals: newArrivals === "true",
      bestsellers: bestsellers === "true",
    };

    const initialPriceRange = {
      min: minPrice ? parseInt(minPrice) : 0,
      max: maxPrice ? parseInt(maxPrice) : 10000,
    };

    return { initialFilters, initialPriceRange };
  };

  const { initialFilters, initialPriceRange } = initializeFiltersFromURL();

  const [filters, setFilters] = useState(initialFilters);
  const [priceRange, setPriceRange] = useState(initialPriceRange);
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "featured");
  const [collapsedSections, setCollapsedSections] = useState({
    category: false,
    price: false,
    collection: false,
    material: false,
    other: false,
  });

  // Sync URL with filters
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);

    // Clear existing filter params
    [
      "category",
      "collection",
      "material",
      "minPrice",
      "maxPrice",
      "onSale",
      "new",
      "bestsellers",
      "sort",
    ].forEach((param) => {
      newParams.delete(param);
    });

    // Add current filters to URL
    if (filters.categories.length === 1) {
      newParams.set("category", filters.categories[0]);
    }

    if (filters.collections.length === 1) {
      newParams.set("collection", filters.collections[0]);
    }

    if (filters.materials.length > 0) {
      newParams.set("material", filters.materials.join(","));
    }

    if (priceRange.min > 0) {
      newParams.set("minPrice", priceRange.min.toString());
    }

    if (priceRange.max < 10000) {
      newParams.set("maxPrice", priceRange.max.toString());
    }

    if (filters.onSale) {
      newParams.set("onSale", "true");
    }

    if (filters.newArrivals) {
      newParams.set("new", "true");
    }

    if (filters.bestsellers) {
      newParams.set("bestsellers", "true");
    }

    if (sortBy !== "featured") {
      newParams.set("sort", sortBy);
    }

    // Only update if there are actual changes to prevent loops
    if (newParams.toString() !== searchParams.toString()) {
      setSearchParams(newParams, { replace: true });
    }
  }, [filters, priceRange, sortBy, searchParams, setSearchParams]);

  // Toggle filter section collapse
  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Update filter values
  const updateFilter = (filterType, value) => {
    if (Array.isArray(filters[filterType])) {
      // For array filters (categories, collections, etc.)
      setFilters((prevFilters) => {
        const currentValues = prevFilters[filterType];
        if (currentValues.includes(value)) {
          // Remove value if already selected
          return {
            ...prevFilters,
            [filterType]: currentValues.filter((item) => item !== value),
          };
        } else {
          // Add value if not selected
          return {
            ...prevFilters,
            [filterType]: [...currentValues, value],
          };
        }
      });
    } else {
      // For boolean filters (onSale, newArrivals, etc.)
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: value,
      }));
    }
  };

  // Update price range
  const updatePriceRange = (bound, value) => {
    setPriceRange((prev) => {
      // Ensure min doesn't exceed max and max isn't below min
      if (bound === "min" && value > prev.max - 500) {
        value = prev.max - 500;
      } else if (bound === "max" && value < prev.min + 500) {
        value = prev.min + 500;
      }

      // Ensure values are within range
      value = Math.max(0, Math.min(10000, value));

      return {
        ...prev,
        [bound]: value,
      };
    });
  };

  // Update sort option
  const updateSortBy = (value) => {
    setSortBy(value);
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      categories: [],
      collections: [],
      materials: [],
      onSale: false,
      newArrivals: false,
      bestsellers: false,
    });

    setPriceRange({
      min: 0,
      max: 10000,
    });

    setSortBy("featured");
  };

  const value = {
    filters,
    updateFilter,
    priceRange,
    updatePriceRange,
    sortBy,
    updateSortBy,
    resetFilters,
    collapsedSections,
    toggleSection,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
