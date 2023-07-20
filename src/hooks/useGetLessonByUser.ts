import { useQuery } from "react-query";
import { getLessonByUser } from "../api/getLessonByUser";

export default function useGetLessonByUser() {
  const { data: isLessonExist } = useQuery(["getLessonByUser"], getLessonByUser, {
    staleTime: 3000,
  });

  return { isLessonExist };
}
