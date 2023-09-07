import { Request } from "@/utils";

export const authApi = {
  // 获取验证码
  captcha: () => Request.get<Auth.Captcha>("/auth/captcha"),
  // 账号密码登录，获取token
  login: (data: AuthParams.Login) => Request.post("/auth/login", data),
  // 退出登录删除token，请使用userStore.logout()
  logout: () => Request.post("/auth/logout"),
  // 刷新token，请使用Token.refresh()
  refreshToken: () => Request.post("/auth/refreshToken"),
};
