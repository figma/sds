import { Flex, Section, type SectionProps } from "layout";

export type HeroProps = Omit<SectionProps, "padding" | "paddingY" | "paddingX">;
export function Hero({ children, ...props }: HeroProps) {
  return (
    <Section padding="1600">
      <Flex container alignPrimary="center" gap="600" {...props}>
        {children}
      </Flex>
    </Section>
  );
}
