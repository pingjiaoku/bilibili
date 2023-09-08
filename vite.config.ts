import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unocss from "unocss/vite";
import { createHtmlPlugin } from "vite-plugin-html";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      vueJsx(),
      unocss(),
      createHtmlPlugin({
        inject: {
          data: {
            title: viteEnv.VITE_APP_TITLE,
          },
        },
      }),
      Components({
        resolvers: [NaiveUiResolver()],
        // 自动引入自定义组件
        dirs: ["./src/components/"], // 扫描的路径
        extensions: ["vue", "tsx"], // 组件的有效文件扩展名。
        dts: "./types/components.d.ts", // 生成的类型文件路径
        deep: true, // 搜索子目录
      }),
      AutoImport({
        imports: ["vue", "vue-router"],
        dts: "./types/auto-imports.d.ts",
      }),
    ],
    resolve: {
      alias: {
        "~": resolve(__dirname, "./"),
        "@": resolve(__dirname, "./src"),
      },
      extensions: [".js", ".json", ".ts", ".vue"],
    },
  };
});
