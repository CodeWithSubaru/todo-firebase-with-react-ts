import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@hooks": "./src/hooks",
      "@config": "./src/config",
      "@components": "./src/components",
      "@models": "./src/models",
      "@pages": "./src/Pages",
      "@services": "./src/services",
      "@types": "./src/types",
    },
  },
  server: {
    host: true,
  },
});
