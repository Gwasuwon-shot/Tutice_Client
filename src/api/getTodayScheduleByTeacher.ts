import axios from "axios";
import { getCookie } from "./cookie";

export async function getTodayScheduleByTeacher() {
  console.log("Asfd");
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/schedule/today/teacher`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  });

  console.log(data.data.data);

  return data.data.data;
}
