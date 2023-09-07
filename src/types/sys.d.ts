declare namespace Sys {
  interface RouteMeta {
    title?: string;
    icon?: string;
    hide?: boolean;
    order?: number;
    // 为 undef 或者空则不需要权限
    permissions?: string[];
    // 若需要keepAlive则要保证Route.name与组件名称相同
    keepAlive?: boolean;
  }

  interface Route {
    name: string;
    path: string;
    component?: Component;
    redirect?: string;
    children?: Sys.Route[];
    meta?: RouteMeta;
  }
}
