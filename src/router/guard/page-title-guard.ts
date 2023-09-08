import { Router } from "vue-router";
import { useTitle } from "@vueuse/core";

const baseTitle = import.meta.env.VITE_APP_TITLE;

export const createPageTitleGuard = (router: Router) => {
  router.afterEach((to) => {
    const pageTitle = to.meta?.title as string;
    useTitle(pageTitle ? pageTitle : baseTitle);
  });
};
