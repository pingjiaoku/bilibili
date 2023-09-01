// 默认缓存期限为7天
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

export default class Storage {
  private storage: globalThis.Storage;
  private prefixKey: string;

  constructor(
    storage: globalThis.Storage = localStorage,
    prefixKey: string = ""
  ) {
    this.storage = storage;
    this.prefixKey = prefixKey;
  }

  private getKey(key: string) {
    return `${this.prefixKey}${key}`;
  }

  /**
   * 设置缓存
   * @param key
   * @param value
   * @param expire 单位秒
   */
  set(key: string, value: any, expire: number = DEFAULT_CACHE_TIME) {
    const stringData = JSON.stringify({
      value,
      expire: !!expire ? new Date().getTime() + expire * 1000 : null,
    });
    this.storage.setItem(this.getKey(key), stringData);
  }

  /**
   * 获取缓存的值
   * @param key
   * @returns success => 存入的值，fail => null
   */
  get(key: string) {
    const stringData = this.storage.getItem(this.getKey(key));
    if (!stringData) return null;
    try {
      const jsonData = JSON.parse(stringData);
      const { value, expire } = jsonData;
      if (!expire || expire > new Date().getTime()) {
        return value;
      }
      this.remove(key);
      return null;
    } catch (error) {
      this.remove(key);
      return null;
    }
  }

  /**
   * 获取剩余有效时间，单位秒
   * @param key
   * @returns
   */
  getExpire(key: string) {
    const stringData = this.storage.getItem(this.getKey(key));
    if (!stringData) return 0;
    try {
      const jsonData = JSON.parse(stringData);
      const { expire } = jsonData;
      // 若expire不存在，表示无限期限
      if (!expire) return -1;

      const remainder = (expire - new Date().getTime()) / 1000;
      if (remainder > 0) return remainder;
      this.remove(key);
      return 0;
    } catch (error) {
      this.remove(key);
      return 0;
    }
  }

  /**
   * 删除指定缓存
   * @param key
   */
  remove(key: string) {
    this.storage.removeItem(this.getKey(key));
  }

  /**
   * 清空缓存
   */
  clear() {
    this.storage.clear();
  }
}

export const lStorage = new Storage(localStorage);
export const sStorage = new Storage(sessionStorage);
