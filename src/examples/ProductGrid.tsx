import { ProductInfoCard, ProductInfoCardProps } from "compositions";
import { ProductsContext } from "data";
import { useMediaQuery } from "hooks";
import { IconChevronDown, IconChevronUp } from "icons";
import { Flex, FlexItem, Section } from "layout";
import { Search, TagButton } from "primitives";
import { useContext, useEffect, useState } from "react";

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
      (product) => !filterTopRated || product.rating >= 4.75,
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
