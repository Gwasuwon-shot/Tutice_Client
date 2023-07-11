import { TeacherHomeTodayScheduleType } from "../../../type/teacherHomeTodayScheduleType";

interface ClassPreviewBannerProps {
  todaySchedule: TeacherHomeTodayScheduleType;
}

export default function ClassPreviewBanner(props: ClassPreviewBannerProps) {
  const { todaySchedule } = props;
  const { lesson, timeStatus, schedule } = todaySchedule;

  function showClassPreviewComment(timeStatus: number) {
    switch (timeStatus) {
      case 1:
        break;
      case 2:
        break;
    }
  }

  return (
    <>
      {lesson?.studentName} 학생
      {lesson?.count} 회차 수업이
      {showClassPreviewComment(timeStatus)}
    </>
  );
}
