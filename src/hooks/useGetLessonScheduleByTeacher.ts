import { useState } from "react";
import { useQuery } from "react-query";
import { getLessonScheduleByTeacher } from "../api/getLessonScheduleByTeacher";

export default function useGetLessonScheduleByTeacher(manageLessonId: number) {
  const [lesson, setLesson] = useState([]);
  const [scheduleList, setScheduleList] = useState([]);

  const { data: lessonScheduleByTeacher } = useQuery(
    ["lessonScheduleByTeacher"],
    () => getLessonScheduleByTeacher(manageLessonId),
    {
      onSuccess: (res) => {
        setLesson(res?.lesson);
        setScheduleList(res?.scheduleList);
      },
      onError: (err) => {
        console.log(err);
      },
      staleTime: 3000,
    },
  );

  // const { lesson, scheduleList } = lessonScheduleByTeacher;

  return { lesson, scheduleList };
}
