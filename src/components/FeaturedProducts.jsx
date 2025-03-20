import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import ProductCard from "./ProductCard";

// Import dummy data
import { featuredProducts } from "../data/products";

const FeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // For drag behavior
  const x = useMotionValue(0);
  const controls = useAnimation();

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDragStart = (event, info) => {
    setDragStartX(info.point.x);
  };

  const handleDragEnd = (event, info) => {
    const distance = info.point.x - dragStartX;
    const threshold = 100; // Minimum drag distance to trigger slide change

    if (distance > threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (
      distance < -threshold &&
      activeIndex < Math.ceil(featuredProducts.length / 4) - 1
    ) {
      setActiveIndex(activeIndex + 1);
    }

    // Reset position
    controls.start({
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  const slideTo = (index) => {
    if (
      index >= 0 &&
      index < Math.ceil(featuredProducts.length / (isMobile ? 1 : 4))
    ) {
      setActiveIndex(index);
    }
  };

  const getSlideStyle = () => {
    const itemsPerPage = isMobile ? 1 : 4;
    const slideWidth = sliderRef.current ? sliderRef.current.offsetWidth : 0;
    return {
      transform: `translateX(-${activeIndex * slideWidth}px)`,
      transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
    };
  };

  const renderDotIndicators = () => {
    const totalPages = Math.ceil(featuredProducts.length / (isMobile ? 1 : 4));

    return (
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-emerald-700 w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => slideTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-clay-50">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay-300 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay-300 to-transparent"></div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-start justify-between mb-12 md:flex-row md:items-end">
          <div className="max-w-xl mb-6 md:mb-0">
            <FadeIn>
              <span className="inline-block mb-3 text-sm font-medium tracking-wider uppercase text-emerald-700">
                Curated Selection
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="section-heading">
                Featured <span className="text-emerald-700">Collections</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="max-w-2xl text-gray-600">
                Discover our most sought-after pieces, meticulously handcrafted
                to bring nature's beauty to your everyday style. Each piece
                tells a story of artisanal craftsmanship and botanical
                inspiration.
              </p>
            </FadeIn>
          </div>

          <div className="flex space-x-2">
            <FadeIn delay={0.3}>
              <button
                onClick={() => slideTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                className={`p-3 rounded-full border ${
                  activeIndex === 0
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-emerald-700 text-emerald-700 hover:bg-emerald-50"
                } transition-colors`}
                aria-label="Previous slide"
              >
                <ArrowLeft size={20} />
              </button>
            </FadeIn>

            <FadeIn delay={0.4}>
              <button
                onClick={() => slideTo(activeIndex + 1)}
                disabled={
                  activeIndex >=
                  Math.ceil(featuredProducts.length / (isMobile ? 1 : 4)) - 1
                }
                className={`p-3 rounded-full border ${
                  activeIndex >=
                  Math.ceil(featuredProducts.length / (isMobile ? 1 : 4)) - 1
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-emerald-700 text-emerald-700 hover:bg-emerald-50"
                } transition-colors`}
                aria-label="Next slide"
              >
                <ArrowRight size={20} />
              </button>
            </FadeIn>
          </div>
        </div>

        <div className="relative overflow-hidden" ref={sliderRef}>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x }}
          >
            <StaggerContainer staggerDelay={0.08} delay={0.3}>
              <div
                className="flex transition-transform duration-500"
                style={getSlideStyle()}
              >
                {featuredProducts.map((product) => (
                  <StaggerItem
                    key={product.id}
                    className={`${
                      isMobile ? "w-full" : "w-1/4"
                    } flex-shrink-0 px-3`}
                  >
                    <ProductCard product={product} />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </motion.div>
        </div>

        {renderDotIndicators()}

        <FadeIn delay={0.5}>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center font-medium transition-colors text-emerald-700 group hover:text-emerald-800"
            >
              <span className="pb-1 border-b border-current">
                View All Products
              </span>
              <ArrowRight
                size={16}
                className="ml-2 transition-transform transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedProducts;
