import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // When isLoading becomes false, finish the animation
      if (progress < 100) {
        setProgress(100);
      }

      // Delay hiding the loading screen slightly after completion
      const timer = setTimeout(() => {
        setIsFinished(true);
      }, 800);

      return () => clearTimeout(timer);
    }

    if (!isLoading) return;

    // Reset progress when loading starts
    setProgress(0);
    setIsFinished(false);

    // Set up interval to increment progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Slow down as we approach 90% to wait for actual loading
        if (prev >= 90) {
          return prev + 0.2;
        }
        return prev + (100 - prev) * 0.05;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isLoading, progress]);

  if (isFinished) return null;

  return (
    <AnimatePresence>
      {(isLoading || progress < 100) && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: [0.645, 0.045, 0.355, 1.0],
            },
          }}
        >
          <motion.div
            className="w-full max-w-md px-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Logo Animation */}
            <motion.div
              className="relative mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
            >
              <motion.div
                className="inline-block"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <h1 className="mb-2 text-6xl font-medium md:text-8xl font-display text-emerald-700">
                  Phuler
                </h1>
              </motion.div>

              <motion.p
                className="mb-1 font-serif text-xs tracking-widest uppercase text-clay-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Floral Boutique
              </motion.p>
            </motion.div>

            {/* Loading Line */}
            <motion.div
              className="relative w-full h-px mb-4 overflow-hidden bg-gray-200"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="absolute top-0 left-0 h-full bg-emerald-700"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </motion.div>

            <motion.p
              className="font-mono text-xs text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {Math.round(progress)}%
            </motion.p>
          </motion.div>

          {/* Decorative flower elements with parallax effect */}
          <motion.div
            className="absolute top-10 left-10 opacity-10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3C12 7.97 16.03 12 21 12C16.03 12 12 16.03 12 21C12 16.03 7.97 12 3 12C7.97 12 12 7.97 12 3Z"
                fill="#047857"
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-10 opacity-10"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <svg
              width="180"
              height="180"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3C12 7.97 16.03 12 21 12C16.03 12 12 16.03 12 21C12 16.03 7.97 12 3 12C7.97 12 12 7.97 12 3Z"
                fill="#047857"
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute transform -translate-y-1/2 top-1/3 right-1/4 opacity-5"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            <svg
              width="300"
              height="300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8.5C12 10.6 10.6 12 8.5 12C10.6 12 12 13.4 12 15.5C12 13.4 13.4 12 15.5 12C13.4 12 12 10.6 12 8.5Z"
                fill="#047857"
              />
              <path
                d="M12 3C12 7.97 16.03 12 21 12C16.03 12 12 16.03 12 21C12 16.03 7.97 12 3 12C7.97 12 12 7.97 12 3Z"
                fill="#047857"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
