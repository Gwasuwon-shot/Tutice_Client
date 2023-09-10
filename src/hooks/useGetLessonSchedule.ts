import { useQuery } from "react-query";
import { getLessonSchedule } from "../api/getLessonSchedule";

export default function useGetLessonSchedule(lessonIdx: number) {
  const { data: scheduleList } = useQuery(["useGetLessonSchedule"], () => getLessonSchedule(lessonIdx), {
    staleTime: 3000,
  });

  return { scheduleList };
}
