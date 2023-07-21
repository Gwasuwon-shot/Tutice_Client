import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MissingAttendaceTeacherHomeIc, MissingMaintenanceTeacherHomeIc } from "../../assets";
import useGetLatestScheduleByTeacher from "../../hooks/useGetLatestScheduleByTeacher";

export default function AlarmBanner() {
  const { isMissingAttendance, isMissingMaintenance } = useGetLatestScheduleByTeacher();
  const navigate = useNavigate();

  function handleMoveToMissingAttendaceCheck() {
    navigate("/no-attendance-check");
  }

  return (
    <>
      {isMissingMaintenance && <MissingMaintenanceTeacherHomeIcon />}
      {isMissingAttendance && <MissingAttendaceTeacherHomeIcon onClick={handleMoveToMissingAttendaceCheck} />}
    </>
  );
}

const MissingMaintenanceTeacherHomeIcon = styled(MissingMaintenanceTeacherHomeIc)`
  width: 29.2rem;
  height: 2.8rem;
  margin-top: 1.6rem;
  cursor: pointer;
`;

const MissingAttendaceTeacherHomeIcon = styled(MissingAttendaceTeacherHomeIc)`
  width: 29.2rem;
  height: 2.8rem;
  margin-top: 1rem;
  cursor: pointer;
`;
