import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "icons";
import { useState } from "react";

const meta: Meta = {
  title: "SDS Foundations/Icons",
  parameters: { layout: "padded" },
};
export default meta;

type IconComponent = (props: { size?: "16" | "20" | "24" | "32" | "40" | "48" }) => JSX.Element;
const entries = Object.entries(Icons).filter(([name]) => name.startsWith("Icon")) as [
  string,
  IconComponent,
][];

function IconGallery() {
  const [query, setQuery] = useState("");
  const [size, setSize] = useState<"16" | "20" | "24" | "32">("24");
  const shown = entries.filter(([name]) => name.toLowerCase().includes(query.toLowerCase()));
  return (
    <div>
      <div style={{ display: "flex", gap: "var(--sds-size-space-300)", marginBottom: "var(--sds-size-space-600)" }}>
        <input
          placeholder={`Search ${entries.length} icons…`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ font: "var(--sds-font-body-base)", padding: "var(--sds-size-space-200)", flex: 1 }}
        />
        <select value={size} onChange={(e) => setSize(e.target.value as typeof size)}>
          {["16", "20", "24", "32"].map((s) => (
            <option key={s} value={s}>{s}px</option>
          ))}
        </select>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "var(--sds-size-space-400)" }}>
        {shown.map(([name, Icon]) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--sds-size-space-200)",
              padding: "var(--sds-size-space-400)",
              borderRadius: "var(--sds-size-radius-200)",
              boxShadow: "inset 0 0 0 1px var(--sds-color-border-default-default)",
            }}
          >
            <Icon size={size} />
            <code style={{ font: "var(--sds-font-body-small)" }}>{name}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

export const AllIcons: StoryObj = {
  name: "All icons",
  render: () => <IconGallery />,
};
