<template>
  <div wh-full f-c-c flex-col>
    <h2>404了，赶紧跳到登录页面去</h2>
    <n-button type="warning" @click="userStore.reLogin">跳转</n-button>
  </div>
</template>

<script lang="tsx" setup>
import { useUserStore } from "@/store";

const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
