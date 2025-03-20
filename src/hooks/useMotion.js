import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const useScrollReveal = (options = {}) => {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  return [ref, inView];
};

export const useParallax = (speed = 0.1) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const elementTop = ref.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (
        elementTop <= windowHeight &&
        elementTop > -ref.current.offsetHeight
      ) {
        setOffset(-elementTop * speed);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return [ref, { transform: `translateY(${offset}px)` }];
};

export const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    const smoothScroll = (e) => {
      e.preventDefault();
      const id = e.currentTarget.getAttribute("href");

      if (id === "#") return;

      const element = document.querySelector(id);
      if (!element) return;

      const yOffset = -80; // Header height offset
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    };

    smoothScrollLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      smoothScrollLinks.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);
};

export const useTextSplit = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // This is a simplified version - in a real project,
    // you'd import and use SplitType or similar
    const text = elementRef.current.innerText;
    const words = text.split(" ");

    elementRef.current.innerHTML = words
      .map(
        (word) =>
          `<span class="word-wrapper"><span class="word">${word}</span></span>`
      )
      .join(" ");

    const wordSpans = elementRef.current.querySelectorAll(".word");

    wordSpans.forEach((word, i) => {
      word.style.transitionDelay = `${i * 0.05}s`;
    });
  }, []);

  return elementRef;
};

export const useMouseParallax = (factor = 0.1) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;

      // Calculate mouse position relative to the center of the window
      const x = (e.clientX - window.innerWidth / 2) * factor;
      const y = (e.clientY - window.innerHeight / 2) * factor;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [factor]);

  return [ref, { transform: `translate(${position.x}px, ${position.y}px)` }];
};

export const useIntersectionObserver = (options = {}) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(null);

  const { threshold = 0, root = null, rootMargin = "0%" } = options;

  useEffect(() => {
    if (elements.length) {
      observer.current = new IntersectionObserver(
        (observedEntries) => {
          setEntries(observedEntries);
        },
        {
          threshold,
          root,
          rootMargin,
        }
      );

      elements.forEach((element) => observer.current.observe(element));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, root, rootMargin, threshold]);

  return [setElements, entries];
};
