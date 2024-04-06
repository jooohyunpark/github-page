import { resolve } from "path";
import { defineConfig } from "vite";
import pkg from "./package.json";

export default defineConfig({
  server: {
    port: 3000,
  },
  base: pkg.base, // https://vitejs.dev/config/shared-options.html#base
  root: resolve(__dirname, "src"),
  build: {
    outDir: resolve(__dirname, "docs"),
  },
  publicDir: resolve(__dirname, "public"),
});
