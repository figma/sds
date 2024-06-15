import { Flex, type FlexProps } from "layout";

export type PanelProps = Omit<FlexProps, "container" | "wrap">;
export function Panel({ children, ...props }: PanelProps) {
  return (
    <Flex container wrap {...props}>
      {children}
    </Flex>
  );
}
