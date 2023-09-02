<template>
  <div uno-animate="bounce-in duration-1000ms delay-200ms iteration-1">
    <compon></compon>
    <component :is="compon"></component>
    <HelloWorld></HelloWorld>
    <!-- <componen></componen> -->

    <div w-100 line-clamp-2>
      fasodfaoweignaoweig官方拉开了为该u二哦啊人爱哦额如果拿俄日u了哈尔和埃尔哈哈额
      fasodfaoweignaoweig官方拉开了为该u二哦啊人爱哦额如果拿俄日u了哈尔和埃尔哈哈额
      fasodfaoweignaoweig官方拉开了为该u二哦啊人爱哦额如果拿俄日u了哈尔和埃尔哈哈额
    </div>

    <icon-ep-fold @click="settitle(0)"></icon-ep-fold>
    <icon-ep-fold @click="settitle(1)"></icon-ep-fold>
  </div>
</template>

<script setup lang="tsx">
import { useTitle } from "@vueuse/core";
const app = ref("asdfad");
const compon = computed(() => {
  return <div>{app.value}</div>;
});

const settitle = (num: number) => {
  if (num) useTitle("hhhhh");
  else useTitle(false ? "to.meta.title" : import.meta.env.VITE_APP_NAME);
};
</script>
