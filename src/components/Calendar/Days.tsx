import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isModalOpen } from "../../atom/common/isModalOpen";
import { format, endOfMonth, endOfWeek, startOfMonth, startOfWeek, addDays, isSameDay } from "date-fns";
import { ko } from "date-fns/locale";
import ToastModal from "../common/ToastModal";
import Day from "./Day";
import { PARENTS_CALENDAR } from "../../core/Parents/ParentsCalendar";

interface DaysProp {
  currentMonth: Date;
}

export default function Days(props: DaysProp) {
  const { currentMonth } = props;
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate: Date = endOfWeek(monthEnd);
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const myChildLessonList = PARENTS_CALENDAR.data.scheduleList;

  const rows: React.ReactNode[] = [];
  let days: React.ReactNode[] = [];
  let day: Date = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const myChildLessons = myChildLessonList.find((item) => isSameDay(new Date(item.date), day));
      days.push(
        <Day
          setOpenModal={setOpenModal}
          setSelectedDate={setSelectedDate}
          date={day}
          key={day.toString()}
          myChildLessons={myChildLessons}
        />,
      );
      day = addDays(day, 1);

      if (days.length === 7) {
        rows.push(
          <WeekWrapper key={day.toString()}>
            <DivideLine />
            <DayWrapper>{days}</DayWrapper>
          </WeekWrapper>,
        );
      }
    }

    days = [];
  }

  return (
    <>
      <Wrapper>
        {rows}
        {openModal && selectedDate && (
          <ModalWrapper>
            <ToastModal>
              <ModalContentWrapper>
                <ModalDate>{format(selectedDate, "M월 d일 EEEE", { locale: ko })}</ModalDate>
              </ModalContentWrapper>
            </ToastModal>
          </ModalWrapper>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 31.2rem;
  margin-right: 0.4rem;
  margin-left: 0.4rem;
`;

const WeekWrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: auto;
`;

const DayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.3rem;
`;

const DivideLine = styled.span`
  border-top: 1px solid ${({ theme }) => theme.colors.grey50};

  width: 32rem;
  margin-bottom: 0.6rem;
`;

const ModalWrapper = styled.article`
  display: flex;

  margin-top: -55rem;
  margin-left: -0.3rem;
`;

const ModalContentWrapper = styled.div`
  display: flex;

  width: 29.3rem;
`;

const ModalDate = styled.p`
  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey700};
`;
