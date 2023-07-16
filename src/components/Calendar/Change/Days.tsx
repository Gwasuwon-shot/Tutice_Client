import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isModalOpen } from "../../../atom/common/isModalOpen";
import { endOfMonth, endOfWeek, startOfMonth, startOfWeek, addDays, isSameDay } from "date-fns";
import useGetTeacherSchedule from "../../../hooks/useGetTeacherSchedule";

import ChangeModal from "./ChangeModal";
import DayItemchange from "./DayItemchange";
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
  const { scheduleList } = useGetTeacherSchedule();

  const rows: React.ReactNode[] = [];
  let days: React.ReactNode[] = [];
  let day: Date = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const myLessons = scheduleList.find((item) => isSameDay(new Date(item.date), day));
      days.push(
        <DayItemchange
          setOpenModal={setOpenModal}
          setSelectedDate={setSelectedDate}
          date={day}
          key={day.toString()}
          myLessons={myLessons}
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
      <DaysWrapper>
        {rows}
        {openModal && selectedDate && (
          <ModalWrapper>
            <ChangeModal selectedDate={selectedDate} setOpenModal={setOpenModal} />
          </ModalWrapper>
        )}
      </DaysWrapper>
    </>
  );
}

const DaysWrapper = styled.section`
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

const ModalWrapper = styled.section`
  display: flex;
  position: absolute;

  margin-top: -12rem;
  margin-left: -0.4rem;
`;
