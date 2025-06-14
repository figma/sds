import { ProductInfoCard, ProductInfoCardProps } from "compositions";
import { useMediaQuery } from "hooks";
import { IconChevronDown, IconChevronUp } from "icons";
import { placeholder } from "images";
import { Flex, FlexItem, Section } from "layout";
import { Image, Search, TagButton } from "primitives";
import { createContext, useContext, useEffect, useState } from "react";

export function ProductGrid() {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortPrice, setSortPrice] = useState<-1 | 0 | 1>(0);
  const [filterTopRated, setFilterTopRated] = useState<boolean>(false);
  const flexGap = isMobile ? "600" : "1200";
  const sectionPadding = isMobile ? "600" : "1600";
  const products = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState<
    ProductInfoCardProps[]
  >([]);
  useEffect(() => {
    const initialProducts = products.filter(
      (product) => !filterTopRated || product.rating >= 4.5,
    );
    if (!searchTerm) {
      setFilteredProducts(initialProducts);
    } else {
      setFilteredProducts(
        initialProducts.filter(
          (product) =>
            product.heading.match(new RegExp(searchTerm, "i")) ||
            product.description.match(new RegExp(searchTerm, "i")),
        ),
      );
    }
  }, [searchTerm, filterTopRated]);

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortPrice !== 0) {
      return parseFloat(a.price) > parseFloat(b.price) ? sortPrice : -sortPrice;
    }
    return 0;
  });

  return (
    <Section padding={sectionPadding} variant="neutral">
      <Flex container wrap gap={flexGap}>
        <FlexItem size={isDesktop ? "major" : "full"}>
          <Flex direction="column" gap="1200" alignSecondary="stretch">
            <Flex
              alignPrimary="space-between"
              alignSecondary="center"
              type="third"
              wrap
              gap="400"
            >
              <FlexItem size="minor">
                <Flex alignPrimary="stretch">
                  <Search
                    placeholder="Search"
                    value={searchTerm}
                    onInput={(e) => setSearchTerm(e.currentTarget.value)}
                  />
                </Flex>
              </FlexItem>
              <FlexItem>
                <Flex gap="200">
                  <TagButton
                    id="filter-top-rated"
                    onPress={() => setFilterTopRated((prev) => !prev)}
                    variant={filterTopRated ? "primary" : "secondary"}
                  >
                    Top rated
                  </TagButton>
                  <TagButton
                    id="sort-price"
                    variant={sortPrice === 0 ? "secondary" : "primary"}
                    onPress={() => {
                      setSortPrice((prev) => {
                        if (prev === 0) return -1;
                        if (prev === -1) return 1;
                        return 0;
                      });
                    }}
                  >
                    Price{" "}
                    {sortPrice !== 0 ? (
                      sortPrice === -1 ? (
                        <IconChevronDown />
                      ) : (
                        <IconChevronUp />
                      )
                    ) : undefined}
                  </TagButton>
                </Flex>
              </FlexItem>
            </Flex>
            <Flex type="third" wrap gap="600">
              {sortedProducts.map(({ ...product }, index) => (
                <FlexItem key={index} size={isTablet ? "half" : "minor"}>
                  <ProductInfoCard {...product} />
                </FlexItem>
              ))}
            </Flex>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}

export const ProductsContext = createContext<ProductInfoCardProps[]>([
  {
    asset: (
      <Image
        aspectRatio="4-3"
        alt="Wireless Bluetooth Headphones"
        src={placeholder}
      />
    ),
    heading: "Wireless Bluetooth Headphones",
    price: "89.99",
    rating: 4.5,
    description:
      "Premium noise-canceling headphones with 30-hour battery life and crystal clear audio quality.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Smart Fitness Tracker" src={placeholder} />
    ),
    heading: "Smart Fitness Tracker",
    price: "149.99",
    rating: 4.2,
    description:
      "Advanced health monitoring with heart rate, sleep tracking, and GPS for all your fitness goals.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Portable Phone Charger" src={placeholder} />
    ),
    heading: "Portable Phone Charger",
    price: "29.99",
    rating: 4.7,
    description:
      "Ultra-compact 10,000mAh power bank with fast charging for all your mobile devices.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Coffee Bean Grinder" src={placeholder} />
    ),
    heading: "Coffee Bean Grinder",
    price: "79.99",
    rating: 4.4,
    description:
      "Precision burr grinder for the perfect coffee experience with 15 grind settings.",
  },
  {
    asset: <Image aspectRatio="4-3" alt="Yoga Mat Premium" src={placeholder} />,
    heading: "Yoga Mat Premium",
    price: "45.99",
    rating: 4.8,
    description:
      "Non-slip eco-friendly yoga mat with superior cushioning and grip for all practice levels.",
  },
  {
    asset: <Image aspectRatio="4-3" alt="LED Desk Lamp" src={placeholder} />,
    heading: "LED Desk Lamp",
    price: "39.99",
    rating: 4.3,
    description:
      "Adjustable brightness desk lamp with USB charging port and touch controls.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Wireless Gaming Mouse" src={placeholder} />
    ),
    heading: "Wireless Gaming Mouse",
    price: "69.99",
    rating: 4.6,
    description:
      "High-precision gaming mouse with customizable RGB lighting and programmable buttons.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Ceramic Dinnerware Set" src={placeholder} />
    ),
    heading: "Ceramic Dinnerware Set",
    price: "119.99",
    rating: 4.1,
    description:
      "16-piece modern dinnerware set, dishwasher and microwave safe, perfect for entertaining.",
  },
  {
    asset: (
      <Image
        aspectRatio="4-3"
        alt="Bluetooth Speaker Waterproof"
        src={placeholder}
      />
    ),
    heading: "Bluetooth Speaker Waterproof",
    price: "54.99",
    rating: 4.5,
    description:
      "Portable waterproof speaker with 360-degree sound and 12-hour battery life.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Organic Cotton T-Shirt" src={placeholder} />
    ),
    heading: "Organic Cotton T-Shirt",
    price: "24.99",
    rating: 4.3,
    description:
      "Soft, breathable organic cotton t-shirt available in multiple colors and sizes.",
  },
  {
    asset: (
      <Image
        aspectRatio="4-3"
        alt="Stainless Steel Water Bottle"
        src={placeholder}
      />
    ),
    heading: "Stainless Steel Water Bottle",
    price: "32.99",
    rating: 4.9,
    description:
      "Insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours.",
  },
  {
    asset: (
      <Image
        aspectRatio="4-3"
        alt="Mechanical Keyboard RGB"
        src={placeholder}
      />
    ),
    heading: "Mechanical Keyboard RGB",
    price: "129.99",
    rating: 4.7,
    description:
      "Tactile mechanical keyboard with customizable RGB backlighting and premium switches.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Essential Oil Diffuser" src={placeholder} />
    ),
    heading: "Essential Oil Diffuser",
    price: "42.99",
    rating: 4.4,
    description:
      "Ultrasonic aromatherapy diffuser with LED lights and automatic shut-off timer.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Phone Camera Lens Kit" src={placeholder} />
    ),
    heading: "Phone Camera Lens Kit",
    price: "35.99",
    rating: 4.2,
    description:
      "Professional lens attachment kit including wide-angle, macro, and fisheye lenses.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Memory Foam Pillow" src={placeholder} />
    ),
    heading: "Memory Foam Pillow",
    price: "59.99",
    rating: 4.6,
    description:
      "Contoured memory foam pillow with cooling gel layer for optimal neck support.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Cast Iron Skillet" src={placeholder} />
    ),
    heading: "Cast Iron Skillet",
    price: "49.99",
    rating: 4.8,
    description:
      "Pre-seasoned cast iron skillet perfect for searing, baking, and everyday cooking.",
  },
  {
    asset: (
      <Image
        aspectRatio="4-3"
        alt="Laptop Stand Adjustable"
        src={placeholder}
      />
    ),
    heading: "Laptop Stand Adjustable",
    price: "67.99",
    rating: 4.3,
    description:
      "Ergonomic laptop stand with adjustable height and angle for better posture.",
  },
  {
    asset: <Image aspectRatio="4-3" alt="Silk Sleep Mask" src={placeholder} />,
    heading: "Silk Sleep Mask",
    price: "19.99",
    rating: 4.5,
    description:
      "Luxurious mulberry silk sleep mask for complete darkness and comfortable rest.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Resistance Bands Set" src={placeholder} />
    ),
    heading: "Resistance Bands Set",
    price: "28.99",
    rating: 4.4,
    description:
      "Complete resistance training set with multiple resistance levels and exercise guide.",
  },
  {
    asset: <Image aspectRatio="4-3" alt="Smart Home Hub" src={placeholder} />,
    heading: "Smart Home Hub",
    price: "99.99",
    rating: 4.1,
    description:
      "Central control hub for all your smart home devices with voice assistant integration.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Bamboo Cutting Board" src={placeholder} />
    ),
    heading: "Bamboo Cutting Board",
    price: "34.99",
    rating: 4.7,
    description:
      "Eco-friendly bamboo cutting board with juice groove and antimicrobial properties.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Wireless Car Charger" src={placeholder} />
    ),
    heading: "Wireless Car Charger",
    price: "44.99",
    rating: 4.2,
    description:
      "Fast wireless charging mount for car with automatic clamping and ventilation cooling.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Ceramic Space Heater" src={placeholder} />
    ),
    heading: "Ceramic Space Heater",
    price: "89.99",
    rating: 4.3,
    description:
      "Energy-efficient ceramic heater with remote control and safety features.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Blue Light Glasses" src={placeholder} />
    ),
    heading: "Blue Light Glasses",
    price: "39.99",
    rating: 4.4,
    description:
      "Stylish blue light blocking glasses to reduce eye strain from digital screens.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Insulated Lunch Box" src={placeholder} />
    ),
    heading: "Insulated Lunch Box",
    price: "26.99",
    rating: 4.6,
    description:
      "Leak-proof insulated lunch box with multiple compartments and utensils included.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Foam Roller Massage" src={placeholder} />
    ),
    heading: "Foam Roller Massage",
    price: "31.99",
    rating: 4.5,
    description:
      "High-density foam roller for muscle recovery and deep tissue massage therapy.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Wireless Earbuds Pro" src={placeholder} />
    ),
    heading: "Wireless Earbuds Pro",
    price: "159.99",
    rating: 4.8,
    description:
      "Premium wireless earbuds with active noise cancellation and transparency mode.",
  },
  {
    asset: <Image aspectRatio="4-3" alt="Plant Humidifier" src={placeholder} />,
    heading: "Plant Humidifier",
    price: "55.99",
    rating: 4.2,
    description:
      "Decorative humidifier designed for plant care with automatic humidity control.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Magnetic Phone Mount" src={placeholder} />
    ),
    heading: "Magnetic Phone Mount",
    price: "22.99",
    rating: 4.3,
    description:
      "Strong magnetic car mount for phones with 360-degree rotation and easy installation.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Electric Kettle Smart" src={placeholder} />
    ),
    heading: "Electric Kettle Smart",
    price: "79.99",
    rating: 4.5,
    description:
      "Smart electric kettle with temperature control and keep-warm function via app.",
  },
  {
    asset: (
      <Image
        aspectRatio="4-3"
        alt="Weighted Blanket Therapy"
        src={placeholder}
      />
    ),
    heading: "Weighted Blanket Therapy",
    price: "89.99",
    rating: 4.7,
    description:
      "Therapeutic weighted blanket for better sleep and anxiety relief, multiple weights available.",
  },
  {
    asset: (
      <Image
        aspectRatio="4-3"
        alt="Knife Sharpener Electric"
        src={placeholder}
      />
    ),
    heading: "Knife Sharpener Electric",
    price: "45.99",
    rating: 4.1,
    description:
      "Professional electric knife sharpener with precision angle guides for all blade types.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Air Purifier HEPA" src={placeholder} />
    ),
    heading: "Air Purifier HEPA",
    price: "179.99",
    rating: 4.6,
    description:
      "True HEPA air purifier removes 99.97% of allergens and pollutants from indoor air.",
  },
  {
    asset: (
      <Image
        aspectRatio="4-3"
        alt="Cordless Vacuum Handheld"
        src={placeholder}
      />
    ),
    heading: "Cordless Vacuum Handheld",
    price: "69.99",
    rating: 4.4,
    description:
      "Lightweight cordless handheld vacuum perfect for quick cleanups and car interior.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Reading Light Clip-On" src={placeholder} />
    ),
    heading: "Reading Light Clip-On",
    price: "18.99",
    rating: 4.3,
    description:
      "Portable clip-on reading light with adjustable brightness and flexible neck.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Spice Rack Magnetic" src={placeholder} />
    ),
    heading: "Spice Rack Magnetic",
    price: "36.99",
    rating: 4.5,
    description:
      "Space-saving magnetic spice rack with clear jars and labels, perfect for any kitchen.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Gaming Chair Ergonomic" src={placeholder} />
    ),
    heading: "Gaming Chair Ergonomic",
    price: "229.99",
    rating: 4.2,
    description:
      "Ergonomic gaming chair with lumbar support, adjustable armrests, and premium materials.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Wireless Charging Pad" src={placeholder} />
    ),
    heading: "Wireless Charging Pad",
    price: "29.99",
    rating: 4.4,
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices and safety features.",
  },
  {
    asset: (
      <Image aspectRatio="4-3" alt="Bath Towel Set Luxury" src={placeholder} />
    ),
    heading: "Bath Towel Set Luxury",
    price: "79.99",
    rating: 4.8,
    description:
      "Ultra-soft luxury bath towel set made from premium cotton with superior absorbency.",
  },
]);
