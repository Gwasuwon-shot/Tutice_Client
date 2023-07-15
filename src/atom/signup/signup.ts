import { atom } from "recoil";
import { newUserDataTypes } from "../../type/SignUp/newUserDataType";

export const stepNum = atom<number>({
  key: "stepNum",
  default: 4,
});

export const newUserData = atom<newUserDataTypes>({
  key: "newUserData",
  default: { role: "", email: "", password: "", name: "", isMarketing: false },
});
