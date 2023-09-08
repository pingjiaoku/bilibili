<template>
  <h1 f-c-c flex-col wh-full bg-primary>
    要不要登陆一下？没有表单啊
    <n-card title="卡片">
      卡片内容

      <icon icon="streamline-emojis:anguished-face"></icon>
    </n-card>
    <n-button type="info" @click="appStore.toggleDark()">toggleDark</n-button>
  </h1>
</template>

<script lang="tsx" setup>
import { useAppStore } from "@/store";
import { Icon } from "@iconify/vue";
const appStore = useAppStore();
</script>

<style lang="scss" scoped></style>
