import { defineConfig, loadEnv } from "vite";
import { getRootPath, getSrcPath, setupVitePlugins } from "./build";
import { ImportMetaEnv } from "./types/env";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd()) as unknown as ImportMetaEnv;
  return {
    plugins: setupVitePlugins(viteEnv),
    resolve: {
      alias: {
        "~": getRootPath(),
        "@": getSrcPath(),
      },
      extensions: [".js", ".json", ".ts", ".vue"],
    },
  };
});
