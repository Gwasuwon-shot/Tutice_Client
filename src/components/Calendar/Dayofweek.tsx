import React from "react";
import styled from "styled-components";

export default function Dayofweek() {
  const DAYOFWEEK: string[] = ["일", "월", "화", "수", "목", "금", "토"];

  const dateList: JSX.Element[] = DAYOFWEEK.map((day, index) => (
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

  width: 28.3rem;
  margin-top: 1.8rem;

  gap: 3.2rem;
`;

const DayWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 28.3rem;
  height: auto;

  ${({ $issunday }) => `
    ${$issunday ? "color: #FCB3A6" : undefined}
  `};
`;
