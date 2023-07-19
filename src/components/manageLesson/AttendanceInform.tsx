import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { attendanceLesson } from "../../atom/attendanceCheck/attendanceLesson";
import { attendanceStatus } from "../../atom/attendanceCheck/attendanceStatus";
import { ATTENDANCE_STATUS } from "../../core/common/attendanceStatus";
import useModal from "../../hooks/useModal";
import NoCheckPageAttendanceButton from "../common/NoCheckPageAttendanceButton";

interface AttendanceInformProps {
  date: string;
  status: string;
  startTime: string;
  endTime: string;
  count: number;
  lessonIdx: number;
  scheduleIdx: number;
}

export default function AttendanceInform(props: AttendanceInformProps) {
  const { date, status, startTime, endTime, count, lessonIdx, scheduleIdx } = props;
  const { showModal } = useModal();
  const [selectedLesson, setSelectedLesson] = useRecoilState(attendanceLesson);
  const [attendanceData, setAttendanceData] = useRecoilState(attendanceStatus);

  function checkIsStatusExist() {
    return status !== ATTENDANCE_STATUS.none;
  }

  function handleOpenCheckAttendanceModal() {
    setAttendanceData({ ...attendanceData, status: status });
    setSelectedLesson({ ...selectedLesson, lessonIdx: lessonIdx, count: count, scheduleIdx: scheduleIdx });
    showModal();
  }

  return (
    <>
      <AttnedanceInformBox>
        <Label $isDate={true}>
          {new Date(date).getMonth() + 1}.{new Date(date).getDate()}
        </Label>
        <div>
          <LessonCount>{count}회차 수업</LessonCount>
          <Label $isDate={false}>
            {startTime} ~ {endTime}
          </Label>
        </div>
        <section onClick={handleOpenCheckAttendanceModal}>
          {checkIsStatusExist() ? (
            <StatusLabel $status={status}>{status}</StatusLabel>
          ) : (
            <NoCheckPageAttendanceButton />
          )}
        </section>
      </AttnedanceInformBox>
    </>
  );
}

const AttnedanceInformBox = styled.article`
  display: flex;

  width: 29.2rem;
  padding: 1.5rem 1rem;
  margin-bottom: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;

  &:active {
    background-color: ${({ theme }) => theme.colors.grey50};
  }

  cursor: pointer;
`;

const Label = styled.p<{ $isDate: boolean }>`
  width: ${({ $isDate }) => ($isDate ? 3.6 : 16)}rem;
  margin-top: 0.2rem;
  margin-right: 1rem;

  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme, $isDate }) => ($isDate ? theme.fonts.body07 : theme.fonts.body05)};
`;

const LessonCount = styled.h1`
  margin-bottom: 0.3rem;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body02};
`;

const StatusLabel = styled.label<{ $status: string }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 7.4rem;
  height: 4rem;
  padding-right: 1rem;

  color: ${({ theme, $status }) =>
    $status === ATTENDANCE_STATUS.attend
      ? theme.colors.green5
      : $status === ATTENDANCE_STATUS.absent
      ? theme.colors.red6
      : theme.colors.grey900};
  ${({ theme }) => theme.fonts.body01};
`;
