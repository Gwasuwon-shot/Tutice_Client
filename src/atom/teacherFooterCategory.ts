import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { TEACHER_FOOTER } from "../core/teacherHome/teacherFooter";
import { TeacherFooterType } from "../type/teacherFooterType";

const { persistAtom } = recoilPersist();

export const teacherFooterCategory = atom<TeacherFooterType[]>({
  key: "teacherFooterCategory",
  default: TEACHER_FOOTER,
  effects_UNSTABLE: [persistAtom],
});
