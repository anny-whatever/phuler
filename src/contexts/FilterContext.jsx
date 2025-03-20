import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    categories: [],
    collections: [],
    materials: [],
    onSale: false,
    newArrivals: false,
    bestsellers: false,
  });

  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 10000,
  });

  const [sortBy, setSortBy] = useState("featured");

  const [collapsedSections, setCollapsedSections] = useState({
    category: false,
    price: false,
    collection: false,
    material: false,
    other: false,
  });

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
    setPriceRange((prev) => ({
      ...prev,
      [bound]: value,
    }));
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
