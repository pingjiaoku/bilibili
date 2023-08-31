import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerAttributifyJsx,
} from "unocss";

export default defineConfig({
  content: {
    pipeline: {
      exclude: [
        "node_modules",
        ".git",
        ".github",
        ".husky",
        ".vscode",
        "dist",
        "mock",
        "public",
      ],
    },
  },
  // ...UnoCSS选项
  // presetUno: https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules/align.ts
  // presetWind: https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/rules/background.ts
  // animate: https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/theme.ts
  presets: [
    presetUno(),
    presetAttributify({ prefix: "uno-", prefixedOnly: false }),
  ],
  transformers: [transformerAttributifyJsx()],
  shortcuts: {
    "wh-full": "w-full h-full",
    "align-center": "items-center",
    "f-c-c": "flex justify-center items-center",
    "f-b-c": "flex justify-between items-center",
    "f-a-c": "flex justify-around items-center",
    "f-e-c": "flex justify-evenly items-center",
  },
  rules: [
    ["flex-grow", { "flex-grow": 1 }], // 填充flex下剩余宽度
    [
      /^wh-([\.\d]+)$/,
      ([, num]) => ({ height: `${num}px`, width: `${num}px` }),
    ],
    // [/^border-([\.\d]+)$/, ([, num]) => ({ border: `#${num}px solid` })],
    [/^flex-(\d+)$/, ([, num]) => ({ flex: num })],
    [/^tst-([\.\d]+)$/, ([, num]) => ({ transition: `all ${num}ms` })],
    [/^index-(\d+)$/, ([, num]) => ({ "z-index": num })],
  ],
  theme: {
    colors: {
      primary: "rgb(var(--primary-color))",
      primary_hover: "rgb(var(--primary-color-hover))",
      primary_pressed: "rgb(var(--primary-color-pressed))",
      primary_active: "rgba(var(--primary-color-active),0.1)",
      primary_1: "rgb(var(--primary-color1))",
      primary_2: "rgb(var(--primary-color2))",
      primary_3: "rgb(var(--primary-color3))",
      primary_4: "rgb(var(--primary-color4))",
      primary_5: "rgb(var(--primary-color5))",
      primary_6: "rgb(var(--primary-color6))",
      primary_7: "rgb(var(--primary-color7))",
      primary_8: "rgb(var(--primary-color8))",
      primary_9: "rgb(var(--primary-color9))",
      info: "rgb(var(--info-color))",
      info_hover: "rgb(var(--info-color-hover))",
      info_pressed: "rgb(var(--info-color-pressed))",
      info_active: "rgb(var(--info-color-active),0.1)",
      success: "rgb(var(--success-color))",
      success_hover: "rgb(var(--success-color-hover))",
      success_pressed: "rgb(var(--success-color-pressed))",
      success_active: "rgb(var(--success-color-active),0.1)",
      warning: "rgb(var(--warning-color))",
      warning_hover: "rgb(var(--warning-color-hover))",
      warning_pressed: "rgb(var(--warning-color-pressed))",
      warning_active: "rgb(var(--warning-color-active),0.1)",
      error: "rgb(var(--error-color))",
      error_hover: "rgb(var(--error-color-hover))",
      error_pressed: "rgb(var(--error-color-pressed))",
      error_active: "rgb(var(--error-color-active),0.1)",
      dark: "#18181c",
    },
  },
});
