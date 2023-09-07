<template>
  <div wh-full f-c-c flex-col>
    <div>
      <router-link to="/test/tab1">
        <n-button type="success" mr-10> left </n-button>
      </router-link>
      <router-link to="/test/tab2">
        <n-button type="warning" ml-10> right </n-button>
      </router-link>
    </div>
    <div mt-10 b-rd-10 w-500 h-300 wh-full f-c-c class="bg-#ccc">
      <router-view v-slot="{ Component }">
        <keep-alive :include="['tab1']">
          <component :is="Component" :key="$route.fullPath" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script lang="tsx" setup></script>

<style lang="scss" scoped></style>
