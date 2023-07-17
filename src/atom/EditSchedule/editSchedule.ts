import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface editScheduleType {
  idx: number;
  studentName: string;
  subject: string;
  startTime: string;
  endTime: string;
}

export const editSchedule = atom<editScheduleType>({
  key: "editSchedule",
  default: {
    idx: 0,
    studentName: "권혜인",
    subject: "피아노",
    startTime: "12:00",
    endTime: "16:00",
  },
  effects_UNSTABLE: [persistAtom],
});
