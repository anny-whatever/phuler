import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const HomeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax values for different elements
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Use springs for smoother motion
  const smoothTitleY = useSpring(titleY, { damping: 20, stiffness: 100 });
  const smoothImageY = useSpring(imageY, { damping: 20, stiffness: 100 });
  const smoothOpacity = useSpring(opacityValue, {
    damping: 20,
    stiffness: 100,
  });

  // Showcase product categories
  const showcaseItems = [
    {
      id: "necklaces",
      title: "Necklaces",
      subtitle: "Delicate nature-inspired pendants",
      image:
        "https://images.pexels.com/photos/7841117/pexels-photo-7841117.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#047857",
      link: "/products?category=necklaces",
    },
    {
      id: "earrings",
      title: "Earrings",
      subtitle: "Captivating botanical designs",
      image:
        "https://images.pexels.com/photos/10303119/pexels-photo-10303119.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#065f46",
      link: "/products?category=earrings",
    },
    {
      id: "bracelets",
      title: "Bracelets",
      subtitle: "Elegant floral-inspired pieces",
      image:
        "https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#064e3b",
      link: "/products?category=bracelets",
    },
  ];

  // Auto-rotate through showcase items
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [showcaseItems.length]);

  // Handle manual navigation
  const goToItem = (index) => {
    setActiveIndex(index);
  };

  // Scroll down function
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen pt-20 overflow-hidden bg-gray-50 lg:pt-0 lg:pl-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-50 via-white to-cream-50" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-emerald-100 blur-3xl opacity-30"
          animate={{
            x: [20, -20, 20],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute rounded-full bottom-1/3 right-1/4 w-80 h-80 bg-emerald-50 blur-3xl opacity-30"
          animate={{
            x: [-20, 30, -20],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content container */}
      <div className="container relative z-10 flex items-center h-screen px-4 mx-auto">
        <div className="flex flex-col items-center w-full pt-0 lg:flex-row lg:items-start lg:pt-0">
          {/* Hero text */}
          <motion.div
            className="z-10 mb-10 lg:w-1/2 lg:mb-0"
            style={{ y: smoothTitleY, opacity: smoothOpacity }}
          >
            <motion.h1
              className="mb-6 text-5xl font-medium leading-tight tracking-tight text-gray-900 sm:text-6xl md:text-7xl font-display"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
            >
              Nature's <br />
              <span className="text-emerald-700">Beauty</span>,<br />
              Transformed
            </motion.h1>

            <motion.p
              className="max-w-md mb-8 text-base text-gray-600 md:text-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
            >
              Handcrafted floral-inspired jewelry that brings a touch of
              nature's elegance to your everyday style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.6,
              }}
            >
              <Link
                to="/products"
                className="relative inline-flex items-center group"
              >
                <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-70 blur group-hover:opacity-100 transition duration-700"></span>
                <span className="relative flex items-center px-8 py-4 font-medium bg-white rounded-full text-emerald-800">
                  <span>Explore Collection</span>
                  <ArrowUpRight
                    size={18}
                    className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating showcase */}
          <motion.div
            className="relative z-10 lg:w-1/2"
            style={{ y: smoothImageY, opacity: smoothOpacity }}
          >
            <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              {/* Background color overlay */}
              <div
                className="absolute inset-0 z-10 transition-colors duration-700 opacity-20"
                style={{ backgroundColor: showcaseItems[activeIndex].color }}
              />

              {/* Rotating images */}
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  {showcaseItems.map(
                    (item, idx) =>
                      activeIndex === idx && (
                        <motion.div
                          key={item.id}
                          className="absolute inset-0"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-full h-full"
                          />
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>

              {/* Text overlay */}
              <motion.div
                className="absolute z-20 text-white left-6 bottom-6 right-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="mb-1 text-2xl font-medium font-display">
                  {showcaseItems[activeIndex].title}
                </h3>
                <p className="mb-4 text-sm text-white/80">
                  {showcaseItems[activeIndex].subtitle}
                </p>
                <Link
                  to={showcaseItems[activeIndex].link}
                  className="inline-flex items-center pb-1 text-sm font-medium transition-colors border-b border-white/50 hover:border-white"
                >
                  <span>View Collection</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </motion.div>

              {/* Navigation dots */}
              <div className="absolute z-20 flex space-x-2 top-6 right-6">
                {showcaseItems.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full ${
                      idx === activeIndex
                        ? "bg-white"
                        : "bg-white/40 hover:bg-white/70"
                    } transition-colors`}
                    onClick={() => goToItem(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Plus elements decoration */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <svg
                  className="absolute w-4 h-4 text-white top-4 left-4 opacity-30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className="absolute w-4 h-4 text-white bottom-4 right-20 opacity-30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute w-20 h-px rotate-45 bg-white top-1/4 right-10 opacity-20"></div>
                <div className="absolute w-16 h-px -rotate-45 bg-white bottom-1/3 left-6 opacity-20"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute text-center transform -translate-x-1/2 left-1/2 bottom-8"
          style={{ opacity: smoothOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button
            onClick={scrollDown}
            className="flex flex-col items-center text-gray-500 transition-colors hover:text-emerald-700"
            aria-label="Scroll down"
          >
            <span className="mb-2 text-xs tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
