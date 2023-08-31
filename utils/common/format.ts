import dayjs from "dayjs";
/**
 * 格式化时间
 */
export const formatDateTime = (
  time: dayjs.ConfigType,
  format = "YYYY-MM-DD HH:mm:ss"
) => {
  return dayjs(time).format(format);
};

export const parseDateTime = (time: string) => {
  return dayjs(time).valueOf();
};

// 字符串日期简化，当天：时分，今年：月日时分，else：年月日
export const formatCutDateStr = (dateString: string) => {
  const now = new Date();
  const inputDate = new Date(dateString);

  // 如果是今天的日期，则只返回时分
  if (now.toDateString() === inputDate.toDateString()) {
    const hours = inputDate.getHours().toString().padStart(2, "0");
    const minutes = inputDate.getMinutes().toString().padStart(2, "0");
    return hours.replace(/^0+/, "") + ":" + minutes.replace(/^0+/, "");
  }

  // 如果是今年的日期，则只返回月日时分
  if (now.getFullYear() === inputDate.getFullYear()) {
    const month = (inputDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")
      .replace(/^0+/, "");
    const day = inputDate
      .getDate()
      .toString()
      .padStart(2, "0")
      .replace(/^0+/, "");
    const hours = inputDate
      .getHours()
      .toString()
      .padStart(2, "0")
      .replace(/^0+/, "");
    const minutes = inputDate
      .getMinutes()
      .toString()
      .padStart(2, "0")
      .replace(/^0+/, "");
    return month + "-" + day + " " + hours + ":" + minutes;
  }

  // 如果不是今年的日期，则只返回年月日
  const year = inputDate.getFullYear().toString();
  const month = (inputDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")
    .replace(/^0+/, "");
  const day = inputDate
    .getDate()
    .toString()
    .padStart(2, "0")
    .replace(/^0+/, "");
  return year + "-" + month + "-" + day;
};
