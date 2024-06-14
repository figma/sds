import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      compositions: path.resolve(__dirname, "./src/compositions"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      icons: path.resolve(__dirname, "./src/icons"),
      layout: path.resolve(__dirname, "./src/layout"),
      providers: path.resolve(__dirname, "./src/providers"),
      ui: path.resolve(__dirname, "./src/ui"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
  server: {
    port: 8000,
  },
});
