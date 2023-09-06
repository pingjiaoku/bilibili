import { defineStore } from "pinia";
import { useDark, useToggle } from "@vueuse/core";

// pinia setup 语法
export const useAppStore = defineStore("appStore", () => {
  const isDark = useDark();

  // 切换主题
  const toggleDark = useToggle(isDark);

  return {
    isDark,
    toggleDark,
  };
});
