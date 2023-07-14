import { styled } from "styled-components";
import { ATTENDANCE_STATUS } from "../../core/common/attendanceStatus";

interface AttendanceInformProps {
  date: string;
  status: string;
  startTime: string;
  endTime: string;
}

export default function AttnedanceInform(props: AttendanceInformProps) {
  const { date, status, startTime, endTime } = props;

  function checkIsStatusExist() {
    return status !== ATTENDANCE_STATUS.none;
  }

  return (
    <AttnedanceInformBox>
      <Label $width={3.6}>
        {date.split("-")[1]}.{date.split("-")[2]}
      </Label>
      <div>
        <LessonCount>회차 수업</LessonCount>
        <Label $width={7}>
          {startTime} ~ {endTime}
        </Label>
      </div>
      <StatusLabel $status={status}>{status}</StatusLabel>
    </AttnedanceInformBox>
  );
}

const AttnedanceInformBox = styled.article`
  display: flex;
  align-items: center;

  width: 29.2rem;
  padding: 1.5rem 1rem;
  margin-bottom: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  &:active {
    background-color: ${({ theme }) => theme.colors.grey50};
  }

  cursor: pointer;
`;

const Label = styled.p<{ $width: number }>`
  width: ${({ $width }) => $width}rem;
  margin-right: 1rem;

  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body07};
`;

const LessonCount = styled.h1`
  margin-bottom: 0.5rem;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body02};
`;

const StatusLabel = styled.label<{ $status: string }>`
  color: ${({ theme, $status }) =>
    $status === ATTENDANCE_STATUS.attend
      ? theme.colors.green5
      : $status === ATTENDANCE_STATUS.absent
      ? theme.colors.red6
      : theme.colors.grey900};
  ${({ theme }) => theme.fonts.body01};
`;
