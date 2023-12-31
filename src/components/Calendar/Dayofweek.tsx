import React from "react";
import styled from "styled-components";

export default function Dayofweek() {
  const DAY_OF_WEEK: string[] = ["일", "월", "화", "수", "목", "금", "토"];

  const dateList: JSX.Element[] = DAY_OF_WEEK.map((day, index) => (
    <DayWrapper $issunday={index === 0} key={index}>
      {day}
    </DayWrapper>
  ));
  return <WeekWrapper>{dateList}</WeekWrapper>;
}

const WeekWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;

  width: 28.3rem;
  margin-top: 1.8rem;
  margin-bottom: 0.5rem;
`;

interface DayWrapperProps {
  $issunday: boolean;
}

const DayWrapper = styled.span<DayWrapperProps>`
  display: flex;
  justify-content: space-between;

  height: auto;

  ${({ theme }) => theme.fonts.caption03};

  ${({ $issunday }) => `
    ${$issunday ? "color: #FCB3A6" : undefined}
  `};
`;
