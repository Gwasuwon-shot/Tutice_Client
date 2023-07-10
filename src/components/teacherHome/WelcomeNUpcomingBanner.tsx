import { NO_TODAY_CLASS_BANNER } from "../../core/teacherHome";
import WelcomeTeacher from "./WelcomeTeacher";

export default function WelcomeNUpcomingBanner() {
  const { teacherName, isTodaySchedule, todaySchedule } = NO_TODAY_CLASS_BANNER.data;

  return (
    <>
      <WelcomeTeacher teacherName={teacherName} />
    </>
  );
}
