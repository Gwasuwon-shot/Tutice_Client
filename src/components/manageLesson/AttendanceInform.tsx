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
  setIsCancelImpossibleModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isUpdateOpen: boolean;
}

export default function AttendanceInform(props: AttendanceInformProps) {
  const {
    date,
    status,
    startTime,
    endTime,
    count,
    lessonIdx,
    scheduleIdx,
    setIsCancelImpossibleModalOpen,
    isUpdateOpen,
  } = props;
  const { showModal } = useModal();
  const [selectedLesson, setSelectedLesson] = useRecoilState(attendanceLesson);
  const [attendanceData, setAttendanceData] = useRecoilState(attendanceStatus);

  function checkIsStatusExist() {
    return status !== ATTENDANCE_STATUS.none;
  }

  function checkIsCancel() {
    return status === ATTENDANCE_STATUS.cancel;
  }

  function handleOpenFixAttendanceModal() {
    setAttendanceData({ ...attendanceData, status: status });
    setSelectedLesson({ ...selectedLesson, lessonIdx: lessonIdx, count: count, scheduleIdx: scheduleIdx });
    checkIsCancel() ? setIsCancelImpossibleModalOpen(true) : showModal();
  }

  function handleOpenCheckAttendanceModal() {
    !isUpdateOpen && showModal();
  }

  return (
    <>
      <AttnedanceInformBox>
        <Label isCancel={checkIsCancel() && isUpdateOpen} $isDate={true}>
          {new Date(date).getMonth() + 1}.{new Date(date).getDate()}
        </Label>
        <div>
          <LessonCount isCancel={checkIsCancel() && isUpdateOpen}>{count}회차 수업</LessonCount>
          <Label isCancel={checkIsCancel() && isUpdateOpen} $isDate={false}>
            {startTime} ~ {endTime}
          </Label>
        </div>
        <StatusWrapper>
          {checkIsStatusExist() ? (
            <>
              {!isUpdateOpen ? (
                <StatusLabel $status={status}>{status}</StatusLabel>
              ) : (
                <StatusUpdateLabel isCancel={checkIsCancel()} onClick={handleOpenFixAttendanceModal}>
                  {status}
                </StatusUpdateLabel>
              )}
            </>
          ) : (
            <NoCheckPageAttendanceButton onClick={handleOpenCheckAttendanceModal} />
          )}
        </StatusWrapper>
      </AttnedanceInformBox>
    </>
  );
}

const StatusUpdateLabel = styled.div<{ isCancel: boolean }>`
  display: flex;
  padding: 0.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  border: ${({ isCancel }) => !isCancel && 1}px solid ${({ theme }) => theme.colors.grey200};

  color: ${({ isCancel, theme }) => (isCancel ? theme.colors.grey100 : theme.colors.grey200)};
  ${({ isCancel, theme }) => (isCancel ? theme.fonts.body01 : theme.fonts.body03)}
`;

const StatusWrapper = styled.div`
  width: 7.4rem;
`;

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

const Label = styled.p<{ $isDate: boolean; isCancel: boolean }>`
  width: ${({ $isDate }) => ($isDate ? 3.6 : 16)}rem;
  margin-top: 0.2rem;
  margin-right: 1rem;

  color: ${({ isCancel, theme }) => (isCancel ? theme.colors.grey100 : theme.colors.grey600)};
  ${({ theme, $isDate }) => ($isDate ? theme.fonts.body07 : theme.fonts.body05)};
`;

const LessonCount = styled.h1<{ isCancel: boolean }>`
  margin-bottom: 0.3rem;

  color: ${({ isCancel, theme }) => (isCancel ? theme.colors.grey100 : theme.colors.grey900)};
  ${({ theme }) => theme.fonts.body02};
`;

const StatusLabel = styled.label<{ $status: string }>`
  display: flex;
  padding: 0.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;

  color: ${({ theme, $status }) =>
    $status === ATTENDANCE_STATUS.attend
      ? theme.colors.green5
      : $status === ATTENDANCE_STATUS.absent
      ? theme.colors.red6
      : theme.colors.grey900};
  ${({ theme }) => theme.fonts.body01};
`;
