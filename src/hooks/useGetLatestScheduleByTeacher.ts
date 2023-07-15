import { YES_TODAY_CLASS_BEFORE_CLASS_MAIN } from "../core/teacherHome/teacherHome";

export default function useGetTodayScheduleByTeacher() {
  // 선생님 : 메인페이지 뷰 (홈)- 오늘의 수업/곧 다가오는 수업
  //   api 패칭
  const { isMissingAttendance, isMissingMaintenance, isTodaySchedule, latestScheduleDay, latestScheduleList } =
    YES_TODAY_CLASS_BEFORE_CLASS_MAIN?.data;

  return { isMissingAttendance, isMissingMaintenance, isTodaySchedule, latestScheduleDay, latestScheduleList };
}
