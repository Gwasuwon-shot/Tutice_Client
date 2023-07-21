import axios from "axios";
import { ScheduleDataType } from "../type/manageLesson/scheduleDataType";

export async function updateScheduleAttendance(scheduleData: ScheduleDataType) {
  const data = await axios.patch(
    `${import.meta.env.VITE_APP_BASE_URL}/api/schedule/attendance`,
    {
      schedule: scheduleData,
    },

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
      },
    },
  );

  return data;
}
