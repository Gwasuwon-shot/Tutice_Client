import { atom } from "recoil";
import { editDateStateTypes } from "../../type/editSchedule/editDateType";

export const editDateState = atom<editDateStateTypes>({
  key: "editDateState",
  default: {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    dayOfWeek: new Date().getDay(),
  },
});
