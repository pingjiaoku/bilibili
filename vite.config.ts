import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

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
      Icons({
        autoInstall: true,
        compiler: "vue3",
        jsx: "react",
      }),
      Components({
        resolvers: [
          NaiveUiResolver(),
          IconsResolver({
            prefix: "icon", // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
            // {prefix}-{collection}-{icon} 使用组件解析器时，您必须遵循名称转换才能正确推断图标。
            // alias: { park: 'icon-park' } 集合的别名
            // enabledCollections: ["ep"], // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
          }),
        ],
        // 自动引入自己的组件
        dirs: ["src/components/"], // 扫描的路径
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
