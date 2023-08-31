const toString = Object.prototype.toString;

export const is = (val: any, type: string) => {
  return toString.call(val) === `[object ${type}]`;
};

export const isDef = (val: any) => {
  return typeof val !== "undefined";
};

export const isUndef = (val: any) => {
  return typeof val === "undefined";
};

export const isNull = (val: any) => {
  return val === null;
};

export const isWhitespace = (val: string) => {
  return val === "";
};

export const isObject = (val: any) => {
  return !isNull(val) && is(val, "Object");
};

export const isArray = (val: any) => {
  return val && Array.isArray(val);
};

export const isString = (val: any) => {
  return is(val, "String");
};

export const isNumber = (val: any) => {
  return is(val, "Number");
};

export const isBoolean = (val: any) => {
  return is(val, "Boolean");
};

export const isDate = (val: any) => {
  return is(val, "Date");
};

export const isRegExp = (val: any) => {
  return is(val, "RegExp");
};

export const isPromise = (val: any) => {
  return is(val, "Promise") && isObject(val);
};

export const isElement = (val: any) => {
  return isObject(val) && !!val.tagName;
};

export const isWindow = (val: any) => {
  return typeof window !== "undefined" && isDef(window) && is(val, "Window");
};

export const isNullOrUndef = (val: any) => {
  return isNull(val) || isUndef(val);
};

export const isNullOrWhitespace = (val: any) => {
  return isNullOrUndef(val) || isWhitespace(val);
};

/** 空数组 | 空字符串 | 空对象 | 空Map | 空Set */
export const isEmpty = (val: any) => {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
};

export const isExternal = (path: string) => {
  return /^(https?:|mailto:|tel:)/.test(path);
};
