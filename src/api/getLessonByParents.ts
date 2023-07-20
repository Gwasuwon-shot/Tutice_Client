import axios from "axios";

export async function getLessonByParents() {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/lesson/parents`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_PARENTS_TOCKEN}`,
    },
  });
  console.log(data);
  return data?.data?.data.lessonList;
}
