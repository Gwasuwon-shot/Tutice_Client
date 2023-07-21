import axios from "axios";

export async function requestAttendanceNotification(scheduleIdx: number) {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/notification/attendance/${scheduleIdx}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
    },
  });

  return data;
}
