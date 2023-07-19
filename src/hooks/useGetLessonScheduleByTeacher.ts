import { useQuery } from "react-query";
import { getLessonScheduleByTeacher } from "../api/getLessonScheduleByTeacher";

export default function useGetLessonScheduleByTeacher(manageLessonId: number) {
  const { data: lessonScheduleByTeacher } = useQuery(
    ["lessonScheduleByTeacher"],
    () => getLessonScheduleByTeacher(manageLessonId),
    {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );
  // const { lesson, scheduleList } = lessonScheduleByTeacher;
  // console.log(lessonScheduleByTeacher);

  return { lessonScheduleByTeacher };
}
