import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
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
        compositions: path.resolve(__dirname, "/src/compositions"),
        hooks: path.resolve(__dirname, "/src/hooks"),
        icons: path.resolve(__dirname, "/src/icons"),
        layout: path.resolve(__dirname, "/src/layout"),
        providers: path.resolve(__dirname, "/src/providers"),
        ui: path.resolve(__dirname, "/src/ui"),
        utils: path.resolve(__dirname, "/src/utils"),
      };
    }

    return config;
  },
};
export default config;
