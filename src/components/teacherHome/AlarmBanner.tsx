import styled from "styled-components";
import { MissingAttendaceTeacherHomeIc, MissingMaintenanceTeacherHomeIc } from "../../assets";
import useGetLatestScheduleByTeacher from "../../hooks/useGetLatestScheduleByTeacher";

export default function AlarmBanner() {
  const { isMissingAttendance, isMissingMaintenance } = useGetLatestScheduleByTeacher();

  return (
    <>
      {isMissingMaintenance && <MissingMaintenanceTeacherHomeIcon />}
      {isMissingAttendance && <MissingAttendaceTeacherHomeIcon />}
    </>
  );
}

const MissingMaintenanceTeacherHomeIcon = styled(MissingMaintenanceTeacherHomeIc)`
  width: 29.2rem;
  margin-top: 1.6rem;
  cursor: pointer;
`;

const MissingAttendaceTeacherHomeIcon = styled(MissingAttendaceTeacherHomeIc)`
  width: 29.2rem;
  margin-top: 1rem;
  cursor: pointer;
`;
