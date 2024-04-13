import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  // https://vitejs.dev/config/shared-options.html#base
  base: "/github-page/",
  root: resolve(__dirname, "src"),
  build: {
    outDir: resolve(__dirname, "docs"),
  },
  publicDir: resolve(__dirname, "public"),
});
