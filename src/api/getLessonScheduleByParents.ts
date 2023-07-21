import axios from "axios";

export async function getLessonScheduleByParents(lessonIdx: number) {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/lesson/schedule/parents/${lessonIdx}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_PARENTS_TOKEN}`,
    },
  });

  return data?.data?.data;
}
