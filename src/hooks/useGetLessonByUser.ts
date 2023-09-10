import { useQuery } from "react-query";
import { getLessonByUser } from "../api/getLessonByUser";

export default function useGetLessonByUser() {
  const { data } = useQuery(["getLessonByUser"], getLessonByUser, {
    staleTime: 3000,
  });
  const isLesson = data?.isLesson;
  const userName = data?.userName;

  return { isLesson, userName };
}
