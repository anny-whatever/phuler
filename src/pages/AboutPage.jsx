import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  // Team members data with real Pexels images
  const teamMembers = [
    {
      name: "Priya Sharma",
      position: "Founder & Designer",
      image:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Priya has a background in fine arts and jewelry design. She founded Phuler with the vision of creating nature-inspired pieces that celebrate India's floral heritage.",
    },
    {
      name: "Arjun Mehta",
      position: "Production Lead",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Arjun oversees our production process, ensuring each piece meets our quality standards while maintaining sustainable practices.",
    },
    {
      name: "Divya Kapoor",
      position: "Marketing Director",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "With over 8 years in luxury marketing, Divya helps spread the Phuler story and connect our brand with nature lovers worldwide.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-serif font-medium mb-6">Our Story</h1>
            <p className="text-lg text-gray-700 mb-0">
              Phuler was born from a passion for nature's delicate beauty and a
              desire to capture it in wearable art.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-serif font-medium mb-4">
                The Beginning
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 2020 by Priya Sharma, Phuler began as a small
                workshop in Jaipur, crafting botanical-inspired jewelry for
                friends and family. What started as a creative outlet during the
                pandemic quickly blossomed into something more as word spread
                about our unique designs.
              </p>
              <p className="text-gray-700 mb-4">
                The name "Phuler" draws from the Hindi word for flowers,
                reflecting our deep connection to nature's most beautiful
                creations. Each piece tells a story of India's rich floral
                diversity, reimagined into contemporary jewelry that connects
                you to nature's elegance every day.
              </p>
              <p className="text-gray-700">
                From our first collection of just five pieces, we've grown to
                offer a wide range of handcrafted jewelry while maintaining our
                commitment to quality, sustainability, and artisanal
                craftsmanship.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/5370626/pexels-photo-5370626.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Phuler workshop"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-medium mb-4">
              Our Philosophy
            </h2>
            <p className="text-gray-700">
              At Phuler, we believe in creating more than just beautiful
              jewelry. Our core values guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Craftsmanship</h3>
              <p className="text-gray-700">
                We take pride in our artisanal approach, with each piece
                meticulously handcrafted by skilled artisans using traditional
                techniques paired with contemporary design sensibilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.95"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Sustainability</h3>
              <p className="text-gray-700">
                We're committed to ethical sourcing and eco-friendly practices.
                From recycled metals to plastic-free packaging, we strive to
                minimize our environmental footprint while maximizing beauty.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Accessibility</h3>
              <p className="text-gray-700">
                We believe everyone deserves to experience the joy of wearing
                beautifully crafted pieces. Our collections offer a range of
                price points without compromising on quality or design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium text-center mb-12">
            Our Creative Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                <span className="text-2xl font-medium">1</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Inspiration</h3>
              <p className="text-gray-700">
                Our design process begins with nature walks, botanical drawings,
                and research into India's diverse flora.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                <span className="text-2xl font-medium">2</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Design</h3>
              <p className="text-gray-700">
                Detailed sketches are translated into 3D models and prototypes,
                refining each element until perfect.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                <span className="text-2xl font-medium">3</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Creation</h3>
              <p className="text-gray-700">
                Our skilled artisans hand-craft each piece using traditional
                techniques and ethically sourced materials.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                <span className="text-2xl font-medium">4</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Quality Check</h3>
              <p className="text-gray-700">
                Each piece undergoes rigorous inspection before being
                beautifully packaged for its new home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-emerald-700 mb-4">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-medium mb-6">
            Discover Our Collections
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the artistry and beauty of Phuler's handcrafted,
            nature-inspired jewelry for yourself.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-emerald-700 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
