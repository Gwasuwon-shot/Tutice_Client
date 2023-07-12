import styled from "styled-components";
import { MissingAttendaceTeacherHomeIc, MissingMaintenanceTeacherHomeIc } from "../../assets";

interface AlarmBannerProps {
  isMissingAttendance: boolean;
  isMissingMaintenance: boolean;
}

export default function AlarmBanner(props: AlarmBannerProps) {
  const { isMissingAttendance, isMissingMaintenance } = props;

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
