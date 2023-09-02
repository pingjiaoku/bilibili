import { Router } from "vue-router";

export const createPageLoadingGuard = (router: Router) => {
  router.beforeEach(() => {
    window.$loadingBar?.start();
  });

  router.afterEach(() => {
    window.$loadingBar?.finish();
  });

  router.onError(() => {
    window.$loadingBar?.error();
  });
};
