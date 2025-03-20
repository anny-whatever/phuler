import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { FadeIn } from "./animations";

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Ananya M.",
      role: "Fashion Enthusiast",
      quote:
        "I receive compliments every time I wear my Phuler necklace. The quality and craftsmanship are exceptional, and the packaging was so thoughtful! Each piece truly captures the essence of natural beauty.",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=64",
      rating: 5,
    },
    {
      id: 2,
      name: "Meera K.",
      role: "Loyal Customer",
      quote:
        "The earrings I purchased are even more beautiful in person. They're lightweight and comfortable to wear all day, and the floral design adds the perfect touch of elegance to any outfit. I'll definitely be back for more!",
      image:
        "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=64",
      rating: 5,
    },
    {
      id: 3,
      name: "Riya S.",
      role: "Gift Giver",
      quote:
        "I ordered the Summer Garden bracelet as a gift for my sister, and she absolutely loves it. The customer service was exceptional, and delivery was faster than expected! The attention to detail is remarkable.",
      image:
        "https://images.pexels.com/photos/1108116/pexels-photo-1108116.jpeg?auto=compress&cs=tinysrgb&w=64",
      rating: 5,
    },
  ];

  // Handle autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [currentIndex, autoplay]);

  // Handle slide navigation
  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Variants for animations
  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction === "right" ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction === "right" ? -1000 : 1000,
        opacity: 0,
      };
    },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-emerald-50">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-40 h-40 -top-5 -left-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 3C12 7.97 16.03 12 21 12C16.03 12 12 16.03 12 21C12 16.03 7.97 12 3 12C7.97 12 12 7.97 12 3Z"
              fill="#047857"
            />
          </svg>
        </div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 3C12 7.97 16.03 12 21 12C16.03 12 12 16.03 12 21C12 16.03 7.97 12 3 12C7.97 12 12 7.97 12 3Z"
              fill="#047857"
            />
          </svg>
        </div>
      </div>

      <div
        className="container relative px-4 mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="inline-block mb-3 text-sm font-medium tracking-wider uppercase text-emerald-700">
              Testimonials
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="max-w-2xl mx-auto section-heading">
              What Our <span className="text-emerald-700">Customers Say</span>
            </h2>
          </FadeIn>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute transform -translate-x-1/2 -top-14 left-8 text-emerald-300 opacity-30">
            <Quote size={180} strokeWidth={1} />
          </div>

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="relative z-10 p-8 bg-white rounded-2xl shadow-elegant md:p-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="object-cover w-16 h-16 border-4 border-white rounded-full shadow-md"
                  />
                </div>

                <blockquote className="max-w-2xl mb-6 font-serif text-lg italic text-gray-700 md:text-xl">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex mb-4 text-amber-400">
                  {Array.from({
                    length: testimonials[currentIndex].rating,
                  }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-emerald-700">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 md:px-0 md:left-[-60px] md:right-[-60px]">
            <motion.button
              onClick={prevSlide}
              className="flex items-center justify-center w-10 h-10 text-gray-500 bg-white rounded-full shadow-md md:w-12 md:h-12 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={20} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="flex items-center justify-center w-10 h-10 text-gray-500 bg-white rounded-full shadow-md md:w-12 md:h-12 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-emerald-700 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
