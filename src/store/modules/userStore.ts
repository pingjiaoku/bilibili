import { userApi, authApi } from "@/api";
import { isEmpty, Token } from "@/utils";
import { defineStore } from "pinia";
import { resetRouter, router } from "@/router";
import { ref } from "vue";

// pinia setup 语法
export const useUserStore = defineStore("userStore", () => {
  const userInfo = ref(<User>{});

  const reset = () => {
    userInfo.value = {};
  };
  const setUserInfo = (userInf: User) => {
    userInfo.value = { ...userInfo.value, ...userInf };
  };
  const getUserInfo = async () => {
    if (!isEmpty(userInfo.value)) {
      return userInfo.value;
    }
    const { code, data } = await userApi.getUser();
    if (code !== 1) return null;
    userInfo.value = data;
    return userInfo.value;
  };
  const logout = async () => {
    await authApi.logout();
    reLogin();
  };
  const reLogin = () => {
    Token.remove();
    // reset userInfo
    reset();
    resetRouter();
    router.replace({ name: "Login" });
  };
  
  return {
    userInfo,
    reset,
    setUserInfo,
    getUserInfo,
    logout,
    reLogin,
  };
});