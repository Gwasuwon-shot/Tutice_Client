import React from "react";
import styled from "styled-components";
import { format, isSameDay } from "date-fns";
import { ko } from "date-fns/locale";
import { STUDENT_COLOR } from "../../../core/common/studentColor";
import StudentColorBox from "../../common/StudentColorBox";
import ToastModal from "../../common/ToastModal";
import useGetTeacherSchedule from "../../../hooks/useGetTeacherSchedule";
import { modalType } from "../../../type/calendar/modalType";


export default function RegisterModal(props :modalType) {
  const { selectedDate, setOpenModal } = props;
  const { scheduleList } = useGetTeacherSchedule();

  return (
    <>
      <ToastModal>
        <ModalContentWrapper>
          <ModalDate>{format(selectedDate, "M월 d일 EEEE", { locale: ko })}</ModalDate>
          {scheduleList
            .find((item) => isSameDay(new Date(item.date), selectedDate))
            ?.dailyScheduleList.map((item) => {
              const { schedule } = item;
              const { idx, studentName, subject, startTime, endTime } = schedule;

              return (
                <ScheduleWrapper key={idx}>
                  <StudentColorBox backgroundColor={STUDENT_COLOR[idx % 11]} />
                  <ModalTime>
                    {startTime} - {endTime}
                  </ModalTime>
                  <ModalName>{studentName}</ModalName>
                  <ModalSubject $backgroundcolor={STUDENT_COLOR[idx % 11]}>{subject}</ModalSubject>
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
  border-radius: 8px;
`;
