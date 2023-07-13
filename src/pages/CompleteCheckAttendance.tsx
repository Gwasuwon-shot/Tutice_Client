import Lottie from "lottie-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { upcomingClassData } from "../atom/attendanceCheck/upcomingClassData";
import check from "../core/checkAttendance/check.json";
import checkCircle from "../core/checkAttendance/check_circle.json";

export default function CompleteCheckAttendance() {
  const [classData, setclassData] = useRecoilState(upcomingClassData);
  const { teacherName, isTodaySchedule, todaySchedule } = classData;
  const { state } = useLocation();
  const { isLastCoutn, schedule } = state;
  const { date, dayOfWeek } = state;
  const [attendanceDate, setAttendanceDate] = useState(
    date.split("-")[0] + "년 " + date.split("-")[1] + "월 " + date.split("-")[2] + "일 ",
  );

  return (
    <>
      <Lottie loop={false} animationData={check} style={{ width: "50%", height: "50%" }} />
      <Lottie loop={false} animationData={checkCircle} style={{ width: "50%", height: "50%" }} />
    </>
  );
}
