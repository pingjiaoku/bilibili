import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      Unocss(),
      createHtmlPlugin({
        inject: {
          data: {
            title: loadEnv(mode, process.cwd())["VITE_TITLE"],
          },
        },
      }),
      Components({
        resolvers: [NaiveUiResolver()],
        // 自动引入自己的组件
        dirs: ["src/components/"], // 扫描的路径
        extensions: ["vue", "tsx"], // 组件的有效文件扩展名。
        dts: "./types/components.d.ts", // 生成的类型文件路径
        deep: true, // 搜索子目录
      }),
      AutoImport({
        imports: ["vue", "vue-router"],
        dts: './types/auto-imports.d.ts',
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
