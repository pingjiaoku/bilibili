export const MyStorage = {
  /**
   *
   * @param key
   * @param value
   * @param expire 单位秒
   */
  set: (key: string, value: any, expire?: number) => {
    const stringData = JSON.stringify({
      value,
      expire: !!expire ? new Date().getTime() + expire * 1000 : null,
    });
    localStorage.setItem(key, stringData);
  },

  get: (key: string) => {
    const stringData = localStorage.getItem(key);
    if (!stringData) return null;
    try {
      const jsonData = JSON.parse(stringData);
      const { value, expire } = jsonData;
      if (!expire || expire > new Date().getTime()) {
        return value;
      }
      MyStorage.remove(key);
      return null;
    } catch (error) {
      MyStorage.remove(key);
      return null;
    }
  },

  // 返回剩余有效时间，单位秒，-1表示无限长
  getExpire: (key: string) => {
    const stringData = localStorage.getItem(key);
    if (!stringData) return 0;
    try {
      const jsonData = JSON.parse(stringData);
      const { expire } = jsonData;
      // 若expire不存在，表示无限期限
      if (!expire) return -1;

      const remainder = (expire - new Date().getTime()) / 1000;
      if (remainder > 0) return remainder;
      MyStorage.remove(key);
      return 0;
    } catch (error) {
      MyStorage.remove(key);
      return 0;
    }
  },

  remove: (key: string) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};
