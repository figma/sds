import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      hooks: path.resolve(__dirname, "./src/ui/hooks"),
      icons: path.resolve(__dirname, "./src/ui/icons"),
      images: path.resolve(__dirname, "./src/ui/images"),

      components: path.resolve(__dirname, "./src/ui/components"),
      utils: path.resolve(__dirname, "./src/ui/utils"),
    },
  },
  server: {
    port: 8000,
  },
});
