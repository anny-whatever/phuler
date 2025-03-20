import React, { useState, useEffect } from "react";

const LoadingScreen = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    // Reset progress when loading starts
    setProgress(0);

    // Set up interval to increment progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md text-center">
        {/* Logo/Brand Name */}
        <h1 className="text-5xl md:text-6xl font-serif font-medium text-emerald-700 mb-2">
          Phuler
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mb-8 font-light tracking-wide">
          design 3rd draft
        </p>

        {/* Loading Animation */}
        <div className="flex justify-center items-center space-x-2 mb-6">
          <div
            className="w-3 h-3 rounded-full bg-emerald-700 animate-pulse"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-emerald-700 animate-pulse"
            style={{ animationDelay: "300ms" }}
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-emerald-700 animate-pulse"
            style={{ animationDelay: "600ms" }}
          ></div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
          <div
            className="bg-emerald-700 h-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-400 mt-2">{progress}%</p>
      </div>

      {/* Decorative flower elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3C12 7.97 16.03 12 21 12C16.03 12 12 16.03 12 21C12 16.03 7.97 12 3 12C7.97 12 12 7.97 12 3Z"
            fill="#047857"
          />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
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
      </div>
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 opacity-5">
        <svg
          width="200"
          height="200"
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
      </div>
    </div>
  );
};

export default LoadingScreen;
