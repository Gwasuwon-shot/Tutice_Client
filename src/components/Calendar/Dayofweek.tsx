import React from "react";
import styled from "styled-components";

export default function Dayofweek() {
  const DAYOFWEEK: string[] = ["일", "월", "화", "수", "목", "금", "토"];

  const dateList: JSX.Element[] = DAYOFWEEK.map((day, index) => <DayWrapper key={index}>{day}</DayWrapper>);
  return <WeekWrapper>{dateList}</WeekWrapper>;
}

const WeekWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  margin-top: 1.8rem;
`;

const DayWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  height: auto;
`;
