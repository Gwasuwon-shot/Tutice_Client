import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { NextMonthArrowButton } from "../../assets";
import { PrevMonthArrowButton } from "../../assets";

interface YearandMonthProps {
  currentMonth: Date;
  prevMonth: Date;
  nextMonth: Date;
}

export default function YearandMonth(props: YearandMonthProps) {
  const { currentMonth, prevMonth, nextMonth } = props;
  return (
    <HeaderWrapper>
      <PrevMonthButton onClick={prevMonth} />
      <YearMonthWrapper>
        {format(currentMonth, "yyyy")}년 {format(currentMonth, "MM")}월
      </YearMonthWrapper>
      <NextMonthButton onClick={nextMonth} />
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 1.1rem;

  font-size: 1.1rem;
  gap: 1.6rem;
`;

const YearMonthWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.1rem;

  ${({ theme }) => theme.fonts.body06};
`;

const PrevMonthButton = styled(PrevMonthArrowButton)`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;

const NextMonthButton = styled(NextMonthArrowButton)`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;
