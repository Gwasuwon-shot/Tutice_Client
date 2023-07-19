import axios from "axios";
import React from "react";

export async function getScheduleByUser(date: string) {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/schedule/?month=${date}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_PARENTS_TOKEN}`,
    },
  });
  console.log(data);
  return data;
}
