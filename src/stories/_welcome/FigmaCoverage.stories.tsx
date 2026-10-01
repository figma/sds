import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "SDS/Figma coverage",
  parameters: { layout: "padded" },
};
export default meta;

// Figma library: "SDS - Futu" (oCHgE6RGeXGyIuPTBA56Cp). Update when components are added on either side.
const rows: [string, string, "In code" | "Figma only"][] = [
  ["Foundations (variables, text styles, effects)", "SDS Foundations/Tokens", "In code"],
  ["Icons", "SDS Foundations/Icons", "In code"],
  ["Accordion", "SDS Primitives/Accordion", "In code"],
  ["Avatars", "SDS Primitives/Avatars", "In code"],
  ["Buttons (Button, Danger, Icon Button, Button Group, Social Buttons)", "SDS Primitives/Buttons · SDS Compositions/Footers", "In code"],
  ["Cards", "SDS Compositions/Cards", "In code"],
  ["Dialog", "SDS Primitives/Dialog", "In code"],
  ["Inputs", "SDS Primitives/Inputs", "In code"],
  ["Menu", "SDS Primitives/Menu", "In code"],
  ["Navigation", "SDS Primitives/Navigation", "In code"],
  ["Notification", "SDS Primitives/Notification", "In code"],
  ["Pagination", "SDS Primitives/Pagination", "In code"],
  ["Tabs", "SDS Primitives/Tabs", "In code"],
  ["Tags", "SDS Primitives/Tags", "In code"],
  ["Text", "SDS Primitives/Text", "In code"],
  ["Tooltip", "SDS Primitives/Tooltip", "In code"],
  ["Logo", "SDS Primitives/Logo", "In code"],
  ["Forms (Form compositions, Form (Slot) → FormBox)", "SDS Compositions/Forms", "In code"],
  ["Sections (Header, Footer, Hero, Panel)", "SDS Compositions/Headers · Footers · Sections", "In code"],
  ["AI Chat (Sidebar, Chat Response, Code Block, Conversation, User message, Chat Box, AI Chatbot)", "—", "Figma only"],
  ["Calendar (Calendar, Button, Select Group, Month/Year Field)", "—", "Figma only"],
  ["Date Picker Field, Date Input Field", "—", "Figma only"],
  ["Card (Slot), Hero (Slot)", "—", "Figma only"],
];

const cell = {
  padding: "var(--sds-size-space-200) var(--sds-size-space-300)",
  borderBottom: "var(--sds-size-stroke-border) solid var(--sds-color-border-default-default)",
  font: "var(--sds-font-body-small)",
  textAlign: "left" as const,
};

export const Coverage: StoryObj = {
  name: "Figma ↔ code coverage",
  render: () => (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={cell}>Figma component / page</th>
          <th style={cell}>Storybook</th>
          <th style={cell}>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([figma, story, status]) => (
          <tr key={figma}>
            <td style={cell}>{figma}</td>
            <td style={cell}>{story}</td>
            <td
              style={{
                ...cell,
                color:
                  status === "In code"
                    ? "var(--sds-color-text-positive-default)"
                    : "var(--sds-color-text-warning-default)",
              }}
            >
              {status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
