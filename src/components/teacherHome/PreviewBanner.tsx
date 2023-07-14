import { useRecoilState } from "recoil";
import { upcomingClassData } from "../../atom/attendanceCheck/upcomingClassData";
import { NO_CLASS_BANNER_TITLE } from "../../core/teacherHome/noClassBannerTitle";
import ClassPreviewBanner from "./banner/ClassPreviewBanner";
import NoclassBanner from "./banner/NoclassBanner";

export default function Banner() {
  const [classData, setclassData] = useRecoilState(upcomingClassData);
  const { teacherName, isTodaySchedule, todaySchedule } = classData;

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
