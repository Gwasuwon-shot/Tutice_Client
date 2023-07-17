import React from "react";
//현재는 데이터 형태가 같아서 재활용
import { PARENTS_CALENDAR } from "../core/Parents/ParentsCalendar";

export default function useGetTeacherSchedule() {
  const { scheduleList } = PARENTS_CALENDAR?.data;

  return { scheduleList };
}
