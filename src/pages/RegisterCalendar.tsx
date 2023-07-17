import React, { useState } from "react";
import styled from "styled-components";
import { subMonths, addMonths } from "date-fns";
import YearandMonth from "../components/Calendar/YearandMonth";
import Dayofweek from "../components/Calendar/Dayofweek";
import Days from "../components/Calendar/RegisterLesson/Days";

export default function RegisterCalendar() {
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
        <YearandMonth currentMonth={currentMonth} />
        <Dayofweek />
        <Days currentMonth={currentMonth} />
      </CalendarWrapper>
    </>
  );
}

const CalendarWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 4rem;
  margin-right: 0.4rem;
  margin-left: 0.4rem;
`;
