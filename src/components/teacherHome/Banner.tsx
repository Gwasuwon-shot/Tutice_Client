import { TeacherHomeTodayScheduleType } from "../../type/teacherHomeTodayScheduleType";

interface BannerProps {
  isTodaySchedule: boolean;
  todaySchedule: TeacherHomeTodayScheduleType;
}

export default function Banner(props: BannerProps) {
  const { isTodaySchedule, todaySchedule } = props;

  return <></>;
}
