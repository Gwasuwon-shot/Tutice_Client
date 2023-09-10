import axios from "axios";
import { getCookie } from "./cookie";

export async function getLessonSchedule(lessonIdx: number) {
  console.log(lessonIdx);

  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/lesson/schedule/${lessonIdx}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  });

  return data?.data.data;
}
