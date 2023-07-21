import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MissingAttendaceTeacherHomeIc, MissingMaintenanceTeacherHomeIc } from "../../assets";
import { TEACHER_FOOTER_CATEGORY } from "../../core/teacherHome/teacherFooter";
import useGetLatestScheduleByTeacher from "../../hooks/useGetLatestScheduleByTeacher";

export default function AlarmBanner() {
  const { isMissingAttendance, isMissingMaintenance } = useGetLatestScheduleByTeacher();
  const navigate = useNavigate();

  function handleMoveToMissingAttendaceCheck() {
    handleMoveToPage(TEACHER_FOOTER_CATEGORY.classManaging);
  }

  function handleMoveToMissingMaintenanceCheck() {
    navigate("/manage-lesson");
  }

  return (
    <>
      {isMissingMaintenance && <MissingMaintenanceTeacherHomeIcon onClick={handleMoveToMissingMaintenanceCheck} />}
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
function handleMoveToPage(classManaging: any) {
  throw new Error("Function not implemented.");
}
