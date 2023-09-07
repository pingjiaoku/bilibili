import { defineConfig, loadEnv } from "vite";
import { getRootPath, getSrcPath, setupVitePlugins } from "./build";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd());
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
