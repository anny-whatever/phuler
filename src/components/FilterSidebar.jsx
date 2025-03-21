// src/components/FilterSidebar.jsx - Fixed version
import React, { useState, useEffect } from "react";
import { useFilter } from "../contexts/FilterContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  X,
  Sliders,
  Tag,
  Check,
  RefreshCw,
} from "lucide-react";

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

  // Local state for price range sliders to prevent filtering during drag
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

  // Track whether user is currently dragging the slider
  const [isDragging, setIsDragging] = useState(false);

  // State for mobile filter drawer
  const [isMobileFiltersVisible, setIsMobileFiltersVisible] = useState(false);

  // Count active filters
  const activeFilterCount =
    filters.categories.length +
    filters.collections.length +
    filters.materials.length +
    (filters.onSale ? 1 : 0) +
    (filters.newArrivals ? 1 : 0) +
    (filters.bestsellers ? 1 : 0) +
    (priceRange.min > 0 || priceRange.max < 10000 ? 1 : 0);

  // Update local price range when the context price range changes
  // BUT ONLY if user is not currently dragging the slider
  useEffect(() => {
    if (!isDragging) {
      setLocalPriceRange(priceRange);
    }
  }, [priceRange, isDragging]);

  // Handle slider change without immediately updating filters
  const handleSliderChange = (bound, value) => {
    setLocalPriceRange((prev) => ({
      ...prev,
      [bound]: parseInt(value),
    }));
  };

  // Handle slider drag start
  const handleSliderDragStart = () => {
    setIsDragging(true);
  };

  // Handle slider drag end
  const handleSliderDragEnd = () => {
    // Set a small timeout to ensure drag is complete
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  // Update actual price range when Apply button is clicked
  const handleSliderCommit = () => {
    updatePriceRange("min", localPriceRange.min);
    updatePriceRange("max", localPriceRange.max);
  };

  // Update local state for price range sliders without applying filter
  const handleInputChange = (bound, value) => {
    const parsedValue = parseInt(value) || 0;
    setLocalPriceRange((prev) => ({
      ...prev,
      [bound]: parsedValue,
    }));
  };

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

  // Animation variants
  const sectionVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
        opacity: { delay: 0.1 },
      },
    },
  };

  const mobileDrawerVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
  };

  // Calculate the percentage of the price range slider
  const getPercentage = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };

  // Format a price value for display
  const formatPrice = (value) => {
    return `₹${value.toLocaleString()}`;
  };

  // The circular checkbox component for a more modern look
  const CircularCheckbox = ({ checked, onChange, id }) => (
    <motion.button
      onClick={onChange}
      className={`relative w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
        checked
          ? "border-emerald-600 bg-emerald-600"
          : "border-gray-300 bg-white"
      }`}
      whileTap={{ scale: 0.9 }}
      aria-checked={checked}
      role="checkbox"
      aria-labelledby={`label-${id}`}
    >
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
            className="text-white"
          >
            <Check size={12} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );

  // The filter section component
  const FilterSection = ({ title, sectionId, children }) => (
    <div className="pb-4 mb-4 border-b border-gray-100 last:mb-0 last:pb-0 last:border-0">
      <button
        className="flex items-center justify-between w-full py-1 mb-3 font-medium text-left text-gray-800 transition-colors hover:text-emerald-700 group"
        onClick={() => toggleSection(sectionId)}
        aria-expanded={!collapsedSections[sectionId]}
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: collapsedSections[sectionId] ? 0 : 180 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 group-hover:text-emerald-700"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {!collapsedSections[sectionId] && (
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  // Active filter pills for showing selected options
  const ActiveFilterPills = () => {
    if (activeFilterCount === 0) return null;

    return (
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {filters.categories.map((categoryId) => {
            const category = categories.find((c) => c.id === categoryId);
            return (
              <FilterPill
                key={`category-${categoryId}`}
                label={category.name}
                onRemove={() => updateFilter("categories", categoryId)}
              />
            );
          })}

          {filters.collections.map((collectionId) => {
            const collection = collections.find((c) => c.id === collectionId);
            return (
              <FilterPill
                key={`collection-${collectionId}`}
                label={collection.name}
                onRemove={() => updateFilter("collections", collectionId)}
              />
            );
          })}

          {filters.materials.map((materialId) => {
            const material = materials.find((m) => m.id === materialId);
            return (
              <FilterPill
                key={`material-${materialId}`}
                label={material.name}
                onRemove={() => updateFilter("materials", materialId)}
              />
            );
          })}

          {filters.onSale && (
            <FilterPill
              label="On Sale"
              onRemove={() => updateFilter("onSale", false)}
            />
          )}

          {filters.newArrivals && (
            <FilterPill
              label="New Arrivals"
              onRemove={() => updateFilter("newArrivals", false)}
            />
          )}

          {filters.bestsellers && (
            <FilterPill
              label="Bestsellers"
              onRemove={() => updateFilter("bestsellers", false)}
            />
          )}

          {(priceRange.min > 0 || priceRange.max < 10000) && (
            <FilterPill
              label={`${formatPrice(priceRange.min)} - ${formatPrice(
                priceRange.max
              )}`}
              onRemove={() => {
                updatePriceRange("min", 0);
                updatePriceRange("max", 10000);
              }}
            />
          )}
        </div>
      </div>
    );
  };

  // Individual filter pill
  const FilterPill = ({ label, onRemove }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="bg-emerald-50 text-emerald-700 text-xs px-3 py-1.5 rounded-full flex items-center group"
    >
      <span className="mr-1">{label}</span>
      <button
        onClick={onRemove}
        className="flex items-center justify-center w-4 h-4 transition-colors rounded-full bg-emerald-100 group-hover:bg-emerald-200"
        aria-label={`Remove ${label} filter`}
      >
        <X size={10} />
      </button>
    </motion.div>
  );

  // The main filter component content
  const FilterContent = () => (
    <>
      <div className="flex items-center justify-between mb-4">
        <h3 className="flex items-center text-lg font-medium">
          <Sliders size={16} className="mr-2 opacity-60" />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="flex items-center justify-center w-5 h-5 ml-2 text-xs text-white rounded-full bg-emerald-600">
              {activeFilterCount}
            </span>
          )}
        </h3>

        <motion.button
          onClick={resetFilters}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center text-sm text-emerald-700 hover:text-emerald-800"
          disabled={activeFilterCount === 0}
        >
          <RefreshCw size={14} className="mr-1" />
          <span>Reset</span>
        </motion.button>
      </div>

      <ActiveFilterPills />

      {/* Category Filter */}
      <FilterSection title="Category" sectionId="category">
        <div className="space-y-2.5 pt-1 pl-1">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center cursor-pointer group"
            >
              <CircularCheckbox
                checked={filters.categories.includes(category.id)}
                onChange={() => updateFilter("categories", category.id)}
                id={`category-${category.id}`}
              />
              <span
                id={`label-category-${category.id}`}
                className={`ml-2.5 text-sm transition-colors ${
                  filters.categories.includes(category.id)
                    ? "text-emerald-700 font-medium"
                    : "text-gray-700 group-hover:text-emerald-700"
                }`}
              >
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Range Filter */}
      <FilterSection title="Price Range" sectionId="price">
        <div className="px-1">
          {/* Price labels */}
          <div className="flex justify-between mb-2 text-sm text-gray-600">
            <span>{formatPrice(localPriceRange.min)}</span>
            <span>{formatPrice(localPriceRange.max)}</span>
          </div>

          {/* Price range notification */}
          {(localPriceRange.min !== priceRange.min ||
            localPriceRange.max !== priceRange.max) && (
            <div className="mb-2 text-xs text-center text-emerald-700">
              Adjust sliders and click Apply to update results
            </div>
          )}

          {/* Custom styled slider track */}
          <div className="relative h-1.5 bg-gray-200 rounded-full mb-4 mt-5">
            <div
              className="absolute h-full rounded-full bg-emerald-500"
              style={{
                left: `${getPercentage(localPriceRange.min, 0, 10000)}%`,
                right: `${100 - getPercentage(localPriceRange.max, 0, 10000)}%`,
              }}
            ></div>

            {/* Min thumb handle */}
            <input
              type="range"
              min="0"
              max="10000"
              value={localPriceRange.min}
              onChange={(e) => handleSliderChange("min", e.target.value)}
              onMouseDown={handleSliderDragStart}
              onMouseUp={handleSliderDragEnd}
              onTouchStart={handleSliderDragStart}
              onTouchEnd={handleSliderDragEnd}
              className="absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
            />

            {/* Max thumb handle */}
            <input
              type="range"
              min="0"
              max="10000"
              value={localPriceRange.max}
              onChange={(e) => handleSliderChange("max", e.target.value)}
              onMouseDown={handleSliderDragStart}
              onMouseUp={handleSliderDragEnd}
              onTouchStart={handleSliderDragStart}
              onTouchEnd={handleSliderDragEnd}
              className="absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
            />
          </div>

          {/* Price input fields */}
          <div className="flex items-center gap-2 mt-6">
            <div className="relative flex-1">
              <input
                type="number"
                value={localPriceRange.min}
                onChange={(e) => handleInputChange("min", e.target.value)}
                onFocus={handleSliderDragStart}
                onBlur={handleSliderDragEnd}
                className="w-full px-3 py-2 pl-6 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                min="0"
                max={localPriceRange.max - 500}
              />
              <span className="absolute text-xs text-gray-500 -translate-y-1/2 left-3 top-1/2">
                ₹
              </span>
            </div>

            <span className="text-gray-400">to</span>

            <div className="relative flex-1">
              <input
                type="number"
                value={localPriceRange.max}
                onChange={(e) => handleInputChange("max", e.target.value)}
                onFocus={handleSliderDragStart}
                onBlur={handleSliderDragEnd}
                className="w-full px-3 py-2 pl-6 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                min={localPriceRange.min + 500}
                max="10000"
              />
              <span className="absolute text-xs text-gray-500 -translate-y-1/2 left-3 top-1/2">
                ₹
              </span>
            </div>
          </div>

          {/* Apply button */}
          <button
            onClick={handleSliderCommit}
            className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium transition-colors rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-700"
          >
            Apply Price Range
          </button>
        </div>
      </FilterSection>

      {/* Collection Filter */}
      <FilterSection title="Collection" sectionId="collection">
        <div className="space-y-2.5 pt-1 pl-1">
          {collections.map((collection) => (
            <label
              key={collection.id}
              className="flex items-center cursor-pointer group"
            >
              <CircularCheckbox
                checked={filters.collections.includes(collection.id)}
                onChange={() => updateFilter("collections", collection.id)}
                id={`collection-${collection.id}`}
              />
              <span
                id={`label-collection-${collection.id}`}
                className={`ml-2.5 text-sm transition-colors ${
                  filters.collections.includes(collection.id)
                    ? "text-emerald-700 font-medium"
                    : "text-gray-700 group-hover:text-emerald-700"
                }`}
              >
                {collection.name}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Material Filter */}
      <FilterSection title="Material" sectionId="material">
        <div className="space-y-2.5 pt-1 pl-1">
          {materials.map((material) => (
            <label
              key={material.id}
              className="flex items-center cursor-pointer group"
            >
              <CircularCheckbox
                checked={filters.materials.includes(material.id)}
                onChange={() => updateFilter("materials", material.id)}
                id={`material-${material.id}`}
              />
              <span
                id={`label-material-${material.id}`}
                className={`ml-2.5 text-sm transition-colors ${
                  filters.materials.includes(material.id)
                    ? "text-emerald-700 font-medium"
                    : "text-gray-700 group-hover:text-emerald-700"
                }`}
              >
                {material.name}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Additional Filters */}
      <FilterSection title="Other Filters" sectionId="other">
        <div className="space-y-2.5 pt-1 pl-1">
          <label className="flex items-center cursor-pointer group">
            <CircularCheckbox
              checked={filters.onSale}
              onChange={() => updateFilter("onSale", !filters.onSale)}
              id="filter-sale"
            />
            <span
              id="label-filter-sale"
              className={`ml-2.5 text-sm transition-colors ${
                filters.onSale
                  ? "text-emerald-700 font-medium"
                  : "text-gray-700 group-hover:text-emerald-700"
              }`}
            >
              On Sale
            </span>
          </label>

          <label className="flex items-center cursor-pointer group">
            <CircularCheckbox
              checked={filters.newArrivals}
              onChange={() => updateFilter("newArrivals", !filters.newArrivals)}
              id="filter-new"
            />
            <span
              id="label-filter-new"
              className={`ml-2.5 text-sm transition-colors ${
                filters.newArrivals
                  ? "text-emerald-700 font-medium"
                  : "text-gray-700 group-hover:text-emerald-700"
              }`}
            >
              New Arrivals
            </span>
          </label>

          <label className="flex items-center cursor-pointer group">
            <CircularCheckbox
              checked={filters.bestsellers}
              onChange={() => updateFilter("bestsellers", !filters.bestsellers)}
              id="filter-bestsellers"
            />
            <span
              id="label-filter-bestsellers"
              className={`ml-2.5 text-sm transition-colors ${
                filters.bestsellers
                  ? "text-emerald-700 font-medium"
                  : "text-gray-700 group-hover:text-emerald-700"
              }`}
            >
              Bestsellers
            </span>
          </label>
        </div>
      </FilterSection>
    </>
  );

  // Mobile filter trigger button
  const MobileFilterButton = () => (
    <motion.button
      onClick={() => setIsMobileFiltersVisible(true)}
      className="flex items-center px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg shadow-sm md:hidden"
      whileTap={{ scale: 0.97 }}
    >
      <Sliders size={14} className="mr-1.5" />
      <span>Filters</span>
      {activeFilterCount > 0 && (
        <span className="ml-1.5 bg-emerald-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
          {activeFilterCount}
        </span>
      )}
    </motion.button>
  );

  return (
    <>
      {/* Desktop filter sidebar */}
      <div className="hidden p-5 bg-white border border-gray-100 shadow-sm rounded-xl md:block">
        <FilterContent />
      </div>

      {/* Mobile filter button */}
      <MobileFilterButton />

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {isMobileFiltersVisible && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersVisible(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] md:hidden flex flex-col"
              variants={mobileDrawerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="flex items-center text-lg font-medium">
                  <Sliders size={16} className="mr-2 opacity-60" />
                  <span>Filters</span>
                  {activeFilterCount > 0 && (
                    <span className="flex items-center justify-center w-5 h-5 ml-2 text-xs text-white rounded-full bg-emerald-600">
                      {activeFilterCount}
                    </span>
                  )}
                </h3>
                <div className="flex items-center gap-3">
                  <motion.button
                    onClick={resetFilters}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center text-sm text-emerald-700 hover:text-emerald-800"
                    disabled={activeFilterCount === 0}
                  >
                    <RefreshCw size={14} className="mr-1" />
                    <span>Reset</span>
                  </motion.button>
                  <button
                    onClick={() => setIsMobileFiltersVisible(false)}
                    className="text-gray-500 p-1.5 hover:bg-gray-100 rounded-full"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-4 overflow-y-auto">
                <ActiveFilterPills />
                <FilterContent />
              </div>

              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <motion.button
                  onClick={() => setIsMobileFiltersVisible(false)}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 bg-emerald-600 text-white rounded-lg font-medium flex items-center justify-center"
                >
                  <Tag size={16} className="mr-2" />
                  <span>Apply Filters</span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilterSidebar;
