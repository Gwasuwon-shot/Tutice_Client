import { useQuery } from "react-query";
import { getLessonScheduleByParents } from "../api/getLessonScheduleByParents";

export default function useGetLessonScheduleByParents(lessonIdx: number) {
  const { data: lessonScheduleByParents } = useQuery(
    ["lessonScheduleByTeacher", lessonIdx],
    () => getLessonScheduleByParents(lessonIdx),
    {
      onError: (err) => {
        console.log(err);
      },
      staleTime: 3000,
    },
  );

  const lesson = lessonScheduleByParents?.lesson;
  const scheduleList = lessonScheduleByParents?.scheduleList;
  const idx = lesson?.idx;
  const count = lesson?.count;
  const nowCount = lesson?.nowCount;
  const percent = lesson?.percent;
  const studentName = lesson?.studentName;
  const subject = lesson?.subject;

  return { idx, lesson, lessonIdx, count, nowCount, percent, studentName, subject, scheduleList };
}
