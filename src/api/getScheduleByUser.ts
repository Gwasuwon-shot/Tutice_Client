import axios from "axios";
import React from "react";

export async function getScheduleByUser(date: string) {
  console.log(import.meta.env.VITE_APP_TEACHER_TOKEN);
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/schedule/?month=${date}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
    },
  });
  console.log(data);
  return data;
}
