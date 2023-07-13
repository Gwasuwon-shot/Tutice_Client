import { LESSON_SCHEDULE } from "../core/checkAttendance/lessonSchedule";

export default function useManageLesson() {
  //   api 패칭
  const data = LESSON_SCHEDULE?.data;

  return { data };
}
