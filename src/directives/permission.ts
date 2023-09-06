import type { App, Directive } from "vue";
import { useUserStore } from "@/store";
import { isString } from "@/utils";

export default function setupPermissionDirective(app: App) {
  const { hasPermission } = usePermission();

  function updateElVisible(el: HTMLElement, permission: string | string[]) {
    if (!permission) {
      throw new Error(
        `need roles: like v-permission="'admin'", v-permission="['admin', 'test]"`
      );
    }
    if (!hasPermission(permission)) {
      el.parentElement?.removeChild(el);
    }
  }

  const permissionDirective: Directive<HTMLElement, string | string[]> = {
    mounted(el, binding) {
      updateElVisible(el, binding.value);
    },
    beforeUpdate(el, binding) {
      updateElVisible(el, binding.value);
    },
  };

  app.directive("permission", permissionDirective);
}

/** 权限判断 */
const usePermission = () => {
  const userStore = useUserStore();

  function hasPermission(permission: string | string[]) {
    const { permissions } = userStore.userInfo;

    if (!permissions) return false;

    if (isString(permission)) return permissions.includes(permission as string);

    for (const per in permission as string[]) {
      if (permissions.includes(per)) return true;
    }
    return false;
  }

  return {
    hasPermission,
  };
};
