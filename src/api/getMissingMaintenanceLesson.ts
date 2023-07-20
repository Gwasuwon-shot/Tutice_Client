import axios from "axios";

export async function getMissingMaintenanceLesson() {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/schedule/attendance/missing`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
    },
  });

  return data.data.data.missingMaintenanceLessonList;
}
