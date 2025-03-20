import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import InstagramFeed from "../components/InstagramFeed";
import { ArrowRight } from "lucide-react";

// Import dummy data
import { featuredProducts, newArrivals, bestsellers } from "../data/products";

const HomePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-4">
                Nature's Beauty, <br />
                Transformed
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-md">
                Handcrafted floral-inspired jewelry and accessories that bring a
                touch of nature's elegance to your everyday style.
              </p>
              <div className="flex space-x-4">
                <Link to="/products" className="btn-primary">
                  Shop Collection
                </Link>
                <Link to="/about" className="btn-secondary">
                  Our Story
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8128902/pexels-photo-8128902.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Phuler featured jewelry"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 hidden md:block">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="font-medium text-gray-900">
                      Spring Collection
                    </p>
                    <p className="text-emerald-700">Discover Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium text-center mb-12">
            Discover Our Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/7841117/pexels-photo-7841117.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Necklaces Collection"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                <div className="w-full bg-white bg-opacity-90 p-4">
                  <h3 className="text-xl font-medium mb-1">Necklaces</h3>
                  <Link
                    to="/products?category=necklaces"
                    className="text-emerald-700 inline-flex items-center"
                  >
                    <span>Shop Now</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/10303119/pexels-photo-10303119.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Earrings Collection"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                <div className="w-full bg-white bg-opacity-90 p-4">
                  <h3 className="text-xl font-medium mb-1">Earrings</h3>
                  <Link
                    to="/products?category=earrings"
                    className="text-emerald-700 inline-flex items-center"
                  >
                    <span>Shop Now</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Bracelets Collection"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                <div className="w-full bg-white bg-opacity-90 p-4">
                  <h3 className="text-xl font-medium mb-1">Bracelets</h3>
                  <Link
                    to="/products?category=bracelets"
                    className="text-emerald-700 inline-flex items-center"
                  >
                    <span>Shop Now</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium text-center mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our most sought-after pieces, meticulously handcrafted to
            bring nature's beauty to your everyday style.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium text-center mb-4">
            New Arrivals
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The latest additions to our collections, featuring fresh designs and
            seasonal inspirations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products?collection=new" className="btn-primary">
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5370626/pexels-photo-5370626.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Founder crafting jewelry"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-md hidden md:block">
                  <img
                    src="https://images.pexels.com/photos/5370620/pexels-photo-5370620.jpeg?auto=compress&cs=tinysrgb&w=80"
                    alt="Handcrafted seal"
                    className="w-20 h-20 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-serif font-medium mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Phuler was born from a passion for nature's delicate beauty and
                a desire to capture it in wearable art. Founded by Priya Sharma
                in 2020, each piece is thoughtfully designed and handcrafted
                using sustainable materials.
              </p>
              <p className="text-gray-700 mb-6">
                Our designs draw inspiration from India's rich floral diversity,
                reimagined into contemporary jewelry that connects you to
                nature's elegance every day.
              </p>
              <Link to="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium text-center mb-4">
            Our Bestsellers
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Customer favorites that have stood the test of time and continue to
            delight with their timeless appeal.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestsellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products?collection=bestsellers" className="btn-primary">
              Shop Bestsellers
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=64"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium">Ananya M.</h4>
                  <div className="flex text-amber-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "I receive compliments every time I wear my Phuler necklace. The
                quality and craftsmanship are exceptional, and the packaging was
                so thoughtful!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=64"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium">Meera K.</h4>
                  <div className="flex text-amber-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "The earrings I purchased are even more beautiful in person.
                They're lightweight and comfortable to wear all day. I'll
                definitely be back for more!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1108116/pexels-photo-1108116.jpeg?auto=compress&cs=tinysrgb&w=64"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium">Riya S.</h4>
                  <div className="flex text-amber-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "I ordered the Summer Garden bracelet as a gift for my sister,
                and she absolutely loves it. The customer service was
                exceptional, and delivery was faster than expected!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />
    </div>
  );
};

export default HomePage;
