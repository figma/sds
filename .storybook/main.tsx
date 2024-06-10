import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../scripts/preview/Figma.stories.tsx", // Ignoring for now
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        icons: path.resolve(__dirname, "/src/icons"),
        providers: path.resolve(__dirname, "/src/providers"),
        "ui/compositions": path.resolve(__dirname, "/src/ui/compositions"),
        "ui/layout": path.resolve(__dirname, "/src/ui/layout"),
        "ui/primitives": path.resolve(__dirname, "/src/ui/primitives"),
      };
    }

    return config;
  },
};
export default config;
