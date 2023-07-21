import { atom } from "recoil";

export const userRole = atom<string>({
  key: "userRole",
  default: "",
});
