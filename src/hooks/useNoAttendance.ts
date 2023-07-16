import React from "react";
import { NO_ATTENDNACE_CHECK } from "../core/noAttendanceCheck/noAttendance";

export default function useNoAttendance() {
  //데이터 패칭
  const { missingAttendanceDateList } = NO_ATTENDNACE_CHECK.data;

  return missingAttendanceDateList;
}
