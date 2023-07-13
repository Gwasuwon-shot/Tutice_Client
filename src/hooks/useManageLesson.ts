import { LESSON_SCHEDULE } from "../core/checkAttendance/lessonSchedule";

export default function useManageLesson() {
  //   api 패칭
  const { lesson, scheduleList } = LESSON_SCHEDULE?.data;

  return { lesson, scheduleList };
}
