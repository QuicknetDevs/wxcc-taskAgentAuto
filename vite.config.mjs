//vite.config.mjs
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "WxccTaskAgentAuto",
      fileName: () => "wxcc-taskagentauto.js",
      formats: ["iife"]
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Muy importante
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
