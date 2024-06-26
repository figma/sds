import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: '"Roboto Mono", monospace',

  brandTitle: "Figma SDS",
  brandUrl: "https://figma.com",
  brandTarget: "_self",

  //
  colorPrimary: "#3A10E5",
  colorSecondary: "#585C6D",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#f5f5f5",
  appBorderRadius: 4,

  // Text colors
  textColor: "#1e1e1e",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#585C6D",
  barHoverColor: "#585C6D",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#f5f5f5",
  inputTextColor: "#1e1e1e",
  inputBorderRadius: 2,
});
