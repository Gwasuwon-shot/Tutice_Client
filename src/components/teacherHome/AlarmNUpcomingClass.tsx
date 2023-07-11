import { YES_TODAY_CLASS_ING_CLASS_MAIN } from "../../core/teacherHome/teacherHome";
import AlarmBanner from "./AlarmBanner";
import UpcomingClassBoard from "./UpcomingClassBoard";

export default function AlarmNUpcomingClass() {
  const { isMissingAttendance, isMissingMaintenance, latestScheduleDay, latestScheduleList } =
    YES_TODAY_CLASS_ING_CLASS_MAIN.data;

  return (
    <>
      <AlarmBanner isMissingAttendance={isMissingAttendance} isMissingMaintenance={isMissingMaintenance} />
      <UpcomingClassBoard latestScheduleDay={latestScheduleDay} latestScheduleList={latestScheduleList} />
    </>
  );
}
