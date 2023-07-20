import axios from "axios";

export async function getTodayScheduleByTeacher() {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/schedule/today/teacher`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
    },
  });

  console.log(data.data.data);

  return data.data.data;
}
