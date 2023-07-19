import axios from "axios";
import React from "react";

interface updateScheduleType {
  idx: number;
  date: string;
  startTime: string;
  endTime: string;
}

export async function updateSchedule(scheduleData: updateScheduleType) {
  console.log("dfdfdf");
  const { idx, date, startTime, endTime } = scheduleData;
  console.log(scheduleData);
  const data = await axios.patch(
    `${import.meta.env.VITE_APP_BASE_URL}/api/schedule`,
    {
      schedule: {
        idx: idx,
        date: date,
        startTime: startTime,
        endTime: endTime,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
      },
    },
  );
  console.log(data);
  return data;
}
