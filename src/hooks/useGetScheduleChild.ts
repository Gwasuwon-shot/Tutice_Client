import React from "react";
import { PARENTS_CALENDAR } from "../core/Parents/ParentsCalendar";

export default function useGetScheduleChild() {
  const { scheduleList } = PARENTS_CALENDAR?.data;

  return { scheduleList };
}
