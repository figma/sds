import { Flex, type FlexProps } from "layout";

export type PanelProps = Omit<FlexProps, "gap">;
export function Panel({ children, ...props }: PanelProps) {
  return (
    <Flex container wrap type="half" gap="1600" {...props}>
      {children}
    </Flex>
  );
}
