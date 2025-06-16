import { Product, ProductFilter, ProductSort } from "../types/products";

/**
 * Mock products service
 */
export const productsService = {
  /**
   * Get all products
   */
  async getProducts(): Promise<Product[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return [
      {
        id: "1",
        name: "Wireless Bluetooth Headphones",
        description:
          "Premium noise-canceling headphones with 30-hour battery life and crystal clear audio quality.",
        price: 89.99,
        currency: "$",
        rating: 4.5,
        imageUrl:
          "https://picsum.photos/seed/Wireless-Bluetooth-Headphones/1200/900",
        category: "Electronics",
        inStock: true,
        tags: ["wireless", "bluetooth", "audio"],
      },
      {
        id: "2",
        name: "Smart Fitness Tracker",
        description:
          "Advanced health monitoring with heart rate, sleep tracking, and GPS for all your fitness goals.",
        price: 149.99,
        currency: "$",
        rating: 4.2,
        imageUrl: "https://picsum.photos/seed/Smart-Fitness-Tracker/1200/900",
        category: "Fitness",
        inStock: true,
        tags: ["fitness", "health", "tracking"],
      },
      {
        id: "3",
        name: "Portable Phone Charger",
        description:
          "Ultra-compact 10,000mAh power bank with fast charging for all your mobile devices.",
        price: 29.99,
        currency: "$",
        rating: 4.7,
        imageUrl: "https://picsum.photos/seed/Portable-Phone-Charger/1200/900",
        category: "Electronics",
        inStock: true,
        tags: ["charging", "portable", "battery"],
      },
      {
        id: "4",
        name: "Coffee Bean Grinder",
        description:
          "Precision burr grinder for the perfect coffee experience with 15 grind settings.",
        price: 79.99,
        currency: "$",
        rating: 4.4,
        imageUrl: "https://picsum.photos/seed/Coffee-Beans-Grinders/1200/900",
        category: "Kitchen",
        inStock: false,
        tags: ["coffee", "grinder", "kitchen"],
      },
      {
        id: "5",
        name: "Yoga Mat Premium",
        description:
          "Non-slip eco-friendly yoga mat with superior cushioning and grip for all practice levels.",
        price: 45.99,
        currency: "$",
        rating: 4.8,
        imageUrl: "https://picsum.photos/seed/Yoga-Mat-Premium/1200/900",
        category: "Fitness",
        inStock: true,
        tags: ["yoga", "fitness", "eco-friendly"],
      },
      {
        id: "6",
        name: "LED Desk Lamp",
        description:
          "Adjustable brightness desk lamp with USB charging port and touch controls.",
        price: 39.99,
        currency: "$",
        rating: 4.3,
        imageUrl: "https://picsum.photos/seed/LED-Desks-Lamps/1200/900",
        category: "Office",
        inStock: true,
        tags: ["lighting", "desk", "LED"],
      },
      {
        id: "7",
        name: "Wireless Gaming Mouse",
        description:
          "High-precision gaming mouse with customizable RGB lighting and programmable buttons.",
        price: 69.99,
        currency: "$",
        rating: 4.6,
        imageUrl: "https://picsum.photos/seed/Wireless-Gaming-Mouse/1200/900",
        category: "Electronics",
        inStock: true,
        tags: ["gaming", "mouse", "RGB"],
      },
      {
        id: "8",
        name: "Ceramic Dinnerware Set",
        description:
          "16-piece modern dinnerware set, dishwasher and microwave safe, perfect for entertaining.",
        price: 119.99,
        currency: "$",
        rating: 4.1,
        imageUrl: "https://picsum.photos/seed/Ceramic-Dinnerware-Set/1200/900",
        category: "Kitchen",
        inStock: true,
        tags: ["dinnerware", "ceramic", "set"],
      },
      {
        id: "9",
        name: "Bluetooth Speaker Waterproof",
        description:
          "Portable waterproof speaker with 360-degree sound and 12-hour battery life.",
        price: 54.99,
        currency: "$",
        rating: 4.5,
        imageUrl:
          "https://picsum.photos/seed/Bluetooth-Speaker-Waterproof/1200/900",
        category: "Electronics",
        inStock: true,
        tags: ["bluetooth", "speaker", "waterproof"],
      },
      {
        id: "10",
        name: "Organic Cotton T-Shirt",
        description:
          "Soft, breathable organic cotton t-shirt available in multiple colors and sizes.",
        price: 24.99,
        currency: "$",
        rating: 4.3,
        imageUrl: "https://picsum.photos/seed/Organic-Cotton-T-Shirt/1200/900",
        category: "Clothing",
        inStock: true,
        tags: ["organic", "cotton", "t-shirt"],
      },
      {
        id: "11",
        name: "Stainless Steel Water Bottle",
        description:
          "Insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours.",
        price: 32.99,
        currency: "$",
        rating: 4.9,
        imageUrl:
          "https://picsum.photos/seed/Stainless-Steel-Water-Bottle/1200/900",
        category: "Fitness",
        inStock: true,
        tags: ["water bottle", "insulated", "stainless steel"],
      },
      {
        id: "12",
        name: "Mechanical Keyboard RGB",
        description:
          "Tactile mechanical keyboard with customizable RGB backlighting and premium switches.",
        price: 129.99,
        currency: "$",
        rating: 4.7,
        imageUrl: "https://picsum.photos/seed/Mechanical-Keyboard-RGB/1200/900",
        category: "Electronics",
        inStock: true,
        tags: ["keyboard", "mechanical", "RGB"],
      },
      {
        id: "13",
        name: "Essential Oil Diffuser",
        description:
          "Ultrasonic aromatherapy diffuser with LED lights and automatic shut-off timer.",
        price: 42.99,
        currency: "$",
        rating: 4.4,
        imageUrl:
          "https://picsum.photos/seed/Essential-Oils-Diffusers/1200/900",
        category: "Home",
        inStock: true,
        tags: ["diffuser", "aromatherapy", "essential oils"],
      },
      {
        id: "14",
        name: "Phone Camera Lens Kit",
        description:
          "Professional lens attachment kit including wide-angle, macro, and fisheye lenses.",
        price: 35.99,
        currency: "$",
        rating: 4.2,
        imageUrl: "https://picsum.photos/seed/Phone-Camera-Lens-Kit/1200/900",
        category: "Electronics",
        inStock: true,
        tags: ["camera", "lens", "photography"],
      },
      {
        id: "15",
        name: "Memory Foam Pillow",
        description:
          "Contoured memory foam pillow with cooling gel layer for optimal neck support.",
        price: 59.99,
        currency: "$",
        rating: 4.6,
        imageUrl: "https://picsum.photos/seed/Memory-Foam-Pillow/1200/900",
        category: "Home",
        inStock: true,
        tags: ["pillow", "memory foam", "cooling"],
      },
      {
        id: "16",
        name: "Cast Iron Skillet",
        description:
          "Pre-seasoned cast iron skillet perfect for searing, baking, and everyday cooking.",
        price: 49.99,
        currency: "$",
        rating: 4.8,
        imageUrl: "https://picsum.photos/seed/Cast-Iron-Skillet/1200/900",
        category: "Kitchen",
        inStock: true,
        tags: ["cast iron", "skillet", "cooking"],
      },
      {
        id: "17",
        name: "Laptop Stand Adjustable",
        description:
          "Ergonomic laptop stand with adjustable height and angle for better posture.",
        price: 67.99,
        currency: "$",
        rating: 4.3,
        imageUrl: "https://picsum.photos/seed/Laptop-Stand-Adjustable/1200/900",
        category: "Office",
        inStock: true,
        tags: ["laptop", "stand", "ergonomic"],
      },
      {
        id: "18",
        name: "Silk Sleep Mask",
        description:
          "Luxurious mulberry silk sleep mask for complete darkness and comfortable rest.",
        price: 19.99,
        currency: "$",
        rating: 4.5,
        imageUrl: "https://picsum.photos/seed/Silk-Sleep-Mask/1200/900",
        category: "Home",
        inStock: true,
        tags: ["sleep", "mask", "silk"],
      },
      {
        id: "19",
        name: "Resistance Bands Set",
        description:
          "Complete resistance training set with multiple resistance levels and exercise guide.",
        price: 28.99,
        currency: "$",
        rating: 4.4,
        imageUrl: "https://picsum.photos/seed/Resistance-Bands-Set/1200/900",
        category: "Fitness",
        inStock: true,
        tags: ["resistance", "bands", "exercise"],
      },
      {
        id: "20",
        name: "Smart Home Hub",
        description:
          "Central control hub for all your smart home devices with voice assistant integration.",
        price: 99.99,
        currency: "$",
        rating: 4.1,
        imageUrl: "https://picsum.photos/seed/Smart-Home-Hub/1200/900",
        category: "Electronics",
        inStock: true,
        tags: ["smart home", "hub", "voice assistant"],
      },
      {
        id: "21",
        name: "Bamboo Cutting Board",
        description:
          "Eco-friendly bamboo cutting board with juice groove and antimicrobial properties.",
        price: 34.99,
        currency: "$",
        rating: 4.7,
        imageUrl: "https://picsum.photos/seed/Bamboo-Cutting-Board/1200/900",
        category: "Kitchen",
        inStock: true,
        tags: ["bamboo", "cutting board", "eco-friendly"],
      },
      {
        id: "22",
        name: "Wireless Car Charger",
        description:
          "Fast wireless charging mount for car with automatic clamping and ventilation cooling.",
        price: 44.99,
        currency: "$",
        rating: 4.2,
        imageUrl: "https://picsum.photos/seed/Wireless-Car-Charger/1200/900",
        category: "Electronics",
        inStock: true,
        tags: ["wireless", "car charger", "mount"],
      },
      {
        id: "23",
        name: "Ceramic Space Heater",
        description:
          "Energy-efficient ceramic heater with remote control and safety features.",
        price: 89.99,
        currency: "$",
        rating: 4.3,
        imageUrl: "https://picsum.photos/seed/Ceramic-Space-Heater/1200/900",
        category: "Home",
        inStock: true,
        tags: ["heater", "ceramic", "energy efficient"],
      },
      {
        id: "24",
        name: "Blue Light Glasses",
        description:
          "Stylish blue light blocking glasses to reduce eye strain from digital screens.",
        price: 39.99,
        currency: "$",
        rating: 4.4,
        imageUrl: "https://picsum.photos/seed/Blue-Light-Glasses/1200/900",
        category: "Health",
        inStock: true,
        tags: ["glasses", "blue light", "eye strain"],
      },
      {
        id: "25",
        name: "Insulated Lunch Box",
        description:
          "Leak-proof insulated lunch box with multiple compartments and utensils included.",
        price: 26.99,
        currency: "$",
        rating: 4.6,
        imageUrl: "https://picsum.photos/seed/Insulated-Lunch-Box/1200/900",
        category: "Kitchen",
        inStock: true,
        tags: ["lunch box", "insulated", "leak-proof"],
      },
      {
        id: "26",
        name: "Foam Roller Massage",
        description:
          "High-density foam roller for muscle recovery and deep tissue massage therapy.",
        price: 31.99,
        currency: "$",
        rating: 4.5,
        imageUrl: "https://picsum.photos/seed/Foam-Roller-Massage/1200/900",
        category: "Fitness",
        inStock: true,
        tags: ["foam roller", "massage", "recovery"],
      },
      {
        id: "27",
        name: "Wireless Earbuds Pro",
        description:
          "Premium wireless earbuds with active noise cancellation and transparency mode.",
        price: 159.99,
        currency: "$",
        rating: 4.8,
        imageUrl: "https://picsum.photos/seed/Wireless-Earbuds-Pros/1200/900",
        category: "Electronics",
        inStock: true,
        tags: ["earbuds", "wireless", "noise cancellation"],
      },
      {
        id: "28",
        name: "Plant Humidifier",
        description:
          "Decorative humidifier designed for plant care with automatic humidity control.",
        price: 55.99,
        currency: "$",
        rating: 4.2,
        imageUrl: "https://picsum.photos/seed/Plant-Humidifier/1200/900",
        category: "Home",
        inStock: true,
        tags: ["humidifier", "plants", "humidity"],
      },
      {
        id: "29",
        name: "Magnetic Phone Mount",
        description:
          "Strong magnetic car mount for phones with 360-degree rotation and easy installation.",
        price: 22.99,
        currency: "$",
        rating: 4.3,
        imageUrl: "https://picsum.photos/seed/Magnetic-Phone-Mount/1200/900",
        category: "Electronics",
        inStock: true,
        tags: ["phone mount", "magnetic", "car"],
      },
      {
        id: "30",
        name: "Electric Kettle Smart",
        description:
          "Smart electric kettle with temperature control and keep-warm function via app.",
        price: 79.99,
        currency: "$",
        rating: 4.5,
        imageUrl: "https://picsum.photos/seed/Electric-Kettle-Smarts/1200/900",
        category: "Kitchen",
        inStock: true,
        tags: ["electric kettle", "smart", "temperature control"],
      },
      {
        id: "31",
        name: "Weighted Blanket Therapy",
        description:
          "Therapeutic weighted blanket for better sleep and anxiety relief, multiple weights available.",
        price: 89.99,
        currency: "$",
        rating: 4.7,
        imageUrl:
          "https://picsum.photos/seed/Weighted-Blanket-Therapy/1200/900",
        category: "Home",
        inStock: true,
        tags: ["weighted blanket", "therapy", "sleep"],
      },
      {
        id: "32",
        name: "Knife Sharpener Electric",
        description:
          "Professional electric knife sharpener with precision angle guides for all blade types.",
        price: 45.99,
        currency: "$",
        rating: 4.1,
        imageUrl:
          "https://picsum.photos/seed/Knife-Sharpeners-Electric/1200/900",
        category: "Kitchen",
        inStock: true,
        tags: ["knife sharpener", "electric", "professional"],
      },
      {
        id: "33",
        name: "Air Purifier HEPA",
        description:
          "True HEPA air purifier removes 99.97% of allergens and pollutants from indoor air.",
        price: 179.99,
        currency: "$",
        rating: 4.6,
        imageUrl: "https://picsum.photos/seed/Air-Purifier-HEPA/1200/900",
        category: "Home",
        inStock: true,
        tags: ["air purifier", "HEPA", "allergens"],
      },
      {
        id: "34",
        name: "Cordless Vacuum Handheld",
        description:
          "Lightweight cordless handheld vacuum perfect for quick cleanups and car interior.",
        price: 69.99,
        currency: "$",
        rating: 4.4,
        imageUrl:
          "https://picsum.photos/seed/Cordless-Vacuum-Handheld/1200/900",
        category: "Home",
        inStock: true,
        tags: ["vacuum", "cordless", "handheld"],
      },
      {
        id: "35",
        name: "Reading Light Clip-On",
        description:
          "Portable clip-on reading light with adjustable brightness and flexible neck.",
        price: 18.99,
        currency: "$",
        rating: 4.3,
        imageUrl: "https://picsum.photos/seed/Reading-Lights-Clip-On/1200/900",
        category: "Home",
        inStock: true,
        tags: ["reading light", "clip-on", "portable"],
      },
      {
        id: "36",
        name: "Spice Rack Magnetic",
        description:
          "Space-saving magnetic spice rack with clear jars and labels, perfect for any kitchen.",
        price: 36.99,
        currency: "$",
        rating: 4.5,
        imageUrl: "https://picsum.photos/seed/Spice-Rack-Magnetic/1200/900",
        category: "Kitchen",
        inStock: true,
        tags: ["spice rack", "magnetic", "organization"],
      },
      {
        id: "37",
        name: "Gaming Chair Ergonomic",
        description:
          "Ergonomic gaming chair with lumbar support, adjustable armrests, and premium materials.",
        price: 229.99,
        currency: "$",
        rating: 4.2,
        imageUrl: "https://picsum.photos/seed/Gaming-Chairs-Ergonomic/1200/900",
        category: "Office",
        inStock: true,
        tags: ["gaming chair", "ergonomic", "lumbar support"],
      },
      {
        id: "38",
        name: "Wireless Charging Pad",
        description:
          "Fast wireless charging pad compatible with all Qi-enabled devices and safety features.",
        price: 29.99,
        currency: "$",
        rating: 4.4,
        imageUrl: "https://picsum.photos/seed/Wireless-Charging-Pad/1200/900",
        category: "Electronics",
        inStock: true,
        tags: ["wireless charging", "Qi", "fast charging"],
      },
      {
        id: "39",
        name: "Bath Towel Set Luxury",
        description:
          "Ultra-soft luxury bath towel set made from premium cotton with superior absorbency.",
        price: 79.99,
        currency: "$",
        rating: 4.8,
        imageUrl: "https://picsum.photos/seed/Bath-Towels-Set Luxury/1200/900",
        category: "Home",
        inStock: true,
        tags: ["bath towels", "luxury", "cotton"],
      },
    ];
  },

  /**
   * Filter products based on criteria
   */
  filterProducts(products: Product[], filters: ProductFilter): Product[] {
    return products.filter((product) => {
      if (filters.category && product.category !== filters.category)
        return false;
      if (filters.minPrice && product.price < filters.minPrice) return false;
      if (filters.maxPrice && product.price > filters.maxPrice) return false;
      if (filters.minRating && product.rating < filters.minRating) return false;
      if (filters.inStock !== undefined && product.inStock !== filters.inStock)
        return false;
      if (filters.tags && filters.tags.length > 0) {
        const hasTag = filters.tags.some((tag) =>
          product.tags?.some((productTag) =>
            productTag.toLowerCase().includes(tag.toLowerCase()),
          ),
        );
        if (!hasTag) return false;
      }
      return true;
    });
  },

  /**
   * Sort products
   */
  sortProducts(products: Product[], sort: ProductSort): Product[] {
    const sortedProducts = [...products];

    switch (sort) {
      case "name":
        return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      case "price":
        return sortedProducts.sort((a, b) => a.price - b.price);
      case "rating":
        return sortedProducts.sort((a, b) => b.rating - a.rating);
      case "newest":
        return sortedProducts.reverse(); // Mock newest first
      default:
        return sortedProducts;
    }
  },

  /**
   * Search products by query
   */
  searchProducts(products: Product[], query: string): Product[] {
    if (!query.trim()) return products;

    const lowercaseQuery = query.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery) ||
        product.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
    );
  },

  /**
   * Calculate cart total
   */
  calculateCartTotal(
    products: Product[],
    quantities: Record<string, number>,
  ): number {
    return Object.entries(quantities).reduce((total, [productId, quantity]) => {
      const product = products.find((p) => p.id === productId);
      return total + (product ? product.price * quantity : 0);
    }, 0);
  },
};
