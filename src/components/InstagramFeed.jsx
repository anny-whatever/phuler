import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";
import { FadeIn } from "./animations";

const InstagramFeed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Dummy Instagram feed data with real Pexels images
  const feedItems = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/9428667/pexels-photo-9428667.jpeg?auto=compress&cs=tinysrgb&w=300",
      caption: "Loving my new Phuler necklace! ✨ #PhulerStyle",
      likes: 124,
      username: "style_with_anika",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/10303119/pexels-photo-10303119.jpeg?auto=compress&cs=tinysrgb&w=300",
      caption: "These earrings are perfect for every occasion! #PhulerJewelry",
      likes: 98,
      username: "fashionista_divya",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/5370645/pexels-photo-5370645.jpeg?auto=compress&cs=tinysrgb&w=300",
      caption: "Adding a touch of nature to my look today 🌸 #Phuler",
      likes: 156,
      username: "meera_styles",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/7290711/pexels-photo-7290711.jpeg?auto=compress&cs=tinysrgb&w=300",
      caption: "Weekend vibes with my Phuler bracelet! #HandcraftedJewelry",
      likes: 203,
      username: "lifestyle_by_priya",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/5560970/pexels-photo-5560970.jpeg?auto=compress&cs=tinysrgb&w=300",
      caption: "Floral inspirations everywhere ✨ #PhulerDesign",
      likes: 187,
      username: "creative_soul",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/10303238/pexels-photo-10303238.jpeg?auto=compress&cs=tinysrgb&w=300",
      caption:
        "My daily essentials include this beautiful Phuler ring 💍 #EverydayLuxury",
      likes: 142,
      username: "modern_minimalist",
    },
  ];

  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={ref} className="py-24 overflow-hidden bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <FadeIn>
            <span className="inline-block mb-3 text-sm font-medium tracking-wider uppercase text-emerald-700">
              Phuler Community
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="max-w-2xl mx-auto section-heading">
              Follow Us <span className="text-emerald-700">@phuler</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-gray-600">
              Share your Phuler style with #PhulerJewelry and join our community
              of nature-inspired jewelry lovers.
            </p>
          </FadeIn>
        </div>

        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {feedItems.map((item) => (
            <motion.a
              key={item.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden rounded-lg group aspect-square"
              variants={itemVariants}
            >
              <motion.div
                className="w-full h-full transition-transform duration-700 transform"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Hover overlay */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-b from-transparent to-black/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Instagram size={24} className="mb-2" />
                  <p className="text-sm font-medium text-center">
                    @{item.username}
                  </p>
                  <div className="flex items-center mt-1 text-xs">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.likes}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium transition-colors text-emerald-700 hover:text-emerald-800 group"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Instagram size={20} className="mr-2" />
            <span className="pb-1 transition-colors border-b border-current group-hover:border-transparent">
              View More on Instagram
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
