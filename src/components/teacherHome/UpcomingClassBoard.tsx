import { LatestScheduleDayType, UpcomingClassScheduleType } from "../../type/teacherHome/upcomingClassScheduleType";

interface UpcomingClassBoardProps {
  latestScheduleDay: LatestScheduleDayType;
  latestScheduleList: UpcomingClassScheduleType[];
}

export default function UpcomingClassBoard(props: UpcomingClassBoardProps) {
  const { latestScheduleDay, latestScheduleList } = props;

  return <div>UpcomingClassBoard</div>;
}
