import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  ArrowRight,
  ChevronUp,
} from "lucide-react";
import Logo from "./Logo";
import { MagneticButton } from "./animations";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !email.includes("@")) {
      setHasError(true);
      return;
    }

    // In a real app, send to backend
    setSubscribed(true);
    setHasError(false);

    // Reset after 3 seconds
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Social media links
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  // Footer links organization
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "Necklaces", url: "/products?category=necklaces" },
        { name: "Earrings", url: "/products?category=earrings" },
        { name: "Bracelets", url: "/products?category=bracelets" },
        { name: "Rings", url: "/products?category=rings" },
        { name: "New Arrivals", url: "/products?collection=new" },
        { name: "Bestsellers", url: "/products?collection=bestsellers" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Shipping & Returns", url: "/shipping" },
        { name: "Jewelry Care", url: "/care" },
        { name: "Size Guide", url: "/size-guide" },
        { name: "FAQ", url: "/faq" },
        { name: "Contact Us", url: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" },
        { name: "Cookies Policy", url: "/cookies" },
        { name: "Accessibility", url: "/accessibility" },
      ],
    },
  ];

  return (
    <footer className="pt-16 pb-8 border-t border-gray-200 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:pr-8">
            <Logo className="mb-6" />
            <p className="mb-6 text-gray-600">
              Handcrafted floral-inspired jewelry and accessories that bring
              nature's beauty to your everyday style.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <MagneticButton key={index} strength={15}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 text-gray-500 transition-colors border border-gray-200 rounded-full hover:text-emerald-700 hover:border-emerald-700"
                    aria-label={social.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Footer links columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="mb-4 font-medium text-gray-900">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.url}
                      className="text-gray-600 hover:text-emerald-700 transition-colors inline-block relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-emerald-700 after:transition-all hover:after:w-full"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="relative p-8 mb-12 overflow-hidden bg-emerald-50 rounded-2xl md:p-10">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-50 pointer-events-none -translate-y-1/4 translate-x-1/4 bg-emerald-100 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-50 pointer-events-none translate-y-1/4 -translate-x-1/4 bg-emerald-100 blur-3xl"></div>

          <div className="relative grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <motion.h3
                className="mb-4 text-2xl font-medium text-gray-900 md:text-3xl font-display"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                Stay Connected
              </motion.h3>
              <motion.p
                className="max-w-md mb-6 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                Subscribe to receive updates, access to exclusive deals, and
                more. Join our community of nature-inspired jewelry lovers.
              </motion.p>

              <form onSubmit={handleSubscribe} className="max-w-md">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setHasError(false);
                    }}
                    placeholder="Your email address"
                    className={`w-full p-3 pl-4 pr-36 border ${
                      hasError ? "border-rose-300 bg-rose-50" : "border-white"
                    } rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent`}
                    disabled={subscribed}
                  />

                  <button
                    type="submit"
                    className={`absolute right-1 top-1 px-4 py-2 rounded-full text-white font-medium transition-all ${
                      subscribed
                        ? "bg-emerald-600 pr-3"
                        : "bg-emerald-700 hover:bg-emerald-800"
                    }`}
                    disabled={subscribed}
                  >
                    {subscribed ? (
                      <span className="flex items-center">
                        <Check size={18} className="mr-1" />
                        Subscribed
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Subscribe
                        <ArrowRight size={16} className="ml-1" />
                      </span>
                    )}
                  </button>
                </div>

                {hasError && (
                  <p className="mt-2 text-xs text-rose-600">
                    Please enter a valid email address
                  </p>
                )}
              </form>
            </div>

            <div className="hidden md:block">
              <motion.img
                src="https://images.pexels.com/photos/5370626/pexels-photo-5370626.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Phuler handcrafting"
                className="object-cover w-full rounded-lg shadow-elegant h-60"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between pt-8 border-t border-gray-200 md:flex-row">
          <p className="mb-4 text-sm text-gray-500 md:mb-0">
            &copy; {new Date().getFullYear()} Phuler Floral Boutique. All rights
            reserved.
          </p>

          <div className="flex items-center">
            <div className="flex mr-6 space-x-4">
              <Link
                to="/privacy"
                className="text-sm text-gray-500 transition-colors hover:text-emerald-700"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-500 transition-colors hover:text-emerald-700"
              >
                Terms
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-gray-500 transition-colors hover:text-emerald-700"
              >
                Cookies
              </Link>
            </div>

            <MagneticButton strength={15}>
              <motion.button
                onClick={scrollToTop}
                className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-emerald-700 hover:bg-emerald-800"
                aria-label="Scroll to top"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronUp size={20} />
              </motion.button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Check icon component for the subscribe button
const Check = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export default Footer;
