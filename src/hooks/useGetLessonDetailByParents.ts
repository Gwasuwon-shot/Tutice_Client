import { useQuery } from "react-query";
import { getLessonDetailByParents } from "../api/getLessonDetailByParents";
import { ActionCodeOperation } from "firebase/auth";

export default function useGetLessonDetailByParents(lessonIdx: number) {
  const { data: parentsLesson } = useQuery(
    ["useGetLessonDetailByParents", lessonIdx],
    () => getLessonDetailByParents(lessonIdx),
    {
      staleTime: 300000,
    },
  );
  console.log(parentsLesson);

  return { parentsLesson };
}
