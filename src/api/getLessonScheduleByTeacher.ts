import axios from "axios";

export async function getLessonScheduleByTeacher(lessonIdx: number) {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/lesson/schedule/teacher/${lessonIdx}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
    },
  });

  return data?.data?.data;
}
