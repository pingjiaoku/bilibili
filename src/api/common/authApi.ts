import { Request } from "@/utils";

interface LoginParams {
  account: string;
  password: string;
}

export const authApi = {
  // 账号密码登录，获取token
  login: (data: LoginParams) => Request.post("/auth/login", data),
  // 退出登录删除token，请使用userStore.logout()
  logout: () => Request.post("/auth/logout"),
  // 刷新token，请使用Token.refresh()
  refreshToken: () => Request.post("/auth/refreshToken"),
};
