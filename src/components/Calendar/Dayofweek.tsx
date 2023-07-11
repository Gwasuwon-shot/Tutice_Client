import React from "react";
import styled from "styled-components";

export default function Dayofweek() {
  const DAYOFWEEK: string[] = ["일", "월", "화", "수", "목", "금", "토", "일"];

  const dateList: JSX.Element[] = DAYOFWEEK.map((day, index) => <DayWrapper key={index}>{day}</DayWrapper>);
  return <WeekWrapper>{dateList}</WeekWrapper>;
}

const WeekWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1.8rem;

  font-weight: 400;
  font-size: 1rem;
`;

const DayWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6rem;
  height: auto;
`;
