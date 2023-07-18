import { useQuery } from "react-query";
import { getLessonByUser } from "../api/getLessonByUser";

export default function useGetLessonByUser() {
  const { data: lessonByUser } = useQuery(["getLessonByUser"], getLessonByUser, {
    staleTime: 300000,
  });

  return { lessonByUser };
}
