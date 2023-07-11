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

  function checkClassEnd() {
    return todaySchedule === null;
  }

  function checkClassExist() {
    return isTodaySchedule;
  }

  return (
    <>
      {checkClassExist() ? (
        <>
          {checkClassEnd() ? (
            <NoclassBanner bannerTitle={NO_CLASS_BANNER_TITLE.endTodayClass} />
          ) : (
            <ClassPreviewBanner todaySchedule={todaySchedule} />
          )}
        </>
      ) : (
        <NoclassBanner bannerTitle={NO_CLASS_BANNER_TITLE.noTodayClass} />
      )}
    </>
  );
}
