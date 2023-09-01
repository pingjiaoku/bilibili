import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import { resReject, resResolve, reqReject, reqResolve } from "./interceptors";

type Result<T> = {
  code: number;
  message: string;
  data: T;
};
// 基础配置，url和超时时间
const baseConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

// 构建Axios实例
const instance = axios.create(baseConfig);
instance.interceptors.request.use(reqResolve, reqReject);
instance.interceptors.response.use(resResolve, resReject);

export const Request = {
  // 自定义请求方法
  request: async <T = any>(config: AxiosRequestConfig) => {
    const { data } = await instance.request<Result<T>>(config);
    return data;
  },

  get: <T = any>(url: string, params?: any) => {
    let config = {
      url: url,
      method: "get",
      params: params,
    };
    return Request.request<T>(config);
  },

  post: <T = any>(url: string, data?: any) => {
    let config = {
      url: url,
      method: "post",
      data: data,
    };
    return Request.request<T>(config);
  },

  put: <T = any>(url: string, data?: any) => {
    let config = {
      url: url,
      method: "put",
      data: data,
    };
    return Request.request<T>(config);
  },

  delete: <T = any>(url: string, params?: any) => {
    let config = {
      url: url,
      method: "delete",
      params: params,
    };
    return Request.request<T>(config);
  },
};
