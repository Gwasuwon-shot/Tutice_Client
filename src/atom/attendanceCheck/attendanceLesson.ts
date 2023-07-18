import { atom } from "recoil";

export const attendanceLesson = atom({
  key: "attendanceLesson",
  default: {
    lessonIdx: 0,
    studentName: "",
    count: 0,
    scheduleIdx: 0,
    subject: "",
  },
});
