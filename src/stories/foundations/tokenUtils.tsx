// Reads token names straight from the generated theme.css, so these pages
// stay in sync whenever tokens are regenerated from Figma.
import themeCss from "../../theme.css?raw";
import type { CSSProperties, ReactNode } from "react";

export const allTokens: string[] = Array.from(
  new Set(Array.from(themeCss.matchAll(/(--sds-[a-z0-9-]+)\s*:/g), (m) => m[1])),
);

export const tokensWithPrefix = (prefix: string) =>
  allTokens.filter((t) => t.startsWith(prefix)).sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true }),
  );

export const resolved = (token: string) =>
  typeof window === "undefined"
    ? ""
    : getComputedStyle(document.documentElement).getPropertyValue(token).trim();

const cell: CSSProperties = {
  padding: "var(--sds-size-space-200) var(--sds-size-space-300)",
  borderBottom: "var(--sds-size-stroke-border) solid var(--sds-color-border-default-default)",
  font: "var(--sds-font-body-small)",
  color: "var(--sds-color-text-default-default)",
  verticalAlign: "middle",
};

export function TokenTable({
  tokens,
  preview,
}: {
  tokens: string[];
  preview: (token: string) => ReactNode;
}) {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={{ ...cell, textAlign: "left", width: 120 }}>Preview</th>
          <th style={{ ...cell, textAlign: "left" }}>Token</th>
          <th style={{ ...cell, textAlign: "left" }}>Value</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((t) => (
          <tr key={t}>
            <td style={cell}>{preview(t)}</td>
            <td style={{ ...cell, font: "var(--sds-font-body-code)" }}>{t}</td>
            <td style={{ ...cell, color: "var(--sds-color-text-default-secondary)" }}>
              {resolved(t)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const swatch = (t: string): ReactNode => (
  <div
    style={{
      width: 64,
      height: 32,
      background: `var(${t})`,
      borderRadius: "var(--sds-size-radius-100)",
      boxShadow: "inset 0 0 0 1px var(--sds-color-border-default-default)",
    }}
  />
);
