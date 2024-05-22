import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      blocks: path.resolve(__dirname, "./src/blocks"),
      icons: path.resolve(__dirname, "./src/icons"),
      ui: path.resolve(__dirname, "./src/ui"),
    },
  },
  server: {
    port: 8000,
  },
});
