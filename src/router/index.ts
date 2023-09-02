import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { basicRoutes, asyncRoutes, NOT_FOUND_ROUTE } from "./routes";
import { setupRouterGuard } from "./guard";
import { nextTick, type App } from "vue";
import { Token, isNullOrWhitespace } from "@/utils";
import { useUserStore } from "@/store";

export const router = createRouter({
  history: createWebHistory("/"),
  routes: <RouteRecordRaw[]>basicRoutes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

/** setup vue router. - [安装vue路由] */
export const setupRouter = async (app: App<Element>) => {
  await addDynamicRoutes();
  setupRouterGuard(router);
  app.use(router);
};

export const addDynamicRoutes = async () => {
  const token = Token.get();

  // 没有token情况
  if (isNullOrWhitespace(token)) {
    router.addRoute(<RouteRecordRaw>NOT_FOUND_ROUTE);
    return;
  }

  // 有token的情况
  try {
    const userStore = useUserStore();
    let userInfo = await userStore.getUserInfo();

    if (!userInfo) {
      await nextTick();
      window.$message.error("Token已过期，请重新登录");
      userStore.reLogin();
      return;
    }

    // 添加动态路由
    asyncRoutes.forEach((route: Route.Row) => {

      if (router.hasRoute(route.name)) {
        console.error("存在重复的router：", route);
      } else {
        router.addRoute(<RouteRecordRaw>route);
      }
    });

    // 将未定义路由匹配放置最后
    router.hasRoute(NOT_FOUND_ROUTE.name) &&
      router.removeRoute(NOT_FOUND_ROUTE.name);
    router.addRoute(<RouteRecordRaw>NOT_FOUND_ROUTE);
  } catch (error) {
    console.error(error);
  }
};

// 删除动态路由
export const resetRouter = async () => {
  const basicRouteNames = basicRoutes.flatMap((route) => getRouteName(route));
  router.getRoutes().forEach((route) => {
    const name = route.name as string;
    if (!basicRouteNames.includes(name)) {
      router.removeRoute(name);
    }
  });
};

const getRouteName = (route: Route.Row) => {
  const names = [route.name];
  if (route.children && route.children.length) {
    names.push(...route.children.flatMap((item) => getRouteName(item)));
  }
  return names;
};
