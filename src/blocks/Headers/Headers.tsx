import { Section, type SectionProps } from "ui";

export type StandardHeaderProps = Omit<SectionProps, "variant" | "padding">;
export function StandardHeader({ className, ...props }: StandardHeaderProps) {
  return (
    <Section elementType="header" variant="stroke" padding="sm" {...props} />
  );
}
export type VerticalHeaderProps = Omit<SectionProps, "variant" | "padding">;
export function VerticalHeader({ className, ...props }: VerticalHeaderProps) {
  return (
    <Section elementType="header" variant="subtle" padding="sm" {...props} />
  );
}
