import { YES_TODAY_CLASS_BEFORE_CLASS_BANNER } from "../../core/teacherHome/teacherHome";
import PreviewBanner from "./PreviewBanner";
import WelcomeTeacher from "./WelcomeTeacher";

export default function WelcomeNUpcomingBanner() {
  const { teacherName, isTodaySchedule, todaySchedule } = YES_TODAY_CLASS_BEFORE_CLASS_BANNER.data;

  return (
    <>
      <WelcomeTeacher teacherName={teacherName} isTodaySchedule={isTodaySchedule} todaySchedule={todaySchedule} />
      <PreviewBanner isTodaySchedule={isTodaySchedule} todaySchedule={todaySchedule} />
    </>
  );
}
