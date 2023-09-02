import { createApp } from "vue";
import App from "./App.vue";
import AppLoading from "./components/common/app-loading.vue";
import { setupAssets } from "./plugins";
import { setupStore } from "@/store";
import { setupRouter } from "./router";

const setupApp = async () => {
  // import assets: js、css
  setupAssets();

  // app loading
  const appLoading = createApp(AppLoading);
  appLoading.mount("#appLoading");

  const app = createApp(App);

  // store plugin: pinia
  setupStore(app);

  // vue router
  await setupRouter(app);

  appLoading.unmount();

  app.mount("#app");
};

setupApp();
