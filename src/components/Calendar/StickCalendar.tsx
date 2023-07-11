import React, { useState } from "react";
import styled from "styled-components";
import { subMonths, addMonths } from "date-fns";
import YearandMonth from "./YearandMonth";
import Dayofweek from "./Dayofweek";
import Days from "./Days";
import CalendarHeader from "./CalendarHeader";

export default function StickCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  function prevMonth() {
    setCurrentMonth(subMonths(currentMonth, 1));
  }

  function nextMonth() {
    setCurrentMonth(addMonths(currentMonth, 1));
  }
  return (
    <>
      <CalendarWrapper>
        <YearandMonth prevMonth={prevMonth} nextMonth={nextMonth} currentMonth={currentMonth} />
        <Dayofweek />
        <Days currentMonth={currentMonth} />
        <DivideLine />
      </CalendarWrapper>
    </>
  );
}

const CalendarWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DivideLine = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey50};

  width: 32rem;
  margin-bottom: 0.6rem;
`;
