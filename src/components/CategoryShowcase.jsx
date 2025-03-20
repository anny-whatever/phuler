import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./animations";
import { useMouseParallax } from "../hooks/useMotion";

const CategoryShowcase = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, threshold: 0.2 });

  // Use the mouse parallax effect on decorative elements
  const [decorRef, decorStyles] = useMouseParallax(0.02);

  // Categories data with images, titles, and links
  const categories = [
    {
      id: "necklaces",
      title: "Necklaces",
      image:
        "https://images.pexels.com/photos/7841117/pexels-photo-7841117.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/products?category=necklaces",
      description: "From delicate chains to statement pendants",
    },
    {
      id: "earrings",
      title: "Earrings",
      image:
        "https://images.pexels.com/photos/10303119/pexels-photo-10303119.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/products?category=earrings",
      description: "Studs, hoops, and drops for every occasion",
    },
    {
      id: "bracelets",
      title: "Bracelets",
      image:
        "https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/products?category=bracelets",
      description: "Elegantly handcrafted pieces to adorn your wrist",
    },
  ];

  // GSAP-like scroll animation (simplified for this example)
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden" ref={containerRef}>
      {/* Background decorative elements */}
      <div
        ref={decorRef}
        style={decorStyles}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute w-64 h-64 rounded-full top-20 right-20 bg-clay-100 opacity-30 blur-3xl"></div>
        <div className="absolute rounded-full -bottom-20 left-20 w-80 h-80 bg-emerald-50 opacity-40 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="inline-block mb-3 text-sm font-medium tracking-wider uppercase text-emerald-700">
              Explore By Category
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="max-w-2xl mx-auto section-heading">
              Discover Our <span className="text-emerald-700">Collections</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore our curated categories, each featuring handcrafted pieces
              inspired by nature's most beautiful elements. From delicate
              florals to bold botanical designs.
            </p>
          </FadeIn>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              custom={index}
            >
              <Link to={category.link} className="relative block h-full group">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        duration: 0.7,
                        ease: [0.25, 0.1, 0.25, 1.0],
                      },
                    }}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>

                  {/* Gradient overlay that strengthens on hover */}
                  <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80"></div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <h3 className="mb-2 text-2xl text-white transition-transform duration-500 font-display md:text-3xl group-hover:transform group-hover:-translate-y-2">
                      {category.title}
                    </h3>

                    <p className="max-w-xs mb-4 text-sm transition-all duration-500 transform translate-y-4 opacity-0 text-white/80 group-hover:opacity-100 group-hover:translate-y-0">
                      {category.description}
                    </p>

                    <div className="inline-flex items-center pb-1 text-white transition-colors border-b border-white/40 group-hover:border-white">
                      <span className="text-sm font-medium">
                        Explore Collection
                      </span>
                      <ArrowRight
                        size={16}
                        className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center btn-primary group"
            >
              <span>View All Collections</span>
              <ArrowRight
                size={16}
                className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CategoryShowcase;
