import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// Library build for npm: `npm run lib:build` → dist/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.lib.json",
      // Emits dist/lib/lib.d.ts + per-file .d.ts; path aliases are rewritten to relative paths
    }),
  ],
  resolve: {
    alias: {
      compositions: path.resolve(__dirname, "./src/ui/compositions"),
      data: path.resolve(__dirname, "./src/data"),
      hooks: path.resolve(__dirname, "./src/ui/hooks"),
      icons: path.resolve(__dirname, "./src/ui/icons"),
      images: path.resolve(__dirname, "./src/ui/images"),
      layout: path.resolve(__dirname, "./src/ui/layout"),
      primitives: path.resolve(__dirname, "./src/ui/primitives"),
      utils: path.resolve(__dirname, "./src/ui/utils"),
    },
  },
  build: {
    outDir: "dist/lib",
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/lib.ts"),
      formats: ["es"],
      fileName: () => "index.js",
      cssFileName: "styles",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-aria-components",
        "clsx",
      ],
    },
  },
});
