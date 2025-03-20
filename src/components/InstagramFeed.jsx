import React from "react";
import { Instagram } from "lucide-react";

const InstagramFeed = () => {
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
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-medium mb-2">
            Follow Us @phuler
          </h2>
          <p className="text-gray-600">
            Share your Phuler style with #PhulerJewelry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {feedItems.map((item) => (
            <a
              key={item.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full aspect-square object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-md">
                <div className="text-white text-center p-4">
                  <Instagram size={24} className="mx-auto mb-2" />
                  <p className="text-sm font-medium">@{item.username}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-emerald-700 hover:text-emerald-800 transition"
          >
            <Instagram size={20} className="mr-2" />
            <span>View More on Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
