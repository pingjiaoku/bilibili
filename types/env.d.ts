// 引入naive对应的定义类型
import type { DialogApiInjection } from "naive-ui/lib/dialog/src/DialogProvider";
import type { MessageApiInjection } from "naive-ui/lib/message/src/MessageProvider";
import type { NotificationApiInjection } from "naive-ui/lib/notification/src/NotificationProvider";
import type { LoadingBarInst } from "naive-ui/lib/loading-bar/src/LoadingBarProvider";

declare global {
  interface Window {
    $message: MessageApiInjection;
    $dialog: DialogApiInjection;
    $notify: NotificationApiInjection;
    $loadingBar: LoadingBarInst;
  }
}

export interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string;
  /** 项目名称 */
  readonly VITE_APP_NAME: string;
  /** 项目标题 */
  readonly VITE_APP_TITLE: string;
  /** 项目描述 */
  readonly VITE_APP_DESC: string;
}
