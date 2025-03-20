import React from "react";
import { motion } from "framer-motion";

const Logo = ({
  className = "",
  isAnimated = false,
  logoType = "horizontal",
}) => {
  const textVariants = {
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

  const subTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Vertical logo layout
  if (logoType === "vertical") {
    return (
      <div className={`text-center ${className}`}>
        {isAnimated ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.h1
              className="text-3xl font-medium tracking-tight font-display text-emerald-700"
              variants={textVariants}
            >
              P
            </motion.h1>
            <motion.div
              className="w-6 h-px mx-auto my-2 bg-emerald-200"
              variants={subTextVariants}
            />
            <motion.div
              className="text-xs tracking-widest text-gray-500 uppercase"
              variants={subTextVariants}
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Floral Boutique
            </motion.div>
          </motion.div>
        ) : (
          <div>
            <h1 className="text-3xl font-medium tracking-tight font-display text-emerald-700">
              P
            </h1>
            <div className="w-6 h-px mx-auto my-2 bg-emerald-200" />
            <div
              className="text-xs tracking-widest text-gray-500 uppercase"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Floral Boutique
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default horizontal logo layout
  return (
    <div className={`${className}`}>
      {isAnimated ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.h1
            className="text-3xl font-medium tracking-tight font-display text-emerald-700"
            variants={textVariants}
          >
            Phuler
          </motion.h1>
          <motion.p
            className="-mt-1 text-xs tracking-wider text-gray-500 uppercase"
            variants={subTextVariants}
          >
            Floral Boutique
          </motion.p>
        </motion.div>
      ) : (
        <div>
          <h1 className="text-3xl font-medium tracking-tight font-display text-emerald-700">
            Phuler
          </h1>
          <p className="-mt-1 text-xs tracking-wider text-gray-500 uppercase">
            Floral Boutique
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
