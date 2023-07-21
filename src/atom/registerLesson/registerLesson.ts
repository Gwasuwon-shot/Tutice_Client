import { atom } from "recoil";

export const connectLessonId = atom<string>({
  key: "connectLessonId",
  default: "",
});
