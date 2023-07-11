import { useState } from "react";
import { LatestScheduleDayType, UpcomingClassScheduleType } from "../../type/teacherHome/upcomingClassScheduleType";

interface UpcomingClassBoardProps {
  latestScheduleDay: LatestScheduleDayType;
  latestScheduleList: UpcomingClassScheduleType[];
}

export default function UpcomingClassBoard(props: UpcomingClassBoardProps) {
  const { latestScheduleDay, latestScheduleList } = props;
  const { date, dayOfWeek } = latestScheduleDay;
  const [upcomingClassDate, setUpcomingClassDate] = useState(
    date.split("-")[0] + "년 " + date.split("-")[1] + "월 " + date.split("-")[2] + "일 ",
  );

  return (
    <>
      {upcomingClassDate}({dayOfWeek}) 수업
    </>
  );
}
