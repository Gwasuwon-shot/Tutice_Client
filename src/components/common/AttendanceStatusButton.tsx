import styled from "styled-components";
import { AbsentAttendanceModalIc, AttendaceAttendanceModalIc, CancelAttendanceModalIc } from "../../assets";
import { ATTENDANCE_STATUS } from "../../core/common/attendanceStatus";

interface AttendanceStatusButtonProp {
  status: string;
  onClick: () => void;
}

export default function AttendanceStatusButton(props: AttendanceStatusButtonProp) {
  const { status, onClick } = props;

  function showAttendanceStatusButton() {
    switch (status) {
      case ATTENDANCE_STATUS.attend:
        return <AttendaceAttendanceModalIcon />;
      case ATTENDANCE_STATUS.cancel:
        return <CancelAttendanceModalIcon />;
      case ATTENDANCE_STATUS.absent:
        return <AbsentAttendanceModalIcon />;
      default:
        return;
    }
  }
  return (
    <ButtonWrapper $status={status} onClick={onClick}>
      {showAttendanceStatusButton()}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<{ $status: string }>`
  width: ${({ $status }) => ($status === ATTENDANCE_STATUS.attend ? 29.2 : 13.7)}rem;
  height: ${({ $status }) => ($status === ATTENDANCE_STATUS.attend ? 14.4 : 7.4)}rem;
  margin-top: 1.7rem;

  background-color: ${({ theme, $status }) =>
    $status === ATTENDANCE_STATUS.attend
      ? theme.colors.green1
      : $status === ATTENDANCE_STATUS.cancel
      ? theme.colors.grey70
      : theme.colors.red1};

  border-radius: 0.8rem;

  &:active {
    background-color: ${({ theme, $status }) =>
      $status === ATTENDANCE_STATUS.attend
        ? theme.colors.green6
        : $status === ATTENDANCE_STATUS.cancel
        ? theme.colors.grey400
        : theme.colors.red3};
  }
`;

const AbsentAttendanceModalIcon = styled(AbsentAttendanceModalIc)`
  width: 7.8rem;
`;

const AttendaceAttendanceModalIcon = styled(AttendaceAttendanceModalIc)`
  width: 6.9rem;
`;

const CancelAttendanceModalIcon = styled(CancelAttendanceModalIc)`
  width: 6.9rem;
`;
