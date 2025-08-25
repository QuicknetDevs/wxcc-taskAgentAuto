import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        format: "iife",                // IIFE para Desktop Layout
        name: "wxccTaskAgentAuto",     // nombre global
        entryFileNames: "wxcc-taskAgentAuto.js",
      },
      external: [], // React/ReactDOM incluidos en el bundle
    },
  },
});
