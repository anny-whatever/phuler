import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      // Check if hovering over a clickable element
      const target = e.target;
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(isClickable);
    };

    const mouseDown = () => {
      setIsHovering(true);
    };

    const mouseUp = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = "none";

    // Add event listeners to all clickable elements for enhanced hover effect
    const elements = document.querySelectorAll(
      'a, button, [role="button"], input, select, textarea'
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsPointer(true));
      el.addEventListener("mouseleave", () => setIsPointer(false));
    });

    return () => {
      document.body.style.cursor = "auto";

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsPointer(true));
        el.removeEventListener("mouseleave", () => setIsPointer(false));
      });
    };
  }, []);

  // Don't show custom cursor on mobile/touch devices
  if ("ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
        style={{
          width: isPointer ? "40px" : "20px",
          height: isPointer ? "40px" : "20px",
        }}
        animate={{
          x: mousePosition.x - (isPointer ? 20 : 10),
          y: mousePosition.y - (isPointer ? 20 : 10),
          scale: isHovering ? 0.8 : 1,
          opacity: 0.5,
        }}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 200,
          damping: 20,
          ease: "linear",
        }}
      >
        <motion.div
          className="w-full h-full bg-white rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: isPointer ? 1.2 : 1,
          }}
          transition={{
            duration: 0.2,
          }}
        />
      </motion.div>

      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-50 w-1 h-1 transition-all duration-1000 bg-white rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: isPointer ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.1,
        }}
      />
    </>
  );
};

export default Cursor;
