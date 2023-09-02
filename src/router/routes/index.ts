export const basicRoutes: Route.Row[] = [
  {
    name: "Root",
    path: "/",
    redirect: "/index",
  },
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/error/404.vue"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录页",
    },
  },
];

export const NOT_FOUND_ROUTE: Route.Row = {
  name: "NotFound",
  path: "/:pathMatch(.*)*",
  redirect: "/404",
  hidden: true,
};

// 扫描views目录的route文件，待身份验证成功后添加至路由
const modules: Record<string, any> = import.meta.glob("@/views/**/route.ts", {
  eager: true,
});
const asyncRoutes: any = [];
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(modules[key].default);
});

export { asyncRoutes };
