import { YES_TODAY_CLASS_BEFORE_CLASS_BANNER } from "../../core/teacherHome";
import Banner from "./Banner";
import WelcomeTeacher from "./WelcomeTeacher";

export default function WelcomeNUpcomingBanner() {
  const { teacherName, isTodaySchedule, todaySchedule } = YES_TODAY_CLASS_BEFORE_CLASS_BANNER.data;

  return (
    <>
      <WelcomeTeacher teacherName={teacherName} />
      <Banner isTodaySchedule={isTodaySchedule} todaySchedule={todaySchedule} />
    </>
  );
}
