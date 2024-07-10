import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "src", replacement: path.resolve(__dirname, "src/src") },
      { find: "index", replacement: path.resolve(__dirname, "src/index") },
      { find: "assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "components", replacement: path.resolve(__dirname, "src/components") },
      { find: "config", replacement: path.resolve(__dirname, "src/config") },
    ],
  },
});
