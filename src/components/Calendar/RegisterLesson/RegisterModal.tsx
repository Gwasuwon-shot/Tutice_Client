import { format, isSameDay } from "date-fns";
import { ko } from "date-fns/locale";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { STUDENT_COLOR, DEEFAULT_STUDENT_COLOR } from "../../../core/common/studentColor";
import useGetScheduleByUser from "../../../hooks/useGetScheduleByUser";
import { modalType } from "../../../type/calendar/modalType";
import StudentColorBox from "../../common/StudentColorBox";
import ToastModal from "../../common/ToastModal";

import { temporarySchedule } from "../../../atom/timePicker/timePicker";

export default function RegisterModal(props: modalType) {
  const { selectedDate, setOpenModal, formattedMonth } = props;
  const { isUserSchedule } = useGetScheduleByUser(formattedMonth);
  const temporarySchedules = useRecoilValue(temporarySchedule);
  const temporaryList = temporarySchedules.temporaryScheduleList;

  console.log(temporarySchedules);
  console.log(temporaryList);
  return (
    <>
      <ToastModal>
        <ModalContentWrapper>
          <ModalDate>{format(selectedDate as Date, "M월 d일 EEEE", { locale: ko })}</ModalDate>
          {temporaryList
            ?.find((item) => isSameDay(new Date(item.date), selectedDate as Date))
            ?.scheduleList?.map((item) => {
              return (
                <ScheduleWrapper key={item.date}>
                  <StudentColorBox backgroundColor={DEEFAULT_STUDENT_COLOR} />
                  <ModalTime>
                    {item.startTime} - {item.endTime}
                  </ModalTime>
                  <ModalName>{item.studentName}</ModalName>
                  <ModalSubjectPreview $backgroundcolor={DEEFAULT_STUDENT_COLOR}>{item.subject}</ModalSubjectPreview>
                </ScheduleWrapper>
              );
            })}
          {isUserSchedule
            ?.find((item) => isSameDay(new Date(item.date), selectedDate as Date))
            ?.dailyScheduleList?.map((item) => {
              const { schedule } = item;
              const { idx, studentName, subject, startTime, endTime } = schedule;

              return (
                <ScheduleWrapper key={idx}>
                  <StudentColorBox backgroundColor={STUDENT_COLOR[idx % 10]} />
                  <ModalTime>
                    {startTime} - {endTime}
                  </ModalTime>
                  <ModalName>{studentName}</ModalName>
                  <ModalSubject $backgroundcolor={STUDENT_COLOR[idx % 10]}>{subject}</ModalSubject>
                </ScheduleWrapper>
              );
            })}
        </ModalContentWrapper>
      </ToastModal>
    </>
  );
}

const ModalContentWrapper = styled.article`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 29.2rem;
  height: auto;
  gap: 1.4rem;
`;

const ModalDate = styled.p`
  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey700};
`;

const ScheduleWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 0.9rem;
`;

const ModalTime = styled.p`
  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey300};
`;

const ModalName = styled.p`
  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.grey700};
`;

const ModalSubject = styled.span<{ $backgroundcolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 1.6rem;
  padding: 0.2rem 0.6rem;

  background-color: ${(props) => props.$backgroundcolor};
  ${({ theme }) => theme.fonts.caption01};
  color: ${({ theme }) => theme.colors.grey500};
  border-radius: 0.8rem;
`;

const ModalSubjectPreview = styled.span<{ $backgroundcolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 1.6rem;
  padding: 0.2rem 0.6rem;

  background-color: ${(props) => props.$backgroundcolor};
  ${({ theme }) => theme.fonts.caption01};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
`;
