// File: components/FilterSidebar.js
import React from "react";
import { useFilter } from "../contexts/FilterContext";
import { ChevronDown, ChevronUp } from "lucide-react";

const FilterSidebar = () => {
  const {
    filters,
    updateFilter,
    resetFilters,
    priceRange,
    updatePriceRange,
    collapsedSections,
    toggleSection,
  } = useFilter();

  const categories = [
    { id: "necklaces", name: "Necklaces" },
    { id: "earrings", name: "Earrings" },
    { id: "bracelets", name: "Bracelets" },
    { id: "rings", name: "Rings" },
    { id: "anklets", name: "Anklets" },
  ];

  const collections = [
    { id: "spring-bloom", name: "Spring Bloom" },
    { id: "summer-garden", name: "Summer Garden" },
    { id: "autumn-leaves", name: "Autumn Leaves" },
    { id: "winter-frost", name: "Winter Frost" },
    { id: "tropical-paradise", name: "Tropical Paradise" },
  ];

  const materials = [
    { id: "silver", name: "Sterling Silver" },
    { id: "gold", name: "Gold Plated" },
    { id: "rose-gold", name: "Rose Gold" },
    { id: "brass", name: "Brass" },
    { id: "pearl", name: "Pearl" },
    { id: "gemstone", name: "Gemstones" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-lg">Filters</h3>
        <button
          onClick={resetFilters}
          className="text-sm text-emerald-700 hover:underline"
        >
          Reset All
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <button
          className="flex justify-between items-center w-full text-left font-medium mb-2"
          onClick={() => toggleSection("category")}
        >
          <span>Category</span>
          {collapsedSections.category ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronUp size={16} />
          )}
        </button>

        {!collapsedSections.category && (
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category.id)}
                  onChange={() => updateFilter("categories", category.id)}
                  className="rounded text-emerald-700 focus:ring-emerald-700 mr-2"
                />
                <span>{category.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <button
          className="flex justify-between items-center w-full text-left font-medium mb-2"
          onClick={() => toggleSection("price")}
        >
          <span>Price Range</span>
          {collapsedSections.price ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronUp size={16} />
          )}
        </button>

        {!collapsedSections.price && (
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>₹{priceRange.min}</span>
              <span>₹{priceRange.max}</span>
            </div>

            <div className="flex space-x-4">
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={priceRange.min}
                onChange={(e) =>
                  updatePriceRange("min", parseInt(e.target.value))
                }
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={priceRange.max}
                onChange={(e) =>
                  updatePriceRange("max", parseInt(e.target.value))
                }
                className="w-full"
              />
            </div>

            <div className="flex items-center mt-2">
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) =>
                  updatePriceRange("min", parseInt(e.target.value))
                }
                className="w-20 px-2 py-1 border border-gray-300 rounded"
                min="0"
              />
              <span className="mx-2">to</span>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) =>
                  updatePriceRange("max", parseInt(e.target.value))
                }
                className="w-20 px-2 py-1 border border-gray-300 rounded"
                min="0"
              />
            </div>
          </div>
        )}
      </div>

      {/* Collection Filter */}
      <div className="mb-6">
        <button
          className="flex justify-between items-center w-full text-left font-medium mb-2"
          onClick={() => toggleSection("collection")}
        >
          <span>Collection</span>
          {collapsedSections.collection ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronUp size={16} />
          )}
        </button>

        {!collapsedSections.collection && (
          <div className="space-y-2">
            {collections.map((collection) => (
              <label key={collection.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.collections.includes(collection.id)}
                  onChange={() => updateFilter("collections", collection.id)}
                  className="rounded text-emerald-700 focus:ring-emerald-700 mr-2"
                />
                <span>{collection.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <button
          className="flex justify-between items-center w-full text-left font-medium mb-2"
          onClick={() => toggleSection("material")}
        >
          <span>Material</span>
          {collapsedSections.material ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronUp size={16} />
          )}
        </button>

        {!collapsedSections.material && (
          <div className="space-y-2">
            {materials.map((material) => (
              <label key={material.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.materials.includes(material.id)}
                  onChange={() => updateFilter("materials", material.id)}
                  className="rounded text-emerald-700 focus:ring-emerald-700 mr-2"
                />
                <span>{material.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Additional Filters */}
      <div>
        <button
          className="flex justify-between items-center w-full text-left font-medium mb-2"
          onClick={() => toggleSection("other")}
        >
          <span>Other Filters</span>
          {collapsedSections.other ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronUp size={16} />
          )}
        </button>

        {!collapsedSections.other && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.onSale}
                onChange={() => updateFilter("onSale", !filters.onSale)}
                className="rounded text-emerald-700 focus:ring-emerald-700 mr-2"
              />
              <span>On Sale</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.newArrivals}
                onChange={() =>
                  updateFilter("newArrivals", !filters.newArrivals)
                }
                className="rounded text-emerald-700 focus:ring-emerald-700 mr-2"
              />
              <span>New Arrivals</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.bestsellers}
                onChange={() =>
                  updateFilter("bestsellers", !filters.bestsellers)
                }
                className="rounded text-emerald-700 focus:ring-emerald-700 mr-2"
              />
              <span>Bestsellers</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
