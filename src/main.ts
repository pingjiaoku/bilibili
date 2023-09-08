import "./styles/global.css";
import "virtual:uno.css";
import { createApp } from "vue";
import App from "./App.vue";
import AppLoading from "./components/app/app-loading.vue";
import { setupStore } from "./store";
import { setupRouter } from "./router";
import { setupDirectives } from "./directives";

const setupApp = async () => {
  // 挂载加载页面
  const appLoading = createApp(AppLoading);
  appLoading.mount("#app");

  const app = createApp(App);

  // 注册pinia
  setupStore(app);

  // 注册自定义指令
  setupDirectives(app);

  // 注册router
  await setupRouter(app);

  // loading 久一点
  setTimeout(() => {
    appLoading.unmount();

    app.mount("#app");
  }, 1000);
};

setupApp();
