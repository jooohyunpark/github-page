import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // https://vitejs.dev/config/shared-options.html#base
  base: "/github-page/",
  build: {
    outDir: "docs",
  },
});
