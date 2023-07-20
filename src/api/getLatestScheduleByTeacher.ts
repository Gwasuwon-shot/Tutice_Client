import axios from "axios";

export async function getLatestScheduleByTeacher() {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/schedule/latest`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
    },
  });

  return data.data.data;
}
