import axios from "axios";

export async function getLessonDetailByParents(lessonIdx: number) {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/lesson/detail/parents/${lessonIdx}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_PARENTS_TOCKEN}`,
    },
  });
  console.log(data?.data);
  return data?.data;
}
