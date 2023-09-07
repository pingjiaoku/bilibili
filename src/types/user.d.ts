export {};

declare global {
  interface User {
    id: string;
    name: string;
    account: string;
    avatar: string;
    avatarUrl: string;
    gender: string;
    email: string;
    phone: string;
    role: string[];
    permissions: string[];
    userType: string;
  }
}

declare namespace UserParams {
  interface GetUserParam{}
}