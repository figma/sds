import {
  ProductInfoCard,
  ProductInfoCardSkeleton,
  productToProductInfoCardProps,
} from "compositions";
import { useProducts, type Product } from "data";
import { useMediaQuery } from "hooks";
import { IconChevronDown, IconChevronUp } from "icons";
import { Flex, FlexItem, Section } from "layout";
import { Search, TagButton } from "primitives";
import { useEffect, useState } from "react";

export function ProductGrid() {
  const { isMobile, isTablet } = useMediaQuery();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortPrice, setSortPrice] = useState<-1 | 0 | 1>(0);
  const [filterTopRated, setFilterTopRated] = useState<boolean>(false);
  const flexGap = isMobile ? "600" : "1200";
  const sectionPadding = isMobile ? "600" : "1600";
  const { products, isLoading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  useEffect(() => {
    const initialProducts = products.filter(
      (product) => !filterTopRated || product.rating >= 4.75,
    );
    if (!searchTerm) {
      setFilteredProducts(initialProducts);
    } else {
      setFilteredProducts(
        initialProducts.filter(
          (product) =>
            product.name.match(new RegExp(searchTerm, "i")) ||
            product.description.match(new RegExp(searchTerm, "i")),
        ),
      );
    }
  }, [searchTerm, filterTopRated, products]);

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortPrice !== 0) {
      return a.price > b.price ? sortPrice : -sortPrice;
    }
    return 0;
  });

  return (
    <Section padding={sectionPadding} variant="stroke">
      <Flex container wrap gap={flexGap} alignPrimary="stretch">
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
                  {sortPrice === 0 || sortPrice === -1 ? (
                    <IconChevronDown />
                  ) : (
                    <IconChevronUp />
                  )}
                </TagButton>
              </Flex>
            </FlexItem>
          </Flex>
          <Flex type="third" wrap gap="600">
            {isLoading ? (
              <>
                <ProductInfoCardSkeleton />
                <ProductInfoCardSkeleton />
                <ProductInfoCardSkeleton />
                <ProductInfoCardSkeleton />
                <ProductInfoCardSkeleton />
                <ProductInfoCardSkeleton />
              </>
            ) : (
              sortedProducts.map(({ ...product }, index) => (
                <FlexItem key={index} size={isTablet ? "half" : "minor"}>
                  <ProductInfoCard
                    {...productToProductInfoCardProps(product)}
                  />
                </FlexItem>
              ))
            )}
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
