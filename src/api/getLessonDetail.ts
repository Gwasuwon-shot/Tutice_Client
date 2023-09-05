import axios from "axios";
import { getCookie } from "./cookie";

export async function getLessonDetail(lessonIdx: number) {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/lesson/detail/${lessonIdx}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  });

  console.log(data.data.data);

  return data.data.data;
}
