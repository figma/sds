// Public entry point for the sds-futu npm package (used by Figma Make kits).
// The demo app (src/App.tsx, src/examples) and Storybook are NOT part of the package.
import "./index.css";

export * from "./ui/primitives";
export * from "./ui/compositions";
export * from "./ui/layout";
export * from "./ui/icons";
export * from "./ui/hooks";
export * from "./ui/utils";
export * from "./ui/images";
// Providers + hooks that some compositions need (e.g. Header uses useAuth → wrap in <AllProviders>)
export * from "./data";
