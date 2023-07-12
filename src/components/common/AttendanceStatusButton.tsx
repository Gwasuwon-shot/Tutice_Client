import styled from "styled-components";
import { AbsentAttendanceModalIc, AttendaceAttendanceModalIc, CancelAttendanceModalIc } from "../../assets";

interface AttendanceStatusButtonProp {
  status: string;
}

export default function AttendanceStatusButton(props: AttendanceStatusButtonProp) {
  const { status } = props;

  function showAttendanceStatusButton() {
    switch (status) {
      case "결석":
        return <AbsentAttendanceModalIcon />;
      case "출석":
        return <AttendaceAttendanceModalIcon />;
      case "취소":
        return <CancelAttendanceModalIcon />;
      default:
        return;
    }
  }
  return <>{showAttendanceStatusButton()}</>;
}

const AbsentAttendanceModalIcon = styled(AbsentAttendanceModalIc)`
  width: 7.8rem;
`;

const AttendaceAttendanceModalIcon = styled(AttendaceAttendanceModalIc)`
  width: 6.9rem;
`;

const CancelAttendanceModalIcon = styled(CancelAttendanceModalIc)`
  width: 6.9rem;
`;
