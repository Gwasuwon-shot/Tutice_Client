import React, { useState } from "react";
import { format, subMonths, addMonths } from "date-fns";
import YearandMonth from "./YearandMonth";
import Dayofweek from "./Dayofweek";
import Days from "./Days";

export default function StickCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  function prevMonth() {
    setCurrentMonth(subMonths(currentMonth, 1));
  }

  function nextMonth() {
    setCurrentMonth(addMonths(currentMonth, 1));
  }
  return (
    <div>
      <YearandMonth prevMonth={prevMonth} nextMonth={nextMonth} currentMonth={currentMonth} />
      <Dayofweek />
      <Days currentMonth={currentMonth} />
    </div>
  );
}
