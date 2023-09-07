declare namespace Auth {
  interface Captcha {
    captchaImg: string;
    key: string;
  }
}

declare namespace AuthParams {
  interface Login {
    account: string;
    password: string;
    captchaCode: string;
    key: string;
  }
}
