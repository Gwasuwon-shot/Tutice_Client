import { MissingAttendaceTeacherHomeIc, MissingMaintenanceTeacherHomeIc } from "../../assets";

interface AlarmBannerProps {
  isMissingAttendance: boolean;
  isMissingMaintenance: boolean;
}

export default function AlarmBanner(props: AlarmBannerProps) {
  const { isMissingAttendance, isMissingMaintenance } = props;

  return (
    <>
      {isMissingMaintenance && <MissingMaintenanceTeacherHomeIc />}
      {isMissingAttendance && <MissingAttendaceTeacherHomeIc />}
    </>
  );
}
