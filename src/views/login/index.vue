<template>
  <h1 f-c-c flex-col wh-full bg-primary>
    要不要登陆一下？没有表单啊
    <n-card title="卡片"> 卡片内容 </n-card>
    <n-button type="info" @click="appStore.toggleDark()">toggleDark</n-button>
  </h1>
</template>

<script lang="tsx" setup>
import { useAppStore } from "@/store";
const appStore = useAppStore();
</script>

<style lang="scss" scoped></style>
