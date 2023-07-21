import { useQuery } from "react-query";
import { getPastLessonRecord } from "../api/getPastLessonRecord";

export default function useGetRestOfClassesInfo(lessonId: number) {
  const { data: restOfClassesInfo } = useQuery(["getPastLessonRecord"], () => getPastLessonRecord(lessonId), {
    staleTime: 300000,
  });

  const lessonInfo = restOfClassesInfo?.lesson;

  const studentName = lessonInfo?.studentName;
  const teacherName = lessonInfo?.teacherName;
  const subjectName = lessonInfo?.subject;
  const count = lessonInfo?.count;
  const nowCount = lessonInfo?.nowCount;
  const percent = lessonInfo?.percent;

  return { studentName, teacherName, subjectName, count, nowCount, percent };
}
