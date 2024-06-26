import { addons } from "@storybook/manager-api";
import "../src/index.css";
import "../src/theme.css";
import theme from "./theme";

addons.setConfig({
  theme: theme,
});
