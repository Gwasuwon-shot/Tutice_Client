import useGetTodayScheduleByTeacher from "../../hooks/useGetLatestScheduleByTeacher";
import AlarmBanner from "./AlarmBanner";
import UpcomingClassBoard from "./UpcomingClassBoard";

export default function AlarmNUpcomingClass() {
  const { isMissingAttendance, isMissingMaintenance, latestScheduleDay, latestScheduleList } =
    useGetTodayScheduleByTeacher();

  return (
    <>
      <AlarmBanner />
      <UpcomingClassBoard />
    </>
  );
}
