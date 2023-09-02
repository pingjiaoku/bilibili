export {};

declare global {
  interface User {
    id?: string;
    name?: string;
    account?: string;
    avatar?: string;
    avatarUrl?: string;
    gender?: string;
    email?: string;
    phone?: string;
    role?: string[];
    permissionKey?: string[];
    userType?: string;
  }
}
