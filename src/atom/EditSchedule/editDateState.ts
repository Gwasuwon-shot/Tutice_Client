import { atom } from "recoil";

interface editDateStateTypes {
  year: number;
  month: number;
  date: number;
  dayOfWeek?: number;
}

export const editDateState = atom<editDateStateTypes>({
  key: "editDateState",
  default: {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    dayOfWeek: new Date().getDay(),
  },
});
