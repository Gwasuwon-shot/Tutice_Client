import { GET_LESSON_BY_TEACHER } from "../core/manageLesson/getLessonByTeacher";

export default function useGetAllLessons() {
  //   api 패칭
  const { lessonList } = GET_LESSON_BY_TEACHER?.data;

  return { lessonList };
}
