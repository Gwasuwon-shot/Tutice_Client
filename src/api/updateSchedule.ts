import axios from "axios";
import React from "react";

export async function updateSchedule() {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/schedule`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
    },
  });
  console.log(data);
}
