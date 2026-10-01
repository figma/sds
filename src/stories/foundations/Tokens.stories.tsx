import type { Meta, StoryObj } from "@storybook/react";
import { TokenTable, swatch, tokensWithPrefix } from "./tokenUtils";

const meta: Meta = {
  title: "SDS Foundations/Tokens",
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

const semanticColor = (role: string) =>
  tokensWithPrefix(`--sds-color-${role}-`);

export const Colors: Story = {
  name: "Colour — semantic (use these)",
  render: () => (
    <>
      {["background", "text", "icon", "border"].map((role) => (
        <section key={role} style={{ marginBottom: "var(--sds-size-space-1200)" }}>
          <h2 style={{ font: "var(--sds-font-heading)" }}>{role}</h2>
          <TokenTable tokens={semanticColor(role)} preview={swatch} />
        </section>
      ))}
    </>
  ),
};

export const ColorPrimitives: Story = {
  name: "Colour — primitives (don't use in components)",
  render: () => (
    <TokenTable
      tokens={tokensWithPrefix("--sds-color-").filter(
        (t) => !/--sds-color-(background|text|icon|border)-/.test(t),
      )}
      preview={swatch}
    />
  ),
};

export const Typography: Story = {
  name: "Typography — font styles",
  render: () => (
    <TokenTable
      tokens={tokensWithPrefix("--sds-font-")}
      preview={(t) => <span style={{ font: `var(${t})` }}>Ag</span>}
    />
  ),
};

export const Spacing: Story = {
  name: "Spacing",
  render: () => (
    <TokenTable
      tokens={tokensWithPrefix("--sds-size-space-").filter((t) => !t.includes("negative"))}
      preview={(t) => (
        <div
          style={{
            width: `var(${t})`,
            height: 16,
            background: "var(--sds-color-background-brand-default)",
          }}
        />
      )}
    />
  ),
};

export const Radius: Story = {
  name: "Radius",
  render: () => (
    <TokenTable
      tokens={tokensWithPrefix("--sds-size-radius-")}
      preview={(t) => (
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: `var(${t})`,
            background: "var(--sds-color-background-default-secondary)",
            boxShadow: "inset 0 0 0 1px var(--sds-color-border-default-default)",
          }}
        />
      )}
    />
  ),
};

export const Shadows: Story = {
  name: "Shadows",
  render: () => (
    <TokenTable
      tokens={tokensWithPrefix("--sds-effects-shadows-")}
      preview={(t) => (
        <div
          style={{
            width: 64,
            height: 40,
            borderRadius: "var(--sds-size-radius-200)",
            background: "var(--sds-color-background-default-default)",
            boxShadow: `var(${t})`,
          }}
        />
      )}
    />
  ),
};

export const Sizes: Story = {
  name: "Other sizes — icon, stroke, depth, blur",
  render: () => (
    <TokenTable
      tokens={[
        ...tokensWithPrefix("--sds-size-icon-"),
        ...tokensWithPrefix("--sds-size-stroke-"),
        ...tokensWithPrefix("--sds-size-depth-"),
        ...tokensWithPrefix("--sds-size-blur-"),
      ]}
      preview={() => null}
    />
  ),
};
