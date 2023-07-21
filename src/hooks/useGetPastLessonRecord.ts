import { useQuery } from "react-query";
import { getPastLessonRecord } from "../api/getPastLessonRecord";

export default function useGetPastLessonRecord(lessonId: number) {
  const { data: pastLessonRecord } = useQuery(["getPastLessonRecord"], () => getPastLessonRecord(lessonId), {
    staleTime: 3000,
  });

  const scheduleList = pastLessonRecord?.scheduleList;
  const lesson = pastLessonRecord?.lesson;

  return { scheduleList, lesson };
}
