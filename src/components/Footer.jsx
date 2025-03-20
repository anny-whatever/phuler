// File: components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-600 mb-4">
              Handcrafted floral-inspired jewelry and accessories that bring
              nature's beauty to your everyday style.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-700 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-700 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-700 transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products?category=necklaces"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=earrings"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  Earrings
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=bracelets"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  Bracelets
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=rings"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  Rings
                </Link>
              </li>
              <li>
                <Link
                  to="/products?collection=new"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/products?collection=bestsellers"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-medium text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/care"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link
                  to="/size-guide"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-emerald-700 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-lg mb-4">Stay Connected</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
                <button
                  type="submit"
                  className="bg-emerald-700 text-white p-2 rounded-r-md hover:bg-emerald-800 transition"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from Phuler.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Phuler Floral Boutique. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/privacy"
              className="text-sm text-gray-500 hover:text-emerald-700 transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-500 hover:text-emerald-700 transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
