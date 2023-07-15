import { atom } from "recoil";

interface newUserDataTypes {
  role: string;
  email: string;
  password: string;
  name: string;
  isMarketing: boolean;
}

export const stepNum = atom<number>({
  key: "stepNum",
  default: 4,
});

export const newUserData = atom<newUserDataTypes>({
  key: "newUserData",
  default: { role: "", email: "", password: "", name: "", isMarketing: false },
});
