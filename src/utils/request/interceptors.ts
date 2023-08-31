import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { resolveResError } from "./helpers";
import { Token, messageError } from "@/utils";
import { useUserStore } from "@/store";

export function reqResolve(config: InternalAxiosRequestConfig) {
  const token = Token.get();
  if (token) {
    config.headers.token = token;
  }

  const { method, params } = config;
  // 如果是get或者delete请求，并且有params参数，将自动拼接url路径参数
  if ((method === "get" || method === "delete") && params) {
    let url = config.url + "?";

    for (const propName of Object.keys(params)) {
      const value = params[propName];

      let part = encodeURIComponent(propName) + "=";
      if (value !== null && typeof value !== "undefined") {
        if (value.constructor === Array) {
          value.forEach((item) => {
            url += part + encodeURIComponent(item) + "&";
          });
        } else if (value.constructor === Object) {
          for (const key of Object.keys(value)) {
            let params = propName + "[" + key + "]";
            let subPart = encodeURIComponent(params) + "=";
            url += subPart + encodeURIComponent(value[key]) + "&";
          }
        } else {
          url += part + encodeURIComponent(value) + "&";
        }
      }
    }
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }

  return config;
}

export function reqReject(error: AxiosError) {
  // 请求错误，这里可以用全局提示框进行提示
  messageError("请求出错");
  return Promise.reject(error);
}

export function resResolve(response: AxiosResponse) {
  // 若响应文件流，则直接返回
  if (response.data.constructor == Blob) {
    return Promise.resolve(response);
  }

  // TODO: 处理不同的 response.headers
  // 直接返回res，当然你也可以只返回res.data
  // 系统如果有自定义code也可以在这里处理
  response.data.code = Number(response.data.code);
  const { code, msg } = response.data;
  if (code !== 1) {
    window.$message.error(msg);
  }
  if (code === 201 || code === 202 || code === 204 || code === 206) {
    useUserStore().reLogin();
  }

  return Promise.resolve(response);
}

export function resReject(error: AxiosError) {
  // 这里用来处理http常见错误，进行全局提示
  let message = "";
  if (error.response) {
    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
    message = resolveResError(error.response.status);
  } else if (error.request) {
    // 请求已经成功发起，但没有收到响应
    message = "服务器未响应";
  } else {
    // 发送请求时出了点问题
    message = "请求失败";
  }
  // 这里错误消息可以使用全局弹框展示出来
  window.$message.error(message);

  return Promise.reject(error.response);
}
