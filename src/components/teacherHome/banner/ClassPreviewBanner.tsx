import { TeacherHomeTodayScheduleType } from "../../../type/teacherHomeTodayScheduleType";
import SubjectLabel from "../../common/SubjectLabel";

interface ClassPreviewBannerProps {
  todaySchedule: TeacherHomeTodayScheduleType;
}

export default function ClassPreviewBanner(props: ClassPreviewBannerProps) {
  const { todaySchedule } = props;
  const { lesson, timeStatus, schedule } = todaySchedule;
  const { studentName, subject, count } = lesson;

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
      {studentName} 학생 <SubjectLabel subject={subject} backgroundColor="#B0E0D6" color="#00997D" />
      {count} 회차 수업이
      {showClassPreviewComment(timeStatus)}
    </>
  );
}
