import { lStorage } from "@/utils";
import { useUserStore } from "@/store";
import { authApi } from "@/api";

const TOKEN_KEY = "access_token";
const TOEKN_DURATION = 12 * 60 * 60;

export const Token = {
  get: () => lStorage.get(TOKEN_KEY) as string | null,
  set: (token: string) => lStorage.set(TOKEN_KEY, token, TOEKN_DURATION),
  remove: () => lStorage.remove(TOKEN_KEY),
  refresh: async () => {
    const userStore = useUserStore();
    const expire = lStorage.getExpire(TOKEN_KEY);
    if (expire <= 0) {
      window.$message.error("登录已失效，请重新登录");
      console.error("token已过期，请重新登录");
      userStore.reLogin();
    }

    // 有效时间还剩余一半多则不执行刷新
    if (expire > TOEKN_DURATION / 2) return;

    const { code, data } = await authApi.refreshToken();
    if (!!code) Token.set(data.token);
    else {
      // 刷新失败重新登录
      console.error("token刷新失败");
      userStore.reLogin();
    }
  },
};
