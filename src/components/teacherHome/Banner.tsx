import { NO_CLASS_BANNER_TITLE } from "../../core/teacherHome/noClassBannerTitle";
import { TeacherHomeTodayScheduleType } from "../../type/teacherHomeTodayScheduleType";
import ClassPreviewBanner from "./banner/ClassPreviewBanner";
import NoclassBanner from "./banner/NoclassBanner";

interface BannerProps {
  isTodaySchedule: boolean;
  todaySchedule: TeacherHomeTodayScheduleType;
}

export default function Banner(props: BannerProps) {
  const { isTodaySchedule, todaySchedule } = props;

  return (
    <>
      <NoclassBanner bannerTitle={NO_CLASS_BANNER_TITLE.noTodayClass} />
      <NoclassBanner bannerTitle={NO_CLASS_BANNER_TITLE.endTodayClass} />
      <ClassPreviewBanner todaySchedule={todaySchedule} />
    </>
  );
}
