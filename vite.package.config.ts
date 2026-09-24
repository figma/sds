import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

const fromSrc = (directory: string) => path.resolve(__dirname, "src", directory);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      compositions: fromSrc("ui/compositions"),
      data: fromSrc("data"),
      hooks: fromSrc("ui/hooks"),
      icons: fromSrc("ui/icons"),
      images: fromSrc("ui/images"),
      layout: fromSrc("ui/layout"),
      primitives: fromSrc("ui/primitives"),
      utils: fromSrc("ui/utils"),
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: fromSrc("package.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
      cssFileName: "styles",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "clsx", "react-aria-components"],
    },
  },
});
