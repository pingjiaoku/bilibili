import { Request } from "@/utils";

export const userApi = {
  getUser: () => Request.get("/user"),
};
