import { useQuery } from "react-query";
import { getPastLessonRecord } from "../api/getPastLessonRecord";

export default function useGetPastLessonRecord(lessonId: number) {
  const { data: pastLessonRecord } = useQuery(["getPastLessonRecord"], () => getPastLessonRecord(lessonId), {
    staleTime: 300000,
  });

  const scheduleList = pastLessonRecord?.scheduleList;

  return { scheduleList };
}
