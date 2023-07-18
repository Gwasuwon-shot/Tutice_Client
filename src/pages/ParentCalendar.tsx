import React, { useState } from "react";
import styled from "styled-components";
import { subMonths, addMonths } from "date-fns";
import YearandMonth from "../components/Calendar/YearandMonth";
import Dayofweek from "../components/Calendar/Dayofweek";
import ParentsDays from "../components/Calendar/Parents/ParentsDays";

//수정없는 부모님 캘린더
export default function ParentCalenda() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  function handleToPrevMonth() {
    setCurrentMonth(subMonths(currentMonth, 1));
  }

  function handleToNextMonth() {
    setCurrentMonth(addMonths(currentMonth, 1));
  }
  return (
    <>
      <CalendarWrapper>
        <YearandMonth
          currentMonth={currentMonth}
          handleToPrevMonth={handleToPrevMonth}
          handleToNextMonth={handleToNextMonth}
        />
        <Dayofweek />
        <ParentsDays currentMonth={currentMonth} />
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
