import { useQuery } from "react-query";
import { getLessonByParents } from "../api/getLessonByParents";

export default function useGetLessonByParents() {
  const { data: lessonParents } = useQuery(["getLessonByParents"], getLessonByParents, {
    staleTime: 300000,
  });
  console.log(lessonParents);
  return { lessonParents };
}
