import { useQuery } from "react-query";
import { getTodayScheduleByTeacher } from "../api/getTodayScheduleByTeacher";

export default function useGetTodayScheduleByTeacher() {
  // 선생님 : 메인페이지 뷰 (홈)- 배너(가장 가까운 수업)
  //   api 패칭
  const { data: todayScheduleByTeacher } = useQuery(["todayScheduleByTeacher"], getTodayScheduleByTeacher, {
    onError: (error) => {
      console.log(error);
    },
    staleTime: 30000,
  });

  const teacherName = todayScheduleByTeacher?.teacherName;
  const isTodaySchedule = todayScheduleByTeacher?.isTodaySchedule;
  const todaySchedule = todayScheduleByTeacher?.todaySchedule;

  return { teacherName, isTodaySchedule, todaySchedule };
}
