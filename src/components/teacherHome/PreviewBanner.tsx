import { NO_CLASS_BANNER_TITLE } from "../../core/teacherHome/noClassBannerTitle";
import useGetTodayScheduleByTeacher from "../../hooks/useGetTodayScheduleByTeacher";
import useGetUserName from "../../hooks/useGetUserName";
import ClassPreviewBanner from "./banner/ClassPreviewBanner";
import NoclassBanner from "./banner/NoclassBanner";

export default function Banner() {
  const { isTodaySchedule, todaySchedule } = useGetTodayScheduleByTeacher();
  const { teacherName } = useGetUserName();

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
            <ClassPreviewBanner />
          )}
        </>
      ) : (
        <NoclassBanner bannerTitle={NO_CLASS_BANNER_TITLE.noTodayClass} />
      )}
    </>
  );
}
