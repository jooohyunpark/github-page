import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  server: {
    port: 3000,
  },
  // https://vitejs.dev/config/shared-options.html#base
  base: "https://jooohyunpark.github.io/test/",
  build: {
    outDir: "../docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
  publicDir: resolve(__dirname, "public"),
});
