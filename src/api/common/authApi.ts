import { Request } from "@/utils";

interface LoginParams {
  account: string;
  password: string;
}

export const authApi = {
  // 账号密码登录，获取token
  login: (data: LoginParams) => Request.post("/auth/login", data),
  refreshToken: () => Request.post("/auth/refreshToken"),
};
