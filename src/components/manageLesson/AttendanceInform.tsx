import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { SmallAttendanceCheckButtonIc } from "../../assets";
import { attendanceLesson } from "../../atom/attendanceCheck/attendanceLesson";
import { ATTENDANCE_STATUS } from "../../core/common/attendanceStatus";
import useModal from "../../hooks/useModal";

interface AttendanceInformProps {
  date: string;
  status: string;
  startTime: string;
  endTime: string;
  count: number;
  lessonIdx: number;
  studentName: string;
  scheduleIdx: number;
  subject: string;
}

export default function AttendanceInform(props: AttendanceInformProps) {
  const { date, status, startTime, endTime, count, lessonIdx, studentName, scheduleIdx, subject } = props;
  const { showModal } = useModal();
  const [selectedLesson, setSelectedLesson] = useRecoilState(attendanceLesson);

  function checkIsStatusExist() {
    return status !== ATTENDANCE_STATUS.none;
  }

  function handleOpenCheckAttendanceModal() {
    setSelectedLesson({
      lessonIdx: lessonIdx,
      studentName: studentName,
      count: count,
      scheduleIdx: scheduleIdx,
      subject: subject,
    });
    showModal();
  }

  return (
    <>
      <AttnedanceInformBox>
        <Label $isDate={true}>
          {date.split("-")[1]}.{date.split("-")[2]}
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
            <SmallAttendanceCheckButtonIcon />
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

const SmallAttendanceCheckButtonIcon = styled(SmallAttendanceCheckButtonIc)`
  width: 7.4rem;
`;
