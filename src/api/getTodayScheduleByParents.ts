import axios from "axios";
import React from "react";

export async function getTodayScheduleByParents() {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/schedule/today/parents`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_PARENTS_TOCKEN}`,
    },
  });
  return data?.data?.data;
}
