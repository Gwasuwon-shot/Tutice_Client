import axios from "axios";

export async function getLessonByUser() {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/lesson`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
    },
  });
  
  return data.data.data.isLesson;
}
