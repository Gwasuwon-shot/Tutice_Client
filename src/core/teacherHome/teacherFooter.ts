import { TeacherFooterType } from "../../type/teacherHome/teacherFooterType";

export const TEACHER_FOOTER_CATEGORY = { home: "홈", calendar: "캘린더", classManaging: "수업 관리", my: "마이" };

export const TEACHER_FOOTER: TeacherFooterType[] = [
  { id: 1, category: TEACHER_FOOTER_CATEGORY.home, isMoved: true },
  { id: 2, category: TEACHER_FOOTER_CATEGORY.calendar, isMoved: false },
  { id: 3, category: TEACHER_FOOTER_CATEGORY.classManaging, isMoved: false },
  { id: 4, category: TEACHER_FOOTER_CATEGORY.my, isMoved: false },
];
