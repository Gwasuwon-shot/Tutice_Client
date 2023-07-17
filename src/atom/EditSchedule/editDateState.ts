import { atom } from "recoil";

interface editDateStateTypes {
  year: Date;
  month: Date;
  date: Date;
  dayOfWeek: Date;
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
