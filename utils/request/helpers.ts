export const resolveResError = (code: number) => {
  let message: string;
  switch (code) {
    case 400:
      message = "请求参数错误";
      break;
    case 401:
      message = "登录已过期";
      break;
    case 403:
      message = "没有权限";
      break;
    case 404:
      message = "资源或接口不存在";
      break;
    case 408:
      message = "请求超时";
      break;
    case 500:
      message = "服务器异常";
      break;
    default:
      message = `【${code}】: 未知异常!`;
      break;
  }
  return message;
};
