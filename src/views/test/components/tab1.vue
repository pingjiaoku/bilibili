<template>
  <div>
    {{ inputVal }}
    <Icon icon="ri:aliens-line" text-red text-20 />
    <input type="text" v-model="inputVal" />
  </div>
</template>

<script lang="tsx" setup>
import { Icon } from "@iconify/vue";
const inputVal = ref("");

</script>

<style lang="scss" scoped></style>
