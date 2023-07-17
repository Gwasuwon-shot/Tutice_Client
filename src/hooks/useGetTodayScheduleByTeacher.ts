import { YES_TODAY_CLASS_BEFORE_CLASS_BANNER } from "../core/teacherHome/teacherHome";

export default function useGetTodayScheduleByTeacher() {
  // 선생님 : 메인페이지 뷰 (홈)- 배너(가장 가까운 수업)
  //   api 패칭
  const { teacherName, isTodaySchedule, todaySchedule } = YES_TODAY_CLASS_BEFORE_CLASS_BANNER?.data;

  return { teacherName, isTodaySchedule, todaySchedule };
}
