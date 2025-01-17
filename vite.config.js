import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  // https://vitejs.dev/config/shared-options.html#base
  base: "/github-page/",
  root: resolve(__dirname, "src"),
  publicDir: resolve(__dirname, "public"),
  build: {
    outDir: resolve(__dirname, "dist"),
  },
});
