<template>
  <h1 f-c-c wh-full bg-primary>
    要不要登陆一下？没有表单啊
    {{ appStore.isDark }}
    <n-button type="primary" @click="appStore.toggleDark()">click me</n-button>
    <n-table>

    </n-table>
  </h1>
</template>

<script lang="tsx" setup>
import { useAppStore } from '@/store';
const appStore = useAppStore();

</script>

<style lang="scss" scoped></style>
