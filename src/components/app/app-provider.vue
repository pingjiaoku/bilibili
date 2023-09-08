<template>
  <n-config-provider
    :theme="isDark ? darkTheme : null"
    :theme-overrides="naiveThemeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
    class="wh-full"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot></slot>
            <provider-content></provider-content>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="tsx" setup>
import {
  useDialog,
  useLoadingBar,
  useMessage,
  useNotification,
  dateZhCN,
  zhCN,
  darkTheme,
} from "naive-ui";
import { naiveThemeOverrides } from "~/setting";
import { useDark } from "@vueuse/core";

const isDark = useDark();
const providerContent = () => {
  // 挂载naive组件的方法至window
  window.$loadingBar = useLoadingBar();
  window.$dialog = useDialog();
  window.$message = useMessage();
  window.$notify = useNotification();

  return <div></div>;
};
</script>
