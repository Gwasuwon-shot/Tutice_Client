import { atom } from "recoil";

export const stepNum = atom<number>({
  key: "stepNum",
  default: 1,
});
