import path from "path";

/**
 * 获取项目根路径
 */
export const getRootPath = () => {
  return path.resolve(process.cwd());
};

/**
 * 获取项目src路径
 */
export const getSrcPath = () => {
  const rootPath = getRootPath();

  return `${rootPath}/src`;
};
