<template>
  <div>
    <n-button @click="count++">{{ count }}</n-button>
  </div>
</template>

<script lang="tsx" setup>
const count = ref(0);
</script>

<style lang="scss" scoped></style>
