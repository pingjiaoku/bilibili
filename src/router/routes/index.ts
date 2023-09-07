export const basicRoutes: Sys.Route[] = [
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
  {
    name: "Test",
    path: "/test",
    component: () => import("@/views/test/index.vue"),
    meta: {
      title: "登录页",
    },
    children: [
      {
        name: "TestTab1",
        path: "/test/tab1",
        component: () => import("@/views/test/components/tab1.vue"),
      },
      {
        name: "TestTab2",
        path: "/test/tab2",
        component: () => import("@/views/test/components/tab2.vue"),
      },
      {
        name: "TestTab3",
        path: "/test/tab3",
        component: () => import("@/views/test/components/tab3.tsx"),
      },
    ],
  },
];

export const NOT_FOUND_ROUTE: Sys.Route = {
  name: "NotFound",
  path: "/:pathMatch(.*)*",
  redirect: "/404",
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
