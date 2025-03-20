import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HomeHero from "../components/HomeHero";
import CategoryShowcase from "../components/CategoryShowcase";
import FeaturedProducts from "../components/FeaturedProducts";
import InstagramFeed from "../components/InstagramFeed";
import TestimonialsSlider from "../components/TestimonialsSlider";
import { useSmoothScroll } from "../hooks/useMotion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn, SlideIn } from "../components/animations";

const HomePage = () => {
  useSmoothScroll(); // Initialize smooth scrolling

  // Add a class to the body for page-specific styling
  useEffect(() => {
    document.body.classList.add("home-page");

    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full Screen with Parallax */}
      <HomeHero />

      {/* Featured Collections Section */}
      <section className="relative py-20 overflow-hidden lg:pl-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="flex flex-col items-start justify-between mb-16 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <span className="block mb-3 text-sm font-medium tracking-widest uppercase text-emerald-700">
                    Our Collections
                  </span>
                  <h2 className="mb-6 text-4xl font-medium leading-tight tracking-tight md:text-5xl font-display text-balance">
                    Jewelry Inspired by
                    <br />
                    <span className="text-emerald-700">
                      Nature's Finest Details
                    </span>
                  </h2>
                  <p className="max-w-xl text-lg text-gray-600">
                    Each piece tells a story of botanical inspiration,
                    handcrafted to bring the elegance of nature to your everyday
                    style.
                  </p>
                </div>

                <Link
                  to="/products"
                  className="inline-flex items-center mt-8 font-medium transition-colors group md:mt-0 text-emerald-700 hover:text-emerald-800"
                >
                  <span className="pb-1 border-b border-current">
                    View All Collections
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Hand-picked collections */}
              {[
                {
                  title: "Spring Bloom",
                  image:
                    "https://images.pexels.com/photos/5370626/pexels-photo-5370626.jpeg?auto=compress&cs=tinysrgb&w=600",
                  description: "Delicate florals that celebrate new beginnings",
                  link: "/products?collection=spring-bloom",
                },
                {
                  title: "Summer Garden",
                  image:
                    "https://images.pexels.com/photos/8128902/pexels-photo-8128902.jpeg?auto=compress&cs=tinysrgb&w=600",
                  description: "Vibrant pieces inspired by summer blossoms",
                  link: "/products?collection=summer-garden",
                },
                {
                  title: "Tropical Paradise",
                  image:
                    "https://images.pexels.com/photos/10303119/pexels-photo-10303119.jpeg?auto=compress&cs=tinysrgb&w=600",
                  description: "Exotic designs from tropical flora",
                  link: "/products?collection=tropical-paradise",
                },
              ].map((collection, index) => (
                <SlideIn
                  key={collection.title}
                  direction="up"
                  delay={0.2 * index}
                >
                  <Link to={collection.link} className="block group">
                    <div className="aspect-[4/5] overflow-hidden rounded-xl relative">
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <motion.img
                        src={collection.image}
                        alt={collection.title}
                        className="object-cover w-full h-full transition-transform duration-700"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute z-20 text-white left-6 right-6 bottom-6">
                        <h3 className="mb-2 text-xl font-medium font-display">
                          {collection.title}
                        </h3>
                        <p className="mb-4 text-sm text-white/80">
                          {collection.description}
                        </p>
                        <span className="inline-flex items-center text-sm font-medium border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
                          <span>Explore</span>
                          <ArrowUpRight
                            size={14}
                            className="ml-1 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <div className="lg:pl-20">
        <FeaturedProducts />
      </div>

      {/* About Section */}
      <section className="relative py-20 overflow-hidden bg-clay-50 lg:pl-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center max-w-5xl mx-auto md:flex-row">
            <div className="mb-12 md:w-1/2 md:mb-0 md:pr-16">
              <FadeIn>
                <span className="block mb-3 text-sm font-medium tracking-widest uppercase text-emerald-700">
                  Our Story
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="mb-6 text-4xl font-medium leading-tight tracking-tight md:text-5xl font-display text-balance">
                  Handcrafted with
                  <br />
                  <span className="text-emerald-700">Passion & Purpose</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mb-6 text-lg text-gray-700">
                  Phuler was born from a deep appreciation for nature's
                  intricate designs and a desire to capture their essence in
                  wearable art. Each piece is thoughtfully designed and
                  meticulously handcrafted using sustainable materials.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="mb-8 text-gray-700">
                  Our designs draw inspiration from India's rich floral
                  diversity, reimagined into contemporary jewelry that connects
                  you to nature's elegance every day.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <Link
                  to="/about"
                  className="inline-flex items-center font-medium transition-colors group text-emerald-700 hover:text-emerald-800"
                >
                  <span className="pb-1 border-b border-current">
                    Discover Our Journey
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </FadeIn>
            </div>

            <div className="md:w-1/2">
              <SlideIn direction="right">
                <div className="relative">
                  <div className="absolute w-24 h-24 border-t-2 border-l-2 -top-5 -left-5 border-emerald-200"></div>
                  <div className="absolute w-24 h-24 border-b-2 border-r-2 -bottom-5 -right-5 border-emerald-200"></div>

                  <img
                    src="https://images.pexels.com/photos/5370626/pexels-photo-5370626.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Handcrafting our jewelry"
                    className="w-full h-auto rounded-xl shadow-elegant"
                  />

                  <motion.div
                    className="absolute inline-flex items-center p-6 bg-white rounded-lg -bottom-8 right-8 shadow-elegant"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <img
                      src="https://images.pexels.com/photos/5370620/pexels-photo-5370620.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Handcrafted seal"
                      className="object-cover w-16 h-16 mr-4 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        Crafted by Hand
                      </p>
                      <p className="text-sm text-emerald-700">
                        Each piece is unique
                      </p>
                    </div>
                  </motion.div>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="lg:pl-20">
        <TestimonialsSlider />
      </div>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden text-white bg-emerald-800 lg:pl-20">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg
            className="absolute top-0 left-0 min-w-full min-h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="flowerPattern"
                patternUnits="userSpaceOnUse"
                width="80"
                height="80"
                patternTransform="rotate(45)"
              >
                <path
                  d="M12 3C12 7.97 16.03 12 21 12C16.03 12 12 16.03 12 21C12 16.03 7.97 12 3 12C7.97 12 12 7.97 12 3Z"
                  fill="white"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#flowerPattern)" />
          </svg>
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <FadeIn>
            <span className="inline-block mb-3 text-sm font-medium tracking-wider uppercase text-emerald-100">
              Limited Time Offer
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="max-w-3xl mx-auto mb-6 text-4xl font-medium leading-tight tracking-tight md:text-6xl font-display">
              First-Time Visitors Get{" "}
              <span className="text-emerald-100">10% Off</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-emerald-50/90">
              Experience the artistry and beauty of Phuler's handcrafted,
              nature-inspired jewelry for yourself.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link
              to="/products"
              className="relative inline-flex items-center group"
            >
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-70 blur group-hover:opacity-100 transition duration-700"></span>
              <span className="relative flex items-center px-8 py-4 font-medium bg-white rounded-full text-emerald-800">
                <span>Shop Now</span>
                <ArrowUpRight
                  size={18}
                  className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Instagram Feed */}
      <div className="lg:pl-20">
        <InstagramFeed />
      </div>
    </div>
  );
};

export default HomePage;
