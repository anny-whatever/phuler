// Featured products
export const featuredProducts = [
  {
    id: 1,
    name: "Lotus Petal Necklace",
    category: "necklaces",
    collection: "spring-bloom",
    price: 3200,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/9428667/pexels-photo-9428667.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/6782506/pexels-photo-6782506.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 32,
    reviewDistribution: {
      5: 0.85,
      4: 0.1,
      3: 0.05,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Delicate sterling silver necklace inspired by lotus petals, handcrafted for everyday elegance.",
    description:
      "This exquisite lotus petal necklace captures the serene beauty of India's national flower. Crafted from sterling silver, each petal is meticulously shaped by hand to catch the light as it moves. The pendant hangs from an adjustable 16-18 inch chain, making it versatile for different necklines.",
    material: "Sterling Silver",
    dimensions: "Pendant: 1.8cm x 1.5cm",
    weight: "4g",
    features: [
      "Adjustable chain length (16-18 inches)",
      "Tarnish-resistant finish",
      "Lotus petal design with intricate detailing",
      "Handcrafted by skilled artisans",
    ],
    options: [
      {
        name: "chain length",
        type: "select",
        values: ["16-18 inches", "20-22 inches", "24-26 inches"],
      },
    ],
    createdAt: "2022-10-15",
  },
  {
    id: 2,
    name: "Jasmine Flower Earrings",
    category: "earrings",
    collection: "summer-garden",
    price: 2800,
    salePrice: 2380,
    images: [
      "https://images.pexels.com/photos/10303119/pexels-photo-10303119.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5370645/pexels-photo-5370645.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/12456345/pexels-photo-12456345.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 48,
    reviewDistribution: {
      5: 0.9,
      4: 0.1,
      3: 0,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Elegant gold-plated jasmine flower studs, perfect for adding a touch of nature to any outfit.",
    description:
      "Our bestselling Jasmine Flower Earrings celebrate the fragrant flower known for its delicate beauty. Each stud features five petals with subtle texture, capturing the essence of this beloved bloom. Gold-plated for a warm, luxurious finish that complements all skin tones.",
    material: "Gold-plated Brass",
    dimensions: "1.2cm diameter",
    weight: "3g per pair",
    features: [
      "Hypoallergenic posts",
      "Secure butterfly backs",
      "Lightweight and comfortable for all-day wear",
      "Handcrafted with attention to detail",
    ],
    options: [
      {
        name: "color",
        type: "color",
        values: ["gold", "rose gold", "silver"],
      },
    ],
    createdAt: "2022-09-05",
  },
  // More featured products...
  {
    id: 3,
    name: "Marigold Chain Bracelet",
    category: "bracelets",
    collection: "autumn-leaves",
    price: 2500,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/8128888/pexels-photo-8128888.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/7290709/pexels-photo-7290709.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/7680047/pexels-photo-7680047.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: true,
    isBestseller: false,
    rating: 4.7,
    reviewCount: 21,
    reviewDistribution: {
      5: 0.75,
      4: 0.2,
      3: 0.05,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Delicate chain bracelet featuring marigold-inspired charms, bringing warmth and positivity.",
    description:
      "The Marigold Chain Bracelet features delicate marigold flower charms along a fine chain, inspired by the vibrant blooms that adorn Indian celebrations. This adjustable piece can be worn alone for a subtle accent or layered with other bracelets for a more statement look.",
    material: "Gold-plated Brass",
    dimensions: "Adjustable 6-8 inches",
    weight: "6g",
    features: [
      "Adjustable length with extender chain",
      "Lobster clasp closure",
      "Three marigold-inspired charms",
      "Tarnish-resistant finish",
    ],
    options: [],
    createdAt: "2023-01-18",
  },
  {
    id: 4,
    name: "Frangipani Hoop Earrings",
    category: "earrings",
    collection: "tropical-paradise",
    price: 2650,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8128902/pexels-photo-8128902.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5370648/pexels-photo-5370648.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: true,
    isBestseller: false,
    rating: 4.6,
    reviewCount: 14,
    reviewDistribution: {
      5: 0.7,
      4: 0.2,
      3: 0.1,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Tropical frangipani flowers adorn these medium-sized hoops, bringing paradise to your everyday style.",
    description:
      "Our Frangipani Hoop Earrings feature delicately crafted plumeria flowers, capturing the tropical beauty of these beloved blooms. The flowers are attached to medium-sized hoops that provide movement and catch the light as you move. Perfect for adding a touch of paradise to any outfit.",
    material: "Sterling Silver",
    dimensions: "Hoop diameter: 2.5cm",
    weight: "5g per pair",
    features: [
      "Lightweight design for comfortable wear",
      "Secure hinged closure",
      "Three frangipani flowers on each hoop",
      "Polished finish for subtle shine",
    ],
    options: [],
    createdAt: "2023-02-03",
  },
];

// New arrivals
export const newArrivals = [
  {
    id: 5,
    name: "Hibiscus Statement Ring",
    category: "rings",
    collection: "tropical-paradise",
    price: 2200,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/5370652/pexels-photo-5370652.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/9558598/pexels-photo-9558598.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/10130659/pexels-photo-10130659.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: true,
    isBestseller: false,
    rating: 4.8,
    reviewCount: 9,
    reviewDistribution: {
      5: 0.8,
      4: 0.2,
      3: 0,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Bold statement ring featuring a detailed hibiscus flower, perfect for adding tropical flair.",
    description:
      "The Hibiscus Statement Ring showcases the exotic beauty of this tropical flower in a bold, eye-catching design. The detailed flower sits atop an adjustable band, allowing for a comfortable fit on different finger sizes. This statement piece adds a perfect pop of nature-inspired elegance to any outfit.",
    material: "Gold-plated Brass",
    dimensions: "Flower diameter: 2cm",
    weight: "8g",
    features: [
      "Adjustable band fits sizes 6-9",
      "Intricate hibiscus flower detailing",
      "Comfortable for everyday wear",
      "Nickel-free and hypoallergenic",
    ],
    options: [],
    createdAt: "2023-03-12",
  },
  {
    id: 6,
    name: "Cherry Blossom Anklet",
    category: "anklets",
    collection: "spring-bloom",
    price: 1800,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/12313274/pexels-photo-12313274.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/10303238/pexels-photo-10303238.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8128068/pexels-photo-8128068.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: true,
    isBestseller: false,
    rating: 4.7,
    reviewCount: 6,
    reviewDistribution: {
      5: 0.65,
      4: 0.35,
      3: 0,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Dainty anklet with cherry blossom charms that celebrate the fleeting beauty of spring.",
    description:
      "Our Cherry Blossom Anklet brings the ephemeral beauty of spring to your ankle. Featuring five delicate cherry blossom charms along a fine chain, this piece captures the essence of renewal and beauty. Adjustable in length for the perfect fit, it's ideal for beach days, summer dresses, or adding a feminine touch to any outfit.",
    material: "Sterling Silver",
    dimensions: "Adjustable 8-10 inches",
    weight: "4g",
    features: [
      "Adjustable length with extender chain",
      "Lobster clasp closure",
      "Five cherry blossom charms",
      "Water-resistant finish",
    ],
    options: [],
    createdAt: "2023-03-18",
  },
  // More new arrivals...
  {
    id: 7,
    name: "Dahlia Drop Earrings",
    category: "earrings",
    collection: "summer-garden",
    price: 3100,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/9428718/pexels-photo-9428718.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/6782572/pexels-photo-6782572.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/7290290/pexels-photo-7290290.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: true,
    isBestseller: false,
    rating: 4.9,
    reviewCount: 7,
    reviewDistribution: {
      5: 0.9,
      4: 0.1,
      3: 0,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Elegant drop earrings featuring layered petals inspired by dahlia flowers, perfect for special occasions.",
    description:
      "The Dahlia Drop Earrings showcase the intricate layered petals of this stunning flower. Each earring features a post with a small stud that leads to a larger dahlia bloom, creating movement and catching the light beautifully. The perfect statement piece for weddings, parties, or elevating your everyday style.",
    material: "Rose Gold Plated Sterling Silver",
    dimensions: "Length: 4.2cm",
    weight: "7g per pair",
    features: [
      "Secure butterfly backs",
      "Layered petal design with texture",
      "Lightweight despite bold appearance",
      "Handcrafted with attention to detail",
    ],
    options: [],
    createdAt: "2023-02-27",
  },
  {
    id: 8,
    name: "Lily Pad Stacking Rings",
    category: "rings",
    collection: "summer-garden",
    price: 2900,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/7354542/pexels-photo-7354542.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8891962/pexels-photo-8891962.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5560970/pexels-photo-5560970.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: true,
    isBestseller: false,
    rating: 4.8,
    reviewCount: 5,
    reviewDistribution: {
      5: 0.8,
      4: 0.2,
      3: 0,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Set of three stackable rings inspired by lily pads, can be worn together or separately for versatile styling.",
    description:
      "Our Lily Pad Stacking Rings set includes three individual rings designed to be worn together or separately. Each ring features a different lily pad design - one with texture, one with a small pearl 'dewdrop', and one with a smooth polished finish. Stack them all on one finger or distribute them across different fingers for a coordinated look.",
    material: "Sterling Silver with Freshwater Pearl",
    dimensions: "Band width: 2mm",
    weight: "6g for set",
    features: [
      "Set of three complementary rings",
      "Available in sizes 6-9",
      "Smooth comfort-fit inner band",
      "One ring features a genuine freshwater pearl",
    ],
    options: [
      {
        name: "size",
        type: "select",
        values: ["5", "6", "7", "8", "9"],
      },
    ],
    createdAt: "2023-03-05",
  },
];

// Bestsellers
export const bestsellers = [
  {
    id: 9,
    name: "Tulip Pendant Necklace",
    category: "necklaces",
    collection: "spring-bloom",
    price: 2700,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/7841117/pexels-photo-7841117.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8480620/pexels-photo-8480620.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/11605998/pexels-photo-11605998.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 73,
    reviewDistribution: {
      5: 0.9,
      4: 0.1,
      3: 0,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Minimalist silver tulip pendant necklace, our bestseller for three years running.",
    description:
      "The Tulip Pendant Necklace has been our most popular piece since our launch. The simple yet elegant design features a sterling silver tulip pendant on a delicate chain. The tulip symbolizes perfect love, making this a meaningful gift for someone special or a beautiful treat for yourself.",
    material: "Sterling Silver",
    dimensions: "Pendant: 1.5cm x 0.8cm",
    weight: "3.5g",
    features: [
      "18-inch chain with 2-inch extender",
      "Spring ring clasp",
      "High-polish finish",
      "Comes in signature gift box",
    ],
    options: [],
    createdAt: "2020-06-15",
  },
  {
    id: 10,
    name: "Orchid Ear Climbers",
    category: "earrings",
    collection: "tropical-paradise",
    price: 3500,
    salePrice: 2975,
    images: [
      "https://images.pexels.com/photos/5370645/pexels-photo-5370645.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/7290706/pexels-photo-7290706.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/10303119/pexels-photo-10303119.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: false,
    isBestseller: true,
    rating: 4.7,
    reviewCount: 56,
    reviewDistribution: {
      5: 0.75,
      4: 0.2,
      3: 0.05,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Statement ear climbers featuring delicate orchid blooms that appear to climb up the ear.",
    description:
      "Our Orchid Ear Climbers create a dramatic effect by following the natural curve of your ear. Each earring features three orchid blooms in graduating sizes, creating the illusion that exotic flowers are climbing up your ear. Despite their statement size, they're remarkably lightweight and comfortable for all-day wear.",
    material: "Gold-plated Brass",
    dimensions: "Length: 3.5cm",
    weight: "4g per pair",
    features: [
      "Secure post with stopper back",
      "Three dimensional orchid details",
      "Comfortable curved design",
      "Surprisingly lightweight",
    ],
    options: [],
    createdAt: "2021-02-10",
  },
  // More bestsellers...
  {
    id: 11,
    name: "Rose Petal Cuff Bracelet",
    category: "bracelets",
    collection: "summer-garden",
    price: 3800,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5370708/pexels-photo-5370708.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/10303238/pexels-photo-10303238.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 41,
    reviewDistribution: {
      5: 0.85,
      4: 0.1,
      3: 0.05,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Elegant cuff bracelet with overlapping rose petals, a statement piece that commands attention.",
    description:
      "The Rose Petal Cuff Bracelet features intricate overlapping petals that wrap gracefully around the wrist. The open design allows for easy wear while creating a bold statement. Each petal is textured to catch the light, mimicking the delicate beauty of a blooming rose. This piece transitions seamlessly from day to evening wear.",
    material: "Sterling Silver",
    dimensions: "Width: 3cm, adjustable fit",
    weight: "18g",
    features: [
      "Adjustable size fits most wrists",
      "Hand-textured petals",
      "Open cuff design for easy wear",
      "Substantial weight provides luxury feel",
    ],
    options: [],
    createdAt: "2021-04-22",
  },
  {
    id: 12,
    name: "Sunflower Pendant Necklace",
    category: "necklaces",
    collection: "summer-garden",
    price: 2400,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/10069213/pexels-photo-10069213.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/7556097/pexels-photo-7556097.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8160583/pexels-photo-8160583.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 68,
    reviewDistribution: {
      5: 0.9,
      4: 0.1,
      3: 0,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Cheerful sunflower pendant necklace that brings a ray of sunshine to any outfit.",
    description:
      "Our bestselling Sunflower Pendant Necklace captures the joyful energy of this beloved flower. The detailed pendant features textured petals surrounding a center of tiny cubic zirconia stones that catch the light beautifully. Symbolizing adoration and loyalty, this necklace makes a thoughtful gift or a cheerful addition to your own collection.",
    material: "Gold-plated Sterling Silver with Cubic Zirconia",
    dimensions: "Pendant: 2cm diameter",
    weight: "5g",
    features: [
      "18-inch chain with lobster clasp",
      "Textured petals with high polish finish",
      "Center features 9 cubic zirconia stones",
      "Comes in signature gift box",
    ],
    options: [
      {
        name: "chain length",
        type: "select",
        values: ["16 inches", "18 inches", "20 inches"],
      },
    ],
    createdAt: "2021-05-18",
  },
];

// All products combined (for search and filter functionality)
export const allProducts = [
  ...featuredProducts,
  ...newArrivals,
  ...bestsellers,
  // Add more products as needed
  {
    id: 13,
    name: "Poppy Ring",
    category: "rings",
    collection: "autumn-leaves",
    price: 2100,
    salePrice: 1785,
    images: [
      "https://images.pexels.com/photos/10130659/pexels-photo-10130659.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5370652/pexels-photo-5370652.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/9558598/pexels-photo-9558598.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: false,
    isBestseller: false,
    rating: 4.6,
    reviewCount: 21,
    reviewDistribution: {
      5: 0.7,
      4: 0.2,
      3: 0.1,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Bold statement ring featuring a detailed poppy flower with a striking red enamel center.",
    description:
      "The Poppy Ring makes a statement with its large bloom and hand-applied red enamel center. The textured petals are carefully crafted to capture the delicate nature of the poppy, while the substantial size makes it a true conversation piece. Despite its bold look, the ring is surprisingly comfortable for everyday wear.",
    material: "Sterling Silver with Enamel",
    dimensions: "Flower diameter: 2.2cm",
    weight: "9g",
    features: [
      "Adjustable band fits sizes 6-9",
      "Hand-applied red enamel center",
      "Textured silver petals",
      "Comfort-fit band",
    ],
    options: [],
    createdAt: "2022-08-12",
  },
  {
    id: 14,
    name: "Lavender Drop Earrings",
    category: "earrings",
    collection: "summer-garden",
    price: 2250,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/6782572/pexels-photo-6782572.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/7290290/pexels-photo-7290290.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/9428718/pexels-photo-9428718.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: true,
    isBestseller: false,
    rating: 4.7,
    reviewCount: 12,
    reviewDistribution: {
      5: 0.75,
      4: 0.2,
      3: 0.05,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Delicate drop earrings featuring cascading lavender buds, perfect for a romantic, botanical look.",
    description:
      "Our Lavender Drop Earrings capture the gentle cascade of lavender stems in bloom. Each earring features five graduated buds that move gently as you do. The subtle purple enamel detailing adds an authentic touch to these nature-inspired pieces, which are perfect for both special occasions and elevating everyday outfits.",
    material: "Sterling Silver with Purple Enamel Accents",
    dimensions: "Length: 4.5cm",
    weight: "5g per pair",
    features: [
      "French hook ear wires",
      "Cascading design with movement",
      "Hand-applied purple enamel accents",
      "Lightweight for comfortable all-day wear",
    ],
    options: [],
    createdAt: "2023-02-15",
  },
  {
    id: 15,
    name: "Magnolia Bangle",
    category: "bracelets",
    collection: "spring-bloom",
    price: 3400,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/15767588/pexels-photo-15767588.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8128068/pexels-photo-8128068.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: false,
    isBestseller: false,
    rating: 4.8,
    reviewCount: 27,
    reviewDistribution: {
      5: 0.85,
      4: 0.1,
      3: 0.05,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Elegant bangle with a magnolia flower centerpiece, a symbol of dignity and purity.",
    description:
      "The Magnolia Bangle features a detailed magnolia flower as its centerpiece, symbolizing dignity, purity, and perseverance. The bangle has a satisfying weight and presence on the wrist while maintaining a refined aesthetic. The hinged design makes it easy to put on and take off, and the secure clasp ensures it stays in place throughout the day.",
    material: "Sterling Silver",
    dimensions: "Inner diameter: 6.5cm, Width: 0.8cm",
    weight: "22g",
    features: [
      "Hinged design with secure clasp",
      "Detailed magnolia flower centerpiece",
      "High-polish finish",
      "Substantial weight for quality feel",
    ],
    options: [],
    createdAt: "2022-03-08",
  },
  {
    id: 16,
    name: "Peony Hair Pin",
    category: "hair-accessories",
    collection: "spring-bloom",
    price: 1900,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: false,
    isBestseller: false,
    rating: 4.9,
    reviewCount: 18,
    reviewDistribution: {
      5: 0.9,
      4: 0.1,
      3: 0,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Elegant hair pin featuring a blooming peony flower, perfect for special occasions or adding flair to everyday hairstyles.",
    description:
      "Our Peony Hair Pin elevates any hairstyle with its beautiful blooming flower design. The layered petals create a realistic three-dimensional look, while the sturdy pin keeps it securely in place. Whether worn for weddings, special events, or simply to add a touch of elegance to your daily look, this pin makes a delicate yet striking statement.",
    material: "Gold-plated Brass",
    dimensions: "Flower diameter: 3cm, Pin length: 7cm",
    weight: "12g",
    features: [
      "Sturdy pin with secure grip",
      "Three-dimensional layered petal design",
      "Versatile for different hairstyles",
      "Handcrafted with attention to detail",
    ],
    options: [],
    createdAt: "2022-04-16",
  },
  {
    id: 17,
    name: "Water Lily Pendant",
    category: "necklaces",
    collection: "summer-garden",
    price: 2800,
    salePrice: 2380,
    images: [
      "https://images.pexels.com/photos/7681064/pexels-photo-7681064.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/7841185/pexels-photo-7841185.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: true,
    isBestseller: false,
    rating: 4.7,
    reviewCount: 14,
    reviewDistribution: {
      5: 0.7,
      4: 0.3,
      3: 0,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Serene water lily pendant with mother of pearl inlay, symbolizing purity and enlightenment.",
    description:
      "The Water Lily Pendant captures the serene beauty of water lilies floating on a calm pond. The flower is crafted in sterling silver with a mother of pearl inlay that gives a luminous quality to the petals. Symbolizing purity and enlightenment, this pendant makes a meaningful gift or a beautiful addition to your personal collection.",
    material: "Sterling Silver with Mother of Pearl",
    dimensions: "Pendant: 2.5cm diameter",
    weight: "6g",
    features: [
      "20-inch silver chain",
      "Mother of pearl inlay for natural luminosity",
      "Detailed craftsmanship",
      "Spring ring clasp",
    ],
    options: [
      {
        name: "chain length",
        type: "select",
        values: ["18 inches", "20 inches", "24 inches"],
      },
    ],
    createdAt: "2023-01-25",
  },
  {
    id: 18,
    name: "Daisy Chain Bracelet",
    category: "bracelets",
    collection: "spring-bloom",
    price: 1950,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/8128959/pexels-photo-8128959.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/7680034/pexels-photo-7680034.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8128884/pexels-photo-8128884.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 37,
    reviewDistribution: {
      5: 0.95,
      4: 0.05,
      3: 0,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Playful bracelet featuring a continuous chain of daisies, bringing casual charm to any outfit.",
    description:
      "Our Daisy Chain Bracelet evokes childhood memories of making daisy chains in spring meadows. Each delicate flower is connected to form a continuous circle around your wrist. The simple, playful design pairs perfectly with casual outfits but can also add a touch of whimsy to more formal attire. It's a versatile piece that brings joy with every wear.",
    material: "Sterling Silver",
    dimensions: "Length: 7 inches with 1-inch extender",
    weight: "7g",
    features: [
      "Adjustable length for perfect fit",
      "Lobster clasp closure",
      "Continuous daisy design",
      "High-polish finish",
    ],
    options: [],
    createdAt: "2021-03-20",
  },
  {
    id: 19,
    name: "Cherry Blossom Stud Earrings",
    category: "earrings",
    collection: "spring-bloom",
    price: 1800,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/12456345/pexels-photo-12456345.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5370645/pexels-photo-5370645.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/10303119/pexels-photo-10303119.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: false,
    isBestseller: false,
    rating: 4.8,
    reviewCount: 29,
    reviewDistribution: {
      5: 0.8,
      4: 0.2,
      3: 0,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Delicate cherry blossom stud earrings with pink enamel details, perfect for everyday wear.",
    description:
      "Our Cherry Blossom Stud Earrings capture the delicate beauty of spring's most beloved flower. Each stud features five petals with hand-applied pink enamel detailing for an authentic look. Small but detailed, these earrings add a subtle touch of natural beauty to any outfit and are comfortable enough for all-day wear.",
    material: "Sterling Silver with Pink Enamel",
    dimensions: "0.9cm diameter",
    weight: "2g per pair",
    features: [
      "Hypoallergenic posts",
      "Secure butterfly backs",
      "Hand-applied pink enamel detailing",
      "Lightweight for comfortable wear",
    ],
    options: [],
    createdAt: "2021-02-05",
  },
  {
    id: 20,
    name: "Monstera Leaf Earrings",
    category: "earrings",
    collection: "tropical-paradise",
    price: 2400,
    salePrice: null,
    images: [
      "https://images.pexels.com/photos/8128902/pexels-photo-8128902.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/7290706/pexels-photo-7290706.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    isNew: true,
    isBestseller: false,
    rating: 4.6,
    reviewCount: 11,
    reviewDistribution: {
      5: 0.6,
      4: 0.4,
      3: 0,
      2: 0,
      1: 0,
    },
    shortDescription:
      "Statement monstera leaf earrings that bring tropical vibes to any outfit, perfect for plant lovers.",
    description:
      "Embrace the tropical trend with our Monstera Leaf Earrings. These statement pieces capture the distinctive perforated pattern of the popular houseplant in a stylish, wearable form. The earrings have a brushed finish that gives them a contemporary feel, and despite their bold size, they're surprisingly lightweight and comfortable to wear all day.",
    material: "Brass with Gold Plating",
    dimensions: "Length: 3.8cm, Width: 2.5cm",
    weight: "6g per pair",
    features: [
      "Lightweight despite bold size",
      "Distinctive monstera leaf shape with cutouts",
      "Brushed gold finish",
      "Hypoallergenic fish hook ear wires",
    ],
    options: [],
    createdAt: "2023-01-10",
  },
];
