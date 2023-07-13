import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const attendanceStatus = atom({
  key: "attendanceStatus",
  default: { idx: 0, status: "" },
});
