import { Flex, Section, type SectionProps } from "layout";

export type HeroProps = Omit<SectionProps, "padding" | "paddingY" | "paddingX">;
export function Hero({ children, ...props }: HeroProps) {
  return (
    <Section padding="1600">
      <Flex container alignPrimary="center" alignSecondary="center" gap="600" direction="column" {...props}>
        {children}
      </Flex>
    </Section>
  );
}
