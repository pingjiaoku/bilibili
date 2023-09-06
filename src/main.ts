import "./styles/global.css";
import "virtual:uno.css";
import { createApp } from "vue";
import App from "./App.vue";
import AppProvider from "./components/common/app-provider.vue";
import AppLoading from "./components/common/app-loading.vue";
import { setupStore } from "./store";
import { setupRouter } from "./router";
import { setupDirectives } from "./directives";

const setupApp = async () => {
  // 提前挂载反馈组件
  const appProvider = createApp(AppProvider);
  appProvider.mount("#app-provider");

  // 挂载加载页面
  const appLoading = createApp(AppLoading);
  appLoading.mount("#app-loading");

  const app = createApp(App);

  // 注册pinia
  setupStore(app);

  // 注册自定义指令
  setupDirectives(app);

  // 注册router
  await setupRouter(app);

  appLoading.unmount();

  app.mount("#app");
};

setupApp();
