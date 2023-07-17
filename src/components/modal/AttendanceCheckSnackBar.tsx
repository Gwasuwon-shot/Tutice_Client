import styled from "styled-components";
import { ATTENDANCE_STATUS } from "../../core/common/attendanceStatus";
import SnackBarPopup from "../common/SnackBarPopup";

interface AttendanceCheckSnackBarProps {
  count: number;
  status: string;
}

export default function AttendanceCheckSnackBar(props: AttendanceCheckSnackBarProps) {
  const { count, status } = props;

  return (
    <SnackBarPopup isCheck={true}>
      <Contents>
        <Text> {count}회차 수업을 </Text>
        <StatusLabel $status={status}>{status}</StatusLabel> <Text> 으로 수정 완료했어요.</Text>
      </Contents>
    </SnackBarPopup>
  );
}

const Contents = styled.header`
  display: flex;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body05};
`;

const StatusLabel = styled.label<{ $status: string }>`
  color: ${({ theme, $status }) =>
    $status === ATTENDANCE_STATUS.attend
      ? theme.colors.green5
      : $status === ATTENDANCE_STATUS.absent
      ? theme.colors.red6
      : theme.colors.grey900};
  ${({ theme }) => theme.fonts.body03};
`;
