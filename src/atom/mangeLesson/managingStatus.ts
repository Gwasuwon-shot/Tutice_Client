import { atom } from "recoil";
import { MANAGE_LESSON_STATUS } from "../../core/manageLesson/manageLessonStatus";

export const managingStatus = atom({
  key: "managingStatus",
  default: MANAGE_LESSON_STATUS.lesson,
});
