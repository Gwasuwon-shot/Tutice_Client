import { NO_CLASS_BANNER_TITLE } from "../../core/teacherHome/noClassBannerTitle";
import { PreviewBannerScheduleType } from "../../type/teacherHome/previewBannerScheduleType";
import ClassPreviewBanner from "./banner/ClassPreviewBanner";
import NoclassBanner from "./banner/NoclassBanner";

interface BannerProps {
  isTodaySchedule: boolean;
  todaySchedule: PreviewBannerScheduleType;
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
